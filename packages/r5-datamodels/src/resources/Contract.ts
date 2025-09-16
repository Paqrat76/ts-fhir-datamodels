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
 * Contract Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Contract
 * StructureDefinition.name: Contract
 * StructureDefinition.description: Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
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
  CodeType,
  DateTimeType,
  DateType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  TimeType,
  UnsignedIntType,
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
  fhirDecimal,
  fhirDecimalSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
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
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, Attachment, CodeableConcept, CodeableReference, Coding, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference, Signature, Timing } from '../complex-types/complex-datatypes';
import { ContractPublicationstatusEnum } from '../code-systems/ContractPublicationstatusEnum';
import { ContractStatusEnum } from '../code-systems/ContractStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Contract Class
 *
 * @remarks
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 *
 * **FHIR Specification**
 * - **Short:** Legal Agreement
 * - **Definition:** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class Contract extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.contractStatusEnum = new ContractStatusEnum();
  }

  /**
   * Parse the provided `Contract` JSON to instantiate the Contract data model.
   *
   * @param sourceJson - JSON representing FHIR `Contract`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Contract
   * @returns Contract data model or undefined for `Contract`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Contract | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Contract';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Contract();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Contract');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Contract[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Contract`;
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

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'legalState';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLegalState(datatype);
    }

    fieldName = 'instantiatesCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setInstantiatesCanonical(datatype);
    }

    fieldName = 'instantiatesUri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setInstantiatesUriElement(datatype);
    }

    fieldName = 'contentDerivative';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContentDerivative(datatype);
    }

    fieldName = 'issued';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setIssuedElement(datatype);
    }

    fieldName = 'applies';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setApplies(datatype);
    }

    fieldName = 'expirationType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpirationType(datatype);
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

    fieldName = 'authority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAuthority(datatype);
          }
        });
      }
  }

    fieldName = 'domain';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDomain(datatype);
          }
        });
      }
  }

    fieldName = 'site';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSite(datatype);
          }
        });
      }
  }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'subtitle';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSubtitleElement(datatype);
    }

    fieldName = 'alias';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addAliasElement(datatype);
          }
        });
      }
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'scope';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setScope(datatype);
    }

    fieldName = 'topic[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const topic: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTopic(topic);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'subType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubType(datatype);
          }
        });
      }
    }

    fieldName = 'contentDefinition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ContractContentDefinitionComponent | undefined = ContractContentDefinitionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContentDefinition(component);
    }

    fieldName = 'term';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermComponent | undefined = ContractTermComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addTerm(component);
          }
        });
      }
    }

    fieldName = 'supportingInfo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSupportingInfo(datatype);
          }
        });
      }
  }

    fieldName = 'relevantHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelevantHistory(datatype);
          }
        });
      }
  }

    fieldName = 'signer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractSignerComponent | undefined = ContractSignerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSigner(component);
          }
        });
      }
    }

    fieldName = 'friendly';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractFriendlyComponent | undefined = ContractFriendlyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addFriendly(component);
          }
        });
      }
    }

    fieldName = 'legal';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractLegalComponent | undefined = ContractLegalComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addLegal(component);
          }
        });
      }
    }

    fieldName = 'rule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractRuleComponent | undefined = ContractRuleComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addRule(component);
          }
        });
      }
    }

    fieldName = 'legallyBinding[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const legallyBinding: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setLegallyBinding(legallyBinding);

    return instance;
  }

  /**
   * Contract.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract number
   * - **Definition:** Unique identifier for this Contract or a derivative that references a Source Contract.
   * - **Requirements:** This is the business identifier of the contract content conveyed.  It may be a derivative of the legally binding contract, in which case, the identifier of the basal contract is  contained in the Contract.binding referenced Contract.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Contract.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Basal definition
   * - **Definition:** Canonical identifier for this contract, represented as a URI (globally unique).
   * - **Comment:** Used in a domain that uses a supplied contract repository.
   * - **Requirements:** An absolute URI that is used to identify this contract when it is referenced in a specification, model, design, instance or a contract derivative; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which this plan definition is (or will be) published.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url?: UriType | undefined;

  /**
   * Contract.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business edition
   * - **Definition:** An edition identifier used for business purposes to label business significant variants.
   * - **Comment:** Note -  This is a business versionId, not a resource version id (see discussion at [Versioning](https://hl7.org/fhir/resource.html#versions))  Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **Requirements:** The identifier that is used to identify this version of the contract when it is referenced in a specification, model, design, instance, or contract derivative. This is an arbitrary value managed by the contract author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * FHIR CodeSystem: ContractStatus
   *
   * @see {@link ContractStatusEnum }
   */
  private readonly contractStatusEnum: ContractStatusEnum;

  /**
   * Contract.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** amended | appended | cancelled | disputed | entered-in-error | executable +
   * - **Definition:** The status of the resource instance.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
   * - **Requirements:** This is the Contract Business Workflow Status.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ContractStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Contract.legalState Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Negotiation status
   * - **Definition:** Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
   * - **Requirements:** The legal state of a contract follows a prescribed flow as defined by the legal community and these state may be indepenedent of the workflow state.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private legalState?: CodeableConcept | undefined;

  /**
   * Contract.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source Contract Definition
   * - **Definition:** The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Contract',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesCanonical?: Reference | undefined;

  /**
   * Contract.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Contract Definition
   * - **Definition:** The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesUri?: UriType | undefined;

  /**
   * Contract.contentDerivative Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content derived from the basal information
   * - **Definition:** The minimal content derived from the basal information source at a specific stage in its lifecycle.
   * - **Requirements:** In the context of a contract, the information source of the content derivative shall be the information referenced by the contract.binding. The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the "binding" or as the "friendly" electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.  However, the Contract Resource may be considered the legally binding contract if it is the only "executed" form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a "legal" form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource. If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the "legal" basis for the application to ensure "informed consent" to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contentDerivative?: CodeableConcept | undefined;

  /**
   * Contract.issued Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When this Contract was issued
   * - **Definition:** When this  Contract was issued.
   * - **Requirements:** The Contract issuance dateTime often precedes the Contract effective dateTime.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issued?: DateTimeType | undefined;

  /**
   * Contract.applies Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Effective time
   * - **Definition:** Relevant time or time-period when this Contract is applicable.
   * - **Requirements:** The dateTime upon which the Contract is binding.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private applies?: Period | undefined;

  /**
   * Contract.expirationType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract cessation cause
   * - **Definition:** Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expirationType?: CodeableConcept | undefined;

  /**
   * Contract.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Target Entity
   * - **Definition:** The target entity impacted by or of interest to parties to the agreement.
   * - **Comment:** The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.  In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
   * - **Requirements:** The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.  In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference[] | undefined;

  /**
   * Contract.authority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authority under which this Contract has standing
   * - **Definition:** A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
   * - **Requirements:** The governance framework responsible for ensuring compliance with or enforcement of the contract or policy.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private authority?: Reference[] | undefined;

  /**
   * Contract.domain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A sphere of control governed by an authoritative jurisdiction, organization, or person
   * - **Definition:** Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
   * - **Requirements:** The entities bound by governance to comply with the enforcement of contracts or policies by a recognized authority.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private domain?: Reference[] | undefined;

  /**
   * Contract.site Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific Location
   * - **Definition:** Sites in which the contract is complied with,  exercised, or in force.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private site?: Reference[] | undefined;

  /**
   * Contract.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Computer friendly designation
   * - **Definition:** A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Contract.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human Friendly name
   * - **Definition:** A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * Contract.subtitle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subordinate Friendly name
   * - **Definition:** A more detailed or qualifying explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subtitle?: StringType | undefined;

  /**
   * Contract.alias Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Acronym or short name
   * - **Definition:** Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private alias?: StringType[] | undefined;

  /**
   * Contract.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source of Contract
   * - **Definition:** The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference | undefined;

  /**
   * Contract.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Range of Legal Concerns
   * - **Definition:** A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private scope?: CodeableConcept | undefined;

  /**
   * Contract.topic[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.topic[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Focus of contract interest
   * - **Definition:** Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
   * - **Comment:** Contractual areas of concern are very broad. This element supports narrowing the area of concern to more specific term topics within this Contract. Given the wide range of contract topics, implementers need to be cognizant of the business use case for which they are designing a FHIR Contract, and narrowly specify the topic being represented with respect to the Contract.type and any specializing Contract.subtype. The same topic, e.g., an asset such as a good or service, such as a real property, medical supply, insurance, information, a procedure or employment, or a manner of conduct, such adherence to a privacy, trust, or security policy, may be the topic of multiple types of contracts.  One way to determine the Contract.topic is to answer the question: "What is the overall objective of this legal instrument?". The Contract.topic is described with more detail by the terms of the Contract.
   * - **Requirements:** May be used to focus the topic of a Contract definition, derivative, or instance in any legal state.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.topic[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private topic?: IDataType | undefined;

  /**
   * Contract.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Legal instrument category
   * - **Definition:** A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract\'s scope to distinguish the kinds of systems that would be interested in the contract.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Contract.subType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subtype within the context of type
   * - **Definition:** Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract\'s scope.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subType?: CodeableConcept[] | undefined;

  /**
   * Contract.contentDefinition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract precursor content
   * - **Definition:** Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contentDefinition?: ContractContentDefinitionComponent | undefined;

  /**
   * Contract.term Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Term List
   * - **Definition:** One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private term?: ContractTermComponent[] | undefined;

  /**
   * Contract.supportingInfo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extra Information
   * - **Definition:** Information that may be needed by/relevant to the performer in their execution of this term action.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private supportingInfo?: Reference[] | undefined;

  /**
   * Contract.relevantHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key event in Contract History
   * - **Definition:** Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provenance.entity indicates the target that was changed in the update (see [Provenance.entity](https://hl7.org/fhir/provenance-definitions.html#Provenance.entity)).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Provenance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relevantHistory?: Reference[] | undefined;

  /**
   * Contract.signer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Signatory
   * - **Definition:** Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.
   * - **Comment:** Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic. For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
   * - **Requirements:** The Contract.signer applies a signature to the Contract.binding referenced resource, which is the documentation that is the legal "source of truth". The Contract.signer may delegate, such as a legally recognized personal representative, or have a delegate assigned e.g., by a court of law, to actually sign the Contract, such as a trustee in the case of incompetence.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private signer?: ContractSignerComponent[] | undefined;

  /**
   * Contract.friendly Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Friendly Language
   * - **Definition:** The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private friendly?: ContractFriendlyComponent[] | undefined;

  /**
   * Contract.legal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Legal Language
   * - **Definition:** List of Legal expressions or representations of this Contract.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private legal?: ContractLegalComponent[] | undefined;

  /**
   * Contract.rule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Computable Contract Language
   * - **Definition:** List of Computable Policy Rule Language Representations of this Contract.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rule?: ContractRuleComponent[] | undefined;

  /**
   * Contract.legallyBinding[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.legallyBinding[x]', ['Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Binding Contract
   * - **Definition:** Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
   * - **FHIR Types:**
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.legallyBinding[x]',[
    'Attachment',
    'Reference',
  ])
  private legallyBinding?: IDataType | undefined;

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
      const optErrMsg = `Invalid Contract.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Contract.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `url` property value as a UriType object if defined; else an empty UriType object
   */
  public getUrlElement(): UriType {
    return this.url ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Contract.url; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.url = element;
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrlElement(): boolean {
    return isDefined<UriType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirUri if defined; else undefined
   */
  public getUrl(): fhirUri | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Contract.url (${String(value)})`;
      this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.url = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrl(): boolean {
    return this.hasUrlElement();
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
      const optErrMsg = `Invalid Contract.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Contract.version (${String(value)})`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ContractStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ContractStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Contract.status';
      assertEnumCodeType<ContractStatusEnum>(enumType, ContractStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ContractStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ContractStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Contract.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.contractStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ContractStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ContractStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Contract.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.contractStatusEnum);
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
   * @returns the `legalState` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLegalState(): CodeableConcept {
    return this.legalState ?? new CodeableConcept();
  }

  /**
   * Assigns the provided LegalState object value to the `legalState` property.
   *
   * @param value - the `legalState` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLegalState(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.legalState; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.legalState = value;
    } else {
      this.legalState = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `legalState` property exists and has a value; `false` otherwise
   */
  public hasLegalState(): boolean {
    return isDefined<CodeableConcept>(this.legalState) && !this.legalState.isEmpty();
  }

  /**
   * @returns the `instantiatesCanonical` property value as a Reference object; else an empty Reference object
   */
  public getInstantiatesCanonical(): Reference {
    return this.instantiatesCanonical ?? new Reference();
  }

  /**
   * Assigns the provided InstantiatesCanonical object value to the `instantiatesCanonical` property.
   *
   * @decorator `@ReferenceTargets('Contract.instantiatesCanonical', ['Contract',])`
   *
   * @param value - the `instantiatesCanonical` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.instantiatesCanonical', [
    'Contract',
  ])
  public setInstantiatesCanonical(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.instantiatesCanonical = value;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonical(): boolean {
    return isDefined<Reference>(this.instantiatesCanonical) && !this.instantiatesCanonical.isEmpty();
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType object if defined; else an empty UriType object
   */
  public getInstantiatesUriElement(): UriType {
    return this.instantiatesUri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Contract.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefined<UriType>(this.instantiatesUri) && !this.instantiatesUri.isEmpty();
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri if defined; else undefined
   */
  public getInstantiatesUri(): fhirUri | undefined {
    return this.instantiatesUri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Contract.instantiatesUri (${String(value)})`;
      this.instantiatesUri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUri(): boolean {
    return this.hasInstantiatesUriElement();
  }

  /**
   * @returns the `contentDerivative` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getContentDerivative(): CodeableConcept {
    return this.contentDerivative ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ContentDerivative object value to the `contentDerivative` property.
   *
   * @param value - the `contentDerivative` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContentDerivative(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.contentDerivative; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.contentDerivative = value;
    } else {
      this.contentDerivative = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentDerivative` property exists and has a value; `false` otherwise
   */
  public hasContentDerivative(): boolean {
    return isDefined<CodeableConcept>(this.contentDerivative) && !this.contentDerivative.isEmpty();
  }

  /**
   * @returns the `issued` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getIssuedElement(): DateTimeType {
    return this.issued ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `issued` property.
   *
   * @param element - the `issued` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Contract.issued; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.issued = element;
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssuedElement(): boolean {
    return isDefined<DateTimeType>(this.issued) && !this.issued.isEmpty();
  }

  /**
   * @returns the `issued` property value as a fhirDateTime if defined; else undefined
   */
  public getIssued(): fhirDateTime | undefined {
    return this.issued?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `issued` property.
   *
   * @param value - the `issued` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssued(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Contract.issued (${String(value)})`;
      this.issued = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssued(): boolean {
    return this.hasIssuedElement();
  }

  /**
   * @returns the `applies` property value as a Period object if defined; else an empty Period object
   */
  public getApplies(): Period {
    return this.applies ?? new Period();
  }

  /**
   * Assigns the provided Applies object value to the `applies` property.
   *
   * @param value - the `applies` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setApplies(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Contract.applies; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.applies = value;
    } else {
      this.applies = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `applies` property exists and has a value; `false` otherwise
   */
  public hasApplies(): boolean {
    return isDefined<Period>(this.applies) && !this.applies.isEmpty();
  }

  /**
   * @returns the `expirationType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getExpirationType(): CodeableConcept {
    return this.expirationType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ExpirationType object value to the `expirationType` property.
   *
   * @param value - the `expirationType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpirationType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.expirationType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.expirationType = value;
    } else {
      this.expirationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expirationType` property exists and has a value; `false` otherwise
   */
  public hasExpirationType(): boolean {
    return isDefined<CodeableConcept>(this.expirationType) && !this.expirationType.isEmpty();
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
   * @decorator `@ReferenceTargets('Contract.subject', ['Resource',])`
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.subject', [
    'Resource',
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
   * @decorator `@ReferenceTargets('Contract.subject', ['Resource',])`
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.subject', [
    'Resource',
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
   * @returns the `authority` property value as a Reference array
   */
  public getAuthority(): Reference[] {
    return this.authority ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `authority` property.
   *
   * @decorator `@ReferenceTargets('Contract.authority', ['Organization',])`
   *
   * @param value - the `authority` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.authority', [
    'Organization',
  ])
  public setAuthority(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.authority = value;
    } else {
      this.authority = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `authority` array property.
   *
   * @decorator `@ReferenceTargets('Contract.authority', ['Organization',])`
   *
   * @param value - the `authority` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.authority', [
    'Organization',
  ])
  public addAuthority(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAuthority();
      this.authority?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `authority` property exists and has a value; `false` otherwise
   */
  public hasAuthority(): boolean {
    return isDefinedList<Reference>(this.authority) && this.authority.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `authority` property
   */
  private initAuthority(): void {
    if (!this.hasAuthority()) {
      this.authority = [] as Reference[];
    }
  }

  /**
   * @returns the `domain` property value as a Reference array
   */
  public getDomain(): Reference[] {
    return this.domain ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `domain` property.
   *
   * @decorator `@ReferenceTargets('Contract.domain', ['Location',])`
   *
   * @param value - the `domain` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.domain', [
    'Location',
  ])
  public setDomain(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.domain = value;
    } else {
      this.domain = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `domain` array property.
   *
   * @decorator `@ReferenceTargets('Contract.domain', ['Location',])`
   *
   * @param value - the `domain` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.domain', [
    'Location',
  ])
  public addDomain(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDomain();
      this.domain?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `domain` property exists and has a value; `false` otherwise
   */
  public hasDomain(): boolean {
    return isDefinedList<Reference>(this.domain) && this.domain.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `domain` property
   */
  private initDomain(): void {
    if (!this.hasDomain()) {
      this.domain = [] as Reference[];
    }
  }

  /**
   * @returns the `site` property value as a Reference array
   */
  public getSite(): Reference[] {
    return this.site ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `site` property.
   *
   * @decorator `@ReferenceTargets('Contract.site', ['Location',])`
   *
   * @param value - the `site` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.site', [
    'Location',
  ])
  public setSite(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.site = value;
    } else {
      this.site = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `site` array property.
   *
   * @decorator `@ReferenceTargets('Contract.site', ['Location',])`
   *
   * @param value - the `site` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.site', [
    'Location',
  ])
  public addSite(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSite();
      this.site?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `site` property exists and has a value; `false` otherwise
   */
  public hasSite(): boolean {
    return isDefinedList<Reference>(this.site) && this.site.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `site` property
   */
  private initSite(): void {
    if (!this.hasSite()) {
      this.site = [] as Reference[];
    }
  }

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
      const optErrMsg = `Invalid Contract.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Contract.name (${String(value)})`;
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
   * @returns the `title` property value as a StringType object if defined; else an empty StringType object
   */
  public getTitleElement(): StringType {
    return this.title ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `title` property.
   *
   * @param element - the `title` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.title; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.title = element;
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitleElement(): boolean {
    return isDefined<StringType>(this.title) && !this.title.isEmpty();
  }

  /**
   * @returns the `title` property value as a fhirString if defined; else undefined
   */
  public getTitle(): fhirString | undefined {
    return this.title?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `title` property.
   *
   * @param value - the `title` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.title (${String(value)})`;
      this.title = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.title = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `title` property exists and has a value; `false` otherwise
   */
  public hasTitle(): boolean {
    return this.hasTitleElement();
  }

  /**
   * @returns the `subtitle` property value as a StringType object if defined; else an empty StringType object
   */
  public getSubtitleElement(): StringType {
    return this.subtitle ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subtitle` property.
   *
   * @param element - the `subtitle` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubtitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.subtitle; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.subtitle = element;
    } else {
      this.subtitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subtitle` property exists and has a value; `false` otherwise
   */
  public hasSubtitleElement(): boolean {
    return isDefined<StringType>(this.subtitle) && !this.subtitle.isEmpty();
  }

  /**
   * @returns the `subtitle` property value as a fhirString if defined; else undefined
   */
  public getSubtitle(): fhirString | undefined {
    return this.subtitle?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subtitle` property.
   *
   * @param value - the `subtitle` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubtitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.subtitle (${String(value)})`;
      this.subtitle = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.subtitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subtitle` property exists and has a value; `false` otherwise
   */
  public hasSubtitle(): boolean {
    return this.hasSubtitleElement();
  }

  /**
   * @returns the `alias` property value as a StringType array
   */
  public getAliasElement(): StringType[] {
    return this.alias ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `alias` property.
   *
   * @param element - the `alias` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAliasElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.alias; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.alias = element;
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `alias` array property.
   *
   * @param element - the `alias` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAliasElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.alias; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initAlias();
      this.alias?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAliasElement(): boolean {
    return isDefinedList<StringType>(this.alias) && this.alias.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `alias` property value as a fhirString array
   */
  public getAlias(): fhirString[] {
    this.initAlias();
    const aliasValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.alias!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        aliasValues.push(value);
      }
    }
    return aliasValues;
  }

  /**
   * Assigns the provided primitive value array to the `alias` property.
   *
   * @param value - the `alias` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAlias(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const aliasElements = [] as StringType[];
      for (const aliasValue of value) {
        const optErrMsg = `Invalid Contract.alias array item (${String(aliasValue)})`;
        const element = new StringType(parseFhirPrimitiveData(aliasValue, fhirStringSchema, optErrMsg));
        aliasElements.push(element);
      }
      this.alias = aliasElements;
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `alias` array property.
   *
   * @param value - the `alias` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAlias(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.alias array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initAlias();
      this.addAliasElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAlias(): boolean {
    return this.hasAliasElement();
  }

  /**
   * Initialize the `alias` property
   */
  private initAlias(): void {
    if (!this.hasAlias()) {
      this.alias = [] as StringType[];
    }
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
   * @decorator `@ReferenceTargets('Contract.author', ['Patient','Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.author', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
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
   * @returns the `scope` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getScope(): CodeableConcept {
    return this.scope ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Scope object value to the `scope` property.
   *
   * @param value - the `scope` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setScope(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.scope; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.scope = value;
    } else {
      this.scope = undefined;
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
   * @returns the `topic` property value as a DataType object if defined; else undefined
   */
  public getTopic(): IDataType | undefined {
    return this.topic;
  }

  /**
   * Assigns the provided DataType object value to the `topic` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.topic[x]')`
   *
   * @param value - the `topic` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.topic[x]')
  public setTopic(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.topic = value;
    } else {
      this.topic = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopic(): boolean {
    return isDefined<IDataType>(this.topic) && !this.topic.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `topic` property value as a CodeableConcept object if defined; else undefined
   */
  public getTopicCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.topic)) {
      return undefined;
    }
    if (!(this.topic instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.topic[x]: Expected CodeableConcept but encountered ${this.topic.fhirType()}`,
      );
    }
    return this.topic;
  }

  /**
   * @returns `true` if the `topic` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasTopicCodeableConcept(): boolean {
    return this.hasTopic() && this.topic instanceof CodeableConcept;
  }

  /**
   * @returns the `topic` property value as a Reference object if defined; else undefined
   */
  public getTopicReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.topic)) {
      return undefined;
    }
    if (!(this.topic instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.topic[x]: Expected Reference but encountered ${this.topic.fhirType()}`,
      );
    }
    return this.topic;
  }

  /**
   * @returns `true` if the `topic` property exists as a Reference and has a value; `false` otherwise
   */
  public hasTopicReference(): boolean {
    return this.hasTopic() && this.topic instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Contract.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subType` property value as a CodeableConcept array
   */
  public getSubType(): CodeableConcept[] {
    return this.subType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `subType` property.
   *
   * @param value - the `subType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.subType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subType = value;
    } else {
      this.subType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `subType` array property.
   *
   * @param value - the `subType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.subType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSubType();
      this.subType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subType` property exists and has a value; `false` otherwise
   */
  public hasSubType(): boolean {
    return isDefinedList<CodeableConcept>(this.subType) && this.subType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `subType` property
   */
  private initSubType(): void {
    if(!this.hasSubType()) {
      this.subType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `contentDefinition` property value as a ContractContentDefinitionComponent object if defined; else an empty ContractContentDefinitionComponent object
   */
  public getContentDefinition(): ContractContentDefinitionComponent {
    return this.contentDefinition ?? new ContractContentDefinitionComponent();
  }

  /**
   * Assigns the provided ContentDefinition object value to the `contentDefinition` property.
   *
   * @param value - the `contentDefinition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContentDefinition(value: ContractContentDefinitionComponent | undefined): this {
    if (isDefined<ContractContentDefinitionComponent>(value)) {
      const optErrMsg = `Invalid Contract.contentDefinition; Provided element is not an instance of ContractContentDefinitionComponent.`;
      assertFhirType<ContractContentDefinitionComponent>(value, ContractContentDefinitionComponent, optErrMsg);
      this.contentDefinition = value;
    } else {
      this.contentDefinition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentDefinition` property exists and has a value; `false` otherwise
   */
  public hasContentDefinition(): boolean {
    return isDefined<ContractContentDefinitionComponent>(this.contentDefinition) && !this.contentDefinition.isEmpty();
  }

  /**
   * @returns the `term` property value as a ContractTermComponent array
   */
  public getTerm(): ContractTermComponent[] {
    return this.term ?? ([] as ContractTermComponent[]);
  }

  /**
   * Assigns the provided ContractTermComponent array value to the `term` property.
   *
   * @param value - the `term` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTerm(value: ContractTermComponent[] | undefined): this {
    if (isDefinedList<ContractTermComponent>(value)) {
      const optErrMsg = `Invalid Contract.term; Provided value array has an element that is not an instance of ContractTermComponent.`;
      assertFhirTypeList<ContractTermComponent>(value, ContractTermComponent, optErrMsg);
      this.term = value;
    } else {
      this.term = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermComponent value to the `term` array property.
   *
   * @param value - the `term` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTerm(value: ContractTermComponent | undefined): this {
    if (isDefined<ContractTermComponent>(value)) {
      const optErrMsg = `Invalid Contract.term; Provided element is not an instance of ContractTermComponent.`;
      assertFhirType<ContractTermComponent>(value, ContractTermComponent, optErrMsg);
      this.initTerm();
      this.term?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `term` property exists and has a value; `false` otherwise
   */
  public hasTerm(): boolean {
    return isDefinedList<ContractTermComponent>(this.term) && this.term.some((item: ContractTermComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `term` property
   */
  private initTerm(): void {
    if(!this.hasTerm()) {
      this.term = [] as ContractTermComponent[];
    }
  }

  /**
   * @returns the `supportingInfo` property value as a Reference array
   */
  public getSupportingInfo(): Reference[] {
    return this.supportingInfo ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `supportingInfo` property.
   *
   * @decorator `@ReferenceTargets('Contract.supportingInfo', ['Resource',])`
   *
   * @param value - the `supportingInfo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.supportingInfo', [
    'Resource',
  ])
  public setSupportingInfo(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.supportingInfo = value;
    } else {
      this.supportingInfo = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `supportingInfo` array property.
   *
   * @decorator `@ReferenceTargets('Contract.supportingInfo', ['Resource',])`
   *
   * @param value - the `supportingInfo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.supportingInfo', [
    'Resource',
  ])
  public addSupportingInfo(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSupportingInfo();
      this.supportingInfo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportingInfo` property exists and has a value; `false` otherwise
   */
  public hasSupportingInfo(): boolean {
    return isDefinedList<Reference>(this.supportingInfo) && this.supportingInfo.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `supportingInfo` property
   */
  private initSupportingInfo(): void {
    if (!this.hasSupportingInfo()) {
      this.supportingInfo = [] as Reference[];
    }
  }

  /**
   * @returns the `relevantHistory` property value as a Reference array
   */
  public getRelevantHistory(): Reference[] {
    return this.relevantHistory ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `relevantHistory` property.
   *
   * @decorator `@ReferenceTargets('Contract.relevantHistory', ['Provenance',])`
   *
   * @param value - the `relevantHistory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.relevantHistory', [
    'Provenance',
  ])
  public setRelevantHistory(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.relevantHistory = value;
    } else {
      this.relevantHistory = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `relevantHistory` array property.
   *
   * @decorator `@ReferenceTargets('Contract.relevantHistory', ['Provenance',])`
   *
   * @param value - the `relevantHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.relevantHistory', [
    'Provenance',
  ])
  public addRelevantHistory(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRelevantHistory();
      this.relevantHistory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relevantHistory` property exists and has a value; `false` otherwise
   */
  public hasRelevantHistory(): boolean {
    return isDefinedList<Reference>(this.relevantHistory) && this.relevantHistory.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `relevantHistory` property
   */
  private initRelevantHistory(): void {
    if (!this.hasRelevantHistory()) {
      this.relevantHistory = [] as Reference[];
    }
  }

  /**
   * @returns the `signer` property value as a ContractSignerComponent array
   */
  public getSigner(): ContractSignerComponent[] {
    return this.signer ?? ([] as ContractSignerComponent[]);
  }

  /**
   * Assigns the provided ContractSignerComponent array value to the `signer` property.
   *
   * @param value - the `signer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSigner(value: ContractSignerComponent[] | undefined): this {
    if (isDefinedList<ContractSignerComponent>(value)) {
      const optErrMsg = `Invalid Contract.signer; Provided value array has an element that is not an instance of ContractSignerComponent.`;
      assertFhirTypeList<ContractSignerComponent>(value, ContractSignerComponent, optErrMsg);
      this.signer = value;
    } else {
      this.signer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractSignerComponent value to the `signer` array property.
   *
   * @param value - the `signer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSigner(value: ContractSignerComponent | undefined): this {
    if (isDefined<ContractSignerComponent>(value)) {
      const optErrMsg = `Invalid Contract.signer; Provided element is not an instance of ContractSignerComponent.`;
      assertFhirType<ContractSignerComponent>(value, ContractSignerComponent, optErrMsg);
      this.initSigner();
      this.signer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `signer` property exists and has a value; `false` otherwise
   */
  public hasSigner(): boolean {
    return isDefinedList<ContractSignerComponent>(this.signer) && this.signer.some((item: ContractSignerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `signer` property
   */
  private initSigner(): void {
    if(!this.hasSigner()) {
      this.signer = [] as ContractSignerComponent[];
    }
  }

  /**
   * @returns the `friendly` property value as a ContractFriendlyComponent array
   */
  public getFriendly(): ContractFriendlyComponent[] {
    return this.friendly ?? ([] as ContractFriendlyComponent[]);
  }

  /**
   * Assigns the provided ContractFriendlyComponent array value to the `friendly` property.
   *
   * @param value - the `friendly` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFriendly(value: ContractFriendlyComponent[] | undefined): this {
    if (isDefinedList<ContractFriendlyComponent>(value)) {
      const optErrMsg = `Invalid Contract.friendly; Provided value array has an element that is not an instance of ContractFriendlyComponent.`;
      assertFhirTypeList<ContractFriendlyComponent>(value, ContractFriendlyComponent, optErrMsg);
      this.friendly = value;
    } else {
      this.friendly = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractFriendlyComponent value to the `friendly` array property.
   *
   * @param value - the `friendly` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFriendly(value: ContractFriendlyComponent | undefined): this {
    if (isDefined<ContractFriendlyComponent>(value)) {
      const optErrMsg = `Invalid Contract.friendly; Provided element is not an instance of ContractFriendlyComponent.`;
      assertFhirType<ContractFriendlyComponent>(value, ContractFriendlyComponent, optErrMsg);
      this.initFriendly();
      this.friendly?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `friendly` property exists and has a value; `false` otherwise
   */
  public hasFriendly(): boolean {
    return isDefinedList<ContractFriendlyComponent>(this.friendly) && this.friendly.some((item: ContractFriendlyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `friendly` property
   */
  private initFriendly(): void {
    if(!this.hasFriendly()) {
      this.friendly = [] as ContractFriendlyComponent[];
    }
  }

  /**
   * @returns the `legal` property value as a ContractLegalComponent array
   */
  public getLegal(): ContractLegalComponent[] {
    return this.legal ?? ([] as ContractLegalComponent[]);
  }

  /**
   * Assigns the provided ContractLegalComponent array value to the `legal` property.
   *
   * @param value - the `legal` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLegal(value: ContractLegalComponent[] | undefined): this {
    if (isDefinedList<ContractLegalComponent>(value)) {
      const optErrMsg = `Invalid Contract.legal; Provided value array has an element that is not an instance of ContractLegalComponent.`;
      assertFhirTypeList<ContractLegalComponent>(value, ContractLegalComponent, optErrMsg);
      this.legal = value;
    } else {
      this.legal = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractLegalComponent value to the `legal` array property.
   *
   * @param value - the `legal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLegal(value: ContractLegalComponent | undefined): this {
    if (isDefined<ContractLegalComponent>(value)) {
      const optErrMsg = `Invalid Contract.legal; Provided element is not an instance of ContractLegalComponent.`;
      assertFhirType<ContractLegalComponent>(value, ContractLegalComponent, optErrMsg);
      this.initLegal();
      this.legal?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `legal` property exists and has a value; `false` otherwise
   */
  public hasLegal(): boolean {
    return isDefinedList<ContractLegalComponent>(this.legal) && this.legal.some((item: ContractLegalComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `legal` property
   */
  private initLegal(): void {
    if(!this.hasLegal()) {
      this.legal = [] as ContractLegalComponent[];
    }
  }

  /**
   * @returns the `rule` property value as a ContractRuleComponent array
   */
  public getRule(): ContractRuleComponent[] {
    return this.rule ?? ([] as ContractRuleComponent[]);
  }

  /**
   * Assigns the provided ContractRuleComponent array value to the `rule` property.
   *
   * @param value - the `rule` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRule(value: ContractRuleComponent[] | undefined): this {
    if (isDefinedList<ContractRuleComponent>(value)) {
      const optErrMsg = `Invalid Contract.rule; Provided value array has an element that is not an instance of ContractRuleComponent.`;
      assertFhirTypeList<ContractRuleComponent>(value, ContractRuleComponent, optErrMsg);
      this.rule = value;
    } else {
      this.rule = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractRuleComponent value to the `rule` array property.
   *
   * @param value - the `rule` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRule(value: ContractRuleComponent | undefined): this {
    if (isDefined<ContractRuleComponent>(value)) {
      const optErrMsg = `Invalid Contract.rule; Provided element is not an instance of ContractRuleComponent.`;
      assertFhirType<ContractRuleComponent>(value, ContractRuleComponent, optErrMsg);
      this.initRule();
      this.rule?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rule` property exists and has a value; `false` otherwise
   */
  public hasRule(): boolean {
    return isDefinedList<ContractRuleComponent>(this.rule) && this.rule.some((item: ContractRuleComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `rule` property
   */
  private initRule(): void {
    if(!this.hasRule()) {
      this.rule = [] as ContractRuleComponent[];
    }
  }

  /**
   * @returns the `legallyBinding` property value as a DataType object if defined; else undefined
   */
  public getLegallyBinding(): IDataType | undefined {
    return this.legallyBinding;
  }

  /**
   * Assigns the provided DataType object value to the `legallyBinding` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.legallyBinding[x]')`
   *
   * @param value - the `legallyBinding` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.legallyBinding[x]')
  public setLegallyBinding(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.legallyBinding = value;
    } else {
      this.legallyBinding = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `legallyBinding` property exists and has a value; `false` otherwise
   */
  public hasLegallyBinding(): boolean {
    return isDefined<IDataType>(this.legallyBinding) && !this.legallyBinding.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `legallyBinding` property value as a Attachment object if defined; else undefined
   */
  public getLegallyBindingAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.legallyBinding)) {
      return undefined;
    }
    if (!(this.legallyBinding instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.legallyBinding[x]: Expected Attachment but encountered ${this.legallyBinding.fhirType()}`,
      );
    }
    return this.legallyBinding;
  }

  /**
   * @returns `true` if the `legallyBinding` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasLegallyBindingAttachment(): boolean {
    return this.hasLegallyBinding() && this.legallyBinding instanceof Attachment;
  }

  /**
   * @returns the `legallyBinding` property value as a Reference object if defined; else undefined
   */
  public getLegallyBindingReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.legallyBinding)) {
      return undefined;
    }
    if (!(this.legallyBinding instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.legallyBinding[x]: Expected Reference but encountered ${this.legallyBinding.fhirType()}`,
      );
    }
    return this.legallyBinding;
  }

  /**
   * @returns `true` if the `legallyBinding` property exists as a Reference and has a value; `false` otherwise
   */
  public hasLegallyBindingReference(): boolean {
    return this.hasLegallyBinding() && this.legallyBinding instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.url,
      this.version,
      this.status,
      this.legalState,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.contentDerivative,
      this.issued,
      this.applies,
      this.expirationType,
      this.subject,
      this.authority,
      this.domain,
      this.site,
      this.name,
      this.title,
      this.subtitle,
      this.alias,
      this.author,
      this.scope,
      this.topic,
      this.type_,
      this.subType,
      this.contentDefinition,
      this.term,
      this.supportingInfo,
      this.relevantHistory,
      this.signer,
      this.friendly,
      this.legal,
      this.rule,
      this.legallyBinding,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Contract {
    const dest = new Contract();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Contract): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.url = this.url?.copy();
    dest.version = this.version?.copy();
    dest.status = this.status?.copy();
    dest.legalState = this.legalState?.copy();
    dest.instantiatesCanonical = this.instantiatesCanonical?.copy();
    dest.instantiatesUri = this.instantiatesUri?.copy();
    dest.contentDerivative = this.contentDerivative?.copy();
    dest.issued = this.issued?.copy();
    dest.applies = this.applies?.copy();
    dest.expirationType = this.expirationType?.copy();
    const subjectList = copyListValues<Reference>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    const authorityList = copyListValues<Reference>(this.authority);
    dest.authority = authorityList.length === 0 ? undefined : authorityList;
    const domainList = copyListValues<Reference>(this.domain);
    dest.domain = domainList.length === 0 ? undefined : domainList;
    const siteList = copyListValues<Reference>(this.site);
    dest.site = siteList.length === 0 ? undefined : siteList;
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.subtitle = this.subtitle?.copy();
    const aliasList = copyListValues<StringType>(this.alias);
    dest.alias = aliasList.length === 0 ? undefined : aliasList;
    dest.author = this.author?.copy();
    dest.scope = this.scope?.copy();
    dest.topic = this.topic?.copy() as IDataType;
    dest.type_ = this.type_?.copy();
    const subTypeList = copyListValues<CodeableConcept>(this.subType);
    dest.subType = subTypeList.length === 0 ? undefined : subTypeList;
    dest.contentDefinition = this.contentDefinition?.copy();
    const termList = copyListValues<ContractTermComponent>(this.term);
    dest.term = termList.length === 0 ? undefined : termList;
    const supportingInfoList = copyListValues<Reference>(this.supportingInfo);
    dest.supportingInfo = supportingInfoList.length === 0 ? undefined : supportingInfoList;
    const relevantHistoryList = copyListValues<Reference>(this.relevantHistory);
    dest.relevantHistory = relevantHistoryList.length === 0 ? undefined : relevantHistoryList;
    const signerList = copyListValues<ContractSignerComponent>(this.signer);
    dest.signer = signerList.length === 0 ? undefined : signerList;
    const friendlyList = copyListValues<ContractFriendlyComponent>(this.friendly);
    dest.friendly = friendlyList.length === 0 ? undefined : friendlyList;
    const legalList = copyListValues<ContractLegalComponent>(this.legal);
    dest.legal = legalList.length === 0 ? undefined : legalList;
    const ruleList = copyListValues<ContractRuleComponent>(this.rule);
    dest.rule = ruleList.length === 0 ? undefined : ruleList;
    dest.legallyBinding = this.legallyBinding?.copy() as IDataType;
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

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasLegalState()) {
      setFhirComplexJson(this.getLegalState(), 'legalState', jsonObj);
    }

    if (this.hasInstantiatesCanonical()) {
      setFhirComplexJson(this.getInstantiatesCanonical(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasContentDerivative()) {
      setFhirComplexJson(this.getContentDerivative(), 'contentDerivative', jsonObj);
    }

    if (this.hasIssuedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getIssuedElement(), 'issued', jsonObj);
    }

    if (this.hasApplies()) {
      setFhirComplexJson(this.getApplies(), 'applies', jsonObj);
    }

    if (this.hasExpirationType()) {
      setFhirComplexJson(this.getExpirationType(), 'expirationType', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasAuthority()) {
      setFhirComplexListJson(this.getAuthority(), 'authority', jsonObj);
    }

    if (this.hasDomain()) {
      setFhirComplexListJson(this.getDomain(), 'domain', jsonObj);
    }

    if (this.hasSite()) {
      setFhirComplexListJson(this.getSite(), 'site', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasSubtitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSubtitleElement(), 'subtitle', jsonObj);
    }

    if (this.hasAlias()) {
      setFhirPrimitiveListJson(this.getAliasElement(), 'alias', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasScope()) {
      setFhirComplexJson(this.getScope(), 'scope', jsonObj);
    }

    if (this.hasTopic()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTopic()!, 'topic', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubType()) {
      setFhirComplexListJson(this.getSubType(), 'subType', jsonObj);
    }

    if (this.hasContentDefinition()) {
      setFhirBackboneElementJson(this.getContentDefinition(), 'contentDefinition', jsonObj);
    }

    if (this.hasTerm()) {
      setFhirBackboneElementListJson(this.getTerm(), 'term', jsonObj);
    }

    if (this.hasSupportingInfo()) {
      setFhirComplexListJson(this.getSupportingInfo(), 'supportingInfo', jsonObj);
    }

    if (this.hasRelevantHistory()) {
      setFhirComplexListJson(this.getRelevantHistory(), 'relevantHistory', jsonObj);
    }

    if (this.hasSigner()) {
      setFhirBackboneElementListJson(this.getSigner(), 'signer', jsonObj);
    }

    if (this.hasFriendly()) {
      setFhirBackboneElementListJson(this.getFriendly(), 'friendly', jsonObj);
    }

    if (this.hasLegal()) {
      setFhirBackboneElementListJson(this.getLegal(), 'legal', jsonObj);
    }

    if (this.hasRule()) {
      setFhirBackboneElementListJson(this.getRule(), 'rule', jsonObj);
    }

    if (this.hasLegallyBinding()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getLegallyBinding()!, 'legallyBinding', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ContractContentDefinitionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contract precursor content
 * - **Definition:** Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractContentDefinitionComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, publicationStatus: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.contractPublicationstatusEnum = new ContractPublicationstatusEnum();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.publicationStatus = constructorCodeValueAsEnumCodeType<ContractPublicationstatusEnum>(
      publicationStatus,
      ContractPublicationstatusEnum,
      this.contractPublicationstatusEnum,
      'Contract.contentDefinition.publicationStatus',
    );
  }

  /**
   * Parse the provided `ContractContentDefinitionComponent` JSON to instantiate the ContractContentDefinitionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractContentDefinitionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractContentDefinitionComponent
   * @returns ContractContentDefinitionComponent data model or undefined for `ContractContentDefinitionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractContentDefinitionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractContentDefinitionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractContentDefinitionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'subType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubType(datatype);
    }

    fieldName = 'publisher';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPublisher(datatype);
    }

    fieldName = 'publicationDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPublicationDateElement(datatype);
    }

    fieldName = 'publicationStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setPublicationStatus(null);
      } else {
        instance.setPublicationStatusElement(datatype);
      }
    } else {
      instance.setPublicationStatus(null);
    }

    fieldName = 'copyright';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCopyrightElement(datatype);
    }

    return instance;
  }

  /**
   * Contract.contentDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content structure and use
   * - **Definition:** Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Contract.contentDefinition.subType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detailed Content Type Definition
   * - **Definition:** Detailed Precusory content type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subType?: CodeableConcept | undefined;

  /**
   * Contract.contentDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Publisher Entity
   * - **Definition:** The  individual or organization that published the Contract precursor content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publisher?: Reference | undefined;

  /**
   * Contract.contentDefinition.publicationDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When published
   * - **Definition:** The date (and optionally time) when the contract was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private publicationDate?: DateTimeType | undefined;

  /**
   * FHIR CodeSystem: ContractPublicationstatus
   *
   * @see {@link ContractPublicationstatusEnum }
   */
  private readonly contractPublicationstatusEnum: ContractPublicationstatusEnum;

  /**
   * Contract.contentDefinition.publicationStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** amended | appended | cancelled | disputed | entered-in-error | executable +
   * - **Definition:** amended | appended | cancelled | disputed | entered-in-error | executable +.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ContractPublicationstatusEnum }
   */
  private publicationStatus: EnumCodeType | null;

  /**
   * Contract.contentDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Publication Ownership
   * - **Definition:** A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

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
      const optErrMsg = `Invalid Contract.contentDefinition.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubType(): CodeableConcept {
    return this.subType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SubType object value to the `subType` property.
   *
   * @param value - the `subType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.contentDefinition.subType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subType = value;
    } else {
      this.subType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subType` property exists and has a value; `false` otherwise
   */
  public hasSubType(): boolean {
    return isDefined<CodeableConcept>(this.subType) && !this.subType.isEmpty();
  }

  /**
   * @returns the `publisher` property value as a Reference object; else an empty Reference object
   */
  public getPublisher(): Reference {
    return this.publisher ?? new Reference();
  }

  /**
   * Assigns the provided Publisher object value to the `publisher` property.
   *
   * @decorator `@ReferenceTargets('Contract.contentDefinition.publisher', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `publisher` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.contentDefinition.publisher', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setPublisher(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.publisher = value;
    } else {
      this.publisher = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisher` property exists and has a value; `false` otherwise
   */
  public hasPublisher(): boolean {
    return isDefined<Reference>(this.publisher) && !this.publisher.isEmpty();
  }

  /**
   * @returns the `publicationDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPublicationDateElement(): DateTimeType {
    return this.publicationDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `publicationDate` property.
   *
   * @param element - the `publicationDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublicationDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Contract.contentDefinition.publicationDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.publicationDate = element;
    } else {
      this.publicationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationDate` property exists and has a value; `false` otherwise
   */
  public hasPublicationDateElement(): boolean {
    return isDefined<DateTimeType>(this.publicationDate) && !this.publicationDate.isEmpty();
  }

  /**
   * @returns the `publicationDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPublicationDate(): fhirDateTime | undefined {
    return this.publicationDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `publicationDate` property.
   *
   * @param value - the `publicationDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublicationDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Contract.contentDefinition.publicationDate (${String(value)})`;
      this.publicationDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.publicationDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationDate` property exists and has a value; `false` otherwise
   */
  public hasPublicationDate(): boolean {
    return this.hasPublicationDateElement();
  }

  /**
   * @returns the `publicationStatus` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ContractPublicationstatusEnum }
   */
  public getPublicationStatusEnumType(): EnumCodeType | null {
    return this.publicationStatus;
  }

  /**
   * Assigns the provided EnumCodeType value to the `publicationStatus` property.
   *
   * @param enumType - the `publicationStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ContractPublicationstatusEnum }
   */
  public setPublicationStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Contract.contentDefinition.publicationStatus`;
      assertEnumCodeType<ContractPublicationstatusEnum>(enumType, ContractPublicationstatusEnum, errMsgPrefix);
      this.publicationStatus = enumType;
    } else {
      this.publicationStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationStatus` property exists and has a value; `false` otherwise
   */
  public hasPublicationStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.publicationStatus) && !this.publicationStatus.isEmpty() && this.publicationStatus.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `publicationStatus` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ContractPublicationstatusEnum }
   */
  public getPublicationStatusElement(): CodeType | null {
    if (this.publicationStatus === null) {
      return null;
    }
    return this.publicationStatus as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `publicationStatus` property.
   *
   * @param element - the `publicationStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ContractPublicationstatusEnum }
   */
  public setPublicationStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Contract.contentDefinition.publicationStatus; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.publicationStatus = new EnumCodeType(element, this.contractPublicationstatusEnum);
    } else {
      this.publicationStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationStatus` property exists and has a value; `false` otherwise
   */
  public hasPublicationStatusElement(): boolean {
    return this.hasPublicationStatusEnumType();
  }

  /**
   * @returns the `publicationStatus` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ContractPublicationstatusEnum }
   */
  public getPublicationStatus(): fhirCode | null {
    if (this.publicationStatus === null) {
      return null;
    }
    return this.publicationStatus.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `publicationStatus` property.
   *
   * @param value - the `publicationStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ContractPublicationstatusEnum }
   */
  public setPublicationStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Contract.contentDefinition.publicationStatus (${String(value)})`;
      this.publicationStatus = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.contractPublicationstatusEnum);
    } else {
      this.publicationStatus = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `publicationStatus` property exists and has a value; `false` otherwise
   */
  public hasPublicationStatus(): boolean {
    return this.hasPublicationStatusEnumType();
  }

  /**
   * @returns the `copyright` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getCopyrightElement(): MarkdownType {
    return this.copyright ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `copyright` property.
   *
   * @param element - the `copyright` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Contract.contentDefinition.copyright; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.copyright = element;
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyrightElement(): boolean {
    return isDefined<MarkdownType>(this.copyright) && !this.copyright.isEmpty();
  }

  /**
   * @returns the `copyright` property value as a fhirMarkdown if defined; else undefined
   */
  public getCopyright(): fhirMarkdown | undefined {
    return this.copyright?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `copyright` property.
   *
   * @param value - the `copyright` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyright(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Contract.contentDefinition.copyright (${String(value)})`;
      this.copyright = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.copyright = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyright` property exists and has a value; `false` otherwise
   */
  public hasCopyright(): boolean {
    return this.hasCopyrightElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.contentDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.subType,
      this.publisher,
      this.publicationDate,
      this.publicationStatus,
      this.copyright,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.publicationStatus, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractContentDefinitionComponent {
    const dest = new ContractContentDefinitionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractContentDefinitionComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.subType = this.subType?.copy();
    dest.publisher = this.publisher?.copy();
    dest.publicationDate = this.publicationDate?.copy();
    dest.publicationStatus = this.publicationStatus ? this.publicationStatus.copy() : null;
    dest.copyright = this.copyright?.copy();
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

    if (this.hasSubType()) {
      setFhirComplexJson(this.getSubType(), 'subType', jsonObj);
    }

    if (this.hasPublisher()) {
      setFhirComplexJson(this.getPublisher(), 'publisher', jsonObj);
    }

    if (this.hasPublicationDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPublicationDateElement(), 'publicationDate', jsonObj);
    }

    if (this.hasPublicationStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPublicationStatusElement()!, 'publicationStatus', jsonObj);
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contract Term List
 * - **Definition:** One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermComponent extends BackboneElement implements IBackboneElement {
  constructor(offer: ContractTermOfferComponent | null = null) {
    super();

    this.offer = null;
    if (isDefined<ContractTermOfferComponent>(offer)) {
      this.setOffer(offer);
    }
  }

  /**
   * Parse the provided `ContractTermComponent` JSON to instantiate the ContractTermComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermComponent
   * @returns ContractTermComponent data model or undefined for `ContractTermComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ContractTermComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ContractTermComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'issued';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setIssuedElement(datatype);
    }

    fieldName = 'applies';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setApplies(datatype);
    }

    fieldName = 'topic[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const topic: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTopic(topic);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'subType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubType(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    fieldName = 'securityLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermSecurityLabelComponent | undefined = ContractTermSecurityLabelComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSecurityLabel(component);
          }
        });
      }
    }

    fieldName = 'offer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ContractTermOfferComponent | undefined = ContractTermOfferComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setOffer(null);
      } else {
        instance.setOffer(component);
      }
    } else {
      instance.setOffer(null);
    }

    fieldName = 'asset';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermAssetComponent | undefined = ContractTermAssetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAsset(component);
          }
        });
      }
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermActionComponent | undefined = ContractTermActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAction(component);
          }
        });
      }
    }

    fieldName = 'group';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermComponent | undefined = ContractTermComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addGroup(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Contract.term.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Term Number
   * - **Definition:** Unique identifier for this particular Contract Provision.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * Contract.term.issued Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Term Issue Date Time
   * - **Definition:** When this Contract Provision was issued.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issued?: DateTimeType | undefined;

  /**
   * Contract.term.applies Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Term Effective Time
   * - **Definition:** Relevant time or time-period when this Contract Provision is applicable.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private applies?: Period | undefined;

  /**
   * Contract.term.topic[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.term.topic[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Term Concern
   * - **Definition:** The entity that the term applies to.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.term.topic[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private topic?: IDataType | undefined;

  /**
   * Contract.term.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Term Type or Form
   * - **Definition:** A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Contract.term.subType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Term Type specific classification
   * - **Definition:** A specialized legal clause or condition based on overarching contract type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subType?: CodeableConcept | undefined;

  /**
   * Contract.term.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Term Statement
   * - **Definition:** Statement of a provision in a policy or a contract.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private text?: StringType | undefined;

  /**
   * Contract.term.securityLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Protection for the Term
   * - **Definition:** Security labels that protect the handling of information about the term and its elements, which may be specifically identified.
   * - **Comment:** Within a Contract, a security label may apply to the one to many nested group of terms or to a term, whether inside a group or a singleton.  The security label on the entire set of term provision elements may be different from the security labels on a contained offer, asset, valuedItem, or data such as sensitive information, and must be the high water mark of all security labels within the term. Rationale is that a labelled term, which may be disaggregated from the Contract, and must persist the label on the term and on contained elements within other contexts. If more than one policy dictates a level of confidentiality of the term, then each applicable policy may be represented by a security label specific to its requirements. A Security Label is comprised of 1..1 confidentiality code and 0..* other security label codes (aka "privacy tags". A Security Label is metadata assigned (aka "tagged") to Resources and Resource elements, which specify the confidentiality and sensitivity of the Resource or element and their related attributes, the purposes for which tagged items may be collected, access, used or disclosed, any limitation on the type of entities authorized to engage in permitted purposes, and handling instructions that obligate or prohibit certain actions on the tagged items.
   * - **Requirements:** This security label protects the term and its contained provision elements.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private securityLabel?: ContractTermSecurityLabelComponent[] | undefined;

  /**
   * Contract.term.offer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context of the Contract term
   * - **Definition:** The matter of concern in the context of this provision of the agrement.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private offer: ContractTermOfferComponent | null;

  /**
   * Contract.term.asset Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Term Asset List
   * - **Definition:** Contract Term Asset List.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private asset?: ContractTermAssetComponent[] | undefined;

  /**
   * Contract.term.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity being ascribed responsibility
   * - **Definition:** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.
   * - **Comment:** Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa. For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
   * - **Requirements:** An agent can be a person, an organization, software, device, or other entities that may be ascribed responsibility.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action?: ContractTermActionComponent[] | undefined;

  /**
   * Contract.term.group Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested Contract Term Group
   * - **Definition:** Nested group of Contract Provisions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private group?: ContractTermComponent[] | undefined;

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
      const optErrMsg = `Invalid Contract.term.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `issued` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getIssuedElement(): DateTimeType {
    return this.issued ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `issued` property.
   *
   * @param element - the `issued` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Contract.term.issued; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.issued = element;
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssuedElement(): boolean {
    return isDefined<DateTimeType>(this.issued) && !this.issued.isEmpty();
  }

  /**
   * @returns the `issued` property value as a fhirDateTime if defined; else undefined
   */
  public getIssued(): fhirDateTime | undefined {
    return this.issued?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `issued` property.
   *
   * @param value - the `issued` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssued(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Contract.term.issued (${String(value)})`;
      this.issued = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssued(): boolean {
    return this.hasIssuedElement();
  }

  /**
   * @returns the `applies` property value as a Period object if defined; else an empty Period object
   */
  public getApplies(): Period {
    return this.applies ?? new Period();
  }

  /**
   * Assigns the provided Applies object value to the `applies` property.
   *
   * @param value - the `applies` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setApplies(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Contract.term.applies; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.applies = value;
    } else {
      this.applies = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `applies` property exists and has a value; `false` otherwise
   */
  public hasApplies(): boolean {
    return isDefined<Period>(this.applies) && !this.applies.isEmpty();
  }

  /**
   * @returns the `topic` property value as a DataType object if defined; else undefined
   */
  public getTopic(): IDataType | undefined {
    return this.topic;
  }

  /**
   * Assigns the provided DataType object value to the `topic` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.term.topic[x]')`
   *
   * @param value - the `topic` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.term.topic[x]')
  public setTopic(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.topic = value;
    } else {
      this.topic = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopic(): boolean {
    return isDefined<IDataType>(this.topic) && !this.topic.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `topic` property value as a CodeableConcept object if defined; else undefined
   */
  public getTopicCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.topic)) {
      return undefined;
    }
    if (!(this.topic instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.topic[x]: Expected CodeableConcept but encountered ${this.topic.fhirType()}`,
      );
    }
    return this.topic;
  }

  /**
   * @returns `true` if the `topic` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasTopicCodeableConcept(): boolean {
    return this.hasTopic() && this.topic instanceof CodeableConcept;
  }

  /**
   * @returns the `topic` property value as a Reference object if defined; else undefined
   */
  public getTopicReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.topic)) {
      return undefined;
    }
    if (!(this.topic instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.topic[x]: Expected Reference but encountered ${this.topic.fhirType()}`,
      );
    }
    return this.topic;
  }

  /**
   * @returns `true` if the `topic` property exists as a Reference and has a value; `false` otherwise
   */
  public hasTopicReference(): boolean {
    return this.hasTopic() && this.topic instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Contract.term.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubType(): CodeableConcept {
    return this.subType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SubType object value to the `subType` property.
   *
   * @param value - the `subType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.subType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subType = value;
    } else {
      this.subType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subType` property exists and has a value; `false` otherwise
   */
  public hasSubType(): boolean {
    return isDefined<CodeableConcept>(this.subType) && !this.subType.isEmpty();
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `securityLabel` property value as a ContractTermSecurityLabelComponent array
   */
  public getSecurityLabel(): ContractTermSecurityLabelComponent[] {
    return this.securityLabel ?? ([] as ContractTermSecurityLabelComponent[]);
  }

  /**
   * Assigns the provided ContractTermSecurityLabelComponent array value to the `securityLabel` property.
   *
   * @param value - the `securityLabel` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurityLabel(value: ContractTermSecurityLabelComponent[] | undefined): this {
    if (isDefinedList<ContractTermSecurityLabelComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel; Provided value array has an element that is not an instance of ContractTermSecurityLabelComponent.`;
      assertFhirTypeList<ContractTermSecurityLabelComponent>(value, ContractTermSecurityLabelComponent, optErrMsg);
      this.securityLabel = value;
    } else {
      this.securityLabel = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermSecurityLabelComponent value to the `securityLabel` array property.
   *
   * @param value - the `securityLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSecurityLabel(value: ContractTermSecurityLabelComponent | undefined): this {
    if (isDefined<ContractTermSecurityLabelComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel; Provided element is not an instance of ContractTermSecurityLabelComponent.`;
      assertFhirType<ContractTermSecurityLabelComponent>(value, ContractTermSecurityLabelComponent, optErrMsg);
      this.initSecurityLabel();
      this.securityLabel?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabel` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabel(): boolean {
    return isDefinedList<ContractTermSecurityLabelComponent>(this.securityLabel) && this.securityLabel.some((item: ContractTermSecurityLabelComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `securityLabel` property
   */
  private initSecurityLabel(): void {
    if(!this.hasSecurityLabel()) {
      this.securityLabel = [] as ContractTermSecurityLabelComponent[];
    }
  }

  /**
   * @returns the `offer` property value as a ContractTermOfferComponent object if defined; else an empty ContractTermOfferComponent object
   */
  public getOffer(): ContractTermOfferComponent {
    return this.offer ?? new ContractTermOfferComponent();
  }

  /**
   * Assigns the provided ContractTermOfferComponent object value to the `offer` property.
   *
   * @param value - the `offer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOffer(value: ContractTermOfferComponent | undefined | null): this {
    if (isDefined<ContractTermOfferComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.offer; Provided element is not an instance of ContractTermOfferComponent.`;
      assertFhirType<ContractTermOfferComponent>(value, ContractTermOfferComponent, optErrMsg);
      this.offer = value;
    } else {
      this.offer = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `offer` property exists and has a value; `false` otherwise
   */
  public hasOffer(): boolean {
    return isDefined<ContractTermOfferComponent>(this.offer) && !this.offer.isEmpty();
  }

  /**
   * @returns the `asset` property value as a ContractTermAssetComponent array
   */
  public getAsset(): ContractTermAssetComponent[] {
    return this.asset ?? ([] as ContractTermAssetComponent[]);
  }

  /**
   * Assigns the provided ContractTermAssetComponent array value to the `asset` property.
   *
   * @param value - the `asset` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAsset(value: ContractTermAssetComponent[] | undefined): this {
    if (isDefinedList<ContractTermAssetComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset; Provided value array has an element that is not an instance of ContractTermAssetComponent.`;
      assertFhirTypeList<ContractTermAssetComponent>(value, ContractTermAssetComponent, optErrMsg);
      this.asset = value;
    } else {
      this.asset = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermAssetComponent value to the `asset` array property.
   *
   * @param value - the `asset` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAsset(value: ContractTermAssetComponent | undefined): this {
    if (isDefined<ContractTermAssetComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset; Provided element is not an instance of ContractTermAssetComponent.`;
      assertFhirType<ContractTermAssetComponent>(value, ContractTermAssetComponent, optErrMsg);
      this.initAsset();
      this.asset?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `asset` property exists and has a value; `false` otherwise
   */
  public hasAsset(): boolean {
    return isDefinedList<ContractTermAssetComponent>(this.asset) && this.asset.some((item: ContractTermAssetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `asset` property
   */
  private initAsset(): void {
    if(!this.hasAsset()) {
      this.asset = [] as ContractTermAssetComponent[];
    }
  }

  /**
   * @returns the `action` property value as a ContractTermActionComponent array
   */
  public getAction(): ContractTermActionComponent[] {
    return this.action ?? ([] as ContractTermActionComponent[]);
  }

  /**
   * Assigns the provided ContractTermActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: ContractTermActionComponent[] | undefined): this {
    if (isDefinedList<ContractTermActionComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.action; Provided value array has an element that is not an instance of ContractTermActionComponent.`;
      assertFhirTypeList<ContractTermActionComponent>(value, ContractTermActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: ContractTermActionComponent | undefined): this {
    if (isDefined<ContractTermActionComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.action; Provided element is not an instance of ContractTermActionComponent.`;
      assertFhirType<ContractTermActionComponent>(value, ContractTermActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<ContractTermActionComponent>(this.action) && this.action.some((item: ContractTermActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as ContractTermActionComponent[];
    }
  }

  /**
   * @returns the `group` property value as a ContractTermComponent array
   */
  public getGroup(): ContractTermComponent[] {
    return this.group ?? ([] as ContractTermComponent[]);
  }

  /**
   * Assigns the provided ContractTermComponent array value to the `group` property.
   *
   * @param value - the `group` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroup(value: ContractTermComponent[] | undefined): this {
    if (isDefinedList<ContractTermComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.group; Provided value array has an element that is not an instance of ContractTermComponent.`;
      assertFhirTypeList<ContractTermComponent>(value, ContractTermComponent, optErrMsg);
      this.group = value;
    } else {
      this.group = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermComponent value to the `group` array property.
   *
   * @param value - the `group` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGroup(value: ContractTermComponent | undefined): this {
    if (isDefined<ContractTermComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.group; Provided element is not an instance of ContractTermComponent.`;
      assertFhirType<ContractTermComponent>(value, ContractTermComponent, optErrMsg);
      this.initGroup();
      this.group?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `group` property exists and has a value; `false` otherwise
   */
  public hasGroup(): boolean {
    return isDefinedList<ContractTermComponent>(this.group) && this.group.some((item: ContractTermComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `group` property
   */
  private initGroup(): void {
    if(!this.hasGroup()) {
      this.group = [] as ContractTermComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.issued,
      this.applies,
      this.topic,
      this.type_,
      this.subType,
      this.text,
      this.securityLabel,
      this.offer,
      this.asset,
      this.action,
      this.group,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.offer, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermComponent {
    const dest = new ContractTermComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.issued = this.issued?.copy();
    dest.applies = this.applies?.copy();
    dest.topic = this.topic?.copy() as IDataType;
    dest.type_ = this.type_?.copy();
    dest.subType = this.subType?.copy();
    dest.text = this.text?.copy();
    const securityLabelList = copyListValues<ContractTermSecurityLabelComponent>(this.securityLabel);
    dest.securityLabel = securityLabelList.length === 0 ? undefined : securityLabelList;
    dest.offer = this.offer ? this.offer.copy() : null;
    const assetList = copyListValues<ContractTermAssetComponent>(this.asset);
    dest.asset = assetList.length === 0 ? undefined : assetList;
    const actionList = copyListValues<ContractTermActionComponent>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
    const groupList = copyListValues<ContractTermComponent>(this.group);
    dest.group = groupList.length === 0 ? undefined : groupList;
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

    if (this.hasIssuedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getIssuedElement(), 'issued', jsonObj);
    }

    if (this.hasApplies()) {
      setFhirComplexJson(this.getApplies(), 'applies', jsonObj);
    }

    if (this.hasTopic()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTopic()!, 'topic', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubType()) {
      setFhirComplexJson(this.getSubType(), 'subType', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    if (this.hasSecurityLabel()) {
      setFhirBackboneElementListJson(this.getSecurityLabel(), 'securityLabel', jsonObj);
    }

    if (this.hasOffer()) {
      setFhirBackboneElementJson(this.getOffer(), 'offer', jsonObj);
    }

    if (this.hasAsset()) {
      setFhirBackboneElementListJson(this.getAsset(), 'asset', jsonObj);
    }

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    }

    if (this.hasGroup()) {
      setFhirBackboneElementListJson(this.getGroup(), 'group', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermSecurityLabelComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Protection for the Term
 * - **Definition:** Security labels that protect the handling of information about the term and its elements, which may be specifically identified.
 * - **Comment:** Within a Contract, a security label may apply to the one to many nested group of terms or to a term, whether inside a group or a singleton.  The security label on the entire set of term provision elements may be different from the security labels on a contained offer, asset, valuedItem, or data such as sensitive information, and must be the high water mark of all security labels within the term. Rationale is that a labelled term, which may be disaggregated from the Contract, and must persist the label on the term and on contained elements within other contexts. If more than one policy dictates a level of confidentiality of the term, then each applicable policy may be represented by a security label specific to its requirements. A Security Label is comprised of 1..1 confidentiality code and 0..* other security label codes (aka "privacy tags". A Security Label is metadata assigned (aka "tagged") to Resources and Resource elements, which specify the confidentiality and sensitivity of the Resource or element and their related attributes, the purposes for which tagged items may be collected, access, used or disclosed, any limitation on the type of entities authorized to engage in permitted purposes, and handling instructions that obligate or prohibit certain actions on the tagged items.
 * - **Requirements:** This security label protects the term and its contained provision elements.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermSecurityLabelComponent extends BackboneElement implements IBackboneElement {
  constructor(classification: Coding | null = null) {
    super();

    this.classification = null;
    if (isDefined<Coding>(classification)) {
      this.setClassification(classification);
    }
  }

  /**
   * Parse the provided `ContractTermSecurityLabelComponent` JSON to instantiate the ContractTermSecurityLabelComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermSecurityLabelComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermSecurityLabelComponent
   * @returns ContractTermSecurityLabelComponent data model or undefined for `ContractTermSecurityLabelComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermSecurityLabelComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermSecurityLabelComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermSecurityLabelComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'number';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addNumberElement(datatype);
          }
        });
      }
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setClassification(null);
      } else {
        instance.setClassification(datatype);
      }
    } else {
      instance.setClassification(null);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCategory(datatype);
          }
        });
      }
    }

    fieldName = 'control';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addControl(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Contract.term.securityLabel.number Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to Security Labels
   * - **Definition:** Number used to link this term or term element to the applicable Security Label.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private number?: UnsignedIntType[] | undefined;

  /**
   * Contract.term.securityLabel.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Confidentiality Protection
   * - **Definition:** Security label privacy tag that specifies the level of confidentiality protection required for this term and/or term elements.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classification: Coding | null;

  /**
   * Contract.term.securityLabel.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable Policy
   * - **Definition:** Security label privacy tag that specifies the applicable privacy and security policies governing this term and/or term elements.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: Coding[] | undefined;

  /**
   * Contract.term.securityLabel.control Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Handling Instructions
   * - **Definition:** Security label privacy tag that specifies the manner in which term and/or term elements are to be protected.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private control?: Coding[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `number` property value as a UnsignedIntType array
   */
  public getNumberElement(): UnsignedIntType[] {
    return this.number ?? ([] as UnsignedIntType[]);
  }

  /**
   * Assigns the provided UnsignedIntType array value to the `number` property.
   *
   * @param element - the `number` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberElement(element: UnsignedIntType[] | undefined): this {
    if (isDefinedList<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.number; Provided value array has an element that is not an instance of UnsignedIntType.`;
      assertFhirTypeList<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.number = element;
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * Add the provided UnsignedIntType value to the `number` array property.
   *
   * @param element - the `number` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.number; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.initNumber();
      this.number?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumberElement(): boolean {
    return isDefinedList<UnsignedIntType>(this.number) && this.number.some((item: UnsignedIntType) => !item.isEmpty());
  }

  /**
   * @returns the `number` property value as a fhirUnsignedInt array
   */
  public getNumber(): fhirUnsignedInt[] {
    this.initNumber();
    const numberValues = [] as fhirUnsignedInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.number!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        numberValues.push(value);
      }
    }
    return numberValues;
  }

  /**
   * Assigns the provided primitive value array to the `number` property.
   *
   * @param value - the `number` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumber(value: fhirUnsignedInt[] | undefined): this {
    if (isDefinedList<fhirUnsignedInt>(value)) {
      const numberElements = [] as UnsignedIntType[];
      for (const numberValue of value) {
        const optErrMsg = `Invalid Contract.term.securityLabel.number array item (${String(numberValue)})`;
        const element = new UnsignedIntType(parseFhirPrimitiveData(numberValue, fhirUnsignedIntSchema, optErrMsg));
        numberElements.push(element);
      }
      this.number = numberElements;
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `number` array property.
   *
   * @param value - the `number` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.number array item (${String(value)})`;
      const element = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
      this.initNumber();
      this.addNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumber(): boolean {
    return this.hasNumberElement();
  }

  /**
   * Initialize the `number` property
   */
  private initNumber(): void {
    if (!this.hasNumber()) {
      this.number = [] as UnsignedIntType[];
    }
  }

  /**
   * @returns the `classification` property value as a Coding object if defined; else an empty Coding object
   */
  public getClassification(): Coding {
    return this.classification ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `classification` property.
   *
   * @param value - the `classification` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.classification; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.classification = value;
    } else {
      this.classification = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefined<Coding>(this.classification) && !this.classification.isEmpty();
  }

  /**
   * @returns the `category` property value as a Coding array
   */
  public getCategory(): Coding[] {
    return this.category ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.category; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.category; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<Coding>(this.category) && this.category.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as Coding[];
    }
  }

  /**
   * @returns the `control` property value as a Coding array
   */
  public getControl(): Coding[] {
    return this.control ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `control` property.
   *
   * @param value - the `control` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setControl(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.control; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.control = value;
    } else {
      this.control = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `control` array property.
   *
   * @param value - the `control` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addControl(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Contract.term.securityLabel.control; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initControl();
      this.control?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `control` property exists and has a value; `false` otherwise
   */
  public hasControl(): boolean {
    return isDefinedList<Coding>(this.control) && this.control.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `control` property
   */
  private initControl(): void {
    if(!this.hasControl()) {
      this.control = [] as Coding[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.securityLabel';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.number,
      this.classification,
      this.category,
      this.control,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.classification, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermSecurityLabelComponent {
    const dest = new ContractTermSecurityLabelComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermSecurityLabelComponent): void {
    super.copyValues(dest);
    const numberList = copyListValues<UnsignedIntType>(this.number);
    dest.number = numberList.length === 0 ? undefined : numberList;
    dest.classification = this.classification ? this.classification.copy() : null;
    const categoryList = copyListValues<Coding>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    const controlList = copyListValues<Coding>(this.control);
    dest.control = controlList.length === 0 ? undefined : controlList;
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

    if (this.hasNumber()) {
      setFhirPrimitiveListJson(this.getNumberElement(), 'number', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirComplexJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasControl()) {
      setFhirComplexListJson(this.getControl(), 'control', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermOfferComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Context of the Contract term
 * - **Definition:** The matter of concern in the context of this provision of the agrement.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermOfferComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ContractTermOfferComponent` JSON to instantiate the ContractTermOfferComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermOfferComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermOfferComponent
   * @returns ContractTermOfferComponent data model or undefined for `ContractTermOfferComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermOfferComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermOfferComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermOfferComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

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

    fieldName = 'party';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermOfferPartyComponent | undefined = ContractTermOfferPartyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addParty(component);
          }
        });
      }
    }

    fieldName = 'topic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTopic(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'decision';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDecision(datatype);
    }

    fieldName = 'decisionMode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDecisionMode(datatype);
          }
        });
      }
    }

    fieldName = 'answer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermOfferAnswerComponent | undefined = ContractTermOfferAnswerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAnswer(component);
          }
        });
      }
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    fieldName = 'linkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addLinkIdElement(datatype);
          }
        });
      }
    }

    fieldName = 'securityLabelNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addSecurityLabelNumberElement(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Contract.term.offer.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Offer business ID
   * - **Definition:** Unique identifier for this particular Contract Provision.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Contract.term.offer.party Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Offer Recipient
   * - **Definition:** Offer Recipient.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private party?: ContractTermOfferPartyComponent[] | undefined;

  /**
   * Contract.term.offer.topic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Negotiable offer asset
   * - **Definition:** The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).
   * - **Comment:** The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.  The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the "binding" or as the "friendly" electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.  However, the Contract Resource may be considered the legally binding contract if it is the only "executed" form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a "legal" form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource. If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the "legal" basis for the application to ensure "informed consent" to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
   * - **Requirements:** In the context of a contract, the topic is the matter under consideration in regards to which specific rights, privileges, obligations, restrictions, and prohibitions are binding on any grantor and grantee parties upon the execution of the contract.  Given the wide range of contract topics, implementers need to be cognizant of the business use case for which they are designing a FHIR Contract, and narrowly specify the topic being represented with respect to the Contract.type and any specializing Contract.subtype.  The same topic, e.g., an asset such as a good or service, such as a real property, medical supply, insurance, information, a procedure or employment, or a manner of conduct, such adherence to a privacy, trust, or security policy, may be the topic of multiple types of contracts.  One way to determine the Contract.topic is to answer the question: "What is the object of negotiation?" Answer: The Contract.topic, which may be described with more detail in the [0..*]Contract.valuedItem @ [0..1] Contract.valuedItem.entity[x] Definition: Specific type of Contract Valued Item that may be priced. CodeableConcept|Reference(Any) Contract.topic is "the what" that a grantor is exchanging with a grantee in return for some benefit.  Contract.topic is "the what" to which any Contract.action is being applied for any stipulated Contract.action.reason.  AContract.topic is "the what" governed by the execution of the contract to which any party\'s rights, privileges, obligations, restrictions, and prohibitions apply.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private topic?: Reference | undefined;

  /**
   * Contract.term.offer.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Offer Type or Form
   * - **Definition:** Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Contract.term.offer.decision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Accepting party choice
   * - **Definition:** Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
   * - **Requirements:** In some policy or contract contexts, the "offer" is made by an offeror wishing to be the "grantee" of the offer topic by the grantor.  From this perspective, the grantor is the "offeree".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private decision?: CodeableConcept | undefined;

  /**
   * Contract.term.offer.decisionMode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How decision is conveyed
   * - **Definition:** How the decision about a Contract was conveyed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private decisionMode?: CodeableConcept[] | undefined;

  /**
   * Contract.term.offer.answer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response to offer text
   * - **Definition:** Response to offer text.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private answer?: ContractTermOfferAnswerComponent[] | undefined;

  /**
   * Contract.term.offer.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human readable offer text
   * - **Definition:** Human readable form of this Contract Offer.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /**
   * Contract.term.offer.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to text
   * - **Definition:** The id of the clause or question text of the offer in the referenced questionnaire/response.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType[] | undefined;

  /**
   * Contract.term.offer.securityLabelNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Offer restriction numbers
   * - **Definition:** Security labels that protects the offer.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private securityLabelNumber?: UnsignedIntType[] | undefined;

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
      const optErrMsg = `Invalid Contract.term.offer.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Contract.term.offer.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `party` property value as a ContractTermOfferPartyComponent array
   */
  public getParty(): ContractTermOfferPartyComponent[] {
    return this.party ?? ([] as ContractTermOfferPartyComponent[]);
  }

  /**
   * Assigns the provided ContractTermOfferPartyComponent array value to the `party` property.
   *
   * @param value - the `party` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParty(value: ContractTermOfferPartyComponent[] | undefined): this {
    if (isDefinedList<ContractTermOfferPartyComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.party; Provided value array has an element that is not an instance of ContractTermOfferPartyComponent.`;
      assertFhirTypeList<ContractTermOfferPartyComponent>(value, ContractTermOfferPartyComponent, optErrMsg);
      this.party = value;
    } else {
      this.party = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermOfferPartyComponent value to the `party` array property.
   *
   * @param value - the `party` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParty(value: ContractTermOfferPartyComponent | undefined): this {
    if (isDefined<ContractTermOfferPartyComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.party; Provided element is not an instance of ContractTermOfferPartyComponent.`;
      assertFhirType<ContractTermOfferPartyComponent>(value, ContractTermOfferPartyComponent, optErrMsg);
      this.initParty();
      this.party?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `party` property exists and has a value; `false` otherwise
   */
  public hasParty(): boolean {
    return isDefinedList<ContractTermOfferPartyComponent>(this.party) && this.party.some((item: ContractTermOfferPartyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `party` property
   */
  private initParty(): void {
    if(!this.hasParty()) {
      this.party = [] as ContractTermOfferPartyComponent[];
    }
  }

  /**
   * @returns the `topic` property value as a Reference object; else an empty Reference object
   */
  public getTopic(): Reference {
    return this.topic ?? new Reference();
  }

  /**
   * Assigns the provided Topic object value to the `topic` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.offer.topic', ['Resource',])`
   *
   * @param value - the `topic` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.offer.topic', [
    'Resource',
  ])
  public setTopic(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.topic = value;
    } else {
      this.topic = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopic(): boolean {
    return isDefined<Reference>(this.topic) && !this.topic.isEmpty();
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
      const optErrMsg = `Invalid Contract.term.offer.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `decision` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDecision(): CodeableConcept {
    return this.decision ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Decision object value to the `decision` property.
   *
   * @param value - the `decision` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDecision(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.decision; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.decision = value;
    } else {
      this.decision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decision` property exists and has a value; `false` otherwise
   */
  public hasDecision(): boolean {
    return isDefined<CodeableConcept>(this.decision) && !this.decision.isEmpty();
  }

  /**
   * @returns the `decisionMode` property value as a CodeableConcept array
   */
  public getDecisionMode(): CodeableConcept[] {
    return this.decisionMode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `decisionMode` property.
   *
   * @param value - the `decisionMode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDecisionMode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.decisionMode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.decisionMode = value;
    } else {
      this.decisionMode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `decisionMode` array property.
   *
   * @param value - the `decisionMode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDecisionMode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.decisionMode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initDecisionMode();
      this.decisionMode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `decisionMode` property exists and has a value; `false` otherwise
   */
  public hasDecisionMode(): boolean {
    return isDefinedList<CodeableConcept>(this.decisionMode) && this.decisionMode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `decisionMode` property
   */
  private initDecisionMode(): void {
    if(!this.hasDecisionMode()) {
      this.decisionMode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `answer` property value as a ContractTermOfferAnswerComponent array
   */
  public getAnswer(): ContractTermOfferAnswerComponent[] {
    return this.answer ?? ([] as ContractTermOfferAnswerComponent[]);
  }

  /**
   * Assigns the provided ContractTermOfferAnswerComponent array value to the `answer` property.
   *
   * @param value - the `answer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAnswer(value: ContractTermOfferAnswerComponent[] | undefined): this {
    if (isDefinedList<ContractTermOfferAnswerComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.answer; Provided value array has an element that is not an instance of ContractTermOfferAnswerComponent.`;
      assertFhirTypeList<ContractTermOfferAnswerComponent>(value, ContractTermOfferAnswerComponent, optErrMsg);
      this.answer = value;
    } else {
      this.answer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermOfferAnswerComponent value to the `answer` array property.
   *
   * @param value - the `answer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAnswer(value: ContractTermOfferAnswerComponent | undefined): this {
    if (isDefined<ContractTermOfferAnswerComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.answer; Provided element is not an instance of ContractTermOfferAnswerComponent.`;
      assertFhirType<ContractTermOfferAnswerComponent>(value, ContractTermOfferAnswerComponent, optErrMsg);
      this.initAnswer();
      this.answer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `answer` property exists and has a value; `false` otherwise
   */
  public hasAnswer(): boolean {
    return isDefinedList<ContractTermOfferAnswerComponent>(this.answer) && this.answer.some((item: ContractTermOfferAnswerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `answer` property
   */
  private initAnswer(): void {
    if(!this.hasAnswer()) {
      this.answer = [] as ContractTermOfferAnswerComponent[];
    }
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.offer.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `linkId` property value as a StringType array
   */
  public getLinkIdElement(): StringType[] {
    return this.linkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `linkId` property.
   *
   * @param element - the `linkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.offer.linkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `linkId` array property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.offer.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initLinkId();
      this.linkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.linkId) && this.linkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `linkId` property value as a fhirString array
   */
  public getLinkId(): fhirString[] {
    this.initLinkId();
    const linkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.linkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        linkIdValues.push(value);
      }
    }
    return linkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `linkId` property.
   *
   * @param value - the `linkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const linkIdElements = [] as StringType[];
      for (const linkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.offer.linkId array item (${String(linkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(linkIdValue, fhirStringSchema, optErrMsg));
        linkIdElements.push(element);
      }
      this.linkId = linkIdElements;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `linkId` array property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.linkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initLinkId();
      this.addLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
  }

  /**
   * Initialize the `linkId` property
   */
  private initLinkId(): void {
    if (!this.hasLinkId()) {
      this.linkId = [] as StringType[];
    }
  }

  /**
   * @returns the `securityLabelNumber` property value as a UnsignedIntType array
   */
  public getSecurityLabelNumberElement(): UnsignedIntType[] {
    return this.securityLabelNumber ?? ([] as UnsignedIntType[]);
  }

  /**
   * Assigns the provided UnsignedIntType array value to the `securityLabelNumber` property.
   *
   * @param element - the `securityLabelNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumberElement(element: UnsignedIntType[] | undefined): this {
    if (isDefinedList<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.offer.securityLabelNumber; Provided value array has an element that is not an instance of UnsignedIntType.`;
      assertFhirTypeList<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.securityLabelNumber = element;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided UnsignedIntType value to the `securityLabelNumber` array property.
   *
   * @param element - the `securityLabelNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.offer.securityLabelNumber; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.initSecurityLabelNumber();
      this.securityLabelNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumberElement(): boolean {
    return isDefinedList<UnsignedIntType>(this.securityLabelNumber) && this.securityLabelNumber.some((item: UnsignedIntType) => !item.isEmpty());
  }

  /**
   * @returns the `securityLabelNumber` property value as a fhirUnsignedInt array
   */
  public getSecurityLabelNumber(): fhirUnsignedInt[] {
    this.initSecurityLabelNumber();
    const securityLabelNumberValues = [] as fhirUnsignedInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.securityLabelNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        securityLabelNumberValues.push(value);
      }
    }
    return securityLabelNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `securityLabelNumber` property.
   *
   * @param value - the `securityLabelNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumber(value: fhirUnsignedInt[] | undefined): this {
    if (isDefinedList<fhirUnsignedInt>(value)) {
      const securityLabelNumberElements = [] as UnsignedIntType[];
      for (const securityLabelNumberValue of value) {
        const optErrMsg = `Invalid Contract.term.offer.securityLabelNumber array item (${String(securityLabelNumberValue)})`;
        const element = new UnsignedIntType(parseFhirPrimitiveData(securityLabelNumberValue, fhirUnsignedIntSchema, optErrMsg));
        securityLabelNumberElements.push(element);
      }
      this.securityLabelNumber = securityLabelNumberElements;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `securityLabelNumber` array property.
   *
   * @param value - the `securityLabelNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Contract.term.offer.securityLabelNumber array item (${String(value)})`;
      const element = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
      this.initSecurityLabelNumber();
      this.addSecurityLabelNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumber(): boolean {
    return this.hasSecurityLabelNumberElement();
  }

  /**
   * Initialize the `securityLabelNumber` property
   */
  private initSecurityLabelNumber(): void {
    if (!this.hasSecurityLabelNumber()) {
      this.securityLabelNumber = [] as UnsignedIntType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.offer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.party,
      this.topic,
      this.type_,
      this.decision,
      this.decisionMode,
      this.answer,
      this.text,
      this.linkId,
      this.securityLabelNumber,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermOfferComponent {
    const dest = new ContractTermOfferComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermOfferComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const partyList = copyListValues<ContractTermOfferPartyComponent>(this.party);
    dest.party = partyList.length === 0 ? undefined : partyList;
    dest.topic = this.topic?.copy();
    dest.type_ = this.type_?.copy();
    dest.decision = this.decision?.copy();
    const decisionModeList = copyListValues<CodeableConcept>(this.decisionMode);
    dest.decisionMode = decisionModeList.length === 0 ? undefined : decisionModeList;
    const answerList = copyListValues<ContractTermOfferAnswerComponent>(this.answer);
    dest.answer = answerList.length === 0 ? undefined : answerList;
    dest.text = this.text?.copy();
    const linkIdList = copyListValues<StringType>(this.linkId);
    dest.linkId = linkIdList.length === 0 ? undefined : linkIdList;
    const securityLabelNumberList = copyListValues<UnsignedIntType>(this.securityLabelNumber);
    dest.securityLabelNumber = securityLabelNumberList.length === 0 ? undefined : securityLabelNumberList;
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

    if (this.hasParty()) {
      setFhirBackboneElementListJson(this.getParty(), 'party', jsonObj);
    }

    if (this.hasTopic()) {
      setFhirComplexJson(this.getTopic(), 'topic', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDecision()) {
      setFhirComplexJson(this.getDecision(), 'decision', jsonObj);
    }

    if (this.hasDecisionMode()) {
      setFhirComplexListJson(this.getDecisionMode(), 'decisionMode', jsonObj);
    }

    if (this.hasAnswer()) {
      setFhirBackboneElementListJson(this.getAnswer(), 'answer', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    if (this.hasLinkId()) {
      setFhirPrimitiveListJson(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasSecurityLabelNumber()) {
      setFhirPrimitiveListJson(this.getSecurityLabelNumberElement(), 'securityLabelNumber', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermOfferPartyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Offer Recipient
 * - **Definition:** Offer Recipient.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermOfferPartyComponent extends BackboneElement implements IBackboneElement {
  constructor(reference: Reference[] | null = null, role: CodeableConcept | null = null) {
    super();

    this.reference = null;
    if (isDefinedList<Reference>(reference)) {
      this.setReference(reference);
    }

    this.role = null;
    if (isDefined<CodeableConcept>(role)) {
      this.setRole(role);
    }
  }

  /**
   * Parse the provided `ContractTermOfferPartyComponent` JSON to instantiate the ContractTermOfferPartyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermOfferPartyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermOfferPartyComponent
   * @returns ContractTermOfferPartyComponent data model or undefined for `ContractTermOfferPartyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermOfferPartyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermOfferPartyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermOfferPartyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setReference(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setReference(null);
          } else {
            instance.addReference(datatype);
          }
        });
      }
    } else {
      instance.setReference(null);
    }

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

    return instance;
  }

  /**
   * Contract.term.offer.party.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Referenced entity
   * - **Definition:** Participant in the offer.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference: Reference[] | null;

  /**
   * Contract.term.offer.party.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Participant engagement type
   * - **Definition:** How the party participates in the offer.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role: CodeableConcept | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a Reference array
   */
  public getReference(): Reference[] {
    return this.reference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.offer.party.reference', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Device','Group','Organization',])`
   *
   * @param value - the `reference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.offer.party.reference', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Group',
  
    'Organization',
  ])
  public setReference(value: Reference[] | undefined | null): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reference` array property.
   *
   * @decorator `@ReferenceTargets('Contract.term.offer.party.reference', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Device','Group','Organization',])`
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.offer.party.reference', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Group',
  
    'Organization',
  ])
  public addReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReference();
      this.reference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefinedList<Reference>(this.reference) && this.reference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reference` property
   */
  private initReference(): void {
    if (!this.hasReference()) {
      this.reference = [] as Reference[];
    }
  }

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
      const optErrMsg = `Invalid Contract.term.offer.party.role; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.offer.party';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.role,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.role, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermOfferPartyComponent {
    const dest = new ContractTermOfferPartyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermOfferPartyComponent): void {
    super.copyValues(dest);
    const referenceList = copyListValues<Reference>(this.reference);
    dest.reference = referenceList.length === 0 ? null : referenceList;
    dest.role = this.role ? this.role.copy() : null;
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

    if (this.hasReference()) {
      setFhirComplexListJson(this.getReference(), 'reference', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermOfferAnswerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Response to offer text
 * - **Definition:** Response to offer text.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermOfferAnswerComponent extends BackboneElement implements IBackboneElement {
  constructor(value: IDataType | null = null) {
    super();

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `ContractTermOfferAnswerComponent` JSON to instantiate the ContractTermOfferAnswerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermOfferAnswerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermOfferAnswerComponent
   * @returns ContractTermOfferAnswerComponent data model or undefined for `ContractTermOfferAnswerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermOfferAnswerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermOfferAnswerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermOfferAnswerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ContractTermOfferAnswerComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ContractTermOfferAnswerComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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
   * Contract.term.offer.answer.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.term.offer.answer.value[x]', ['boolean','decimal','integer','date','dateTime','time','string','uri','Attachment','Coding','Quantity','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual answer response
   * - **Definition:** Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
   * - **FHIR Types:**
   *     'boolean',
   *     'decimal',
   *     'integer',
   *     'date',
   *     'dateTime',
   *     'time',
   *     'string',
   *     'uri',
   *     'Attachment',
   *     'Coding',
   *     'Quantity',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.term.offer.answer.value[x]',[
    'boolean',
    'decimal',
    'integer',
    'date',
    'dateTime',
    'time',
    'string',
    'uri',
    'Attachment',
    'Coding',
    'Quantity',
    'Reference',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.term.offer.answer.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.term.offer.answer.value[x]')
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
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
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
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DateType object if defined; else null
   */
  public getValueDateType(): DateType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
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
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a UriType object if defined; else null
   */
  public getValueUriType(): UriType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
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
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
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
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.offer.answer.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.offer.answer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermOfferAnswerComponent {
    const dest = new ContractTermOfferAnswerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermOfferAnswerComponent): void {
    super.copyValues(dest);
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermAssetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contract Term Asset List
 * - **Definition:** Contract Term Asset List.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermAssetComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ContractTermAssetComponent` JSON to instantiate the ContractTermAssetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermAssetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermAssetComponent
   * @returns ContractTermAssetComponent data model or undefined for `ContractTermAssetComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermAssetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermAssetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermAssetComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'scope';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setScope(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addType(datatype);
          }
        });
      }
    }

    fieldName = 'typeReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addTypeReference(datatype);
          }
        });
      }
  }

    fieldName = 'subtype';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSubtype(datatype);
          }
        });
      }
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRelationship(datatype);
    }

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermAssetContextComponent | undefined = ContractTermAssetContextComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addContext(component);
          }
        });
      }
    }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setConditionElement(datatype);
    }

    fieldName = 'periodType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPeriodType(datatype);
          }
        });
      }
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Period | undefined = Period.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPeriod(datatype);
          }
        });
      }
    }

    fieldName = 'usePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Period | undefined = Period.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUsePeriod(datatype);
          }
        });
      }
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    fieldName = 'linkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addLinkIdElement(datatype);
          }
        });
      }
    }

    fieldName = 'answer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermOfferAnswerComponent | undefined = ContractTermOfferAnswerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAnswer(component);
          }
        });
      }
    }

    fieldName = 'securityLabelNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addSecurityLabelNumberElement(datatype);
          }
        });
      }
    }

    fieldName = 'valuedItem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermAssetValuedItemComponent | undefined = ContractTermAssetValuedItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addValuedItem(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Contract.term.asset.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Range of asset
   * - **Definition:** Differentiates the kind of the asset .
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private scope?: CodeableConcept | undefined;

  /**
   * Contract.term.asset.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Asset category
   * - **Definition:** Target entity type about which the term may be concerned.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * Contract.term.asset.typeReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated entities
   * - **Definition:** Associated entities.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private typeReference?: Reference[] | undefined;

  /**
   * Contract.term.asset.subtype Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Asset sub-category
   * - **Definition:** May be a subtype or part of an offered asset.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subtype?: CodeableConcept[] | undefined;

  /**
   * Contract.term.asset.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kinship of the asset
   * - **Definition:** Specifies the applicability of the term to an asset resource instance, and instances it refers to or instances that refer to it, and/or are owned by the offeree.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relationship?: Coding | undefined;

  /**
   * Contract.term.asset.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Circumstance of the asset
   * - **Definition:** Circumstance of the asset.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private context?: ContractTermAssetContextComponent[] | undefined;

  /**
   * Contract.term.asset.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quality desctiption of asset
   * - **Definition:** Description of the quality and completeness of the asset that may be a factor in its valuation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private condition?: StringType | undefined;

  /**
   * Contract.term.asset.periodType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Asset availability types
   * - **Definition:** Type of Asset availability for use or ownership.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private periodType?: CodeableConcept[] | undefined;

  /**
   * Contract.term.asset.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time period of the asset
   * - **Definition:** Asset relevant contractual time period.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period[] | undefined;

  /**
   * Contract.term.asset.usePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time period
   * - **Definition:** Time period of asset use.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usePeriod?: Period[] | undefined;

  /**
   * Contract.term.asset.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Asset clause or question text
   * - **Definition:** Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /**
   * Contract.term.asset.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to asset text
   * - **Definition:** Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType[] | undefined;

  /**
   * Contract.term.asset.answer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Response to assets
   * - **Definition:** Response to assets.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private answer?: ContractTermOfferAnswerComponent[] | undefined;

  /**
   * Contract.term.asset.securityLabelNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Asset restriction numbers
   * - **Definition:** Security labels that protects the asset.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private securityLabelNumber?: UnsignedIntType[] | undefined;

  /**
   * Contract.term.asset.valuedItem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Valued Item List
   * - **Definition:** Contract Valued Item List.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private valuedItem?: ContractTermAssetValuedItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `scope` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getScope(): CodeableConcept {
    return this.scope ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Scope object value to the `scope` property.
   *
   * @param value - the `scope` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setScope(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.scope; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.scope = value;
    } else {
      this.scope = undefined;
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
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `typeReference` property value as a Reference array
   */
  public getTypeReference(): Reference[] {
    return this.typeReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `typeReference` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.asset.typeReference', ['Resource',])`
   *
   * @param value - the `typeReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.asset.typeReference', [
    'Resource',
  ])
  public setTypeReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.typeReference = value;
    } else {
      this.typeReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `typeReference` array property.
   *
   * @decorator `@ReferenceTargets('Contract.term.asset.typeReference', ['Resource',])`
   *
   * @param value - the `typeReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.asset.typeReference', [
    'Resource',
  ])
  public addTypeReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initTypeReference();
      this.typeReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `typeReference` property exists and has a value; `false` otherwise
   */
  public hasTypeReference(): boolean {
    return isDefinedList<Reference>(this.typeReference) && this.typeReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `typeReference` property
   */
  private initTypeReference(): void {
    if (!this.hasTypeReference()) {
      this.typeReference = [] as Reference[];
    }
  }

  /**
   * @returns the `subtype` property value as a CodeableConcept array
   */
  public getSubtype(): CodeableConcept[] {
    return this.subtype ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `subtype` property.
   *
   * @param value - the `subtype` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubtype(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.subtype; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subtype = value;
    } else {
      this.subtype = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `subtype` array property.
   *
   * @param value - the `subtype` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubtype(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.subtype; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSubtype();
      this.subtype?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subtype` property exists and has a value; `false` otherwise
   */
  public hasSubtype(): boolean {
    return isDefinedList<CodeableConcept>(this.subtype) && this.subtype.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `subtype` property
   */
  private initSubtype(): void {
    if(!this.hasSubtype()) {
      this.subtype = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `relationship` property value as a Coding object if defined; else an empty Coding object
   */
  public getRelationship(): Coding {
    return this.relationship ?? new Coding();
  }

  /**
   * Assigns the provided Relationship object value to the `relationship` property.
   *
   * @param value - the `relationship` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.relationship; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.relationship = value;
    } else {
      this.relationship = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return isDefined<Coding>(this.relationship) && !this.relationship.isEmpty();
  }

  /**
   * @returns the `context` property value as a ContractTermAssetContextComponent array
   */
  public getContext(): ContractTermAssetContextComponent[] {
    return this.context ?? ([] as ContractTermAssetContextComponent[]);
  }

  /**
   * Assigns the provided ContractTermAssetContextComponent array value to the `context` property.
   *
   * @param value - the `context` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContext(value: ContractTermAssetContextComponent[] | undefined): this {
    if (isDefinedList<ContractTermAssetContextComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.context; Provided value array has an element that is not an instance of ContractTermAssetContextComponent.`;
      assertFhirTypeList<ContractTermAssetContextComponent>(value, ContractTermAssetContextComponent, optErrMsg);
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermAssetContextComponent value to the `context` array property.
   *
   * @param value - the `context` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContext(value: ContractTermAssetContextComponent | undefined): this {
    if (isDefined<ContractTermAssetContextComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.context; Provided element is not an instance of ContractTermAssetContextComponent.`;
      assertFhirType<ContractTermAssetContextComponent>(value, ContractTermAssetContextComponent, optErrMsg);
      this.initContext();
      this.context?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefinedList<ContractTermAssetContextComponent>(this.context) && this.context.some((item: ContractTermAssetContextComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `context` property
   */
  private initContext(): void {
    if(!this.hasContext()) {
      this.context = [] as ContractTermAssetContextComponent[];
    }
  }

  /**
   * @returns the `condition` property value as a StringType object if defined; else an empty StringType object
   */
  public getConditionElement(): StringType {
    return this.condition ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `condition` property.
   *
   * @param element - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.condition; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.condition = element;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasConditionElement(): boolean {
    return isDefined<StringType>(this.condition) && !this.condition.isEmpty();
  }

  /**
   * @returns the `condition` property value as a fhirString if defined; else undefined
   */
  public getCondition(): fhirString | undefined {
    return this.condition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `condition` property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCondition(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.condition (${String(value)})`;
      this.condition = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return this.hasConditionElement();
  }

  /**
   * @returns the `periodType` property value as a CodeableConcept array
   */
  public getPeriodType(): CodeableConcept[] {
    return this.periodType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `periodType` property.
   *
   * @param value - the `periodType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriodType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.periodType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.periodType = value;
    } else {
      this.periodType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `periodType` array property.
   *
   * @param value - the `periodType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPeriodType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.periodType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPeriodType();
      this.periodType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `periodType` property exists and has a value; `false` otherwise
   */
  public hasPeriodType(): boolean {
    return isDefinedList<CodeableConcept>(this.periodType) && this.periodType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `periodType` property
   */
  private initPeriodType(): void {
    if(!this.hasPeriodType()) {
      this.periodType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `period` property value as a Period array
   */
  public getPeriod(): Period[] {
    return this.period ?? ([] as Period[]);
  }

  /**
   * Assigns the provided Period array value to the `period` property.
   *
   * @param value - the `period` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period[] | undefined): this {
    if (isDefinedList<Period>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.period; Provided value array has an element that is not an instance of Period.`;
      assertFhirTypeList<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * Add the provided Period value to the `period` array property.
   *
   * @param value - the `period` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.initPeriod();
      this.period?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefinedList<Period>(this.period) && this.period.some((item: Period) => !item.isEmpty());
  }

  /**
   * Initialize the `period` property
   */
  private initPeriod(): void {
    if(!this.hasPeriod()) {
      this.period = [] as Period[];
    }
  }

  /**
   * @returns the `usePeriod` property value as a Period array
   */
  public getUsePeriod(): Period[] {
    return this.usePeriod ?? ([] as Period[]);
  }

  /**
   * Assigns the provided Period array value to the `usePeriod` property.
   *
   * @param value - the `usePeriod` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUsePeriod(value: Period[] | undefined): this {
    if (isDefinedList<Period>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.usePeriod; Provided value array has an element that is not an instance of Period.`;
      assertFhirTypeList<Period>(value, Period, optErrMsg);
      this.usePeriod = value;
    } else {
      this.usePeriod = undefined;
    }
    return this;
  }

  /**
   * Add the provided Period value to the `usePeriod` array property.
   *
   * @param value - the `usePeriod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUsePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.usePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.initUsePeriod();
      this.usePeriod?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `usePeriod` property exists and has a value; `false` otherwise
   */
  public hasUsePeriod(): boolean {
    return isDefinedList<Period>(this.usePeriod) && this.usePeriod.some((item: Period) => !item.isEmpty());
  }

  /**
   * Initialize the `usePeriod` property
   */
  private initUsePeriod(): void {
    if(!this.hasUsePeriod()) {
      this.usePeriod = [] as Period[];
    }
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `linkId` property value as a StringType array
   */
  public getLinkIdElement(): StringType[] {
    return this.linkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `linkId` property.
   *
   * @param element - the `linkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.linkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `linkId` array property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initLinkId();
      this.linkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.linkId) && this.linkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `linkId` property value as a fhirString array
   */
  public getLinkId(): fhirString[] {
    this.initLinkId();
    const linkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.linkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        linkIdValues.push(value);
      }
    }
    return linkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `linkId` property.
   *
   * @param value - the `linkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const linkIdElements = [] as StringType[];
      for (const linkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.asset.linkId array item (${String(linkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(linkIdValue, fhirStringSchema, optErrMsg));
        linkIdElements.push(element);
      }
      this.linkId = linkIdElements;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `linkId` array property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.linkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initLinkId();
      this.addLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
  }

  /**
   * Initialize the `linkId` property
   */
  private initLinkId(): void {
    if (!this.hasLinkId()) {
      this.linkId = [] as StringType[];
    }
  }

  /**
   * @returns the `answer` property value as a ContractTermOfferAnswerComponent array
   */
  public getAnswer(): ContractTermOfferAnswerComponent[] {
    return this.answer ?? ([] as ContractTermOfferAnswerComponent[]);
  }

  /**
   * Assigns the provided ContractTermOfferAnswerComponent array value to the `answer` property.
   *
   * @param value - the `answer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAnswer(value: ContractTermOfferAnswerComponent[] | undefined): this {
    if (isDefinedList<ContractTermOfferAnswerComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.answer; Provided value array has an element that is not an instance of ContractTermOfferAnswerComponent.`;
      assertFhirTypeList<ContractTermOfferAnswerComponent>(value, ContractTermOfferAnswerComponent, optErrMsg);
      this.answer = value;
    } else {
      this.answer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermOfferAnswerComponent value to the `answer` array property.
   *
   * @param value - the `answer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAnswer(value: ContractTermOfferAnswerComponent | undefined): this {
    if (isDefined<ContractTermOfferAnswerComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.answer; Provided element is not an instance of ContractTermOfferAnswerComponent.`;
      assertFhirType<ContractTermOfferAnswerComponent>(value, ContractTermOfferAnswerComponent, optErrMsg);
      this.initAnswer();
      this.answer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `answer` property exists and has a value; `false` otherwise
   */
  public hasAnswer(): boolean {
    return isDefinedList<ContractTermOfferAnswerComponent>(this.answer) && this.answer.some((item: ContractTermOfferAnswerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `answer` property
   */
  private initAnswer(): void {
    if(!this.hasAnswer()) {
      this.answer = [] as ContractTermOfferAnswerComponent[];
    }
  }

  /**
   * @returns the `securityLabelNumber` property value as a UnsignedIntType array
   */
  public getSecurityLabelNumberElement(): UnsignedIntType[] {
    return this.securityLabelNumber ?? ([] as UnsignedIntType[]);
  }

  /**
   * Assigns the provided UnsignedIntType array value to the `securityLabelNumber` property.
   *
   * @param element - the `securityLabelNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumberElement(element: UnsignedIntType[] | undefined): this {
    if (isDefinedList<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.securityLabelNumber; Provided value array has an element that is not an instance of UnsignedIntType.`;
      assertFhirTypeList<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.securityLabelNumber = element;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided UnsignedIntType value to the `securityLabelNumber` array property.
   *
   * @param element - the `securityLabelNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.securityLabelNumber; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.initSecurityLabelNumber();
      this.securityLabelNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumberElement(): boolean {
    return isDefinedList<UnsignedIntType>(this.securityLabelNumber) && this.securityLabelNumber.some((item: UnsignedIntType) => !item.isEmpty());
  }

  /**
   * @returns the `securityLabelNumber` property value as a fhirUnsignedInt array
   */
  public getSecurityLabelNumber(): fhirUnsignedInt[] {
    this.initSecurityLabelNumber();
    const securityLabelNumberValues = [] as fhirUnsignedInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.securityLabelNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        securityLabelNumberValues.push(value);
      }
    }
    return securityLabelNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `securityLabelNumber` property.
   *
   * @param value - the `securityLabelNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumber(value: fhirUnsignedInt[] | undefined): this {
    if (isDefinedList<fhirUnsignedInt>(value)) {
      const securityLabelNumberElements = [] as UnsignedIntType[];
      for (const securityLabelNumberValue of value) {
        const optErrMsg = `Invalid Contract.term.asset.securityLabelNumber array item (${String(securityLabelNumberValue)})`;
        const element = new UnsignedIntType(parseFhirPrimitiveData(securityLabelNumberValue, fhirUnsignedIntSchema, optErrMsg));
        securityLabelNumberElements.push(element);
      }
      this.securityLabelNumber = securityLabelNumberElements;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `securityLabelNumber` array property.
   *
   * @param value - the `securityLabelNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.securityLabelNumber array item (${String(value)})`;
      const element = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
      this.initSecurityLabelNumber();
      this.addSecurityLabelNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumber(): boolean {
    return this.hasSecurityLabelNumberElement();
  }

  /**
   * Initialize the `securityLabelNumber` property
   */
  private initSecurityLabelNumber(): void {
    if (!this.hasSecurityLabelNumber()) {
      this.securityLabelNumber = [] as UnsignedIntType[];
    }
  }

  /**
   * @returns the `valuedItem` property value as a ContractTermAssetValuedItemComponent array
   */
  public getValuedItem(): ContractTermAssetValuedItemComponent[] {
    return this.valuedItem ?? ([] as ContractTermAssetValuedItemComponent[]);
  }

  /**
   * Assigns the provided ContractTermAssetValuedItemComponent array value to the `valuedItem` property.
   *
   * @param value - the `valuedItem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValuedItem(value: ContractTermAssetValuedItemComponent[] | undefined): this {
    if (isDefinedList<ContractTermAssetValuedItemComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem; Provided value array has an element that is not an instance of ContractTermAssetValuedItemComponent.`;
      assertFhirTypeList<ContractTermAssetValuedItemComponent>(value, ContractTermAssetValuedItemComponent, optErrMsg);
      this.valuedItem = value;
    } else {
      this.valuedItem = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermAssetValuedItemComponent value to the `valuedItem` array property.
   *
   * @param value - the `valuedItem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValuedItem(value: ContractTermAssetValuedItemComponent | undefined): this {
    if (isDefined<ContractTermAssetValuedItemComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem; Provided element is not an instance of ContractTermAssetValuedItemComponent.`;
      assertFhirType<ContractTermAssetValuedItemComponent>(value, ContractTermAssetValuedItemComponent, optErrMsg);
      this.initValuedItem();
      this.valuedItem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `valuedItem` property exists and has a value; `false` otherwise
   */
  public hasValuedItem(): boolean {
    return isDefinedList<ContractTermAssetValuedItemComponent>(this.valuedItem) && this.valuedItem.some((item: ContractTermAssetValuedItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `valuedItem` property
   */
  private initValuedItem(): void {
    if(!this.hasValuedItem()) {
      this.valuedItem = [] as ContractTermAssetValuedItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.asset';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.scope,
      this.type_,
      this.typeReference,
      this.subtype,
      this.relationship,
      this.context,
      this.condition,
      this.periodType,
      this.period,
      this.usePeriod,
      this.text,
      this.linkId,
      this.answer,
      this.securityLabelNumber,
      this.valuedItem,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermAssetComponent {
    const dest = new ContractTermAssetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermAssetComponent): void {
    super.copyValues(dest);
    dest.scope = this.scope?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const typeReferenceList = copyListValues<Reference>(this.typeReference);
    dest.typeReference = typeReferenceList.length === 0 ? undefined : typeReferenceList;
    const subtypeList = copyListValues<CodeableConcept>(this.subtype);
    dest.subtype = subtypeList.length === 0 ? undefined : subtypeList;
    dest.relationship = this.relationship?.copy();
    const contextList = copyListValues<ContractTermAssetContextComponent>(this.context);
    dest.context = contextList.length === 0 ? undefined : contextList;
    dest.condition = this.condition?.copy();
    const periodTypeList = copyListValues<CodeableConcept>(this.periodType);
    dest.periodType = periodTypeList.length === 0 ? undefined : periodTypeList;
    const periodList = copyListValues<Period>(this.period);
    dest.period = periodList.length === 0 ? undefined : periodList;
    const usePeriodList = copyListValues<Period>(this.usePeriod);
    dest.usePeriod = usePeriodList.length === 0 ? undefined : usePeriodList;
    dest.text = this.text?.copy();
    const linkIdList = copyListValues<StringType>(this.linkId);
    dest.linkId = linkIdList.length === 0 ? undefined : linkIdList;
    const answerList = copyListValues<ContractTermOfferAnswerComponent>(this.answer);
    dest.answer = answerList.length === 0 ? undefined : answerList;
    const securityLabelNumberList = copyListValues<UnsignedIntType>(this.securityLabelNumber);
    dest.securityLabelNumber = securityLabelNumberList.length === 0 ? undefined : securityLabelNumberList;
    const valuedItemList = copyListValues<ContractTermAssetValuedItemComponent>(this.valuedItem);
    dest.valuedItem = valuedItemList.length === 0 ? undefined : valuedItemList;
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

    if (this.hasScope()) {
      setFhirComplexJson(this.getScope(), 'scope', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasTypeReference()) {
      setFhirComplexListJson(this.getTypeReference(), 'typeReference', jsonObj);
    }

    if (this.hasSubtype()) {
      setFhirComplexListJson(this.getSubtype(), 'subtype', jsonObj);
    }

    if (this.hasRelationship()) {
      setFhirComplexJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasContext()) {
      setFhirBackboneElementListJson(this.getContext(), 'context', jsonObj);
    }

    if (this.hasConditionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getConditionElement(), 'condition', jsonObj);
    }

    if (this.hasPeriodType()) {
      setFhirComplexListJson(this.getPeriodType(), 'periodType', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexListJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasUsePeriod()) {
      setFhirComplexListJson(this.getUsePeriod(), 'usePeriod', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    if (this.hasLinkId()) {
      setFhirPrimitiveListJson(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasAnswer()) {
      setFhirBackboneElementListJson(this.getAnswer(), 'answer', jsonObj);
    }

    if (this.hasSecurityLabelNumber()) {
      setFhirPrimitiveListJson(this.getSecurityLabelNumberElement(), 'securityLabelNumber', jsonObj);
    }

    if (this.hasValuedItem()) {
      setFhirBackboneElementListJson(this.getValuedItem(), 'valuedItem', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermAssetContextComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Circumstance of the asset
 * - **Definition:** Circumstance of the asset.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermAssetContextComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ContractTermAssetContextComponent` JSON to instantiate the ContractTermAssetContextComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermAssetContextComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermAssetContextComponent
   * @returns ContractTermAssetContextComponent data model or undefined for `ContractTermAssetContextComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermAssetContextComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermAssetContextComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermAssetContextComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReference(datatype);
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

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    return instance;
  }

  /**
   * Contract.term.asset.context.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Creator,custodian or owner
   * - **Definition:** Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: Reference | undefined;

  /**
   * Contract.term.asset.context.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Codeable asset context
   * - **Definition:** Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * Contract.term.asset.context.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context description
   * - **Definition:** Context description.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a Reference object; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.asset.context.reference', ['Resource',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.asset.context.reference', [
    'Resource',
  ])
  public setReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
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
      const optErrMsg = `Invalid Contract.term.asset.context.code; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Contract.term.asset.context.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.context.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.context.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.asset.context';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.code,
      this.text,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermAssetContextComponent {
    const dest = new ContractTermAssetContextComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermAssetContextComponent): void {
    super.copyValues(dest);
    dest.reference = this.reference?.copy();
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    dest.text = this.text?.copy();
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

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermAssetValuedItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contract Valued Item List
 * - **Definition:** Contract Valued Item List.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermAssetValuedItemComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ContractTermAssetValuedItemComponent` JSON to instantiate the ContractTermAssetValuedItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermAssetValuedItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermAssetValuedItemComponent
   * @returns ContractTermAssetValuedItemComponent data model or undefined for `ContractTermAssetValuedItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermAssetValuedItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermAssetValuedItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermAssetValuedItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ContractTermAssetValuedItemComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ContractTermAssetValuedItemComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'entity[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const entity: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setEntity(entity);

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'effectiveTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setEffectiveTimeElement(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'unitPrice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitPrice(datatype);
    }

    fieldName = 'factor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setFactorElement(datatype);
    }

    fieldName = 'points';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setPointsElement(datatype);
    }

    fieldName = 'net';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNet(datatype);
    }

    fieldName = 'payment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPaymentElement(datatype);
    }

    fieldName = 'paymentDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setPaymentDateElement(datatype);
    }

    fieldName = 'responsible';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponsible(datatype);
    }

    fieldName = 'recipient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRecipient(datatype);
    }

    fieldName = 'linkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addLinkIdElement(datatype);
          }
        });
      }
    }

    fieldName = 'securityLabelNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addSecurityLabelNumberElement(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Contract.term.asset.valuedItem.entity[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.term.asset.valuedItem.entity[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Valued Item Type
   * - **Definition:** Specific type of Contract Valued Item that may be priced.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.term.asset.valuedItem.entity[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private entity?: IDataType | undefined;

  /**
   * Contract.term.asset.valuedItem.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Valued Item Number
   * - **Definition:** Identifies a Contract Valued Item instance.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identifier?: Identifier | undefined;

  /**
   * Contract.term.asset.valuedItem.effectiveTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Valued Item Effective Tiem
   * - **Definition:** Indicates the time during which this Contract ValuedItem information is effective.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private effectiveTime?: DateTimeType | undefined;

  /**
   * Contract.term.asset.valuedItem.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Count of Contract Valued Items
   * - **Definition:** Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * Contract.term.asset.valuedItem.unitPrice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Valued Item fee, charge, or cost
   * - **Definition:** A Contract Valued Item unit valuation measure.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitPrice?: Money | undefined;

  /**
   * Contract.term.asset.valuedItem.factor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Valued Item Price Scaling Factor
   * - **Definition:** A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private factor?: DecimalType | undefined;

  /**
   * Contract.term.asset.valuedItem.points Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Valued Item Difficulty Scaling Factor
   * - **Definition:** An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private points?: DecimalType | undefined;

  /**
   * Contract.term.asset.valuedItem.net Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total Contract Valued Item Value
   * - **Definition:** Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private net?: Money | undefined;

  /**
   * Contract.term.asset.valuedItem.payment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Terms of valuation
   * - **Definition:** Terms of valuation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private payment?: StringType | undefined;

  /**
   * Contract.term.asset.valuedItem.paymentDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When payment is due
   * - **Definition:** When payment is due.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private paymentDate?: DateTimeType | undefined;

  /**
   * Contract.term.asset.valuedItem.responsible Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who will make payment
   * - **Definition:** Who will make payment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private responsible?: Reference | undefined;

  /**
   * Contract.term.asset.valuedItem.recipient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who will receive payment
   * - **Definition:** Who will receive payment.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recipient?: Reference | undefined;

  /**
   * Contract.term.asset.valuedItem.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item
   * - **Definition:** Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType[] | undefined;

  /**
   * Contract.term.asset.valuedItem.securityLabelNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Security Labels that define affected terms
   * - **Definition:** A set of security labels that define which terms are controlled by this condition.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private securityLabelNumber?: UnsignedIntType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `entity` property value as a DataType object if defined; else undefined
   */
  public getEntity(): IDataType | undefined {
    return this.entity;
  }

  /**
   * Assigns the provided DataType object value to the `entity` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.term.asset.valuedItem.entity[x]')`
   *
   * @param value - the `entity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.term.asset.valuedItem.entity[x]')
  public setEntity(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.entity = value;
    } else {
      this.entity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `entity` property exists and has a value; `false` otherwise
   */
  public hasEntity(): boolean {
    return isDefined<IDataType>(this.entity) && !this.entity.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `entity` property value as a CodeableConcept object if defined; else undefined
   */
  public getEntityCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.entity)) {
      return undefined;
    }
    if (!(this.entity instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.asset.valuedItem.entity[x]: Expected CodeableConcept but encountered ${this.entity.fhirType()}`,
      );
    }
    return this.entity;
  }

  /**
   * @returns `true` if the `entity` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasEntityCodeableConcept(): boolean {
    return this.hasEntity() && this.entity instanceof CodeableConcept;
  }

  /**
   * @returns the `entity` property value as a Reference object if defined; else undefined
   */
  public getEntityReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.entity)) {
      return undefined;
    }
    if (!(this.entity instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.term.asset.valuedItem.entity[x]: Expected Reference but encountered ${this.entity.fhirType()}`,
      );
    }
    return this.entity;
  }

  /**
   * @returns `true` if the `entity` property exists as a Reference and has a value; `false` otherwise
   */
  public hasEntityReference(): boolean {
    return this.hasEntity() && this.entity instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `effectiveTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getEffectiveTimeElement(): DateTimeType {
    return this.effectiveTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `effectiveTime` property.
   *
   * @param element - the `effectiveTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEffectiveTimeElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.effectiveTime; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.effectiveTime = element;
    } else {
      this.effectiveTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectiveTime` property exists and has a value; `false` otherwise
   */
  public hasEffectiveTimeElement(): boolean {
    return isDefined<DateTimeType>(this.effectiveTime) && !this.effectiveTime.isEmpty();
  }

  /**
   * @returns the `effectiveTime` property value as a fhirDateTime if defined; else undefined
   */
  public getEffectiveTime(): fhirDateTime | undefined {
    return this.effectiveTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `effectiveTime` property.
   *
   * @param value - the `effectiveTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEffectiveTime(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.effectiveTime (${String(value)})`;
      this.effectiveTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.effectiveTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectiveTime` property exists and has a value; `false` otherwise
   */
  public hasEffectiveTime(): boolean {
    return this.hasEffectiveTimeElement();
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
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `unitPrice` property value as a Money object if defined; else an empty Money object
   */
  public getUnitPrice(): Money {
    return this.unitPrice ?? new Money();
  }

  /**
   * Assigns the provided UnitPrice object value to the `unitPrice` property.
   *
   * @param value - the `unitPrice` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitPrice(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.unitPrice; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.unitPrice = value;
    } else {
      this.unitPrice = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitPrice` property exists and has a value; `false` otherwise
   */
  public hasUnitPrice(): boolean {
    return isDefined<Money>(this.unitPrice) && !this.unitPrice.isEmpty();
  }

  /**
   * @returns the `factor` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getFactorElement(): DecimalType {
    return this.factor ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `factor` property.
   *
   * @param element - the `factor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactorElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.factor; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.factor = element;
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactorElement(): boolean {
    return isDefined<DecimalType>(this.factor) && !this.factor.isEmpty();
  }

  /**
   * @returns the `factor` property value as a fhirDecimal if defined; else undefined
   */
  public getFactor(): fhirDecimal | undefined {
    return this.factor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `factor` property.
   *
   * @param value - the `factor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactor(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.factor (${String(value)})`;
      this.factor = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactor(): boolean {
    return this.hasFactorElement();
  }

  /**
   * @returns the `points` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getPointsElement(): DecimalType {
    return this.points ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `points` property.
   *
   * @param element - the `points` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPointsElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.points; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.points = element;
    } else {
      this.points = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `points` property exists and has a value; `false` otherwise
   */
  public hasPointsElement(): boolean {
    return isDefined<DecimalType>(this.points) && !this.points.isEmpty();
  }

  /**
   * @returns the `points` property value as a fhirDecimal if defined; else undefined
   */
  public getPoints(): fhirDecimal | undefined {
    return this.points?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `points` property.
   *
   * @param value - the `points` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPoints(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.points (${String(value)})`;
      this.points = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.points = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `points` property exists and has a value; `false` otherwise
   */
  public hasPoints(): boolean {
    return this.hasPointsElement();
  }

  /**
   * @returns the `net` property value as a Money object if defined; else an empty Money object
   */
  public getNet(): Money {
    return this.net ?? new Money();
  }

  /**
   * Assigns the provided Net object value to the `net` property.
   *
   * @param value - the `net` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNet(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.net; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.net = value;
    } else {
      this.net = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `net` property exists and has a value; `false` otherwise
   */
  public hasNet(): boolean {
    return isDefined<Money>(this.net) && !this.net.isEmpty();
  }

  /**
   * @returns the `payment` property value as a StringType object if defined; else an empty StringType object
   */
  public getPaymentElement(): StringType {
    return this.payment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `payment` property.
   *
   * @param element - the `payment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.payment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.payment = element;
    } else {
      this.payment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payment` property exists and has a value; `false` otherwise
   */
  public hasPaymentElement(): boolean {
    return isDefined<StringType>(this.payment) && !this.payment.isEmpty();
  }

  /**
   * @returns the `payment` property value as a fhirString if defined; else undefined
   */
  public getPayment(): fhirString | undefined {
    return this.payment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `payment` property.
   *
   * @param value - the `payment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPayment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.payment (${String(value)})`;
      this.payment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.payment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `payment` property exists and has a value; `false` otherwise
   */
  public hasPayment(): boolean {
    return this.hasPaymentElement();
  }

  /**
   * @returns the `paymentDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getPaymentDateElement(): DateTimeType {
    return this.paymentDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `paymentDate` property.
   *
   * @param element - the `paymentDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.paymentDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.paymentDate = element;
    } else {
      this.paymentDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentDate` property exists and has a value; `false` otherwise
   */
  public hasPaymentDateElement(): boolean {
    return isDefined<DateTimeType>(this.paymentDate) && !this.paymentDate.isEmpty();
  }

  /**
   * @returns the `paymentDate` property value as a fhirDateTime if defined; else undefined
   */
  public getPaymentDate(): fhirDateTime | undefined {
    return this.paymentDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `paymentDate` property.
   *
   * @param value - the `paymentDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaymentDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.paymentDate (${String(value)})`;
      this.paymentDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.paymentDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paymentDate` property exists and has a value; `false` otherwise
   */
  public hasPaymentDate(): boolean {
    return this.hasPaymentDateElement();
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
   * @decorator `@ReferenceTargets('Contract.term.asset.valuedItem.responsible', ['Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `responsible` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.asset.valuedItem.responsible', [
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
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
   * @returns the `recipient` property value as a Reference object; else an empty Reference object
   */
  public getRecipient(): Reference {
    return this.recipient ?? new Reference();
  }

  /**
   * Assigns the provided Recipient object value to the `recipient` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.asset.valuedItem.recipient', ['Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `recipient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.asset.valuedItem.recipient', [
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setRecipient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recipient = value;
    } else {
      this.recipient = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recipient` property exists and has a value; `false` otherwise
   */
  public hasRecipient(): boolean {
    return isDefined<Reference>(this.recipient) && !this.recipient.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a StringType array
   */
  public getLinkIdElement(): StringType[] {
    return this.linkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `linkId` property.
   *
   * @param element - the `linkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.linkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `linkId` array property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initLinkId();
      this.linkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.linkId) && this.linkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `linkId` property value as a fhirString array
   */
  public getLinkId(): fhirString[] {
    this.initLinkId();
    const linkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.linkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        linkIdValues.push(value);
      }
    }
    return linkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `linkId` property.
   *
   * @param value - the `linkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const linkIdElements = [] as StringType[];
      for (const linkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.asset.valuedItem.linkId array item (${String(linkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(linkIdValue, fhirStringSchema, optErrMsg));
        linkIdElements.push(element);
      }
      this.linkId = linkIdElements;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `linkId` array property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.linkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initLinkId();
      this.addLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
  }

  /**
   * Initialize the `linkId` property
   */
  private initLinkId(): void {
    if (!this.hasLinkId()) {
      this.linkId = [] as StringType[];
    }
  }

  /**
   * @returns the `securityLabelNumber` property value as a UnsignedIntType array
   */
  public getSecurityLabelNumberElement(): UnsignedIntType[] {
    return this.securityLabelNumber ?? ([] as UnsignedIntType[]);
  }

  /**
   * Assigns the provided UnsignedIntType array value to the `securityLabelNumber` property.
   *
   * @param element - the `securityLabelNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumberElement(element: UnsignedIntType[] | undefined): this {
    if (isDefinedList<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.securityLabelNumber; Provided value array has an element that is not an instance of UnsignedIntType.`;
      assertFhirTypeList<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.securityLabelNumber = element;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided UnsignedIntType value to the `securityLabelNumber` array property.
   *
   * @param element - the `securityLabelNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.securityLabelNumber; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.initSecurityLabelNumber();
      this.securityLabelNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumberElement(): boolean {
    return isDefinedList<UnsignedIntType>(this.securityLabelNumber) && this.securityLabelNumber.some((item: UnsignedIntType) => !item.isEmpty());
  }

  /**
   * @returns the `securityLabelNumber` property value as a fhirUnsignedInt array
   */
  public getSecurityLabelNumber(): fhirUnsignedInt[] {
    this.initSecurityLabelNumber();
    const securityLabelNumberValues = [] as fhirUnsignedInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.securityLabelNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        securityLabelNumberValues.push(value);
      }
    }
    return securityLabelNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `securityLabelNumber` property.
   *
   * @param value - the `securityLabelNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumber(value: fhirUnsignedInt[] | undefined): this {
    if (isDefinedList<fhirUnsignedInt>(value)) {
      const securityLabelNumberElements = [] as UnsignedIntType[];
      for (const securityLabelNumberValue of value) {
        const optErrMsg = `Invalid Contract.term.asset.valuedItem.securityLabelNumber array item (${String(securityLabelNumberValue)})`;
        const element = new UnsignedIntType(parseFhirPrimitiveData(securityLabelNumberValue, fhirUnsignedIntSchema, optErrMsg));
        securityLabelNumberElements.push(element);
      }
      this.securityLabelNumber = securityLabelNumberElements;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `securityLabelNumber` array property.
   *
   * @param value - the `securityLabelNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Contract.term.asset.valuedItem.securityLabelNumber array item (${String(value)})`;
      const element = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
      this.initSecurityLabelNumber();
      this.addSecurityLabelNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumber(): boolean {
    return this.hasSecurityLabelNumberElement();
  }

  /**
   * Initialize the `securityLabelNumber` property
   */
  private initSecurityLabelNumber(): void {
    if (!this.hasSecurityLabelNumber()) {
      this.securityLabelNumber = [] as UnsignedIntType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.asset.valuedItem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.entity,
      this.identifier,
      this.effectiveTime,
      this.quantity,
      this.unitPrice,
      this.factor,
      this.points,
      this.net,
      this.payment,
      this.paymentDate,
      this.responsible,
      this.recipient,
      this.linkId,
      this.securityLabelNumber,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermAssetValuedItemComponent {
    const dest = new ContractTermAssetValuedItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermAssetValuedItemComponent): void {
    super.copyValues(dest);
    dest.entity = this.entity?.copy() as IDataType;
    dest.identifier = this.identifier?.copy();
    dest.effectiveTime = this.effectiveTime?.copy();
    dest.quantity = this.quantity?.copy();
    dest.unitPrice = this.unitPrice?.copy();
    dest.factor = this.factor?.copy();
    dest.points = this.points?.copy();
    dest.net = this.net?.copy();
    dest.payment = this.payment?.copy();
    dest.paymentDate = this.paymentDate?.copy();
    dest.responsible = this.responsible?.copy();
    dest.recipient = this.recipient?.copy();
    const linkIdList = copyListValues<StringType>(this.linkId);
    dest.linkId = linkIdList.length === 0 ? undefined : linkIdList;
    const securityLabelNumberList = copyListValues<UnsignedIntType>(this.securityLabelNumber);
    dest.securityLabelNumber = securityLabelNumberList.length === 0 ? undefined : securityLabelNumberList;
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

    if (this.hasEntity()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEntity()!, 'entity', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasEffectiveTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getEffectiveTimeElement(), 'effectiveTime', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasUnitPrice()) {
      setFhirComplexJson(this.getUnitPrice(), 'unitPrice', jsonObj);
    }

    if (this.hasFactorElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getFactorElement(), 'factor', jsonObj);
    }

    if (this.hasPointsElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getPointsElement(), 'points', jsonObj);
    }

    if (this.hasNet()) {
      setFhirComplexJson(this.getNet(), 'net', jsonObj);
    }

    if (this.hasPaymentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPaymentElement(), 'payment', jsonObj);
    }

    if (this.hasPaymentDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getPaymentDateElement(), 'paymentDate', jsonObj);
    }

    if (this.hasResponsible()) {
      setFhirComplexJson(this.getResponsible(), 'responsible', jsonObj);
    }

    if (this.hasRecipient()) {
      setFhirComplexJson(this.getRecipient(), 'recipient', jsonObj);
    }

    if (this.hasLinkId()) {
      setFhirPrimitiveListJson(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasSecurityLabelNumber()) {
      setFhirPrimitiveListJson(this.getSecurityLabelNumberElement(), 'securityLabelNumber', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Entity being ascribed responsibility
 * - **Definition:** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.
 * - **Comment:** Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa. For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 * - **Requirements:** An agent can be a person, an organization, software, device, or other entities that may be ascribed responsibility.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermActionComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null, intent: CodeableConcept | null = null, status: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.intent = null;
    if (isDefined<CodeableConcept>(intent)) {
      this.setIntent(intent);
    }

    this.status = null;
    if (isDefined<CodeableConcept>(status)) {
      this.setStatus(status);
    }
  }

  /**
   * Parse the provided `ContractTermActionComponent` JSON to instantiate the ContractTermActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermActionComponent
   * @returns ContractTermActionComponent data model or undefined for `ContractTermActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ContractTermActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ContractTermActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'doNotPerform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setDoNotPerformElement(datatype);
    }

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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ContractTermActionSubjectComponent | undefined = ContractTermActionSubjectComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addSubject(component);
          }
        });
      }
    }

    fieldName = 'intent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setIntent(null);
      } else {
        instance.setIntent(datatype);
      }
    } else {
      instance.setIntent(null);
    }

    fieldName = 'linkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addLinkIdElement(datatype);
          }
        });
      }
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setStatus(null);
      } else {
        instance.setStatus(datatype);
      }
    } else {
      instance.setStatus(null);
    }

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContext(datatype);
    }

    fieldName = 'contextLinkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addContextLinkIdElement(datatype);
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

    fieldName = 'requester';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRequester(datatype);
          }
        });
      }
  }

    fieldName = 'requesterLinkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addRequesterLinkIdElement(datatype);
          }
        });
      }
    }

    fieldName = 'performerType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addPerformerType(datatype);
          }
        });
      }
    }

    fieldName = 'performerRole';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformerRole(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformer(datatype);
    }

    fieldName = 'performerLinkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addPerformerLinkIdElement(datatype);
          }
        });
      }
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReason(datatype);
          }
        });
      }
    }

    fieldName = 'reasonLinkId';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addReasonLinkIdElement(datatype);
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

    fieldName = 'securityLabelNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addSecurityLabelNumberElement(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Contract.term.action.doNotPerform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** True if the term prohibits the  action
   * - **Definition:** True if the term prohibits the  action.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** If true this element negates the specified action. For Example, instead of a dictate to perform an action, it is a dictate not to perform the action.
   * - **isSummary:** false
   */
  private doNotPerform?: BooleanType | undefined;

  /**
   * Contract.term.action.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type or form of the action
   * - **Definition:** Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: CodeableConcept | null;

  /**
   * Contract.term.action.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity of the action
   * - **Definition:** Entity of the action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subject?: ContractTermActionSubjectComponent[] | undefined;

  /**
   * Contract.term.action.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Purpose for the Contract Term Action
   * - **Definition:** Reason or purpose for the action stipulated by this Contract Provision.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private intent: CodeableConcept | null;

  /**
   * Contract.term.action.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item
   * - **Definition:** Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: StringType[] | undefined;

  /**
   * Contract.term.action.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** State of the action
   * - **Definition:** Current state of the term action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private status: CodeableConcept | null;

  /**
   * Contract.term.action.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Episode associated with action
   * - **Definition:** Encounter or Episode with primary association to the specified term activity.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *       'http://hl7.org/fhir/StructureDefinition/EpisodeOfCare',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private context?: Reference | undefined;

  /**
   * Contract.term.action.contextLinkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item
   * - **Definition:** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contextLinkId?: StringType[] | undefined;

  /**
   * Contract.term.action.occurrence[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.term.action.occurrence[x]', ['dateTime','Period','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When action happens
   * - **Definition:** When action happens.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.term.action.occurrence[x]',[
    'dateTime',
    'Period',
    'Timing',
  ])
  private occurrence?: IDataType | undefined;

  /**
   * Contract.term.action.requester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who asked for action
   * - **Definition:** Who or what initiated the action and has responsibility for its activation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requester?: Reference[] | undefined;

  /**
   * Contract.term.action.requesterLinkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item
   * - **Definition:** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requesterLinkId?: StringType[] | undefined;

  /**
   * Contract.term.action.performerType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of service performer
   * - **Definition:** The type of individual that is desired or required to perform or not perform the action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performerType?: CodeableConcept[] | undefined;

  /**
   * Contract.term.action.performerRole Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Competency of the performer
   * - **Definition:** The type of role or competency of an individual desired or required to perform or not perform the action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performerRole?: CodeableConcept | undefined;

  /**
   * Contract.term.action.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actor that wil execute (or not) the action
   * - **Definition:** Indicates who or what is being asked to perform (or not perform) the ction.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: Reference | undefined;

  /**
   * Contract.term.action.performerLinkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item
   * - **Definition:** Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performerLinkId?: StringType[] | undefined;

  /**
   * Contract.term.action.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why is action (not) needed?
   * - **Definition:** Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited. Either a coded concept, or another resource whose existence justifies permitting or not permitting this action.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *       'http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * Contract.term.action.reasonLinkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item
   * - **Definition:** Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonLinkId?: StringType[] | undefined;

  /**
   * Contract.term.action.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments about the action
   * - **Definition:** Comments made about the term action made by the requester, performer, subject or other participants.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Contract.term.action.securityLabelNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Action restriction numbers
   * - **Definition:** Security labels that protects the action.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private securityLabelNumber?: UnsignedIntType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `doNotPerform` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getDoNotPerformElement(): BooleanType {
    return this.doNotPerform ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `doNotPerform` property.
   *
   * @param element - the `doNotPerform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerformElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.doNotPerform; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.doNotPerform = element;
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerformElement(): boolean {
    return isDefined<BooleanType>(this.doNotPerform) && !this.doNotPerform.isEmpty();
  }

  /**
   * @returns the `doNotPerform` property value as a fhirBoolean if defined; else undefined
   */
  public getDoNotPerform(): fhirBoolean | undefined {
    return this.doNotPerform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `doNotPerform` property.
   *
   * @param value - the `doNotPerform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerform(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Contract.term.action.doNotPerform (${String(value)})`;
      this.doNotPerform = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerform(): boolean {
    return this.hasDoNotPerformElement();
  }

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
      const optErrMsg = `Invalid Contract.term.action.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a ContractTermActionSubjectComponent array
   */
  public getSubject(): ContractTermActionSubjectComponent[] {
    return this.subject ?? ([] as ContractTermActionSubjectComponent[]);
  }

  /**
   * Assigns the provided ContractTermActionSubjectComponent array value to the `subject` property.
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubject(value: ContractTermActionSubjectComponent[] | undefined): this {
    if (isDefinedList<ContractTermActionSubjectComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.action.subject; Provided value array has an element that is not an instance of ContractTermActionSubjectComponent.`;
      assertFhirTypeList<ContractTermActionSubjectComponent>(value, ContractTermActionSubjectComponent, optErrMsg);
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContractTermActionSubjectComponent value to the `subject` array property.
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubject(value: ContractTermActionSubjectComponent | undefined): this {
    if (isDefined<ContractTermActionSubjectComponent>(value)) {
      const optErrMsg = `Invalid Contract.term.action.subject; Provided element is not an instance of ContractTermActionSubjectComponent.`;
      assertFhirType<ContractTermActionSubjectComponent>(value, ContractTermActionSubjectComponent, optErrMsg);
      this.initSubject();
      this.subject?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefinedList<ContractTermActionSubjectComponent>(this.subject) && this.subject.some((item: ContractTermActionSubjectComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subject` property
   */
  private initSubject(): void {
    if(!this.hasSubject()) {
      this.subject = [] as ContractTermActionSubjectComponent[];
    }
  }

  /**
   * @returns the `intent` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIntent(): CodeableConcept {
    return this.intent ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `intent` property.
   *
   * @param value - the `intent` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntent(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.action.intent; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.intent = value;
    } else {
      this.intent = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntent(): boolean {
    return isDefined<CodeableConcept>(this.intent) && !this.intent.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a StringType array
   */
  public getLinkIdElement(): StringType[] {
    return this.linkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `linkId` property.
   *
   * @param element - the `linkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.linkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `linkId` array property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.linkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initLinkId();
      this.linkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.linkId) && this.linkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `linkId` property value as a fhirString array
   */
  public getLinkId(): fhirString[] {
    this.initLinkId();
    const linkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.linkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        linkIdValues.push(value);
      }
    }
    return linkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `linkId` property.
   *
   * @param value - the `linkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const linkIdElements = [] as StringType[];
      for (const linkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.action.linkId array item (${String(linkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(linkIdValue, fhirStringSchema, optErrMsg));
        linkIdElements.push(element);
      }
      this.linkId = linkIdElements;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `linkId` array property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.action.linkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initLinkId();
      this.addLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
  }

  /**
   * Initialize the `linkId` property
   */
  private initLinkId(): void {
    if (!this.hasLinkId()) {
      this.linkId = [] as StringType[];
    }
  }

  /**
   * @returns the `status` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatus(): CodeableConcept {
    return this.status ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `status` property.
   *
   * @param value - the `status` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatus(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.action.status; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.status = value;
    } else {
      this.status = null;
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
   * @returns the `context` property value as a Reference object; else an empty Reference object
   */
  public getContext(): Reference {
    return this.context ?? new Reference();
  }

  /**
   * Assigns the provided Context object value to the `context` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.action.context', ['Encounter','EpisodeOfCare',])`
   *
   * @param value - the `context` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.action.context', [
    'Encounter',
  
    'EpisodeOfCare',
  ])
  public setContext(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefined<Reference>(this.context) && !this.context.isEmpty();
  }

  /**
   * @returns the `contextLinkId` property value as a StringType array
   */
  public getContextLinkIdElement(): StringType[] {
    return this.contextLinkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `contextLinkId` property.
   *
   * @param element - the `contextLinkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContextLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.contextLinkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.contextLinkId = element;
    } else {
      this.contextLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `contextLinkId` array property.
   *
   * @param element - the `contextLinkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addContextLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.contextLinkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initContextLinkId();
      this.contextLinkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `contextLinkId` property exists and has a value; `false` otherwise
   */
  public hasContextLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.contextLinkId) && this.contextLinkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `contextLinkId` property value as a fhirString array
   */
  public getContextLinkId(): fhirString[] {
    this.initContextLinkId();
    const contextLinkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.contextLinkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        contextLinkIdValues.push(value);
      }
    }
    return contextLinkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `contextLinkId` property.
   *
   * @param value - the `contextLinkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContextLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const contextLinkIdElements = [] as StringType[];
      for (const contextLinkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.action.contextLinkId array item (${String(contextLinkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(contextLinkIdValue, fhirStringSchema, optErrMsg));
        contextLinkIdElements.push(element);
      }
      this.contextLinkId = contextLinkIdElements;
    } else {
      this.contextLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `contextLinkId` array property.
   *
   * @param value - the `contextLinkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addContextLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.action.contextLinkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initContextLinkId();
      this.addContextLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `contextLinkId` property exists and has a value; `false` otherwise
   */
  public hasContextLinkId(): boolean {
    return this.hasContextLinkIdElement();
  }

  /**
   * Initialize the `contextLinkId` property
   */
  private initContextLinkId(): void {
    if (!this.hasContextLinkId()) {
      this.contextLinkId = [] as StringType[];
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
   * @decorator `@ChoiceDataTypes('Contract.term.action.occurrence[x]')`
   *
   * @param value - the `occurrence` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.term.action.occurrence[x]')
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
        `DataType mismatch for Contract.term.action.occurrence[x]: Expected DateTimeType but encountered ${this.occurrence.fhirType()}`,
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
        `DataType mismatch for Contract.term.action.occurrence[x]: Expected Period but encountered ${this.occurrence.fhirType()}`,
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
        `DataType mismatch for Contract.term.action.occurrence[x]: Expected Timing but encountered ${this.occurrence.fhirType()}`,
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
   * @returns the `requester` property value as a Reference array
   */
  public getRequester(): Reference[] {
    return this.requester ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `requester` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.action.requester', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Device','Group','Organization',])`
   *
   * @param value - the `requester` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.action.requester', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Group',
  
    'Organization',
  ])
  public setRequester(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.requester = value;
    } else {
      this.requester = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `requester` array property.
   *
   * @decorator `@ReferenceTargets('Contract.term.action.requester', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Device','Group','Organization',])`
   *
   * @param value - the `requester` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.action.requester', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Group',
  
    'Organization',
  ])
  public addRequester(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRequester();
      this.requester?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `requester` property exists and has a value; `false` otherwise
   */
  public hasRequester(): boolean {
    return isDefinedList<Reference>(this.requester) && this.requester.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `requester` property
   */
  private initRequester(): void {
    if (!this.hasRequester()) {
      this.requester = [] as Reference[];
    }
  }

  /**
   * @returns the `requesterLinkId` property value as a StringType array
   */
  public getRequesterLinkIdElement(): StringType[] {
    return this.requesterLinkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `requesterLinkId` property.
   *
   * @param element - the `requesterLinkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequesterLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.requesterLinkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.requesterLinkId = element;
    } else {
      this.requesterLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `requesterLinkId` array property.
   *
   * @param element - the `requesterLinkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addRequesterLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.requesterLinkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initRequesterLinkId();
      this.requesterLinkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `requesterLinkId` property exists and has a value; `false` otherwise
   */
  public hasRequesterLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.requesterLinkId) && this.requesterLinkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `requesterLinkId` property value as a fhirString array
   */
  public getRequesterLinkId(): fhirString[] {
    this.initRequesterLinkId();
    const requesterLinkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.requesterLinkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        requesterLinkIdValues.push(value);
      }
    }
    return requesterLinkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `requesterLinkId` property.
   *
   * @param value - the `requesterLinkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequesterLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const requesterLinkIdElements = [] as StringType[];
      for (const requesterLinkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.action.requesterLinkId array item (${String(requesterLinkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(requesterLinkIdValue, fhirStringSchema, optErrMsg));
        requesterLinkIdElements.push(element);
      }
      this.requesterLinkId = requesterLinkIdElements;
    } else {
      this.requesterLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `requesterLinkId` array property.
   *
   * @param value - the `requesterLinkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addRequesterLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.action.requesterLinkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initRequesterLinkId();
      this.addRequesterLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `requesterLinkId` property exists and has a value; `false` otherwise
   */
  public hasRequesterLinkId(): boolean {
    return this.hasRequesterLinkIdElement();
  }

  /**
   * Initialize the `requesterLinkId` property
   */
  private initRequesterLinkId(): void {
    if (!this.hasRequesterLinkId()) {
      this.requesterLinkId = [] as StringType[];
    }
  }

  /**
   * @returns the `performerType` property value as a CodeableConcept array
   */
  public getPerformerType(): CodeableConcept[] {
    return this.performerType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `performerType` property.
   *
   * @param value - the `performerType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformerType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.action.performerType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.performerType = value;
    } else {
      this.performerType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `performerType` array property.
   *
   * @param value - the `performerType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformerType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.action.performerType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPerformerType();
      this.performerType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performerType` property exists and has a value; `false` otherwise
   */
  public hasPerformerType(): boolean {
    return isDefinedList<CodeableConcept>(this.performerType) && this.performerType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `performerType` property
   */
  private initPerformerType(): void {
    if(!this.hasPerformerType()) {
      this.performerType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `performerRole` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPerformerRole(): CodeableConcept {
    return this.performerRole ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PerformerRole object value to the `performerRole` property.
   *
   * @param value - the `performerRole` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformerRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.action.performerRole; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.performerRole = value;
    } else {
      this.performerRole = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performerRole` property exists and has a value; `false` otherwise
   */
  public hasPerformerRole(): boolean {
    return isDefined<CodeableConcept>(this.performerRole) && !this.performerRole.isEmpty();
  }

  /**
   * @returns the `performer` property value as a Reference object; else an empty Reference object
   */
  public getPerformer(): Reference {
    return this.performer ?? new Reference();
  }

  /**
   * Assigns the provided Performer object value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.action.performer', ['RelatedPerson','Patient','Practitioner','PractitionerRole','CareTeam','Device','Substance','Organization','Location',])`
   *
   * @param value - the `performer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.action.performer', [
    'RelatedPerson',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'CareTeam',
  
    'Device',
  
    'Substance',
  
    'Organization',
  
    'Location',
  ])
  public setPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefined<Reference>(this.performer) && !this.performer.isEmpty();
  }

  /**
   * @returns the `performerLinkId` property value as a StringType array
   */
  public getPerformerLinkIdElement(): StringType[] {
    return this.performerLinkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `performerLinkId` property.
   *
   * @param element - the `performerLinkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPerformerLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.performerLinkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.performerLinkId = element;
    } else {
      this.performerLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `performerLinkId` array property.
   *
   * @param element - the `performerLinkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPerformerLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.performerLinkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initPerformerLinkId();
      this.performerLinkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `performerLinkId` property exists and has a value; `false` otherwise
   */
  public hasPerformerLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.performerLinkId) && this.performerLinkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `performerLinkId` property value as a fhirString array
   */
  public getPerformerLinkId(): fhirString[] {
    this.initPerformerLinkId();
    const performerLinkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.performerLinkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        performerLinkIdValues.push(value);
      }
    }
    return performerLinkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `performerLinkId` property.
   *
   * @param value - the `performerLinkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPerformerLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const performerLinkIdElements = [] as StringType[];
      for (const performerLinkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.action.performerLinkId array item (${String(performerLinkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(performerLinkIdValue, fhirStringSchema, optErrMsg));
        performerLinkIdElements.push(element);
      }
      this.performerLinkId = performerLinkIdElements;
    } else {
      this.performerLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `performerLinkId` array property.
   *
   * @param value - the `performerLinkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPerformerLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.action.performerLinkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initPerformerLinkId();
      this.addPerformerLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `performerLinkId` property exists and has a value; `false` otherwise
   */
  public hasPerformerLinkId(): boolean {
    return this.hasPerformerLinkIdElement();
  }

  /**
   * Initialize the `performerLinkId` property
   */
  private initPerformerLinkId(): void {
    if (!this.hasPerformerLinkId()) {
      this.performerLinkId = [] as StringType[];
    }
  }

  /**
   * @returns the `reason` property value as a CodeableReference array
   */
  public getReason(): CodeableReference[] {
    return this.reason ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid Contract.term.action.reason; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid Contract.term.action.reason; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableReference>(this.reason) && this.reason.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `reasonLinkId` property value as a StringType array
   */
  public getReasonLinkIdElement(): StringType[] {
    return this.reasonLinkId ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `reasonLinkId` property.
   *
   * @param element - the `reasonLinkId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReasonLinkIdElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.reasonLinkId; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.reasonLinkId = element;
    } else {
      this.reasonLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `reasonLinkId` array property.
   *
   * @param element - the `reasonLinkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReasonLinkIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.reasonLinkId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initReasonLinkId();
      this.reasonLinkId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonLinkId` property exists and has a value; `false` otherwise
   */
  public hasReasonLinkIdElement(): boolean {
    return isDefinedList<StringType>(this.reasonLinkId) && this.reasonLinkId.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `reasonLinkId` property value as a fhirString array
   */
  public getReasonLinkId(): fhirString[] {
    this.initReasonLinkId();
    const reasonLinkIdValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.reasonLinkId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        reasonLinkIdValues.push(value);
      }
    }
    return reasonLinkIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `reasonLinkId` property.
   *
   * @param value - the `reasonLinkId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReasonLinkId(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const reasonLinkIdElements = [] as StringType[];
      for (const reasonLinkIdValue of value) {
        const optErrMsg = `Invalid Contract.term.action.reasonLinkId array item (${String(reasonLinkIdValue)})`;
        const element = new StringType(parseFhirPrimitiveData(reasonLinkIdValue, fhirStringSchema, optErrMsg));
        reasonLinkIdElements.push(element);
      }
      this.reasonLinkId = reasonLinkIdElements;
    } else {
      this.reasonLinkId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `reasonLinkId` array property.
   *
   * @param value - the `reasonLinkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReasonLinkId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Contract.term.action.reasonLinkId array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initReasonLinkId();
      this.addReasonLinkIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonLinkId` property exists and has a value; `false` otherwise
   */
  public hasReasonLinkId(): boolean {
    return this.hasReasonLinkIdElement();
  }

  /**
   * Initialize the `reasonLinkId` property
   */
  private initReasonLinkId(): void {
    if (!this.hasReasonLinkId()) {
      this.reasonLinkId = [] as StringType[];
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
      const optErrMsg = `Invalid Contract.term.action.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Contract.term.action.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `securityLabelNumber` property value as a UnsignedIntType array
   */
  public getSecurityLabelNumberElement(): UnsignedIntType[] {
    return this.securityLabelNumber ?? ([] as UnsignedIntType[]);
  }

  /**
   * Assigns the provided UnsignedIntType array value to the `securityLabelNumber` property.
   *
   * @param element - the `securityLabelNumber` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumberElement(element: UnsignedIntType[] | undefined): this {
    if (isDefinedList<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.securityLabelNumber; Provided value array has an element that is not an instance of UnsignedIntType.`;
      assertFhirTypeList<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.securityLabelNumber = element;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided UnsignedIntType value to the `securityLabelNumber` array property.
   *
   * @param element - the `securityLabelNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Contract.term.action.securityLabelNumber; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.initSecurityLabelNumber();
      this.securityLabelNumber?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumberElement(): boolean {
    return isDefinedList<UnsignedIntType>(this.securityLabelNumber) && this.securityLabelNumber.some((item: UnsignedIntType) => !item.isEmpty());
  }

  /**
   * @returns the `securityLabelNumber` property value as a fhirUnsignedInt array
   */
  public getSecurityLabelNumber(): fhirUnsignedInt[] {
    this.initSecurityLabelNumber();
    const securityLabelNumberValues = [] as fhirUnsignedInt[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.securityLabelNumber!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        securityLabelNumberValues.push(value);
      }
    }
    return securityLabelNumberValues;
  }

  /**
   * Assigns the provided primitive value array to the `securityLabelNumber` property.
   *
   * @param value - the `securityLabelNumber` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSecurityLabelNumber(value: fhirUnsignedInt[] | undefined): this {
    if (isDefinedList<fhirUnsignedInt>(value)) {
      const securityLabelNumberElements = [] as UnsignedIntType[];
      for (const securityLabelNumberValue of value) {
        const optErrMsg = `Invalid Contract.term.action.securityLabelNumber array item (${String(securityLabelNumberValue)})`;
        const element = new UnsignedIntType(parseFhirPrimitiveData(securityLabelNumberValue, fhirUnsignedIntSchema, optErrMsg));
        securityLabelNumberElements.push(element);
      }
      this.securityLabelNumber = securityLabelNumberElements;
    } else {
      this.securityLabelNumber = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `securityLabelNumber` array property.
   *
   * @param value - the `securityLabelNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSecurityLabelNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Contract.term.action.securityLabelNumber array item (${String(value)})`;
      const element = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
      this.initSecurityLabelNumber();
      this.addSecurityLabelNumberElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `securityLabelNumber` property exists and has a value; `false` otherwise
   */
  public hasSecurityLabelNumber(): boolean {
    return this.hasSecurityLabelNumberElement();
  }

  /**
   * Initialize the `securityLabelNumber` property
   */
  private initSecurityLabelNumber(): void {
    if (!this.hasSecurityLabelNumber()) {
      this.securityLabelNumber = [] as UnsignedIntType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.doNotPerform,
      this.type_,
      this.subject,
      this.intent,
      this.linkId,
      this.status,
      this.context,
      this.contextLinkId,
      this.occurrence,
      this.requester,
      this.requesterLinkId,
      this.performerType,
      this.performerRole,
      this.performer,
      this.performerLinkId,
      this.reason,
      this.reasonLinkId,
      this.note,
      this.securityLabelNumber,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.intent, this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermActionComponent {
    const dest = new ContractTermActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermActionComponent): void {
    super.copyValues(dest);
    dest.doNotPerform = this.doNotPerform?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const subjectList = copyListValues<ContractTermActionSubjectComponent>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.intent = this.intent ? this.intent.copy() : null;
    const linkIdList = copyListValues<StringType>(this.linkId);
    dest.linkId = linkIdList.length === 0 ? undefined : linkIdList;
    dest.status = this.status ? this.status.copy() : null;
    dest.context = this.context?.copy();
    const contextLinkIdList = copyListValues<StringType>(this.contextLinkId);
    dest.contextLinkId = contextLinkIdList.length === 0 ? undefined : contextLinkIdList;
    dest.occurrence = this.occurrence?.copy() as IDataType;
    const requesterList = copyListValues<Reference>(this.requester);
    dest.requester = requesterList.length === 0 ? undefined : requesterList;
    const requesterLinkIdList = copyListValues<StringType>(this.requesterLinkId);
    dest.requesterLinkId = requesterLinkIdList.length === 0 ? undefined : requesterLinkIdList;
    const performerTypeList = copyListValues<CodeableConcept>(this.performerType);
    dest.performerType = performerTypeList.length === 0 ? undefined : performerTypeList;
    dest.performerRole = this.performerRole?.copy();
    dest.performer = this.performer?.copy();
    const performerLinkIdList = copyListValues<StringType>(this.performerLinkId);
    dest.performerLinkId = performerLinkIdList.length === 0 ? undefined : performerLinkIdList;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const reasonLinkIdList = copyListValues<StringType>(this.reasonLinkId);
    dest.reasonLinkId = reasonLinkIdList.length === 0 ? undefined : reasonLinkIdList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const securityLabelNumberList = copyListValues<UnsignedIntType>(this.securityLabelNumber);
    dest.securityLabelNumber = securityLabelNumberList.length === 0 ? undefined : securityLabelNumberList;
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

    if (this.hasDoNotPerformElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getDoNotPerformElement(), 'doNotPerform', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirBackboneElementListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasIntent()) {
      setFhirComplexJson(this.getIntent(), 'intent', jsonObj);
    }

    if (this.hasLinkId()) {
      setFhirPrimitiveListJson(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasContext()) {
      setFhirComplexJson(this.getContext(), 'context', jsonObj);
    }

    if (this.hasContextLinkId()) {
      setFhirPrimitiveListJson(this.getContextLinkIdElement(), 'contextLinkId', jsonObj);
    }

    if (this.hasOccurrence()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOccurrence()!, 'occurrence', jsonObj);
    }

    if (this.hasRequester()) {
      setFhirComplexListJson(this.getRequester(), 'requester', jsonObj);
    }

    if (this.hasRequesterLinkId()) {
      setFhirPrimitiveListJson(this.getRequesterLinkIdElement(), 'requesterLinkId', jsonObj);
    }

    if (this.hasPerformerType()) {
      setFhirComplexListJson(this.getPerformerType(), 'performerType', jsonObj);
    }

    if (this.hasPerformerRole()) {
      setFhirComplexJson(this.getPerformerRole(), 'performerRole', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasPerformerLinkId()) {
      setFhirPrimitiveListJson(this.getPerformerLinkIdElement(), 'performerLinkId', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasReasonLinkId()) {
      setFhirPrimitiveListJson(this.getReasonLinkIdElement(), 'reasonLinkId', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasSecurityLabelNumber()) {
      setFhirPrimitiveListJson(this.getSecurityLabelNumberElement(), 'securityLabelNumber', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractTermActionSubjectComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Entity of the action
 * - **Definition:** Entity of the action.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractTermActionSubjectComponent extends BackboneElement implements IBackboneElement {
  constructor(reference: Reference[] | null = null) {
    super();

    this.reference = null;
    if (isDefinedList<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ContractTermActionSubjectComponent` JSON to instantiate the ContractTermActionSubjectComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractTermActionSubjectComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractTermActionSubjectComponent
   * @returns ContractTermActionSubjectComponent data model or undefined for `ContractTermActionSubjectComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractTermActionSubjectComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractTermActionSubjectComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractTermActionSubjectComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setReference(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setReference(null);
          } else {
            instance.addReference(datatype);
          }
        });
      }
    } else {
      instance.setReference(null);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    return instance;
  }

  /**
   * Contract.term.action.subject.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity of the action
   * - **Definition:** The entity the action is performed or not performed on or for.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference: Reference[] | null;

  /**
   * Contract.term.action.subject.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role type of the agent
   * - **Definition:** Role type of agent assigned roles in this Contract.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a Reference array
   */
  public getReference(): Reference[] {
    return this.reference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('Contract.term.action.subject.reference', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Device','Group','Organization',])`
   *
   * @param value - the `reference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.action.subject.reference', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Group',
  
    'Organization',
  ])
  public setReference(value: Reference[] | undefined | null): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reference` array property.
   *
   * @decorator `@ReferenceTargets('Contract.term.action.subject.reference', ['Patient','RelatedPerson','Practitioner','PractitionerRole','Device','Group','Organization',])`
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.term.action.subject.reference', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Group',
  
    'Organization',
  ])
  public addReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReference();
      this.reference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefinedList<Reference>(this.reference) && this.reference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reference` property
   */
  private initReference(): void {
    if (!this.hasReference()) {
      this.reference = [] as Reference[];
    }
  }

  /**
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Contract.term.action.subject.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.term.action.subject';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.role,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractTermActionSubjectComponent {
    const dest = new ContractTermActionSubjectComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractTermActionSubjectComponent): void {
    super.copyValues(dest);
    const referenceList = copyListValues<Reference>(this.reference);
    dest.reference = referenceList.length === 0 ? null : referenceList;
    dest.role = this.role?.copy();
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

    if (this.hasReference()) {
      setFhirComplexListJson(this.getReference(), 'reference', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractSignerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contract Signatory
 * - **Definition:** Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.
 * - **Comment:** Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic. For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 * - **Requirements:** The Contract.signer applies a signature to the Contract.binding referenced resource, which is the documentation that is the legal "source of truth". The Contract.signer may delegate, such as a legally recognized personal representative, or have a delegate assigned e.g., by a court of law, to actually sign the Contract, such as a trustee in the case of incompetence.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractSignerComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: Coding | null = null, party: Reference | null = null, signature: Signature[] | null = null) {
    super();

    this.type_ = null;
    if (isDefined<Coding>(type_)) {
      this.setType(type_);
    }

    this.party = null;
    if (isDefined<Reference>(party)) {
      this.setParty(party);
    }

    this.signature = null;
    if (isDefinedList<Signature>(signature)) {
      this.setSignature(signature);
    }
  }

  /**
   * Parse the provided `ContractSignerComponent` JSON to instantiate the ContractSignerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractSignerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractSignerComponent
   * @returns ContractSignerComponent data model or undefined for `ContractSignerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractSignerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractSignerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractSignerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'party';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setParty(null);
      } else {
        instance.setParty(datatype);
      }
    } else {
      instance.setParty(null);
    }

    fieldName = 'signature';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setSignature(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Signature | undefined = Signature.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setSignature(null);
          } else {
            instance.addSignature(datatype);
          }
        });
      }
    } else {
      instance.setSignature(null);
    }

    return instance;
  }

  /**
   * Contract.signer.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Signatory Role
   * - **Definition:** Role of this Contract signer, e.g. notary, grantee.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: Coding | null;

  /**
   * Contract.signer.party Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Signatory Party
   * - **Definition:** Party which is a signator to this Contract.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private party: Reference | null;

  /**
   * Contract.signer.signature Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Documentation Signature
   * - **Definition:** Legally binding Contract DSIG signature contents in Base64.
   * - **FHIR Type:** `Signature`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private signature: Signature[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a Coding object if defined; else an empty Coding object
   */
  public getType(): Coding {
    return this.type_ ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Contract.signer.type; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
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
    return isDefined<Coding>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `party` property value as a Reference object if defined; else an empty Reference object
   */
  public getParty(): Reference {
    return this.party ?? new Reference();
  }

  /**
   * Assigns the provided Party object value to the `party` property.
   *
   * @decorator `@ReferenceTargets('Contract.signer.party', ['Organization','Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `party` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Contract.signer.party', [
    'Organization',
  
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setParty(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.party = value;
    } else {
      this.party = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `party` property exists and has a value; `false` otherwise
   */
  public hasParty(): boolean {
    return isDefined<Reference>(this.party) && !this.party.isEmpty();
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
  public setSignature(value: Signature[] | undefined | null): this {
    if (isDefinedList<Signature>(value)) {
      const optErrMsg = `Invalid Contract.signer.signature; Provided value array has an element that is not an instance of Signature.`;
      assertFhirTypeList<Signature>(value, Signature, optErrMsg);
      this.signature = value;
    } else {
      this.signature = null;
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
      const optErrMsg = `Invalid Contract.signer.signature; Provided element is not an instance of Signature.`;
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
    return 'Contract.signer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.party,
      this.signature,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.party, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractSignerComponent {
    const dest = new ContractSignerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractSignerComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.party = this.party ? this.party.copy() : null;
    const signatureList = copyListValues<Signature>(this.signature);
    dest.signature = signatureList.length === 0 ? null : signatureList;
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

    if (this.hasParty()) {
      setFhirComplexJson(this.getParty(), 'party', jsonObj);
    }

    if (this.hasSignature()) {
      setFhirComplexListJson(this.getSignature(), 'signature', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractFriendlyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contract Friendly Language
 * - **Definition:** The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractFriendlyComponent extends BackboneElement implements IBackboneElement {
  constructor(content: IDataType | null = null) {
    super();

    this.content = null;
    if (isDefined<IDataType>(content)) {
      this.setContent(content);
    }

  }

  /**
   * Parse the provided `ContractFriendlyComponent` JSON to instantiate the ContractFriendlyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractFriendlyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractFriendlyComponent
   * @returns ContractFriendlyComponent data model or undefined for `ContractFriendlyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractFriendlyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractFriendlyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractFriendlyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ContractFriendlyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ContractFriendlyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'content[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const content: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (content === undefined) {
      instance.setContent(null);
    } else {
      instance.setContent(content);
    }

    return instance;
  }

  /**
   * Contract.friendly.content[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.friendly.content[x]', ['Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Easily comprehended representation of this Contract
   * - **Definition:** Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
   * - **FHIR Types:**
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.friendly.content[x]',[
    'Attachment',
    'Reference',
  ])
  private content: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `content` property value as a DataType object; else null
   */
  public getContent(): IDataType | null {
    return this.content;
  }

  /**
   * Assigns the provided DataType object value to the `content` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.friendly.content[x]')`
   *
   * @param value - the `content` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.friendly.content[x]')
  public setContent(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.content = value;
    } else {
      this.content = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefined<IDataType>(this.content) && !this.content.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `content` property value as a Attachment object if defined; else null
   */
  public getContentAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.friendly.content[x]: Expected Attachment but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasContentAttachment(): boolean {
    return this.hasContent() && this.content instanceof Attachment;
  }

  /**
   * @returns the `content` property value as a Reference object if defined; else null
   */
  public getContentReference(): Reference | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.friendly.content[x]: Expected Reference but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasContentReference(): boolean {
    return this.hasContent() && this.content instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.friendly';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.content,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.content, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractFriendlyComponent {
    const dest = new ContractFriendlyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractFriendlyComponent): void {
    super.copyValues(dest);
    dest.content = this.content ? this.content.copy() as IDataType : null;
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

    if (this.hasContent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getContent()!, 'content', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractLegalComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Contract Legal Language
 * - **Definition:** List of Legal expressions or representations of this Contract.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractLegalComponent extends BackboneElement implements IBackboneElement {
  constructor(content: IDataType | null = null) {
    super();

    this.content = null;
    if (isDefined<IDataType>(content)) {
      this.setContent(content);
    }

  }

  /**
   * Parse the provided `ContractLegalComponent` JSON to instantiate the ContractLegalComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractLegalComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractLegalComponent
   * @returns ContractLegalComponent data model or undefined for `ContractLegalComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractLegalComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractLegalComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractLegalComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ContractLegalComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ContractLegalComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'content[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const content: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (content === undefined) {
      instance.setContent(null);
    } else {
      instance.setContent(content);
    }

    return instance;
  }

  /**
   * Contract.legal.content[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.legal.content[x]', ['Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contract Legal Text
   * - **Definition:** Contract legal text in human renderable form.
   * - **FHIR Types:**
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.legal.content[x]',[
    'Attachment',
    'Reference',
  ])
  private content: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `content` property value as a DataType object; else null
   */
  public getContent(): IDataType | null {
    return this.content;
  }

  /**
   * Assigns the provided DataType object value to the `content` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.legal.content[x]')`
   *
   * @param value - the `content` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.legal.content[x]')
  public setContent(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.content = value;
    } else {
      this.content = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefined<IDataType>(this.content) && !this.content.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `content` property value as a Attachment object if defined; else null
   */
  public getContentAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.legal.content[x]: Expected Attachment but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasContentAttachment(): boolean {
    return this.hasContent() && this.content instanceof Attachment;
  }

  /**
   * @returns the `content` property value as a Reference object if defined; else null
   */
  public getContentReference(): Reference | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.legal.content[x]: Expected Reference but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasContentReference(): boolean {
    return this.hasContent() && this.content instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.legal';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.content,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.content, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractLegalComponent {
    const dest = new ContractLegalComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractLegalComponent): void {
    super.copyValues(dest);
    dest.content = this.content ? this.content.copy() as IDataType : null;
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

    if (this.hasContent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getContent()!, 'content', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ContractRuleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Computable Contract Language
 * - **Definition:** List of Computable Policy Rule Language Representations of this Contract.
 *
 * @category Data Models: Resource
 * @see [FHIR Contract](http://hl7.org/fhir/StructureDefinition/Contract)
 */
export class ContractRuleComponent extends BackboneElement implements IBackboneElement {
  constructor(content: IDataType | null = null) {
    super();

    this.content = null;
    if (isDefined<IDataType>(content)) {
      this.setContent(content);
    }

  }

  /**
   * Parse the provided `ContractRuleComponent` JSON to instantiate the ContractRuleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ContractRuleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ContractRuleComponent
   * @returns ContractRuleComponent data model or undefined for `ContractRuleComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ContractRuleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ContractRuleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ContractRuleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = ContractRuleComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ContractRuleComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'content[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const content: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (content === undefined) {
      instance.setContent(null);
    } else {
      instance.setContent(content);
    }

    return instance;
  }

  /**
   * Contract.rule.content[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Contract.rule.content[x]', ['Attachment','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Computable Contract Rules
   * - **Definition:** Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
   * - **FHIR Types:**
   *     'Attachment',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Contract.rule.content[x]',[
    'Attachment',
    'Reference',
  ])
  private content: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `content` property value as a DataType object; else null
   */
  public getContent(): IDataType | null {
    return this.content;
  }

  /**
   * Assigns the provided DataType object value to the `content` property.
   *
   * @decorator `@ChoiceDataTypes('Contract.rule.content[x]')`
   *
   * @param value - the `content` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Contract.rule.content[x]')
  public setContent(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.content = value;
    } else {
      this.content = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefined<IDataType>(this.content) && !this.content.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `content` property value as a Attachment object if defined; else null
   */
  public getContentAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.rule.content[x]: Expected Attachment but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasContentAttachment(): boolean {
    return this.hasContent() && this.content instanceof Attachment;
  }

  /**
   * @returns the `content` property value as a Reference object if defined; else null
   */
  public getContentReference(): Reference | null {
    if (!isDefined<IDataType>(this.content)) {
      return null;
    }
    if (!(this.content instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Contract.rule.content[x]: Expected Reference but encountered ${this.content.fhirType()}`,
      );
    }
    return this.content;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasContentReference(): boolean {
    return this.hasContent() && this.content instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Contract.rule';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.content,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.content, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ContractRuleComponent {
    const dest = new ContractRuleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ContractRuleComponent): void {
    super.copyValues(dest);
    dest.content = this.content ? this.content.copy() as IDataType : null;
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

    if (this.hasContent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getContent()!, 'content', jsonObj);
    }

    return jsonObj;
  }
}
