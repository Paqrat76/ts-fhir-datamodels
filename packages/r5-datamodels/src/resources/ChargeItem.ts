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
 * ChargeItem Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ChargeItem
 * StructureDefinition.name: ChargeItem
 * StructureDefinition.description: The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
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
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PrimitiveTypeJson,
  ReferenceTargets,
  UriType,
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
  fhirDateTime,
  fhirDateTimeSchema,
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
import { Annotation, CodeableConcept, CodeableReference, Identifier, MonetaryComponent, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference, Timing } from '../complex-types/complex-datatypes';
import { ChargeitemStatusEnum } from '../code-systems/ChargeitemStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ChargeItem Class
 *
 * @remarks
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 *
 * **FHIR Specification**
 * - **Short:** Item containing charge code(s) associated with the provision of healthcare provider products
 * - **Definition:** The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ChargeItem](http://hl7.org/fhir/StructureDefinition/ChargeItem)
 */
export class ChargeItem extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, code: CodeableConcept | null = null, subject: Reference | null = null) {
    super();

    this.chargeitemStatusEnum = new ChargeitemStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<ChargeitemStatusEnum>(
      status,
      ChargeitemStatusEnum,
      this.chargeitemStatusEnum,
      'ChargeItem.status',
    );

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `ChargeItem` JSON to instantiate the ChargeItem data model.
   *
   * @param sourceJson - JSON representing FHIR `ChargeItem`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ChargeItem
   * @returns ChargeItem data model or undefined for `ChargeItem`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ChargeItem | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ChargeItem';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ChargeItem();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ChargeItem');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ChargeItem[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ChargeItem`;
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

    fieldName = 'definitionUri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UriType | undefined = fhirParser.parseUriType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addDefinitionUriElement(datatype);
          }
        });
      }
    }

    fieldName = 'definitionCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addDefinitionCanonicalElement(datatype);
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

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPartOf(datatype);
          }
        });
      }
  }

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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSubject(null);
      } else {
        instance.setSubject(datatype);
      }
    } else {
      instance.setSubject(null);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
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

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ChargeItemPerformerComponent | undefined = ChargeItemPerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPerformer(component);
          }
        });
      }
    }

    fieldName = 'performingOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformingOrganization(datatype);
    }

    fieldName = 'requestingOrganization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequestingOrganization(datatype);
    }

    fieldName = 'costCenter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCostCenter(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'bodysite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addBodysite(datatype);
          }
        });
      }
    }

    fieldName = 'unitPriceComponent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: MonetaryComponent | undefined = MonetaryComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitPriceComponent(datatype);
    }

    fieldName = 'totalPriceComponent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: MonetaryComponent | undefined = MonetaryComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTotalPriceComponent(datatype);
    }

    fieldName = 'overrideReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOverrideReason(datatype);
    }

    fieldName = 'enterer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEnterer(datatype);
    }

    fieldName = 'enteredDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setEnteredDateElement(datatype);
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReason(datatype);
          }
        });
      }
    }

    fieldName = 'service';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addService(datatype);
          }
        });
      }
    }

    fieldName = 'product';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProduct(datatype);
          }
        });
      }
    }

    fieldName = 'account';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAccount(datatype);
          }
        });
      }
  }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addNote(datatype);
          }
        });
      }
    }

    fieldName = 'supportingInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSupportingInformation(datatype);
          }
        });
      }
  }

    return instance;
  }

  /**
   * ChargeItem.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for item
   * - **Definition:** Identifiers assigned to this event performer or other systems.
   * - **Requirements:** Allows identification of the charge Item as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ChargeItem.definitionUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defining information about the code of this charge item
   * - **Definition:** References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definitionUri?: UriType[] | undefined;

  /**
   * ChargeItem.definitionCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource defining the code of this ChargeItem
   * - **Definition:** References the source of pricing information, rules of application for the code this ChargeItem uses.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definitionCanonical?: CanonicalType[] | undefined;

  /**
   * FHIR CodeSystem: ChargeitemStatus
   *
   * @see {@link ChargeitemStatusEnum }
   */
  private readonly chargeitemStatusEnum: ChargeitemStatusEnum;

  /**
   * ChargeItem.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** planned | billable | not-billable | aborted | billed | entered-in-error | unknown
   * - **Definition:** The current state of the ChargeItem.
   * - **Comment:** Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is. This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ChargeitemStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ChargeItem.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced ChargeItem
   * - **Definition:** ChargeItems can be grouped to larger ChargeItems covering the whole set.
   * - **Requirements:** E.g. Drug administration as part of a procedure, procedure as part of observation, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ChargeItem',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private partOf?: Reference[] | undefined;

  /**
   * ChargeItem.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code that identifies the charge, like a billing code
   * - **Definition:** A code that identifies the charge, like a billing code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * ChargeItem.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual service was done for/to
   * - **Definition:** The individual or set of individuals the action is being or was performed on.
   * - **Requirements:** Links the event to the Patient context.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * ChargeItem.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter associated with this ChargeItem
   * - **Definition:** This ChargeItem has the details of how the associated Encounter should be billed or otherwise be handled by finance systems.
   * - **Comment:** This ChargeItem may be recorded during planning, execution or after the actual encounter takes place.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private encounter?: Reference | undefined;

  /**
   * ChargeItem.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ChargeItem.occurrence[x]', ['dateTime','Period','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the charged service was applied
   * - **Definition:** Date/time(s) or duration when the charged service was applied.
   * - **Comment:** The list of types may be constrained as appropriate for the type of charge item.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ChargeItem.occurrence[x]',[
    'dateTime',
    'Period',
    'Timing',
  ])
  private occurrence?: IDataType | undefined;

  /**
   * ChargeItem.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who performed charged service
   * - **Definition:** Indicates who or what performed or participated in the charged service.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: ChargeItemPerformerComponent[] | undefined;

  /**
   * ChargeItem.performingOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization providing the charged service
   * - **Definition:** The organization performing the service.
   * - **Comment:** Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performingOrganization?: Reference | undefined;

  /**
   * ChargeItem.requestingOrganization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization requesting the charged service
   * - **Definition:** The organization requesting the service.
   * - **Comment:** The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requestingOrganization?: Reference | undefined;

  /**
   * ChargeItem.costCenter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that has ownership of the (potential, future) revenue
   * - **Definition:** The financial cost center permits the tracking of charge attribution.
   * - **Comment:** The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private costCenter?: Reference | undefined;

  /**
   * ChargeItem.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of which the charge item has been serviced
   * - **Definition:** Quantity of which the charge item has been serviced.
   * - **Comment:** In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private quantity?: Quantity | undefined;

  /**
   * ChargeItem.bodysite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical location, if relevant
   * - **Definition:** The anatomical location where the related service has been applied.
   * - **Comment:** Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [http://hl7.org/fhir/StructureDefinition/bodySite](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-bodySite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodysite?: CodeableConcept[] | undefined;

  /**
   * ChargeItem.unitPriceComponent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unit price overriding the associated rules
   * - **Definition:** The unit price of the chargable item.
   * - **Comment:** This could be communicated in ChargeItemDefinition. But if ChargeItemDefinition is not supported or not available, the unit price can be communicated in this property.
   * - **FHIR Type:** `MonetaryComponent`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitPriceComponent?: MonetaryComponent | undefined;

  /**
   * ChargeItem.totalPriceComponent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total price overriding the associated rules
   * - **Definition:** The total price for the chargable item, accounting for the quantity.
   * - **Comment:**  Often, the total price may be be calculated and recorded on the Invoice, but if a calculated total price must be exchanged prior to Invoice creation, it can be communicated in this property.
   * - **FHIR Type:** `MonetaryComponent`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private totalPriceComponent?: MonetaryComponent | undefined;

  /**
   * ChargeItem.overrideReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for overriding the list price/factor
   * - **Definition:** If the list price or the rule-based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private overrideReason?: CodeableConcept | undefined;

  /**
   * ChargeItem.enterer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual who was entering
   * - **Definition:** The device, practitioner, etc. who entered the charge item.
   * - **Comment:** The enterer is also the person considered responsible for factor/price overrides if applicable.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private enterer?: Reference | undefined;

  /**
   * ChargeItem.enteredDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date the charge item was entered
   * - **Definition:** Date the charge item was entered.
   * - **Comment:** The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private enteredDate?: DateTimeType | undefined;

  /**
   * ChargeItem.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why was the charged  service rendered?
   * - **Definition:** Describes why the event occurred in coded or textual form.
   * - **Comment:** If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept[] | undefined;

  /**
   * ChargeItem.service Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which rendered service is being charged?
   * - **Definition:** Indicated the rendered service that caused this charge.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/ImagingStudy',
   *       'http://hl7.org/fhir/StructureDefinition/Immunization',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationAdministration',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationDispense',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationRequest',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/SupplyDelivery',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private service?: CodeableReference[] | undefined;

  /**
   * ChargeItem.product Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Product charged
   * - **Definition:** Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private product?: CodeableReference[] | undefined;

  /**
   * ChargeItem.account Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Account to place this charge
   * - **Definition:** Account into which this ChargeItems belongs.
   * - **Comment:** Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Account',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private account?: Reference[] | undefined;

  /**
   * ChargeItem.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about the ChargeItem
   * - **Definition:** Comments made about the event by the performer, subject or other participants.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * ChargeItem.supportingInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Further information supporting this charge
   * - **Definition:** Further information supporting this charge.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInformation?: Reference[] | undefined;

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
      const optErrMsg = `Invalid ChargeItem.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ChargeItem.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `definitionUri` property value as a UriType array
   */
  public getDefinitionUriElement(): UriType[] {
    return this.definitionUri ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `definitionUri` property.
   *
   * @param element - the `definitionUri` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionUriElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid ChargeItem.definitionUri; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.definitionUri = element;
    } else {
      this.definitionUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `definitionUri` array property.
   *
   * @param element - the `definitionUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDefinitionUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ChargeItem.definitionUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initDefinitionUri();
      this.definitionUri?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionUri` property exists and has a value; `false` otherwise
   */
  public hasDefinitionUriElement(): boolean {
    return isDefinedList<UriType>(this.definitionUri) && this.definitionUri.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `definitionUri` property value as a fhirUri array
   */
  public getDefinitionUri(): fhirUri[] {
    this.initDefinitionUri();
    const definitionUriValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.definitionUri!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        definitionUriValues.push(value);
      }
    }
    return definitionUriValues;
  }

  /**
   * Assigns the provided primitive value array to the `definitionUri` property.
   *
   * @param value - the `definitionUri` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionUri(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const definitionUriElements = [] as UriType[];
      for (const definitionUriValue of value) {
        const optErrMsg = `Invalid ChargeItem.definitionUri array item (${String(definitionUriValue)})`;
        const element = new UriType(parseFhirPrimitiveData(definitionUriValue, fhirUriSchema, optErrMsg));
        definitionUriElements.push(element);
      }
      this.definitionUri = definitionUriElements;
    } else {
      this.definitionUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `definitionUri` array property.
   *
   * @param value - the `definitionUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDefinitionUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ChargeItem.definitionUri array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initDefinitionUri();
      this.addDefinitionUriElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionUri` property exists and has a value; `false` otherwise
   */
  public hasDefinitionUri(): boolean {
    return this.hasDefinitionUriElement();
  }

  /**
   * Initialize the `definitionUri` property
   */
  private initDefinitionUri(): void {
    if (!this.hasDefinitionUri()) {
      this.definitionUri = [] as UriType[];
    }
  }

  /**
   * @returns the `definitionCanonical` property value as a CanonicalType array
   */
  public getDefinitionCanonicalElement(): CanonicalType[] {
    return this.definitionCanonical ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `definitionCanonical` property.
   *
   * @param element - the `definitionCanonical` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionCanonicalElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid ChargeItem.definitionCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.definitionCanonical = element;
    } else {
      this.definitionCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `definitionCanonical` array property.
   *
   * @param element - the `definitionCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDefinitionCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ChargeItem.definitionCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initDefinitionCanonical();
      this.definitionCanonical?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionCanonical` property exists and has a value; `false` otherwise
   */
  public hasDefinitionCanonicalElement(): boolean {
    return isDefinedList<CanonicalType>(this.definitionCanonical) && this.definitionCanonical.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `definitionCanonical` property value as a fhirCanonical array
   */
  public getDefinitionCanonical(): fhirCanonical[] {
    this.initDefinitionCanonical();
    const definitionCanonicalValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.definitionCanonical!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        definitionCanonicalValues.push(value);
      }
    }
    return definitionCanonicalValues;
  }

  /**
   * Assigns the provided primitive value array to the `definitionCanonical` property.
   *
   * @param value - the `definitionCanonical` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionCanonical(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const definitionCanonicalElements = [] as CanonicalType[];
      for (const definitionCanonicalValue of value) {
        const optErrMsg = `Invalid ChargeItem.definitionCanonical array item (${String(definitionCanonicalValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(definitionCanonicalValue, fhirCanonicalSchema, optErrMsg));
        definitionCanonicalElements.push(element);
      }
      this.definitionCanonical = definitionCanonicalElements;
    } else {
      this.definitionCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `definitionCanonical` array property.
   *
   * @param value - the `definitionCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDefinitionCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ChargeItem.definitionCanonical array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initDefinitionCanonical();
      this.addDefinitionCanonicalElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionCanonical` property exists and has a value; `false` otherwise
   */
  public hasDefinitionCanonical(): boolean {
    return this.hasDefinitionCanonicalElement();
  }

  /**
   * Initialize the `definitionCanonical` property
   */
  private initDefinitionCanonical(): void {
    if (!this.hasDefinitionCanonical()) {
      this.definitionCanonical = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ChargeitemStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ChargeitemStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ChargeItem.status`;
      assertEnumCodeType<ChargeitemStatusEnum>(enumType, ChargeitemStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ChargeitemStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ChargeitemStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ChargeItem.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.chargeitemStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ChargeitemStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ChargeitemStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ChargeItem.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.chargeitemStatusEnum);
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
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.partOf', ['ChargeItem',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.partOf', [
    'ChargeItem',
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
   * @decorator `@ReferenceTargets('ChargeItem.partOf', ['ChargeItem',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.partOf', [
    'ChargeItem',
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
      const optErrMsg = `Invalid ChargeItem.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.subject', [
    'Patient',
  
    'Group',
  ])
  public setSubject(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<Reference>(this.subject) && !this.subject.isEmpty();
  }

  /**
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.encounter', [
    'Encounter',
  ])
  public setEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefined<Reference>(this.encounter) && !this.encounter.isEmpty();
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
   * @decorator `@ChoiceDataTypes('ChargeItem.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ChargeItem.occurrence[x]')
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
        `DataType mismatch for ChargeItem.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
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
        `DataType mismatch for ChargeItem.occurrence[x]: Expected Period but encountered ${this.occurrence.fhirType()}`,
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
        `DataType mismatch for ChargeItem.occurrence[x]: Expected Timing but encountered ${this.occurrence.fhirType()}`,
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
   * @returns the `performer` property value as a ChargeItemPerformerComponent array
   */
  public getPerformer(): ChargeItemPerformerComponent[] {
    return this.performer ?? ([] as ChargeItemPerformerComponent[]);
  }

  /**
   * Assigns the provided ChargeItemPerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: ChargeItemPerformerComponent[] | undefined): this {
    if (isDefinedList<ChargeItemPerformerComponent>(value)) {
      const optErrMsg = `Invalid ChargeItem.performer; Provided value array has an element that is not an instance of ChargeItemPerformerComponent.`;
      assertFhirTypeList<ChargeItemPerformerComponent>(value, ChargeItemPerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ChargeItemPerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: ChargeItemPerformerComponent | undefined): this {
    if (isDefined<ChargeItemPerformerComponent>(value)) {
      const optErrMsg = `Invalid ChargeItem.performer; Provided element is not an instance of ChargeItemPerformerComponent.`;
      assertFhirType<ChargeItemPerformerComponent>(value, ChargeItemPerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<ChargeItemPerformerComponent>(this.performer) && this.performer.some((item: ChargeItemPerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as ChargeItemPerformerComponent[];
    }
  }

  /**
   * @returns the `performingOrganization` property value as a Reference object; else an empty Reference object
   */
  public getPerformingOrganization(): Reference {
    return this.performingOrganization ?? new Reference();
  }

  /**
   * Assigns the provided PerformingOrganization object value to the `performingOrganization` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.performingOrganization', ['Organization',])`
   *
   * @param value - the `performingOrganization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.performingOrganization', [
    'Organization',
  ])
  public setPerformingOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performingOrganization = value;
    } else {
      this.performingOrganization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performingOrganization` property exists and has a value; `false` otherwise
   */
  public hasPerformingOrganization(): boolean {
    return isDefined<Reference>(this.performingOrganization) && !this.performingOrganization.isEmpty();
  }

  /**
   * @returns the `requestingOrganization` property value as a Reference object; else an empty Reference object
   */
  public getRequestingOrganization(): Reference {
    return this.requestingOrganization ?? new Reference();
  }

  /**
   * Assigns the provided RequestingOrganization object value to the `requestingOrganization` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.requestingOrganization', ['Organization',])`
   *
   * @param value - the `requestingOrganization` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.requestingOrganization', [
    'Organization',
  ])
  public setRequestingOrganization(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requestingOrganization = value;
    } else {
      this.requestingOrganization = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestingOrganization` property exists and has a value; `false` otherwise
   */
  public hasRequestingOrganization(): boolean {
    return isDefined<Reference>(this.requestingOrganization) && !this.requestingOrganization.isEmpty();
  }

  /**
   * @returns the `costCenter` property value as a Reference object; else an empty Reference object
   */
  public getCostCenter(): Reference {
    return this.costCenter ?? new Reference();
  }

  /**
   * Assigns the provided CostCenter object value to the `costCenter` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.costCenter', ['Organization',])`
   *
   * @param value - the `costCenter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.costCenter', [
    'Organization',
  ])
  public setCostCenter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.costCenter = value;
    } else {
      this.costCenter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `costCenter` property exists and has a value; `false` otherwise
   */
  public hasCostCenter(): boolean {
    return isDefined<Reference>(this.costCenter) && !this.costCenter.isEmpty();
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
      const optErrMsg = `Invalid ChargeItem.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `bodysite` property value as a CodeableConcept array
   */
  public getBodysite(): CodeableConcept[] {
    return this.bodysite ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `bodysite` property.
   *
   * @param value - the `bodysite` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodysite(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ChargeItem.bodysite; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.bodysite = value;
    } else {
      this.bodysite = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `bodysite` array property.
   *
   * @param value - the `bodysite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBodysite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ChargeItem.bodysite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initBodysite();
      this.bodysite?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `bodysite` property exists and has a value; `false` otherwise
   */
  public hasBodysite(): boolean {
    return isDefinedList<CodeableConcept>(this.bodysite) && this.bodysite.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `bodysite` property
   */
  private initBodysite(): void {
    if(!this.hasBodysite()) {
      this.bodysite = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `unitPriceComponent` property value as a MonetaryComponent object if defined; else an empty MonetaryComponent object
   */
  public getUnitPriceComponent(): MonetaryComponent {
    return this.unitPriceComponent ?? new MonetaryComponent();
  }

  /**
   * Assigns the provided UnitPriceComponent object value to the `unitPriceComponent` property.
   *
   * @param value - the `unitPriceComponent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitPriceComponent(value: MonetaryComponent | undefined): this {
    if (isDefined<MonetaryComponent>(value)) {
      const optErrMsg = `Invalid ChargeItem.unitPriceComponent; Provided element is not an instance of MonetaryComponent.`;
      assertFhirType<MonetaryComponent>(value, MonetaryComponent, optErrMsg);
      this.unitPriceComponent = value;
    } else {
      this.unitPriceComponent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitPriceComponent` property exists and has a value; `false` otherwise
   */
  public hasUnitPriceComponent(): boolean {
    return isDefined<MonetaryComponent>(this.unitPriceComponent) && !this.unitPriceComponent.isEmpty();
  }

  /**
   * @returns the `totalPriceComponent` property value as a MonetaryComponent object if defined; else an empty MonetaryComponent object
   */
  public getTotalPriceComponent(): MonetaryComponent {
    return this.totalPriceComponent ?? new MonetaryComponent();
  }

  /**
   * Assigns the provided TotalPriceComponent object value to the `totalPriceComponent` property.
   *
   * @param value - the `totalPriceComponent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTotalPriceComponent(value: MonetaryComponent | undefined): this {
    if (isDefined<MonetaryComponent>(value)) {
      const optErrMsg = `Invalid ChargeItem.totalPriceComponent; Provided element is not an instance of MonetaryComponent.`;
      assertFhirType<MonetaryComponent>(value, MonetaryComponent, optErrMsg);
      this.totalPriceComponent = value;
    } else {
      this.totalPriceComponent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `totalPriceComponent` property exists and has a value; `false` otherwise
   */
  public hasTotalPriceComponent(): boolean {
    return isDefined<MonetaryComponent>(this.totalPriceComponent) && !this.totalPriceComponent.isEmpty();
  }

  /**
   * @returns the `overrideReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOverrideReason(): CodeableConcept {
    return this.overrideReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OverrideReason object value to the `overrideReason` property.
   *
   * @param value - the `overrideReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOverrideReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ChargeItem.overrideReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.overrideReason = value;
    } else {
      this.overrideReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `overrideReason` property exists and has a value; `false` otherwise
   */
  public hasOverrideReason(): boolean {
    return isDefined<CodeableConcept>(this.overrideReason) && !this.overrideReason.isEmpty();
  }

  /**
   * @returns the `enterer` property value as a Reference object; else an empty Reference object
   */
  public getEnterer(): Reference {
    return this.enterer ?? new Reference();
  }

  /**
   * Assigns the provided Enterer object value to the `enterer` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.enterer', ['Practitioner','PractitionerRole','Organization','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `enterer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.enterer', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  ])
  public setEnterer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.enterer = value;
    } else {
      this.enterer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enterer` property exists and has a value; `false` otherwise
   */
  public hasEnterer(): boolean {
    return isDefined<Reference>(this.enterer) && !this.enterer.isEmpty();
  }

  /**
   * @returns the `enteredDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getEnteredDateElement(): DateTimeType {
    return this.enteredDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `enteredDate` property.
   *
   * @param element - the `enteredDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEnteredDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid ChargeItem.enteredDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.enteredDate = element;
    } else {
      this.enteredDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enteredDate` property exists and has a value; `false` otherwise
   */
  public hasEnteredDateElement(): boolean {
    return isDefined<DateTimeType>(this.enteredDate) && !this.enteredDate.isEmpty();
  }

  /**
   * @returns the `enteredDate` property value as a fhirDateTime if defined; else undefined
   */
  public getEnteredDate(): fhirDateTime | undefined {
    return this.enteredDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `enteredDate` property.
   *
   * @param value - the `enteredDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEnteredDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid ChargeItem.enteredDate (${String(value)})`;
      this.enteredDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.enteredDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enteredDate` property exists and has a value; `false` otherwise
   */
  public hasEnteredDate(): boolean {
    return this.hasEnteredDateElement();
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
      const optErrMsg = `Invalid ChargeItem.reason; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ChargeItem.reason; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `service` property value as a CodeableReference array
   */
  public getService(): CodeableReference[] {
    return this.service ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `service` property.
   *
   * @param value - the `service` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setService(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid ChargeItem.service; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.service = value;
    } else {
      this.service = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `service` array property.
   *
   * @param value - the `service` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addService(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ChargeItem.service; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initService();
      this.service?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `service` property exists and has a value; `false` otherwise
   */
  public hasService(): boolean {
    return isDefinedList<CodeableReference>(this.service) && this.service.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `service` property
   */
  private initService(): void {
    if(!this.hasService()) {
      this.service = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `product` property value as a CodeableReference array
   */
  public getProduct(): CodeableReference[] {
    return this.product ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `product` property.
   *
   * @param value - the `product` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProduct(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid ChargeItem.product; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.product = value;
    } else {
      this.product = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `product` array property.
   *
   * @param value - the `product` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProduct(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ChargeItem.product; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initProduct();
      this.product?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `product` property exists and has a value; `false` otherwise
   */
  public hasProduct(): boolean {
    return isDefinedList<CodeableReference>(this.product) && this.product.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `product` property
   */
  private initProduct(): void {
    if(!this.hasProduct()) {
      this.product = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `account` property value as a Reference array
   */
  public getAccount(): Reference[] {
    return this.account ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `account` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.account', ['Account',])`
   *
   * @param value - the `account` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.account', [
    'Account',
  ])
  public setAccount(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.account = value;
    } else {
      this.account = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `account` array property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.account', ['Account',])`
   *
   * @param value - the `account` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.account', [
    'Account',
  ])
  public addAccount(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAccount();
      this.account?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `account` property exists and has a value; `false` otherwise
   */
  public hasAccount(): boolean {
    return isDefinedList<Reference>(this.account) && this.account.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `account` property
   */
  private initAccount(): void {
    if (!this.hasAccount()) {
      this.account = [] as Reference[];
    }
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
      const optErrMsg = `Invalid ChargeItem.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid ChargeItem.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `supportingInformation` property value as a Reference array
   */
  public getSupportingInformation(): Reference[] {
    return this.supportingInformation ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInformation` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.supportingInformation', [
    'Resource',
  ])
  public setSupportingInformation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingInformation = value;
    } else {
      this.supportingInformation = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingInformation` array property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.supportingInformation', ['Resource',])`
   *
   * @param value - the `supportingInformation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.supportingInformation', [
    'Resource',
  ])
  public addSupportingInformation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingInformation();
      this.supportingInformation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInformation` property exists and has a value; `false` otherwise
   */
  public hasSupportingInformation(): boolean {
    return isDefinedList<Reference>(this.supportingInformation) && this.supportingInformation.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInformation` property
   */
  private initSupportingInformation(): void {
    if (!this.hasSupportingInformation()) {
      this.supportingInformation = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ChargeItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.definitionUri,
      this.definitionCanonical,
      this.status,
      this.partOf,
      this.code,
      this.subject,
      this.encounter,
      this.occurrence,
      this.performer,
      this.performingOrganization,
      this.requestingOrganization,
      this.costCenter,
      this.quantity,
      this.bodysite,
      this.unitPriceComponent,
      this.totalPriceComponent,
      this.overrideReason,
      this.enterer,
      this.enteredDate,
      this.reason,
      this.service,
      this.product,
      this.account,
      this.note,
      this.supportingInformation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.code, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ChargeItem {
    const dest = new ChargeItem();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ChargeItem): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const definitionUriList = copyListValues<UriType>(this.definitionUri);
    dest.definitionUri = definitionUriList.length === 0 ? undefined : definitionUriList;
    const definitionCanonicalList = copyListValues<CanonicalType>(this.definitionCanonical);
    dest.definitionCanonical = definitionCanonicalList.length === 0 ? undefined : definitionCanonicalList;
    dest.status = this.status ? this.status.copy() : null;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.code = this.code ? this.code.copy() : null;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.occurrence = this.occurrence?.copy() as IDataType;
    const performerList = copyListValues<ChargeItemPerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    dest.performingOrganization = this.performingOrganization?.copy();
    dest.requestingOrganization = this.requestingOrganization?.copy();
    dest.costCenter = this.costCenter?.copy();
    dest.quantity = this.quantity?.copy();
    const bodysiteList = copyListValues<CodeableConcept>(this.bodysite);
    dest.bodysite = bodysiteList.length === 0 ? undefined : bodysiteList;
    dest.unitPriceComponent = this.unitPriceComponent?.copy();
    dest.totalPriceComponent = this.totalPriceComponent?.copy();
    dest.overrideReason = this.overrideReason?.copy();
    dest.enterer = this.enterer?.copy();
    dest.enteredDate = this.enteredDate?.copy();
    const reasonList = copyListValues<CodeableConcept>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const serviceList = copyListValues<CodeableReference>(this.service);
    dest.service = serviceList.length === 0 ? undefined : serviceList;
    const productList = copyListValues<CodeableReference>(this.product);
    dest.product = productList.length === 0 ? undefined : productList;
    const accountList = copyListValues<Reference>(this.account);
    dest.account = accountList.length === 0 ? undefined : accountList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const supportingInformationList = copyListValues<Reference>(this.supportingInformation);
    dest.supportingInformation = supportingInformationList.length === 0 ? undefined : supportingInformationList;
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

    if (this.hasDefinitionUri()) {
      setFhirPrimitiveListJson(this.getDefinitionUriElement(), 'definitionUri', jsonObj);
    }

    if (this.hasDefinitionCanonical()) {
      setFhirPrimitiveListJson(this.getDefinitionCanonicalElement(), 'definitionCanonical', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasPerformingOrganization()) {
      setFhirComplexJson(this.getPerformingOrganization(), 'performingOrganization', jsonObj);
    }

    if (this.hasRequestingOrganization()) {
      setFhirComplexJson(this.getRequestingOrganization(), 'requestingOrganization', jsonObj);
    }

    if (this.hasCostCenter()) {
      setFhirComplexJson(this.getCostCenter(), 'costCenter', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasBodysite()) {
      setFhirComplexListJson(this.getBodysite(), 'bodysite', jsonObj);
    }

    if (this.hasUnitPriceComponent()) {
      setFhirComplexJson(this.getUnitPriceComponent(), 'unitPriceComponent', jsonObj);
    }

    if (this.hasTotalPriceComponent()) {
      setFhirComplexJson(this.getTotalPriceComponent(), 'totalPriceComponent', jsonObj);
    }

    if (this.hasOverrideReason()) {
      setFhirComplexJson(this.getOverrideReason(), 'overrideReason', jsonObj);
    }

    if (this.hasEnterer()) {
      setFhirComplexJson(this.getEnterer(), 'enterer', jsonObj);
    }

    if (this.hasEnteredDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getEnteredDateElement(), 'enteredDate', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasService()) {
      setFhirComplexListJson(this.getService(), 'service', jsonObj);
    }

    if (this.hasProduct()) {
      setFhirComplexListJson(this.getProduct(), 'product', jsonObj);
    }

    if (this.hasAccount()) {
      setFhirComplexListJson(this.getAccount(), 'account', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasSupportingInformation()) {
      setFhirComplexListJson(this.getSupportingInformation(), 'supportingInformation', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ChargeItemPerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who performed charged service
 * - **Definition:** Indicates who or what performed or participated in the charged service.
 *
 * @category Data Models: Resource
 * @see [FHIR ChargeItem](http://hl7.org/fhir/StructureDefinition/ChargeItem)
 */
export class ChargeItemPerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `ChargeItemPerformerComponent` JSON to instantiate the ChargeItemPerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ChargeItemPerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ChargeItemPerformerComponent
   * @returns ChargeItemPerformerComponent data model or undefined for `ChargeItemPerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ChargeItemPerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ChargeItemPerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ChargeItemPerformerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

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
        instance.setActor(null);
      } else {
        instance.setActor(datatype);
      }
    } else {
      instance.setActor(null);
    }

    return instance;
  }

  /**
   * ChargeItem.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What type of performance was done
   * - **Definition:** Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private function_?: CodeableConcept | undefined;

  /**
   * ChargeItem.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual who was performing
   * - **Definition:** The device, practitioner, etc. who performed or participated in the service.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
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
      const optErrMsg = `Invalid ChargeItem.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `actor` property value as a Reference object if defined; else an empty Reference object
   */
  public getActor(): Reference {
    return this.actor ?? new Reference();
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('ChargeItem.performer.actor', ['Practitioner','PractitionerRole','Organization','HealthcareService','CareTeam','Patient','Device','RelatedPerson',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItem.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'HealthcareService',
  
    'CareTeam',
  
    'Patient',
  
    'Device',
  
    'RelatedPerson',
  ])
  public setActor(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.actor = value;
    } else {
      this.actor = null;
    }
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
    return 'ChargeItem.performer';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.actor, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ChargeItemPerformerComponent {
    const dest = new ChargeItemPerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ChargeItemPerformerComponent): void {
    super.copyValues(dest);
    dest.function_ = this.function_?.copy();
    dest.actor = this.actor ? this.actor.copy() : null;
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

    if (this.hasFunction()) {
      setFhirComplexJson(this.getFunction(), 'function', jsonObj);
    }

    if (this.hasActor()) {
      setFhirComplexJson(this.getActor(), 'actor', jsonObj);
    }

    return jsonObj;
  }
}
