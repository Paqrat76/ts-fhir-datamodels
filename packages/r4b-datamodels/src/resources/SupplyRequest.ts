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
 * SupplyRequest Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SupplyRequest
 * StructureDefinition.name: SupplyRequest
 * StructureDefinition.description: A record of a request for a medication, substance or device used in the healthcare setting.
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
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference, Timing } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { SupplyrequestStatusEnum } from '../code-systems/SupplyrequestStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * SupplyRequest Class
 *
 * @remarks
 * A record of a request for a medication, substance or device used in the healthcare setting.
 *
 * **FHIR Specification**
 * - **Short:** Request for a medication, substance or device
 * - **Definition:** A record of a request for a medication, substance or device used in the healthcare setting.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR SupplyRequest](http://hl7.org/fhir/StructureDefinition/SupplyRequest)
 */
export class SupplyRequest extends DomainResource implements IDomainResource {
  constructor(item: IDataType | null = null, quantity: Quantity | null = null) {
    super();

    this.supplyrequestStatusEnum = new SupplyrequestStatusEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.item = null;
    if (isDefined<IDataType>(item)) {
      this.setItem(item);
    }


    this.quantity = null;
    if (isDefined<Quantity>(quantity)) {
      this.setQuantity(quantity);
    }
  }

  /**
   * Parse the provided `SupplyRequest` JSON to instantiate the SupplyRequest data model.
   *
   * @param sourceJson - JSON representing FHIR `SupplyRequest`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SupplyRequest
   * @returns SupplyRequest data model or undefined for `SupplyRequest`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SupplyRequest | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SupplyRequest';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SupplyRequest();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SupplyRequest');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = SupplyRequest[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SupplyRequest`;
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
      instance.setStatusElement(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    fieldName = 'item[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const item: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (item === undefined) {
      instance.setItem(null);
    } else {
      instance.setItem(item);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setQuantity(null);
      } else {
        instance.setQuantity(datatype);
      }
    } else {
      instance.setQuantity(null);
    }

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: SupplyRequestParameterComponent | undefined = SupplyRequestParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addParameter(component);
          }
        });
      }
    }

    fieldName = 'occurrence[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const occurrence: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOccurrence(occurrence);

    fieldName = 'authoredOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setAuthoredOnElement(datatype);
    }

    fieldName = 'requester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequester(datatype);
    }

    fieldName = 'supplier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSupplier(datatype);
          }
        });
      }
  }

    fieldName = 'reasonCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReasonCode(datatype);
          }
        });
      }
    }

    fieldName = 'reasonReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReasonReference(datatype);
          }
        });
      }
  }

    fieldName = 'deliverFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDeliverFrom(datatype);
    }

    fieldName = 'deliverTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDeliverTo(datatype);
    }

    return instance;
  }

  /**
   * SupplyRequest.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for SupplyRequest
   * - **Definition:** Business identifiers assigned to this SupplyRequest by the author and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
   * - **Requirements:** Allows identification of the request as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: SupplyrequestStatus
   *
   * @see {@link SupplyrequestStatusEnum }
   */
  private readonly supplyrequestStatusEnum: SupplyrequestStatusEnum;

  /**
   * SupplyRequest.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | suspended +
   * - **Definition:** Status of the supply request.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SupplyrequestStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * SupplyRequest.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind of supply (central, non-stock, etc.)
   * - **Definition:** Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * SupplyRequest.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * SupplyRequest.item[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SupplyRequest.item[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medication, Substance, or Device requested to be supplied
   * - **Definition:** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   * - **Comment:** Note that there\'s a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SupplyRequest.item[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private item: IDataType | null;

  /**
   * SupplyRequest.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The requested amount of the item indicated
   * - **Definition:** The amount that is being ordered of the indicated item.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity: Quantity | null;

  /**
   * SupplyRequest.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ordered item details
   * - **Definition:** Specific parameters for the ordered item.  For example, the size of the indicated item.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parameter?: SupplyRequestParameterComponent[] | undefined;

  /**
   * SupplyRequest.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SupplyRequest.occurrence[x]', ['dateTime','Period','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the request should be fulfilled
   * - **Definition:** When the request should be fulfilled.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SupplyRequest.occurrence[x]',[
    'dateTime',
    'Period',
    'Timing',
  ])
  private occurrence?: IDataType | undefined;

  /**
   * SupplyRequest.authoredOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the request was made
   * - **Definition:** When the request was made.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authoredOn?: DateTimeType | undefined;

  /**
   * SupplyRequest.requester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual making the request
   * - **Definition:** The device, practitioner, etc. who initiated the request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requester?: Reference | undefined;

  /**
   * SupplyRequest.supplier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is intended to fulfill the request
   * - **Definition:** Who is intended to fulfill the request.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private supplier?: Reference[] | undefined;

  /**
   * SupplyRequest.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reason why the supply item was requested
   * - **Definition:** The reason why the supply item was requested.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * SupplyRequest.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reason why the supply item was requested
   * - **Definition:** The reason why the supply item was requested.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * SupplyRequest.deliverFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The origin of the supply
   * - **Definition:** Where the supply is expected to come from.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private deliverFrom?: Reference | undefined;

  /**
   * SupplyRequest.deliverTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The destination of the supply
   * - **Definition:** Where the supply is destined to go.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private deliverTo?: Reference | undefined;

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
      const optErrMsg = `Invalid SupplyRequest.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SupplyRequest.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SupplyrequestStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | undefined {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SupplyrequestStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid SupplyRequest.status';
      assertEnumCodeType<SupplyrequestStatusEnum>(enumType, SupplyrequestStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SupplyrequestStatusEnum }
   */
  public getStatusElement(): CodeType | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link SupplyrequestStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SupplyRequest.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.supplyrequestStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SupplyrequestStatusEnum }
   */
  public getStatus(): fhirCode | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link SupplyrequestStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid SupplyRequest.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.supplyrequestStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SupplyRequest.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `priority` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityEnumType(): EnumCodeType | undefined {
    return this.priority;
  }

  /**
   * Assigns the provided EnumCodeType value to the `priority` property.
   *
   * @param enumType - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid SupplyRequest.priority';
      assertEnumCodeType<RequestPriorityEnum>(enumType, RequestPriorityEnum, errMsgPrefix);
      this.priority = enumType;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.priority) && !this.priority.isEmpty() && this.priority.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `priority` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityElement(): CodeType | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `priority` property.
   *
   * @param element - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SupplyRequest.priority; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.priority = new EnumCodeType(element, this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityElement(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `priority` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriority(): fhirCode | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `priority` property.
   *
   * @param value - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriority(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid SupplyRequest.priority; Provided value is not an instance of fhirCode.`;
      this.priority = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `item` property value as a DataType object; else null
   */
  public getItem(): IDataType | null {
    return this.item;
  }

  /**
   * Assigns the provided DataType object value to the `item` property.
   *
   * @decorator `@ChoiceDataTypes('SupplyRequest.item[x]')`
   *
   * @param value - the `item` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SupplyRequest.item[x]')
  public setItem(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.item = value;
    } else {
      this.item = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefined<IDataType>(this.item) && !this.item.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `item` property value as a CodeableConcept object if defined; else null
   */
  public getItemCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for SupplyRequest.item[x]: Expected CodeableConcept but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasItemCodeableConcept(): boolean {
    return this.hasItem() && this.item instanceof CodeableConcept;
  }

  /**
   * @returns the `item` property value as a Reference object if defined; else null
   */
  public getItemReference(): Reference | null {
    if (!isDefined<IDataType>(this.item)) {
      return null;
    }
    if (!(this.item instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for SupplyRequest.item[x]: Expected Reference but encountered ${this.item.fhirType()}`,
      );
    }
    return this.item;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasItemReference(): boolean {
    return this.hasItem() && this.item instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
  public setQuantity(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid SupplyRequest.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = null;
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
   * @returns the `parameter` property value as a SupplyRequestParameterComponent array
   */
  public getParameter(): SupplyRequestParameterComponent[] {
    return this.parameter ?? ([] as SupplyRequestParameterComponent[]);
  }

  /**
   * Assigns the provided SupplyRequestParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: SupplyRequestParameterComponent[] | undefined): this {
    if (isDefinedList<SupplyRequestParameterComponent>(value)) {
      const optErrMsg = `Invalid SupplyRequest.parameter; Provided value array has an element that is not an instance of SupplyRequestParameterComponent.`;
      assertFhirTypeList<SupplyRequestParameterComponent>(value, SupplyRequestParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided SupplyRequestParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: SupplyRequestParameterComponent | undefined): this {
    if (isDefined<SupplyRequestParameterComponent>(value)) {
      const optErrMsg = `Invalid SupplyRequest.parameter; Provided element is not an instance of SupplyRequestParameterComponent.`;
      assertFhirType<SupplyRequestParameterComponent>(value, SupplyRequestParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<SupplyRequestParameterComponent>(this.parameter) && this.parameter.some((item: SupplyRequestParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as SupplyRequestParameterComponent[];
    }
  }

  /**
   * @returns the `occurrence` property value as a DataType object if defined; else undefined
   */
  public getOccurrence(): IDataType | undefined {
    return this.occurrence;
  }

  /**
   * Assigns the provided DataType object value to the `occurrence` property.
   *
   * @decorator `@ChoiceDataTypes('SupplyRequest.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SupplyRequest.occurrence[x]')
  public setOccurrence(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.occurrence = value;
    } else {
      this.occurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrence` property exists and has a value; `false` otherwise
   */
  public hasOccurrence(): boolean {
    return isDefined<IDataType>(this.occurrence) && !this.occurrence.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `occurrence` property value as a DateTimeType object if defined; else undefined
   */
  public getOccurrenceDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SupplyRequest.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOccurrenceDateTimeType(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof DateTimeType;
  }

  /**
   * @returns the `occurrence` property value as a Period object if defined; else undefined
   */
  public getOccurrencePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for SupplyRequest.occurrence[x]: Expected Period but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a Period and has a value; `false` otherwise
   */
  public hasOccurrencePeriod(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof Period;
  }

  /**
   * @returns the `occurrence` property value as a Timing object if defined; else undefined
   */
  public getOccurrenceTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.occurrence)) {
      return undefined;
    }
    if (!(this.occurrence instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for SupplyRequest.occurrence[x]: Expected Timing but encountered ${this.occurrence.fhirType()}`,
      );
    }
    return this.occurrence;
  }

  /**
   * @returns `true` if the `occurrence` property exists as a Timing and has a value; `false` otherwise
   */
  public hasOccurrenceTiming(): boolean {
    return this.hasOccurrence() && this.occurrence instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `authoredOn` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getAuthoredOnElement(): DateTimeType {
    return this.authoredOn ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authoredOn` property.
   *
   * @param element - the `authoredOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOnElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid SupplyRequest.authoredOn; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.authoredOn = element;
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOnElement(): boolean {
    return isDefined<DateTimeType>(this.authoredOn) && !this.authoredOn.isEmpty();
  }

  /**
   * @returns the `authoredOn` property value as a fhirDateTime if defined; else undefined
   */
  public getAuthoredOn(): fhirDateTime | undefined {
    return this.authoredOn?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authoredOn` property.
   *
   * @param value - the `authoredOn` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredOn(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid SupplyRequest.authoredOn (${String(value)})`;
      this.authoredOn = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.authoredOn = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authoredOn` property exists and has a value; `false` otherwise
   */
  public hasAuthoredOn(): boolean {
    return this.hasAuthoredOnElement();
  }

  /**
   * @returns the `requester` property value as a Reference object; else an empty Reference object
   */
  public getRequester(): Reference {
    return this.requester ?? new Reference();
  }

  /**
   * Assigns the provided Requester object value to the `requester` property.
   *
   * @decorator `@ReferenceTargets('SupplyRequest.requester', ['Practitioner','PractitionerRole','Organization','Patient','RelatedPerson','Device',])`
   *
   * @param value - the `requester` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SupplyRequest.requester', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
  ])
  public setRequester(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requester = value;
    } else {
      this.requester = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requester` property exists and has a value; `false` otherwise
   */
  public hasRequester(): boolean {
    return isDefined<Reference>(this.requester) && !this.requester.isEmpty();
  }

  /**
   * @returns the `supplier` property value as a Reference array
   */
  public getSupplier(): Reference[] {
    return this.supplier ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supplier` property.
   *
   * @decorator `@ReferenceTargets('SupplyRequest.supplier', ['Organization','HealthcareService',])`
   *
   * @param value - the `supplier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SupplyRequest.supplier', [
    'Organization',
  
    'HealthcareService',
  ])
  public setSupplier(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supplier = value;
    } else {
      this.supplier = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supplier` array property.
   *
   * @decorator `@ReferenceTargets('SupplyRequest.supplier', ['Organization','HealthcareService',])`
   *
   * @param value - the `supplier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SupplyRequest.supplier', [
    'Organization',
  
    'HealthcareService',
  ])
  public addSupplier(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupplier();
      this.supplier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supplier` property exists and has a value; `false` otherwise
   */
  public hasSupplier(): boolean {
    return isDefinedList<Reference>(this.supplier) && this.supplier.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supplier` property
   */
  private initSupplier(): void {
    if (!this.hasSupplier()) {
      this.supplier = [] as Reference[];
    }
  }

  /**
   * @returns the `reasonCode` property value as a CodeableConcept array
   */
  public getReasonCode(): CodeableConcept[] {
    return this.reasonCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reasonCode` property.
   *
   * @param value - the `reasonCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReasonCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SupplyRequest.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reasonCode = value;
    } else {
      this.reasonCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reasonCode` array property.
   *
   * @param value - the `reasonCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReasonCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SupplyRequest.reasonCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReasonCode();
      this.reasonCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonCode` property exists and has a value; `false` otherwise
   */
  public hasReasonCode(): boolean {
    return isDefinedList<CodeableConcept>(this.reasonCode) && this.reasonCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonCode` property
   */
  private initReasonCode(): void {
    if(!this.hasReasonCode()) {
      this.reasonCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `reasonReference` property value as a Reference array
   */
  public getReasonReference(): Reference[] {
    return this.reasonReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reasonReference` property.
   *
   * @decorator `@ReferenceTargets('SupplyRequest.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SupplyRequest.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public setReasonReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reasonReference = value;
    } else {
      this.reasonReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reasonReference` array property.
   *
   * @decorator `@ReferenceTargets('SupplyRequest.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SupplyRequest.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public addReasonReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReasonReference();
      this.reasonReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonReference` property exists and has a value; `false` otherwise
   */
  public hasReasonReference(): boolean {
    return isDefinedList<Reference>(this.reasonReference) && this.reasonReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonReference` property
   */
  private initReasonReference(): void {
    if (!this.hasReasonReference()) {
      this.reasonReference = [] as Reference[];
    }
  }

  /**
   * @returns the `deliverFrom` property value as a Reference object; else an empty Reference object
   */
  public getDeliverFrom(): Reference {
    return this.deliverFrom ?? new Reference();
  }

  /**
   * Assigns the provided DeliverFrom object value to the `deliverFrom` property.
   *
   * @decorator `@ReferenceTargets('SupplyRequest.deliverFrom', ['Organization','Location',])`
   *
   * @param value - the `deliverFrom` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SupplyRequest.deliverFrom', [
    'Organization',
  
    'Location',
  ])
  public setDeliverFrom(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.deliverFrom = value;
    } else {
      this.deliverFrom = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `deliverFrom` property exists and has a value; `false` otherwise
   */
  public hasDeliverFrom(): boolean {
    return isDefined<Reference>(this.deliverFrom) && !this.deliverFrom.isEmpty();
  }

  /**
   * @returns the `deliverTo` property value as a Reference object; else an empty Reference object
   */
  public getDeliverTo(): Reference {
    return this.deliverTo ?? new Reference();
  }

  /**
   * Assigns the provided DeliverTo object value to the `deliverTo` property.
   *
   * @decorator `@ReferenceTargets('SupplyRequest.deliverTo', ['Organization','Location','Patient',])`
   *
   * @param value - the `deliverTo` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SupplyRequest.deliverTo', [
    'Organization',
  
    'Location',
  
    'Patient',
  ])
  public setDeliverTo(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.deliverTo = value;
    } else {
      this.deliverTo = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `deliverTo` property exists and has a value; `false` otherwise
   */
  public hasDeliverTo(): boolean {
    return isDefined<Reference>(this.deliverTo) && !this.deliverTo.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SupplyRequest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.category,
      this.priority,
      this.item,
      this.quantity,
      this.parameter,
      this.occurrence,
      this.authoredOn,
      this.requester,
      this.supplier,
      this.reasonCode,
      this.reasonReference,
      this.deliverFrom,
      this.deliverTo,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.item, this.quantity, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SupplyRequest {
    const dest = new SupplyRequest();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SupplyRequest): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status?.copy();
    dest.category = this.category?.copy();
    dest.priority = this.priority?.copy();
    dest.item = this.item ? this.item.copy() as IDataType : null;
    dest.quantity = this.quantity ? this.quantity.copy() : null;
    const parameterList = copyListValues<SupplyRequestParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
    dest.occurrence = this.occurrence?.copy() as IDataType;
    dest.authoredOn = this.authoredOn?.copy();
    dest.requester = this.requester?.copy();
    const supplierList = copyListValues<Reference>(this.supplier);
    dest.supplier = supplierList.length === 0 ? undefined : supplierList;
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    dest.deliverFrom = this.deliverFrom?.copy();
    dest.deliverTo = this.deliverTo?.copy();
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

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasItem()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getItem()!, 'item', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    }

    if (this.hasAuthoredOnElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getAuthoredOnElement(), 'authoredOn', jsonObj);
    }

    if (this.hasRequester()) {
      setFhirComplexJson(this.getRequester(), 'requester', jsonObj);
    }

    if (this.hasSupplier()) {
      setFhirComplexListJson(this.getSupplier(), 'supplier', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasDeliverFrom()) {
      setFhirComplexJson(this.getDeliverFrom(), 'deliverFrom', jsonObj);
    }

    if (this.hasDeliverTo()) {
      setFhirComplexJson(this.getDeliverTo(), 'deliverTo', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SupplyRequestParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Ordered item details
 * - **Definition:** Specific parameters for the ordered item.  For example, the size of the indicated item.
 *
 * @category Data Models: Resource
 * @see [FHIR SupplyRequest](http://hl7.org/fhir/StructureDefinition/SupplyRequest)
 */
export class SupplyRequestParameterComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SupplyRequestParameterComponent` JSON to instantiate the SupplyRequestParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SupplyRequestParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SupplyRequestParameterComponent
   * @returns SupplyRequestParameterComponent data model or undefined for `SupplyRequestParameterComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SupplyRequestParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SupplyRequestParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SupplyRequestParameterComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = SupplyRequestParameterComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SupplyRequestParameterComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
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

    return instance;
  }

  /**
   * SupplyRequest.parameter.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Item detail
   * - **Definition:** A code or string that identifies the device detail being asserted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * SupplyRequest.parameter.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SupplyRequest.parameter.value[x]', ['CodeableConcept','Quantity','Range','boolean',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of detail
   * - **Definition:** The value of the device detail.
   * - **Comment:** Range means device should have a value that falls somewhere within the specified range.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   *     'Range',
   *     'boolean',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('SupplyRequest.parameter.value[x]',[
    'CodeableConcept',
    'Quantity',
    'Range',
    'boolean',
  ])
  private value?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SupplyRequest.parameter.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('SupplyRequest.parameter.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SupplyRequest.parameter.value[x]')
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
        `DataType mismatch for SupplyRequest.parameter.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for SupplyRequest.parameter.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Range object if defined; else undefined
   */
  public getValueRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for SupplyRequest.parameter.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
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
        `DataType mismatch for SupplyRequest.parameter.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SupplyRequest.parameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SupplyRequestParameterComponent {
    const dest = new SupplyRequestParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SupplyRequestParameterComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.value = this.value?.copy() as IDataType;
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
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
