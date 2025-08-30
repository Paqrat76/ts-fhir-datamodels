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
 * MessageHeader Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MessageHeader
 * StructureDefinition.name: MessageHeader
 * StructureDefinition.description: The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CanonicalType,
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
  UrlType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCanonical,
  fhirCanonicalSchema,
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
import { CodeableConcept, Coding, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ResponseCodeEnum } from '../code-systems/ResponseCodeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MessageHeader Class
 *
 * @remarks
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 *
 * Many implementations are not prepared to use REST and need a messaging based infrastructure.
 *
 * **FHIR Specification**
 * - **Short:** A resource that describes a message that is exchanged between systems
 * - **Definition:** The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR MessageHeader](http://hl7.org/fhir/StructureDefinition/MessageHeader)
 */
export class MessageHeader extends DomainResource implements IDomainResource {
  constructor(event: IDataType | null = null, source: MessageHeaderSourceComponent | null = null) {
    super();

    this.event = null;
    if (isDefined<IDataType>(event)) {
      this.setEvent(event);
    }


    this.source = null;
    if (isDefined<MessageHeaderSourceComponent>(source)) {
      this.setSource(source);
    }
  }

  /**
   * Parse the provided `MessageHeader` JSON to instantiate the MessageHeader data model.
   *
   * @param sourceJson - JSON representing FHIR `MessageHeader`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MessageHeader
   * @returns MessageHeader data model or undefined for `MessageHeader`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MessageHeader | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MessageHeader';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MessageHeader();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MessageHeader');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MessageHeader[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MessageHeader`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'event[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const event: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (event === undefined) {
      instance.setEvent(null);
    } else {
      instance.setEvent(event);
    }

    fieldName = 'destination';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: MessageHeaderDestinationComponent | undefined = MessageHeaderDestinationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDestination(component);
        }
      });
    }

    fieldName = 'sender';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSender(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MessageHeaderSourceComponent | undefined = MessageHeaderSourceComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setSource(null);
      } else {
        instance.setSource(component);
      }
    } else {
      instance.setSource(null);
    }

    fieldName = 'responsible';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponsible(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReason(datatype);
    }

    fieldName = 'response';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: MessageHeaderResponseComponent | undefined = MessageHeaderResponseComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponse(component);
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFocus(datatype);
        }
      });
  }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setDefinitionElement(datatype);
    }

    return instance;
  }

  /**
   * MessageHeader.event[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MessageHeader.event[x]', ['Coding','canonical',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event code or link to EventDefinition
   * - **Definition:** Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification are defined by the implementation.  Alternatively a canonical uri to the EventDefinition.
   * - **Comment:** The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](https://hl7.org/fhir/bundle-definitions.html#Bundle.timestamp).
   * - **Requirements:** Drives the behavior associated with this message.
   * - **FHIR Types:**
   *     'Coding',
   *     'canonical',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MessageHeader.event[x]',[
    'Coding',
    'canonical',
  ])
  private event: IDataType | null;

  /**
   * MessageHeader.destination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message destination application(s)
   * - **Definition:** The destination application which the message is intended for.
   * - **Comment:** There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   * - **Requirements:** Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private destination?: MessageHeaderDestinationComponent[] | undefined;

  /**
   * MessageHeader.sender Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Real world sender of the message
   * - **Definition:** Identifies the sending system to allow the use of a trust relationship.
   * - **Comment:** Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone. Proposing to remove and rely on Task to convey this information.
   * - **Requirements:** Allows routing beyond just the application level.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sender?: Reference | undefined;

  /**
   * MessageHeader.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The source of the decision
   * - **Definition:** The logical author of the message - the personor device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.
   * - **Comment:** Usually only for the request but can be used in a response.Proposing to remove and rely on Task to convey this information. 
   * - **Requirements:** Need to know for audit/traceback requirements and possibly for authorization.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /**
   * MessageHeader.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message source application
   * - **Definition:** The source application from which this message originated.
   * - **Requirements:** Allows replies, supports audit.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source: MessageHeaderSourceComponent | null;

  /**
   * MessageHeader.responsible Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Final responsibility for event
   * - **Definition:** The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.
   * - **Comment:** Usually only for the request but can be used in a response.Proposing to remove and rely on Task to convey this information.
   * - **Requirements:** Need to know for audit/traceback requirements and possibly for authorization.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private responsible?: Reference | undefined;

  /**
   * MessageHeader.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Cause of event
   * - **Definition:** Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   * - **Requirements:** Need to be able to track why resources are being changed and report in the audit log/history of the resource.  May affect authorization.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reason?: CodeableConcept | undefined;

  /**
   * MessageHeader.response Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this is a reply to prior message
   * - **Definition:** Information about the message that this message is a response to.  Only present if this message is a response.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private response?: MessageHeaderResponseComponent | undefined;

  /**
   * MessageHeader.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual content of the message
   * - **Definition:** The actual data of the message - a reference to the root/focus class of the event. This is allowed to be a Parameters resource.
   * - **Comment:** The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   * - **Requirements:** Every message event is about actual data, a single resource, that is identified in the definition of the event, and perhaps some or all linked resources.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: Reference[] | undefined;

  /**
   * MessageHeader.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to the definition for this message
   * - **Definition:** Permanent link to the MessageDefinition for this message.
   * - **Requirements:** Allows sender to define the expected contents of the message.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MessageDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definition?: CanonicalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `event` property value as a DataType object; else null
   */
  public getEvent(): IDataType | null {
    return this.event;
  }

  /**
   * Assigns the provided DataType object value to the `event` property.
   *
   * @decorator `@ChoiceDataTypes('MessageHeader.event[x]')`
   *
   * @param value - the `event` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MessageHeader.event[x]')
  public setEvent(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.event = value;
    } else {
      this.event = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefined<IDataType>(this.event) && !this.event.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `event` property value as a Coding object if defined; else null
   */
  public getEventCoding(): Coding | null {
    if (!isDefined<IDataType>(this.event)) {
      return null;
    }
    if (!(this.event instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageHeader.event[x]: Expected Coding but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasEventCoding(): boolean {
    return this.hasEvent() && this.event instanceof Coding;
  }

  /**
   * @returns the `event` property value as a CanonicalType object if defined; else null
   */
  public getEventCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.event)) {
      return null;
    }
    if (!(this.event instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageHeader.event[x]: Expected CanonicalType but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasEventCanonicalType(): boolean {
    return this.hasEvent() && this.event instanceof CanonicalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `destination` property value as a MessageHeaderDestinationComponent array
   */
  public getDestination(): MessageHeaderDestinationComponent[] {
    return this.destination ?? ([] as MessageHeaderDestinationComponent[]);
  }

  /**
   * Assigns the provided MessageHeaderDestinationComponent array value to the `destination` property.
   *
   * @param value - the `destination` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDestination(value: MessageHeaderDestinationComponent[] | undefined): this {
    if (isDefinedList<MessageHeaderDestinationComponent>(value)) {
      const optErrMsg = `Invalid MessageHeader.destination; Provided value array has an element that is not an instance of MessageHeaderDestinationComponent.`;
      assertFhirTypeList<MessageHeaderDestinationComponent>(value, MessageHeaderDestinationComponent, optErrMsg);
      this.destination = value;
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * Add the provided MessageHeaderDestinationComponent value to the `destination` array property.
   *
   * @param value - the `destination` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDestination(value: MessageHeaderDestinationComponent | undefined): this {
    if (isDefined<MessageHeaderDestinationComponent>(value)) {
      const optErrMsg = `Invalid MessageHeader.destination; Provided element is not an instance of MessageHeaderDestinationComponent.`;
      assertFhirType<MessageHeaderDestinationComponent>(value, MessageHeaderDestinationComponent, optErrMsg);
      this.initDestination();
      this.destination?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestination(): boolean {
    return isDefinedList<MessageHeaderDestinationComponent>(this.destination) && this.destination.some((item: MessageHeaderDestinationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `destination` property
   */
  private initDestination(): void {
    if(!this.hasDestination()) {
      this.destination = [] as MessageHeaderDestinationComponent[];
    }
  }

  /**
   * @returns the `sender` property value as a Reference object; else an empty Reference object
   */
  public getSender(): Reference {
    return this.sender ?? new Reference();
  }

  /**
   * Assigns the provided Sender object value to the `sender` property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.sender', ['Practitioner','PractitionerRole','Device','Organization',])`
   *
   * @param value - the `sender` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.sender', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Organization',
  ])
  public setSender(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.sender = value;
    } else {
      this.sender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sender` property exists and has a value; `false` otherwise
   */
  public hasSender(): boolean {
    return isDefined<Reference>(this.sender) && !this.sender.isEmpty();
  }

  /**
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.author', ['Practitioner','PractitionerRole','Device','Organization',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.author', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Organization',
  ])
  public setAuthor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefined<Reference>(this.author) && !this.author.isEmpty();
  }

  /**
   * @returns the `source` property value as a MessageHeaderSourceComponent object if defined; else an empty MessageHeaderSourceComponent object
   */
  public getSource(): MessageHeaderSourceComponent {
    return this.source ?? new MessageHeaderSourceComponent();
  }

  /**
   * Assigns the provided MessageHeaderSourceComponent object value to the `source` property.
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSource(value: MessageHeaderSourceComponent | undefined | null): this {
    if (isDefined<MessageHeaderSourceComponent>(value)) {
      const optErrMsg = `Invalid MessageHeader.source; Provided element is not an instance of MessageHeaderSourceComponent.`;
      assertFhirType<MessageHeaderSourceComponent>(value, MessageHeaderSourceComponent, optErrMsg);
      this.source = value;
    } else {
      this.source = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<MessageHeaderSourceComponent>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `responsible` property value as a Reference object; else an empty Reference object
   */
  public getResponsible(): Reference {
    return this.responsible ?? new Reference();
  }

  /**
   * Assigns the provided Responsible object value to the `responsible` property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.responsible', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `responsible` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.responsible', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setResponsible(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.responsible = value;
    } else {
      this.responsible = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responsible` property exists and has a value; `false` otherwise
   */
  public hasResponsible(): boolean {
    return isDefined<Reference>(this.responsible) && !this.responsible.isEmpty();
  }

  /**
   * @returns the `reason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getReason(): CodeableConcept {
    return this.reason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Reason object value to the `reason` property.
   *
   * @param value - the `reason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid MessageHeader.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefined<CodeableConcept>(this.reason) && !this.reason.isEmpty();
  }

  /**
   * @returns the `response` property value as a MessageHeaderResponseComponent object if defined; else an empty MessageHeaderResponseComponent object
   */
  public getResponse(): MessageHeaderResponseComponent {
    return this.response ?? new MessageHeaderResponseComponent();
  }

  /**
   * Assigns the provided Response object value to the `response` property.
   *
   * @param value - the `response` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResponse(value: MessageHeaderResponseComponent | undefined): this {
    if (isDefined<MessageHeaderResponseComponent>(value)) {
      const optErrMsg = `Invalid MessageHeader.response; Provided element is not an instance of MessageHeaderResponseComponent.`;
      assertFhirType<MessageHeaderResponseComponent>(value, MessageHeaderResponseComponent, optErrMsg);
      this.response = value;
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponse(): boolean {
    return isDefined<MessageHeaderResponseComponent>(this.response) && !this.response.isEmpty();
  }

  /**
   * @returns the `focus` property value as a Reference array
   */
  public getFocus(): Reference[] {
    return this.focus ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.focus', ['Resource',])`
   *
   * @param value - the `focus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.focus', [
    'Resource',
  ])
  public setFocus(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `focus` array property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.focus', ['Resource',])`
   *
   * @param value - the `focus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.focus', [
    'Resource',
  ])
  public addFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initFocus();
      this.focus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefinedList<Reference>(this.focus) && this.focus.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `focus` property
   */
  private initFocus(): void {
    if (!this.hasFocus()) {
      this.focus = [] as Reference[];
    }
  }

  /**
   * @returns the `definition` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getDefinitionElement(): CanonicalType {
    return this.definition ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageHeader.definition; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.definition = element;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinitionElement(): boolean {
    return isDefined<CanonicalType>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `definition` property value as a fhirCanonical if defined; else undefined
   */
  public getDefinition(): fhirCanonical | undefined {
    return this.definition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `definition` property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MessageHeader.definition (${String(value)})`;
      this.definition = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return this.hasDefinitionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MessageHeader';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.event,
      this.destination,
      this.sender,
      this.author,
      this.source,
      this.responsible,
      this.reason,
      this.response,
      this.focus,
      this.definition,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.event, this.source, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MessageHeader {
    const dest = new MessageHeader();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MessageHeader): void {
    super.copyValues(dest);
    dest.event = this.event ? this.event.copy() as IDataType : null;
    const destinationList = copyListValues<MessageHeaderDestinationComponent>(this.destination);
    dest.destination = destinationList.length === 0 ? undefined : destinationList;
    dest.sender = this.sender?.copy();
    dest.author = this.author?.copy();
    dest.source = this.source ? this.source.copy() : null;
    dest.responsible = this.responsible?.copy();
    dest.reason = this.reason?.copy();
    dest.response = this.response?.copy();
    const focusList = copyListValues<Reference>(this.focus);
    dest.focus = focusList.length === 0 ? undefined : focusList;
    dest.definition = this.definition?.copy();
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

    if (this.hasEvent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEvent()!, 'event', jsonObj);
    } else {
      jsonObj['event'] = null;
    }

    if (this.hasDestination()) {
      setFhirBackboneElementListJson(this.getDestination(), 'destination', jsonObj);
    }

    if (this.hasSender()) {
      setFhirComplexJson(this.getSender(), 'sender', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasSource()) {
      setFhirBackboneElementJson(this.getSource(), 'source', jsonObj);
    } else {
      jsonObj['source'] = null;
    }

    if (this.hasResponsible()) {
      setFhirComplexJson(this.getResponsible(), 'responsible', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasResponse()) {
      setFhirBackboneElementJson(this.getResponse(), 'response', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexListJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasDefinitionElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getDefinitionElement(), 'definition', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MessageHeaderDestinationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Message destination application(s)
 * - **Definition:** The destination application which the message is intended for.
 * - **Comment:** There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 * - **Requirements:** Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
 *
 * @category Data Models: Resource
 * @see [FHIR MessageHeader](http://hl7.org/fhir/StructureDefinition/MessageHeader)
 */
export class MessageHeaderDestinationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MessageHeaderDestinationComponent` JSON to instantiate the MessageHeaderDestinationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MessageHeaderDestinationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MessageHeaderDestinationComponent
   * @returns MessageHeaderDestinationComponent data model or undefined for `MessageHeaderDestinationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MessageHeaderDestinationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MessageHeaderDestinationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MessageHeaderDestinationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = MessageHeaderDestinationComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MessageHeaderDestinationComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'endpoint[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const endpoint: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setEndpoint(endpoint);

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTarget(datatype);
    }

    fieldName = 'receiver';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReceiver(datatype);
    }

    return instance;
  }

  /**
   * MessageHeader.destination.endpoint[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MessageHeader.destination.endpoint[x]', ['url','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual destination address or Endpoint resource
   * - **Definition:** Indicates where the message should be routed.
   * - **Comment:** The url may be a non-resolvable URI for systems that do not use standard network-based addresses.
   * - **Requirements:** Identifies where to route the message.
   * - **FHIR Types:**
   *     'url',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MessageHeader.destination.endpoint[x]',[
    'url',
    'Reference',
  ])
  private endpoint?: IDataType | undefined;

  /**
   * MessageHeader.destination.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of system
   * - **Definition:** Human-readable name for the target system.
   * - **Requirements:** May be used for routing of response and/or to support audit.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * MessageHeader.destination.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Particular delivery destination within the destination
   * - **Definition:** Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   * - **Requirements:** Supports multi-hop routing.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private target?: Reference | undefined;

  /**
   * MessageHeader.destination.receiver Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended "real-world" recipient for the data
   * - **Definition:** Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn\'t sufficient.
   * - **Requirements:** Allows routing beyond just the application level.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private receiver?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `endpoint` property value as a DataType object if defined; else undefined
   */
  public getEndpoint(): IDataType | undefined {
    return this.endpoint;
  }

  /**
   * Assigns the provided DataType object value to the `endpoint` property.
   *
   * @decorator `@ChoiceDataTypes('MessageHeader.destination.endpoint[x]')`
   *
   * @param value - the `endpoint` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MessageHeader.destination.endpoint[x]')
  public setEndpoint(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefined<IDataType>(this.endpoint) && !this.endpoint.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `endpoint` property value as a UrlType object if defined; else undefined
   */
  public getEndpointUrlType(): UrlType | undefined {
    if (!isDefined<IDataType | undefined>(this.endpoint)) {
      return undefined;
    }
    if (!(this.endpoint instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageHeader.destination.endpoint[x]: Expected UrlType but encountered ${this.endpoint.fhirType()}`,
      );
    }
    return this.endpoint;
  }

  /**
   * @returns `true` if the `endpoint` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasEndpointUrlType(): boolean {
    return this.hasEndpoint() && this.endpoint instanceof UrlType;
  }

  /**
   * @returns the `endpoint` property value as a Reference object if defined; else undefined
   */
  public getEndpointReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.endpoint)) {
      return undefined;
    }
    if (!(this.endpoint instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageHeader.destination.endpoint[x]: Expected Reference but encountered ${this.endpoint.fhirType()}`,
      );
    }
    return this.endpoint;
  }

  /**
   * @returns `true` if the `endpoint` property exists as a Reference and has a value; `false` otherwise
   */
  public hasEndpointReference(): boolean {
    return this.hasEndpoint() && this.endpoint instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MessageHeader.destination.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MessageHeader.destination.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `target` property value as a Reference object; else an empty Reference object
   */
  public getTarget(): Reference {
    return this.target ?? new Reference();
  }

  /**
   * Assigns the provided Target object value to the `target` property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.destination.target', ['Device',])`
   *
   * @param value - the `target` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.destination.target', [
    'Device',
  ])
  public setTarget(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefined<Reference>(this.target) && !this.target.isEmpty();
  }

  /**
   * @returns the `receiver` property value as a Reference object; else an empty Reference object
   */
  public getReceiver(): Reference {
    return this.receiver ?? new Reference();
  }

  /**
   * Assigns the provided Receiver object value to the `receiver` property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.destination.receiver', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `receiver` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.destination.receiver', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setReceiver(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.receiver = value;
    } else {
      this.receiver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `receiver` property exists and has a value; `false` otherwise
   */
  public hasReceiver(): boolean {
    return isDefined<Reference>(this.receiver) && !this.receiver.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MessageHeader.destination';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.endpoint,
      this.name,
      this.target,
      this.receiver,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MessageHeaderDestinationComponent {
    const dest = new MessageHeaderDestinationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MessageHeaderDestinationComponent): void {
    super.copyValues(dest);
    dest.endpoint = this.endpoint?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.target = this.target?.copy();
    dest.receiver = this.receiver?.copy();
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

    if (this.hasEndpoint()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEndpoint()!, 'endpoint', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirComplexJson(this.getTarget(), 'target', jsonObj);
    }

    if (this.hasReceiver()) {
      setFhirComplexJson(this.getReceiver(), 'receiver', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MessageHeaderSourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Message source application
 * - **Definition:** The source application from which this message originated.
 * - **Requirements:** Allows replies, supports audit.
 *
 * @category Data Models: Resource
 * @see [FHIR MessageHeader](http://hl7.org/fhir/StructureDefinition/MessageHeader)
 */
export class MessageHeaderSourceComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `MessageHeaderSourceComponent` JSON to instantiate the MessageHeaderSourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MessageHeaderSourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MessageHeaderSourceComponent
   * @returns MessageHeaderSourceComponent data model or undefined for `MessageHeaderSourceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MessageHeaderSourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MessageHeaderSourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MessageHeaderSourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = MessageHeaderSourceComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MessageHeaderSourceComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'endpoint[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const endpoint: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setEndpoint(endpoint);

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'software';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSoftwareElement(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: ContactPoint | undefined = ContactPoint.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContact(datatype);
    }

    return instance;
  }

  /**
   * MessageHeader.source.endpoint[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MessageHeader.source.endpoint[x]', ['url','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual source address or Endpoint resource
   * - **Definition:** Identifies the routing target to send acknowledgements to.
   * - **Comment:** The url may be a non-resolvable URI for systems that do not use standard network-based addresses.
   * - **Requirements:** Identifies where to send responses, may influence security permissions.
   * - **FHIR Types:**
   *     'url',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MessageHeader.source.endpoint[x]',[
    'url',
    'Reference',
  ])
  private endpoint?: IDataType | undefined;

  /**
   * MessageHeader.source.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of system
   * - **Definition:** Human-readable name for the source system.
   * - **Requirements:** May be used to support audit.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * MessageHeader.source.software Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of software running the system
   * - **Definition:** May include configuration or other information useful in debugging.
   * - **Requirements:** Supports audit and possibly interface engine behavior.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private software?: StringType | undefined;

  /**
   * MessageHeader.source.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version of software running
   * - **Definition:** Can convey versions of multiple systems in situations where a message passes through multiple hands.
   * - **Requirements:** Supports audit and possibly interface engine behavior.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * MessageHeader.source.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human contact for problems
   * - **Definition:** An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   * - **Requirements:** Allows escalation of technical issues.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactPoint | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `endpoint` property value as a DataType object if defined; else undefined
   */
  public getEndpoint(): IDataType | undefined {
    return this.endpoint;
  }

  /**
   * Assigns the provided DataType object value to the `endpoint` property.
   *
   * @decorator `@ChoiceDataTypes('MessageHeader.source.endpoint[x]')`
   *
   * @param value - the `endpoint` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MessageHeader.source.endpoint[x]')
  public setEndpoint(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefined<IDataType>(this.endpoint) && !this.endpoint.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `endpoint` property value as a UrlType object if defined; else undefined
   */
  public getEndpointUrlType(): UrlType | undefined {
    if (!isDefined<IDataType | undefined>(this.endpoint)) {
      return undefined;
    }
    if (!(this.endpoint instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageHeader.source.endpoint[x]: Expected UrlType but encountered ${this.endpoint.fhirType()}`,
      );
    }
    return this.endpoint;
  }

  /**
   * @returns `true` if the `endpoint` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasEndpointUrlType(): boolean {
    return this.hasEndpoint() && this.endpoint instanceof UrlType;
  }

  /**
   * @returns the `endpoint` property value as a Reference object if defined; else undefined
   */
  public getEndpointReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.endpoint)) {
      return undefined;
    }
    if (!(this.endpoint instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageHeader.source.endpoint[x]: Expected Reference but encountered ${this.endpoint.fhirType()}`,
      );
    }
    return this.endpoint;
  }

  /**
   * @returns `true` if the `endpoint` property exists as a Reference and has a value; `false` otherwise
   */
  public hasEndpointReference(): boolean {
    return this.hasEndpoint() && this.endpoint instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MessageHeader.source.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MessageHeader.source.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `software` property value as a StringType object if defined; else an empty StringType object
   */
  public getSoftwareElement(): StringType {
    return this.software ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `software` property.
   *
   * @param element - the `software` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSoftwareElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MessageHeader.source.software; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.software = element;
    } else {
      this.software = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `software` property exists and has a value; `false` otherwise
   */
  public hasSoftwareElement(): boolean {
    return isDefined<StringType>(this.software) && !this.software.isEmpty();
  }

  /**
   * @returns the `software` property value as a fhirString if defined; else undefined
   */
  public getSoftware(): fhirString | undefined {
    return this.software?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `software` property.
   *
   * @param value - the `software` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSoftware(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MessageHeader.source.software (${String(value)})`;
      this.software = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.software = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `software` property exists and has a value; `false` otherwise
   */
  public hasSoftware(): boolean {
    return this.hasSoftwareElement();
  }

  /**
   * @returns the `version` property value as a StringType object if defined; else an empty StringType object
   */
  public getVersionElement(): StringType {
    return this.version ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `version` property.
   *
   * @param element - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MessageHeader.source.version; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.version = element;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersionElement(): boolean {
    return isDefined<StringType>(this.version) && !this.version.isEmpty();
  }

  /**
   * @returns the `version` property value as a fhirString if defined; else undefined
   */
  public getVersion(): fhirString | undefined {
    return this.version?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `version` property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MessageHeader.source.version (${String(value)})`;
      this.version = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return this.hasVersionElement();
  }

  /**
   * @returns the `contact` property value as a ContactPoint object if defined; else an empty ContactPoint object
   */
  public getContact(): ContactPoint {
    return this.contact ?? new ContactPoint();
  }

  /**
   * Assigns the provided Contact object value to the `contact` property.
   *
   * @param value - the `contact` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid MessageHeader.source.contact; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefined<ContactPoint>(this.contact) && !this.contact.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MessageHeader.source';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.endpoint,
      this.name,
      this.software,
      this.version,
      this.contact,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MessageHeaderSourceComponent {
    const dest = new MessageHeaderSourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MessageHeaderSourceComponent): void {
    super.copyValues(dest);
    dest.endpoint = this.endpoint?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.software = this.software?.copy();
    dest.version = this.version?.copy();
    dest.contact = this.contact?.copy();
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

    if (this.hasEndpoint()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEndpoint()!, 'endpoint', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasSoftwareElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSoftwareElement(), 'software', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexJson(this.getContact(), 'contact', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MessageHeaderResponseComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** If this is a reply to prior message
 * - **Definition:** Information about the message that this message is a response to.  Only present if this message is a response.
 *
 * @category Data Models: Resource
 * @see [FHIR MessageHeader](http://hl7.org/fhir/StructureDefinition/MessageHeader)
 */
export class MessageHeaderResponseComponent extends BackboneElement implements IBackboneElement {
  constructor(identifier: Identifier | null = null, code: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.responseCodeEnum = new ResponseCodeEnum();

    this.identifier = null;
    if (isDefined<Identifier>(identifier)) {
      this.setIdentifier(identifier);
    }

    this.code = constructorCodeValueAsEnumCodeType<ResponseCodeEnum>(
      code,
      ResponseCodeEnum,
      this.responseCodeEnum,
      'MessageHeader.response.code',
    );
  }

  /**
   * Parse the provided `MessageHeaderResponseComponent` JSON to instantiate the MessageHeaderResponseComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MessageHeaderResponseComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MessageHeaderResponseComponent
   * @returns MessageHeaderResponseComponent data model or undefined for `MessageHeaderResponseComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MessageHeaderResponseComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MessageHeaderResponseComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MessageHeaderResponseComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setIdentifier(null);
      } else {
        instance.setIdentifier(datatype);
      }
    } else {
      instance.setIdentifier(null);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCodeElement(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'details';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDetails(datatype);
    }

    return instance;
  }

  /**
   * MessageHeader.response.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Bundle.identifier of original message
   * - **Definition:** The Bundle.identifier of the message to which this message is a response.
   * - **Requirements:** Allows receiver to know what message is being responded to.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier: Identifier | null;

  /**
   * FHIR CodeSystem: ResponseCode
   *
   * @see {@link ResponseCodeEnum }
   */
  private readonly responseCodeEnum: ResponseCodeEnum;

  /**
   * MessageHeader.response.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ok | transient-error | fatal-error
   * - **Definition:** Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
   * - **Comment:** This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   * - **Requirements:** Allows the sender of the acknowledge message to know if the request was successful or if action is needed.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResponseCodeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * MessageHeader.response.details Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific list of hints/warnings/errors
   * - **Definition:** Full details of any issues found in the message.
   * - **Comment:** This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   * - **Requirements:** Allows the sender of the message to determine what the specific issues are.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/OperationOutcome',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private details?: Reference | undefined;

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
  public setIdentifier(value: Identifier | undefined | null): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid MessageHeader.response.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = null;
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
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResponseCodeEnum }
   */
  public getCodeEnumType(): EnumCodeType | null {
    return this.code;
  }

  /**
   * Assigns the provided EnumCodeType value to the `code` property.
   *
   * @param enumType - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResponseCodeEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MessageHeader.response.code`;
      assertEnumCodeType<ResponseCodeEnum>(enumType, ResponseCodeEnum, errMsgPrefix);
      this.code = enumType;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.code) && !this.code.isEmpty() && this.code.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `code` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResponseCodeEnum }
   */
  public getCodeElement(): CodeType | null {
    if (this.code === null) {
      return null;
    }
    return this.code as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResponseCodeEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MessageHeader.response.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.responseCodeEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `code` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResponseCodeEnum }
   */
  public getCode(): fhirCode | null {
    if (this.code === null) {
      return null;
    }
    return this.code.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResponseCodeEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MessageHeader.response.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.responseCodeEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `details` property value as a Reference object; else an empty Reference object
   */
  public getDetails(): Reference {
    return this.details ?? new Reference();
  }

  /**
   * Assigns the provided Details object value to the `details` property.
   *
   * @decorator `@ReferenceTargets('MessageHeader.response.details', ['OperationOutcome',])`
   *
   * @param value - the `details` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('MessageHeader.response.details', [
    'OperationOutcome',
  ])
  public setDetails(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.details = value;
    } else {
      this.details = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `details` property exists and has a value; `false` otherwise
   */
  public hasDetails(): boolean {
    return isDefined<Reference>(this.details) && !this.details.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MessageHeader.response';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.code,
      this.details,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.identifier, this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MessageHeaderResponseComponent {
    const dest = new MessageHeaderResponseComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MessageHeaderResponseComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier ? this.identifier.copy() : null;
    dest.code = this.code ? this.code.copy() : null;
    dest.details = this.details?.copy();
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
    } else {
      jsonObj['identifier'] = null;
    }

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasDetails()) {
      setFhirComplexJson(this.getDetails(), 'details', jsonObj);
    }

    return jsonObj;
  }
}
