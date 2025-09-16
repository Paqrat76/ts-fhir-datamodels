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
 * EvidenceVariable Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
 * StructureDefinition.name: EvidenceVariable
 * StructureDefinition.description: The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IdType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PositiveIntType,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirId,
  fhirIdSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirPositiveInt,
  fhirPositiveIntSchema,
  fhirString,
  fhirStringSchema,
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
import { Annotation, CodeableConcept, Coding, ContactDetail, Expression, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference, RelatedArtifact, UsageContext } from '../complex-types/complex-datatypes';
import { CharacteristicCombinationEnum } from '../code-systems/CharacteristicCombinationEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { VariableHandlingEnum } from '../code-systems/VariableHandlingEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * EvidenceVariable Class
 *
 * @remarks
 * The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
 *
 * Need to be able to define and reuse the definition of individual elements of a research question.
 *
 * **FHIR Specification**
 * - **Short:** A definition of an exposure, outcome, or other variable
 * - **Definition:** The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
 * - **Comment:** The EvidenceVariable may be an exposure variable (intervention, condition, or state), a measured variable (outcome or observed parameter), or other variable (such as confounding factor).
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceVariable](http://hl7.org/fhir/StructureDefinition/EvidenceVariable)
 */
export class EvidenceVariable extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.variableHandlingEnum = new VariableHandlingEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'EvidenceVariable.status',
    );
  }

  /**
   * Parse the provided `EvidenceVariable` JSON to instantiate the EvidenceVariable data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceVariable`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceVariable
   * @returns EvidenceVariable data model or undefined for `EvidenceVariable`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceVariable | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceVariable';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceVariable();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'EvidenceVariable');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = EvidenceVariable[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceVariable`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
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

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'versionAlgorithm[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const versionAlgorithm: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setVersionAlgorithm(versionAlgorithm);

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

    fieldName = 'shortTitle';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setShortTitleElement(datatype);
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

    fieldName = 'experimental';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setExperimentalElement(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'publisher';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPublisherElement(datatype);
    }

    fieldName = 'contact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addContact(datatype);
          }
        });
      }
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
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

    fieldName = 'useContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: UsageContext | undefined = UsageContext.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUseContext(datatype);
          }
        });
      }
    }

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPurposeElement(datatype);
    }

    fieldName = 'copyright';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCopyrightElement(datatype);
    }

    fieldName = 'copyrightLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCopyrightLabelElement(datatype);
    }

    fieldName = 'approvalDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setApprovalDateElement(datatype);
    }

    fieldName = 'lastReviewDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setLastReviewDateElement(datatype);
    }

    fieldName = 'effectivePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffectivePeriod(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAuthor(datatype);
          }
        });
      }
    }

    fieldName = 'editor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEditor(datatype);
          }
        });
      }
    }

    fieldName = 'reviewer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReviewer(datatype);
          }
        });
      }
    }

    fieldName = 'endorser';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEndorser(datatype);
          }
        });
      }
    }

    fieldName = 'relatedArtifact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelatedArtifact(datatype);
          }
        });
      }
    }

    fieldName = 'actual';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActualElement(datatype);
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceVariableCharacteristicComponent | undefined = EvidenceVariableCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCharacteristic(component);
          }
        });
      }
    }

    fieldName = 'handling';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setHandlingElement(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceVariableCategoryComponent | undefined = EvidenceVariableCategoryComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addCategory(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * EvidenceVariable.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this evidence variable, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this evidence variable when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this evidence variable is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the evidence variable is stored on different servers.
   * - **Comment:** In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the meta.source element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the evidence variable to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * EvidenceVariable.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the evidence variable
   * - **Definition:** A formal identifier that is used to identify this evidence variable when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * EvidenceVariable.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the evidence variable
   * - **Definition:** The identifier that is used to identify this version of the evidence variable when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the evidence variable author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
   * - **Comment:** There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * EvidenceVariable.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceVariable.versionAlgorithm[x]', ['string','Coding',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How to compare versions
   * - **Definition:** Indicates the mechanism used to compare versions to determine which is more current.
   * - **Comment:** If set as a string, this is a FHIRPath expression that has two additional context variables passed in - %version1 and %version2 and will return a negative number if version1 is newer, a positive number if version2 is newer, and a 0 if the version ordering can\'t successfully be determined.
   * - **FHIR Types:**
   *     'string',
   *     'Coding',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('EvidenceVariable.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * EvidenceVariable.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this evidence variable (computer friendly)
   * - **Definition:** A natural language name identifying the evidence variable. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * EvidenceVariable.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this evidence variable (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the evidence variable.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * EvidenceVariable.shortTitle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Title for use in informal contexts
   * - **Definition:** The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   * - **Requirements:** Need to be able to reference the content by a short description, but still provide a longer, more formal title for the content.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private shortTitle?: StringType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * EvidenceVariable.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this evidence variable. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of evidence variables that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This is labeled as &quot;Is Modifier&quot; because applications should not use a retired {{title}} without due consideration
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * EvidenceVariable.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this resource is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private experimental?: BooleanType | undefined;

  /**
   * EvidenceVariable.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the evidence variable was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the evidence variable changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * EvidenceVariable.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the evidence variable.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the evidence variable.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * EvidenceVariable.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for the publisher
   * - **Definition:** Contact details to assist a user in finding and communicating with the publisher.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)). See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactDetail[] | undefined;

  /**
   * EvidenceVariable.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the evidence variable
   * - **Definition:** A free text natural language description of the evidence variable from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * EvidenceVariable.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes or explanatory notes
   * - **Definition:** A human-readable string to clarify or explain concepts about the resource.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * EvidenceVariable.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence variable instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * EvidenceVariable.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this EvidenceVariable is defined
   * - **Definition:** Explanation of why this EvidenceVariable is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the EvidenceVariable. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is. This may be used to point to source materials or specifications that drove the structure of this EvidenceVariable.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * EvidenceVariable.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the resource and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the resource.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * EvidenceVariable.copyrightLabel Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Copyright holder and year(s)
   * - **Definition:** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. \'All rights reserved\', \'Some rights reserved\').
   * - **Comment:** The (c) symbol should NOT be included in this string. It will be added by software when rendering the notation. Full details about licensing, restrictions, warrantees, etc. goes in the more general \'copyright\' element.
   * - **Requirements:** Defines the content expected to be rendered in all representations of the artifact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyrightLabel?: StringType | undefined;

  /**
   * EvidenceVariable.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the resource was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * EvidenceVariable.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the resource was last reviewed by the publisher
   * - **Definition:** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   * - **Comment:** If specified, this date follows the original approval date. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * EvidenceVariable.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the resource is expected to be used
   * - **Definition:** The period during which the resource content was or is planned to be in active use.
   * - **Comment:** The effective period for an EvidenceVariable determines when the content is applicable for usage and is independent of publication and review dates. For example, a variable intended to be used for the year 2016 might be published in 2015. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private effectivePeriod?: Period | undefined;

  /**
   * EvidenceVariable.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authored the content
   * - **Definition:** An individiual or organization primarily involved in the creation and maintenance of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: ContactDetail[] | undefined;

  /**
   * EvidenceVariable.editor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who edited the content
   * - **Definition:** An individual or organization primarily responsible for internal coherence of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private editor?: ContactDetail[] | undefined;

  /**
   * EvidenceVariable.reviewer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who reviewed the content
   * - **Definition:** An individual or organization asserted by the publisher to be primarily responsible for review of some aspect of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)). See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewer?: ContactDetail[] | undefined;

  /**
   * EvidenceVariable.endorser Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who endorsed the content
   * - **Definition:** An individual or organization asserted by the publisher to be responsible for officially endorsing the content for use in some setting.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)). See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endorser?: ContactDetail[] | undefined;

  /**
   * EvidenceVariable.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional documentation, citations, etc
   * - **Definition:** Related artifacts such as additional documentation, justification, or bibliographic references.
   * - **Comment:** Each related artifact is either an attachment, or a reference to another resource, but not both.
   * - **Requirements:** EvidenceVariables must be able to provide enough information for consumers of the content (and/or interventions or results produced by the content) to be able to determine and understand the justification for and evidence in support of the content.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * EvidenceVariable.actual Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual or conceptual
   * - **Definition:** True if the actual variable measured, false if a conceptual representation of the intended variable.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actual?: BooleanType | undefined;

  /**
   * EvidenceVariable.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A defining factor of the EvidenceVariable
   * - **Definition:** A defining factor of the EvidenceVariable. Multiple characteristics are applied with "and" semantics.
   * - **Comment:** Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private characteristic?: EvidenceVariableCharacteristicComponent[] | undefined;

  /**
   * FHIR CodeSystem: VariableHandling
   *
   * @see {@link VariableHandlingEnum }
   */
  private readonly variableHandlingEnum: VariableHandlingEnum;

  /**
   * EvidenceVariable.handling Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** continuous | dichotomous | ordinal | polychotomous
   * - **Definition:** The method of handling in statistical analysis.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  private handling?: EnumCodeType | undefined;

  /**
   * EvidenceVariable.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A grouping for ordinal or polychotomous variables
   * - **Definition:** A grouping for ordinal or polychotomous variables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: EvidenceVariableCategoryComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid EvidenceVariable.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.url (${String(value)})`;
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
      const optErrMsg = `Invalid EvidenceVariable.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid EvidenceVariable.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid EvidenceVariable.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.version (${String(value)})`;
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
   * @returns the `versionAlgorithm` property value as a DataType object if defined; else undefined
   */
  public getVersionAlgorithm(): IDataType | undefined {
    return this.versionAlgorithm;
  }

  /**
   * Assigns the provided DataType object value to the `versionAlgorithm` property.
   *
   * @decorator `@ChoiceDataTypes('EvidenceVariable.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceVariable.versionAlgorithm[x]')
  public setVersionAlgorithm(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.versionAlgorithm = value;
    } else {
      this.versionAlgorithm = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versionAlgorithm` property exists and has a value; `false` otherwise
   */
  public hasVersionAlgorithm(): boolean {
    return isDefined<IDataType>(this.versionAlgorithm) && !this.versionAlgorithm.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `versionAlgorithm` property value as a StringType object if defined; else undefined
   */
  public getVersionAlgorithmStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.versionAlgorithm)) {
      return undefined;
    }
    if (!(this.versionAlgorithm instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
      );
    }
    return this.versionAlgorithm;
  }

  /**
   * @returns `true` if the `versionAlgorithm` property exists as a StringType and has a value; `false` otherwise
   */
  public hasVersionAlgorithmStringType(): boolean {
    return this.hasVersionAlgorithm() && this.versionAlgorithm instanceof StringType;
  }

  /**
   * @returns the `versionAlgorithm` property value as a Coding object if defined; else undefined
   */
  public getVersionAlgorithmCoding(): Coding | undefined {
    if (!isDefined<IDataType | undefined>(this.versionAlgorithm)) {
      return undefined;
    }
    if (!(this.versionAlgorithm instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
      );
    }
    return this.versionAlgorithm;
  }

  /**
   * @returns `true` if the `versionAlgorithm` property exists as a Coding and has a value; `false` otherwise
   */
  public hasVersionAlgorithmCoding(): boolean {
    return this.hasVersionAlgorithm() && this.versionAlgorithm instanceof Coding;
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
      const optErrMsg = `Invalid EvidenceVariable.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.name (${String(value)})`;
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
      const optErrMsg = `Invalid EvidenceVariable.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.title (${String(value)})`;
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
   * @returns the `shortTitle` property value as a StringType object if defined; else an empty StringType object
   */
  public getShortTitleElement(): StringType {
    return this.shortTitle ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `shortTitle` property.
   *
   * @param element - the `shortTitle` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setShortTitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.shortTitle; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.shortTitle = element;
    } else {
      this.shortTitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `shortTitle` property exists and has a value; `false` otherwise
   */
  public hasShortTitleElement(): boolean {
    return isDefined<StringType>(this.shortTitle) && !this.shortTitle.isEmpty();
  }

  /**
   * @returns the `shortTitle` property value as a fhirString if defined; else undefined
   */
  public getShortTitle(): fhirString | undefined {
    return this.shortTitle?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `shortTitle` property.
   *
   * @param value - the `shortTitle` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setShortTitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.shortTitle (${String(value)})`;
      this.shortTitle = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.shortTitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `shortTitle` property exists and has a value; `false` otherwise
   */
  public hasShortTitle(): boolean {
    return this.hasShortTitleElement();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid EvidenceVariable.status`;
      assertEnumCodeType<PublicationStatusEnum>(enumType, PublicationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.publicationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.publicationStatusEnum);
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
   * @returns the `experimental` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExperimentalElement(): BooleanType {
    return this.experimental ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `experimental` property.
   *
   * @param element - the `experimental` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExperimentalElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.experimental; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.experimental = element;
    } else {
      this.experimental = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `experimental` property exists and has a value; `false` otherwise
   */
  public hasExperimentalElement(): boolean {
    return isDefined<BooleanType>(this.experimental) && !this.experimental.isEmpty();
  }

  /**
   * @returns the `experimental` property value as a fhirBoolean if defined; else undefined
   */
  public getExperimental(): fhirBoolean | undefined {
    return this.experimental?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `experimental` property.
   *
   * @param value - the `experimental` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExperimental(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.experimental (${String(value)})`;
      this.experimental = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.experimental = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `experimental` property exists and has a value; `false` otherwise
   */
  public hasExperimental(): boolean {
    return this.hasExperimentalElement();
  }

  /**
   * @returns the `date` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getDateElement(): DateTimeType {
    return this.date ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.date; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else undefined
   */
  public getDate(): fhirDateTime | undefined {
    return this.date?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.date = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDate(): boolean {
    return this.hasDateElement();
  }

  /**
   * @returns the `publisher` property value as a StringType object if defined; else an empty StringType object
   */
  public getPublisherElement(): StringType {
    return this.publisher ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `publisher` property.
   *
   * @param element - the `publisher` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublisherElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.publisher; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.publisher = element;
    } else {
      this.publisher = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisher` property exists and has a value; `false` otherwise
   */
  public hasPublisherElement(): boolean {
    return isDefined<StringType>(this.publisher) && !this.publisher.isEmpty();
  }

  /**
   * @returns the `publisher` property value as a fhirString if defined; else undefined
   */
  public getPublisher(): fhirString | undefined {
    return this.publisher?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `publisher` property.
   *
   * @param value - the `publisher` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPublisher(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.publisher (${String(value)})`;
      this.publisher = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.publisher = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `publisher` property exists and has a value; `false` otherwise
   */
  public hasPublisher(): boolean {
    return this.hasPublisherElement();
  }

  /**
   * @returns the `contact` property value as a ContactDetail array
   */
  public getContact(): ContactDetail[] {
    return this.contact ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `contact` property.
   *
   * @param value - the `contact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContact(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.contact; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.contact = value;
    } else {
      this.contact = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `contact` array property.
   *
   * @param value - the `contact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContact(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.contact; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initContact();
      this.contact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contact` property exists and has a value; `false` otherwise
   */
  public hasContact(): boolean {
    return isDefinedList<ContactDetail>(this.contact) && this.contact.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `contact` property
   */
  private initContact(): void {
    if(!this.hasContact()) {
      this.contact = [] as ContactDetail[];
    }
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
      const optErrMsg = `Invalid EvidenceVariable.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.description (${String(value)})`;
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
      const optErrMsg = `Invalid EvidenceVariable.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid EvidenceVariable.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `useContext` property value as a UsageContext array
   */
  public getUseContext(): UsageContext[] {
    return this.useContext ?? ([] as UsageContext[]);
  }

  /**
   * Assigns the provided UsageContext array value to the `useContext` property.
   *
   * @param value - the `useContext` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUseContext(value: UsageContext[] | undefined): this {
    if (isDefinedList<UsageContext>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.useContext; Provided value array has an element that is not an instance of UsageContext.`;
      assertFhirTypeList<UsageContext>(value, UsageContext, optErrMsg);
      this.useContext = value;
    } else {
      this.useContext = undefined;
    }
    return this;
  }

  /**
   * Add the provided UsageContext value to the `useContext` array property.
   *
   * @param value - the `useContext` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUseContext(value: UsageContext | undefined): this {
    if (isDefined<UsageContext>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.useContext; Provided element is not an instance of UsageContext.`;
      assertFhirType<UsageContext>(value, UsageContext, optErrMsg);
      this.initUseContext();
      this.useContext?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `useContext` property exists and has a value; `false` otherwise
   */
  public hasUseContext(): boolean {
    return isDefinedList<UsageContext>(this.useContext) && this.useContext.some((item: UsageContext) => !item.isEmpty());
  }

  /**
   * Initialize the `useContext` property
   */
  private initUseContext(): void {
    if(!this.hasUseContext()) {
      this.useContext = [] as UsageContext[];
    }
  }

  /**
   * @returns the `purpose` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getPurposeElement(): MarkdownType {
    return this.purpose ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `purpose` property.
   *
   * @param element - the `purpose` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPurposeElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.purpose; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.purpose = element;
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurposeElement(): boolean {
    return isDefined<MarkdownType>(this.purpose) && !this.purpose.isEmpty();
  }

  /**
   * @returns the `purpose` property value as a fhirMarkdown if defined; else undefined
   */
  public getPurpose(): fhirMarkdown | undefined {
    return this.purpose?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `purpose` property.
   *
   * @param value - the `purpose` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPurpose(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.purpose (${String(value)})`;
      this.purpose = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.purpose = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return this.hasPurposeElement();
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
      const optErrMsg = `Invalid EvidenceVariable.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.copyright (${String(value)})`;
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

  /**
   * @returns the `copyrightLabel` property value as a StringType object if defined; else an empty StringType object
   */
  public getCopyrightLabelElement(): StringType {
    return this.copyrightLabel ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `copyrightLabel` property.
   *
   * @param element - the `copyrightLabel` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightLabelElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.copyrightLabel; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.copyrightLabel = element;
    } else {
      this.copyrightLabel = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyrightLabel` property exists and has a value; `false` otherwise
   */
  public hasCopyrightLabelElement(): boolean {
    return isDefined<StringType>(this.copyrightLabel) && !this.copyrightLabel.isEmpty();
  }

  /**
   * @returns the `copyrightLabel` property value as a fhirString if defined; else undefined
   */
  public getCopyrightLabel(): fhirString | undefined {
    return this.copyrightLabel?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `copyrightLabel` property.
   *
   * @param value - the `copyrightLabel` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCopyrightLabel(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.copyrightLabel (${String(value)})`;
      this.copyrightLabel = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.copyrightLabel = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `copyrightLabel` property exists and has a value; `false` otherwise
   */
  public hasCopyrightLabel(): boolean {
    return this.hasCopyrightLabelElement();
  }

  /**
   * @returns the `approvalDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getApprovalDateElement(): DateType {
    return this.approvalDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `approvalDate` property.
   *
   * @param element - the `approvalDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setApprovalDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.approvalDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.approvalDate = element;
    } else {
      this.approvalDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `approvalDate` property exists and has a value; `false` otherwise
   */
  public hasApprovalDateElement(): boolean {
    return isDefined<DateType>(this.approvalDate) && !this.approvalDate.isEmpty();
  }

  /**
   * @returns the `approvalDate` property value as a fhirDate if defined; else undefined
   */
  public getApprovalDate(): fhirDate | undefined {
    return this.approvalDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `approvalDate` property.
   *
   * @param value - the `approvalDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setApprovalDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.approvalDate (${String(value)})`;
      this.approvalDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.approvalDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `approvalDate` property exists and has a value; `false` otherwise
   */
  public hasApprovalDate(): boolean {
    return this.hasApprovalDateElement();
  }

  /**
   * @returns the `lastReviewDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getLastReviewDateElement(): DateType {
    return this.lastReviewDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastReviewDate` property.
   *
   * @param element - the `lastReviewDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastReviewDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.lastReviewDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.lastReviewDate = element;
    } else {
      this.lastReviewDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastReviewDate` property exists and has a value; `false` otherwise
   */
  public hasLastReviewDateElement(): boolean {
    return isDefined<DateType>(this.lastReviewDate) && !this.lastReviewDate.isEmpty();
  }

  /**
   * @returns the `lastReviewDate` property value as a fhirDate if defined; else undefined
   */
  public getLastReviewDate(): fhirDate | undefined {
    return this.lastReviewDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastReviewDate` property.
   *
   * @param value - the `lastReviewDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastReviewDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.lastReviewDate (${String(value)})`;
      this.lastReviewDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.lastReviewDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastReviewDate` property exists and has a value; `false` otherwise
   */
  public hasLastReviewDate(): boolean {
    return this.hasLastReviewDateElement();
  }

  /**
   * @returns the `effectivePeriod` property value as a Period object if defined; else an empty Period object
   */
  public getEffectivePeriod(): Period {
    return this.effectivePeriod ?? new Period();
  }

  /**
   * Assigns the provided EffectivePeriod object value to the `effectivePeriod` property.
   *
   * @param value - the `effectivePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffectivePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.effectivePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.effectivePeriod = value;
    } else {
      this.effectivePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectivePeriod` property exists and has a value; `false` otherwise
   */
  public hasEffectivePeriod(): boolean {
    return isDefined<Period>(this.effectivePeriod) && !this.effectivePeriod.isEmpty();
  }

  /**
   * @returns the `author` property value as a ContactDetail array
   */
  public getAuthor(): ContactDetail[] {
    return this.author ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `author` property.
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.author; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `author` array property.
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.author; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initAuthor();
      this.author?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefinedList<ContactDetail>(this.author) && this.author.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `author` property
   */
  private initAuthor(): void {
    if(!this.hasAuthor()) {
      this.author = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `editor` property value as a ContactDetail array
   */
  public getEditor(): ContactDetail[] {
    return this.editor ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `editor` property.
   *
   * @param value - the `editor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEditor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.editor; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.editor = value;
    } else {
      this.editor = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `editor` array property.
   *
   * @param value - the `editor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEditor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.editor; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEditor();
      this.editor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `editor` property exists and has a value; `false` otherwise
   */
  public hasEditor(): boolean {
    return isDefinedList<ContactDetail>(this.editor) && this.editor.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `editor` property
   */
  private initEditor(): void {
    if(!this.hasEditor()) {
      this.editor = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `reviewer` property value as a ContactDetail array
   */
  public getReviewer(): ContactDetail[] {
    return this.reviewer ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `reviewer` property.
   *
   * @param value - the `reviewer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewer(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.reviewer = value;
    } else {
      this.reviewer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `reviewer` array property.
   *
   * @param value - the `reviewer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReviewer(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.reviewer; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initReviewer();
      this.reviewer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewer` property exists and has a value; `false` otherwise
   */
  public hasReviewer(): boolean {
    return isDefinedList<ContactDetail>(this.reviewer) && this.reviewer.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `reviewer` property
   */
  private initReviewer(): void {
    if(!this.hasReviewer()) {
      this.reviewer = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `endorser` property value as a ContactDetail array
   */
  public getEndorser(): ContactDetail[] {
    return this.endorser ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `endorser` property.
   *
   * @param value - the `endorser` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEndorser(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.endorser = value;
    } else {
      this.endorser = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `endorser` array property.
   *
   * @param value - the `endorser` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEndorser(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.endorser; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEndorser();
      this.endorser?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endorser` property exists and has a value; `false` otherwise
   */
  public hasEndorser(): boolean {
    return isDefinedList<ContactDetail>(this.endorser) && this.endorser.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `endorser` property
   */
  private initEndorser(): void {
    if(!this.hasEndorser()) {
      this.endorser = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `relatedArtifact` property value as a RelatedArtifact array
   */
  public getRelatedArtifact(): RelatedArtifact[] {
    return this.relatedArtifact ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `relatedArtifact` property.
   *
   * @param value - the `relatedArtifact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedArtifact(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.relatedArtifact = value;
    } else {
      this.relatedArtifact = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `relatedArtifact` array property.
   *
   * @param value - the `relatedArtifact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedArtifact(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initRelatedArtifact();
      this.relatedArtifact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedArtifact` property exists and has a value; `false` otherwise
   */
  public hasRelatedArtifact(): boolean {
    return isDefinedList<RelatedArtifact>(this.relatedArtifact) && this.relatedArtifact.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedArtifact` property
   */
  private initRelatedArtifact(): void {
    if(!this.hasRelatedArtifact()) {
      this.relatedArtifact = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `actual` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getActualElement(): BooleanType {
    return this.actual ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `actual` property.
   *
   * @param element - the `actual` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.actual; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.actual = element;
    } else {
      this.actual = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actual` property exists and has a value; `false` otherwise
   */
  public hasActualElement(): boolean {
    return isDefined<BooleanType>(this.actual) && !this.actual.isEmpty();
  }

  /**
   * @returns the `actual` property value as a fhirBoolean if defined; else undefined
   */
  public getActual(): fhirBoolean | undefined {
    return this.actual?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `actual` property.
   *
   * @param value - the `actual` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActual(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.actual (${String(value)})`;
      this.actual = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.actual = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actual` property exists and has a value; `false` otherwise
   */
  public hasActual(): boolean {
    return this.hasActualElement();
  }

  /**
   * @returns the `characteristic` property value as a EvidenceVariableCharacteristicComponent array
   */
  public getCharacteristic(): EvidenceVariableCharacteristicComponent[] {
    return this.characteristic ?? ([] as EvidenceVariableCharacteristicComponent[]);
  }

  /**
   * Assigns the provided EvidenceVariableCharacteristicComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: EvidenceVariableCharacteristicComponent[] | undefined): this {
    if (isDefinedList<EvidenceVariableCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic; Provided value array has an element that is not an instance of EvidenceVariableCharacteristicComponent.`;
      assertFhirTypeList<EvidenceVariableCharacteristicComponent>(value, EvidenceVariableCharacteristicComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceVariableCharacteristicComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: EvidenceVariableCharacteristicComponent | undefined): this {
    if (isDefined<EvidenceVariableCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic; Provided element is not an instance of EvidenceVariableCharacteristicComponent.`;
      assertFhirType<EvidenceVariableCharacteristicComponent>(value, EvidenceVariableCharacteristicComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<EvidenceVariableCharacteristicComponent>(this.characteristic) && this.characteristic.some((item: EvidenceVariableCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as EvidenceVariableCharacteristicComponent[];
    }
  }

  /**
   * @returns the `handling` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public getHandlingEnumType(): EnumCodeType | undefined {
    return this.handling;
  }

  /**
   * Assigns the provided EnumCodeType value to the `handling` property.
   *
   * @param enumType - the `handling` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public setHandlingEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid EvidenceVariable.handling';
      assertEnumCodeType<VariableHandlingEnum>(enumType, VariableHandlingEnum, errMsgPrefix);
      this.handling = enumType;
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandlingEnumType(): boolean {
    return isDefined<EnumCodeType>(this.handling) && !this.handling.isEmpty() && this.handling.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `handling` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public getHandlingElement(): CodeType | undefined {
    if (this.handling === undefined) {
      return undefined;
    }
    return this.handling as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `handling` property.
   *
   * @param element - the `handling` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public setHandlingElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.handling; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.handling = new EnumCodeType(element, this.variableHandlingEnum);
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandlingElement(): boolean {
    return this.hasHandlingEnumType();
  }

  /**
   * @returns the `handling` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public getHandling(): fhirCode | undefined {
    if (this.handling === undefined) {
      return undefined;
    }
    return this.handling.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `handling` property.
   *
   * @param value - the `handling` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public setHandling(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.handling; Provided value is not an instance of fhirCode.`;
      this.handling = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.variableHandlingEnum);
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandling(): boolean {
    return this.hasHandlingEnumType();
  }

  /**
   * @returns the `category` property value as a EvidenceVariableCategoryComponent array
   */
  public getCategory(): EvidenceVariableCategoryComponent[] {
    return this.category ?? ([] as EvidenceVariableCategoryComponent[]);
  }

  /**
   * Assigns the provided EvidenceVariableCategoryComponent array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: EvidenceVariableCategoryComponent[] | undefined): this {
    if (isDefinedList<EvidenceVariableCategoryComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.category; Provided value array has an element that is not an instance of EvidenceVariableCategoryComponent.`;
      assertFhirTypeList<EvidenceVariableCategoryComponent>(value, EvidenceVariableCategoryComponent, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceVariableCategoryComponent value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: EvidenceVariableCategoryComponent | undefined): this {
    if (isDefined<EvidenceVariableCategoryComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.category; Provided element is not an instance of EvidenceVariableCategoryComponent.`;
      assertFhirType<EvidenceVariableCategoryComponent>(value, EvidenceVariableCategoryComponent, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<EvidenceVariableCategoryComponent>(this.category) && this.category.some((item: EvidenceVariableCategoryComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as EvidenceVariableCategoryComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceVariable';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.identifier,
      this.version,
      this.versionAlgorithm,
      this.name,
      this.title,
      this.shortTitle,
      this.status,
      this.experimental,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.note,
      this.useContext,
      this.purpose,
      this.copyright,
      this.copyrightLabel,
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.author,
      this.editor,
      this.reviewer,
      this.endorser,
      this.relatedArtifact,
      this.actual,
      this.characteristic,
      this.handling,
      this.category,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceVariable {
    const dest = new EvidenceVariable();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceVariable): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.shortTitle = this.shortTitle?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    dest.date = this.date?.copy();
    dest.publisher = this.publisher?.copy();
    const contactList = copyListValues<ContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    dest.purpose = this.purpose?.copy();
    dest.copyright = this.copyright?.copy();
    dest.copyrightLabel = this.copyrightLabel?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const authorList = copyListValues<ContactDetail>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const editorList = copyListValues<ContactDetail>(this.editor);
    dest.editor = editorList.length === 0 ? undefined : editorList;
    const reviewerList = copyListValues<ContactDetail>(this.reviewer);
    dest.reviewer = reviewerList.length === 0 ? undefined : reviewerList;
    const endorserList = copyListValues<ContactDetail>(this.endorser);
    dest.endorser = endorserList.length === 0 ? undefined : endorserList;
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    dest.actual = this.actual?.copy();
    const characteristicList = copyListValues<EvidenceVariableCharacteristicComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
    dest.handling = this.handling?.copy();
    const categoryList = copyListValues<EvidenceVariableCategoryComponent>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
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

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasVersionAlgorithm()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getVersionAlgorithm()!, 'versionAlgorithm', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasShortTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getShortTitleElement(), 'shortTitle', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasPublisherElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPublisherElement(), 'publisher', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasUseContext()) {
      setFhirComplexListJson(this.getUseContext(), 'useContext', jsonObj);
    }

    if (this.hasPurposeElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPurposeElement(), 'purpose', jsonObj);
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    if (this.hasCopyrightLabelElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCopyrightLabelElement(), 'copyrightLabel', jsonObj);
    }

    if (this.hasApprovalDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getApprovalDateElement(), 'approvalDate', jsonObj);
    }

    if (this.hasLastReviewDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLastReviewDateElement(), 'lastReviewDate', jsonObj);
    }

    if (this.hasEffectivePeriod()) {
      setFhirComplexJson(this.getEffectivePeriod(), 'effectivePeriod', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasEditor()) {
      setFhirComplexListJson(this.getEditor(), 'editor', jsonObj);
    }

    if (this.hasReviewer()) {
      setFhirComplexListJson(this.getReviewer(), 'reviewer', jsonObj);
    }

    if (this.hasEndorser()) {
      setFhirComplexListJson(this.getEndorser(), 'endorser', jsonObj);
    }

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasActualElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActualElement(), 'actual', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    if (this.hasHandlingElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getHandlingElement()!, 'handling', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirBackboneElementListJson(this.getCategory(), 'category', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * EvidenceVariableCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A defining factor of the EvidenceVariable
 * - **Definition:** A defining factor of the EvidenceVariable. Multiple characteristics are applied with "and" semantics.
 * - **Comment:** Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceVariable](http://hl7.org/fhir/StructureDefinition/EvidenceVariable)
 */
export class EvidenceVariableCharacteristicComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceVariableCharacteristicComponent` JSON to instantiate the EvidenceVariableCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceVariableCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceVariableCharacteristicComponent
   * @returns EvidenceVariableCharacteristicComponent data model or undefined for `EvidenceVariableCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceVariableCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceVariableCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceVariableCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = EvidenceVariableCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceVariableCharacteristicComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
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

    fieldName = 'exclude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setExcludeElement(datatype);
    }

    fieldName = 'definitionReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinitionReference(datatype);
    }

    fieldName = 'definitionCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setDefinitionCanonicalElement(datatype);
    }

    fieldName = 'definitionCodeableConcept';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinitionCodeableConcept(datatype);
    }

    fieldName = 'definitionExpression';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Expression | undefined = Expression.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinitionExpression(datatype);
    }

    fieldName = 'definitionId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setDefinitionIdElement(datatype);
    }

    fieldName = 'definitionByTypeAndValue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent | undefined = EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinitionByTypeAndValue(component);
    }

    fieldName = 'definitionByCombination';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: EvidenceVariableCharacteristicDefinitionByCombinationComponent | undefined = EvidenceVariableCharacteristicDefinitionByCombinationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinitionByCombination(component);
    }

    fieldName = 'instances[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const instances: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setInstances(instances);

    fieldName = 'duration[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const duration: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDuration(duration);

    fieldName = 'timeFromEvent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceVariableCharacteristicTimeFromEventComponent | undefined = EvidenceVariableCharacteristicTimeFromEventComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addTimeFromEvent(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * EvidenceVariable.characteristic.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for internal linking
   * - **Definition:** Label used for when a characteristic refers to another characteristic.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: IdType | undefined;

  /**
   * EvidenceVariable.characteristic.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the characteristic
   * - **Definition:** A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
   * - **Requirements:** Need to be able to describe characteristics in natural language so that end users can understand the criteria.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * EvidenceVariable.characteristic.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes or explanatory notes
   * - **Definition:** A human-readable string to clarify or explain concepts about the characteristic.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * EvidenceVariable.characteristic.exclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the characteristic is an inclusion criterion or exclusion criterion
   * - **Definition:** When true, this characteristic is an exclusion criterion. In other words, not matching this characteristic definition is equivalent to meeting this criterion.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exclude?: BooleanType | undefined;

  /**
   * EvidenceVariable.characteristic.definitionReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines the characteristic (without using type and value) by a Reference
   * - **Definition:** Defines the characteristic using a Reference.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Evidence',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definitionReference?: Reference | undefined;

  /**
   * EvidenceVariable.characteristic.definitionCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines the characteristic (without using type and value) by a Canonical
   * - **Definition:** Defines the characteristic using Canonical.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *       'http://hl7.org/fhir/StructureDefinition/Evidence',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definitionCanonical?: CanonicalType | undefined;

  /**
   * EvidenceVariable.characteristic.definitionCodeableConcept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines the characteristic (without using type and value) by a CodeableConcept
   * - **Definition:** Defines the characteristic using CodeableConcept.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definitionCodeableConcept?: CodeableConcept | undefined;

  /**
   * EvidenceVariable.characteristic.definitionExpression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines the characteristic (without using type and value) by an expression
   * - **Definition:** Defines the characteristic using Expression.
   * - **Comment:** When another element provides a definition of the characteristic, the definitionExpression content SHALL match the definition (only adding technical concepts necessary for implementation) without changing the meaning.
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definitionExpression?: Expression | undefined;

  /**
   * EvidenceVariable.characteristic.definitionId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines the characteristic (without using type and value) by an id
   * - **Definition:** Defines the characteristic using id.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definitionId?: IdType | undefined;

  /**
   * EvidenceVariable.characteristic.definitionByTypeAndValue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines the characteristic using type and value
   * - **Definition:** Defines the characteristic using both a type and value[x] elements.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definitionByTypeAndValue?: EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent | undefined;

  /**
   * EvidenceVariable.characteristic.definitionByCombination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to specify how two or more characteristics are combined
   * - **Definition:** Defines the characteristic as a combination of two or more characteristics.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definitionByCombination?: EvidenceVariableCharacteristicDefinitionByCombinationComponent | undefined;

  /**
   * EvidenceVariable.characteristic.instances[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceVariable.characteristic.instances[x]', ['Quantity','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of occurrences meeting the characteristic
   * - **Definition:** Number of occurrences meeting the characteristic.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('EvidenceVariable.characteristic.instances[x]',[
    'Quantity',
    'Range',
  ])
  private instances?: IDataType | undefined;

  /**
   * EvidenceVariable.characteristic.duration[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceVariable.characteristic.duration[x]', ['Quantity','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Length of time in which the characteristic is met
   * - **Definition:** Length of time in which the characteristic is met.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('EvidenceVariable.characteristic.duration[x]',[
    'Quantity',
    'Range',
  ])
  private duration?: IDataType | undefined;

  /**
   * EvidenceVariable.characteristic.timeFromEvent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Timing in which the characteristic is determined
   * - **Definition:** Timing in which the characteristic is determined.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private timeFromEvent?: EvidenceVariableCharacteristicTimeFromEventComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a IdType object if defined; else an empty IdType object
   */
  public getLinkIdElement(): IdType {
    return this.linkId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.linkId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<IdType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirId if defined; else undefined
   */
  public getLinkId(): fhirId | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.linkId (${String(value)})`;
      this.linkId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.linkId = undefined;
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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.description (${String(value)})`;
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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `exclude` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExcludeElement(): BooleanType {
    return this.exclude ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `exclude` property.
   *
   * @param element - the `exclude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludeElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.exclude; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.exclude = element;
    } else {
      this.exclude = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exclude` property exists and has a value; `false` otherwise
   */
  public hasExcludeElement(): boolean {
    return isDefined<BooleanType>(this.exclude) && !this.exclude.isEmpty();
  }

  /**
   * @returns the `exclude` property value as a fhirBoolean if defined; else undefined
   */
  public getExclude(): fhirBoolean | undefined {
    return this.exclude?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `exclude` property.
   *
   * @param value - the `exclude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExclude(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.exclude (${String(value)})`;
      this.exclude = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.exclude = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exclude` property exists and has a value; `false` otherwise
   */
  public hasExclude(): boolean {
    return this.hasExcludeElement();
  }

  /**
   * @returns the `definitionReference` property value as a Reference object; else an empty Reference object
   */
  public getDefinitionReference(): Reference {
    return this.definitionReference ?? new Reference();
  }

  /**
   * Assigns the provided DefinitionReference object value to the `definitionReference` property.
   *
   * @decorator `@ReferenceTargets('EvidenceVariable.characteristic.definitionReference', ['EvidenceVariable','Group','Evidence',])`
   *
   * @param value - the `definitionReference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EvidenceVariable.characteristic.definitionReference', [
    'EvidenceVariable',
  
    'Group',
  
    'Evidence',
  ])
  public setDefinitionReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.definitionReference = value;
    } else {
      this.definitionReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionReference` property exists and has a value; `false` otherwise
   */
  public hasDefinitionReference(): boolean {
    return isDefined<Reference>(this.definitionReference) && !this.definitionReference.isEmpty();
  }

  /**
   * @returns the `definitionCanonical` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getDefinitionCanonicalElement(): CanonicalType {
    return this.definitionCanonical ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definitionCanonical` property.
   *
   * @param element - the `definitionCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.definitionCanonical = element;
    } else {
      this.definitionCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionCanonical` property exists and has a value; `false` otherwise
   */
  public hasDefinitionCanonicalElement(): boolean {
    return isDefined<CanonicalType>(this.definitionCanonical) && !this.definitionCanonical.isEmpty();
  }

  /**
   * @returns the `definitionCanonical` property value as a fhirCanonical if defined; else undefined
   */
  public getDefinitionCanonical(): fhirCanonical | undefined {
    return this.definitionCanonical?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `definitionCanonical` property.
   *
   * @param value - the `definitionCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionCanonical (${String(value)})`;
      this.definitionCanonical = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.definitionCanonical = undefined;
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
   * @returns the `definitionCodeableConcept` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDefinitionCodeableConcept(): CodeableConcept {
    return this.definitionCodeableConcept ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DefinitionCodeableConcept object value to the `definitionCodeableConcept` property.
   *
   * @param value - the `definitionCodeableConcept` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDefinitionCodeableConcept(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionCodeableConcept; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.definitionCodeableConcept = value;
    } else {
      this.definitionCodeableConcept = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionCodeableConcept` property exists and has a value; `false` otherwise
   */
  public hasDefinitionCodeableConcept(): boolean {
    return isDefined<CodeableConcept>(this.definitionCodeableConcept) && !this.definitionCodeableConcept.isEmpty();
  }

  /**
   * @returns the `definitionExpression` property value as a Expression object if defined; else an empty Expression object
   */
  public getDefinitionExpression(): Expression {
    return this.definitionExpression ?? new Expression();
  }

  /**
   * Assigns the provided DefinitionExpression object value to the `definitionExpression` property.
   *
   * @param value - the `definitionExpression` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDefinitionExpression(value: Expression | undefined): this {
    if (isDefined<Expression>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionExpression; Provided element is not an instance of Expression.`;
      assertFhirType<Expression>(value, Expression, optErrMsg);
      this.definitionExpression = value;
    } else {
      this.definitionExpression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionExpression` property exists and has a value; `false` otherwise
   */
  public hasDefinitionExpression(): boolean {
    return isDefined<Expression>(this.definitionExpression) && !this.definitionExpression.isEmpty();
  }

  /**
   * @returns the `definitionId` property value as a IdType object if defined; else an empty IdType object
   */
  public getDefinitionIdElement(): IdType {
    return this.definitionId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definitionId` property.
   *
   * @param element - the `definitionId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.definitionId = element;
    } else {
      this.definitionId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionId` property exists and has a value; `false` otherwise
   */
  public hasDefinitionIdElement(): boolean {
    return isDefined<IdType>(this.definitionId) && !this.definitionId.isEmpty();
  }

  /**
   * @returns the `definitionId` property value as a fhirId if defined; else undefined
   */
  public getDefinitionId(): fhirId | undefined {
    return this.definitionId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `definitionId` property.
   *
   * @param value - the `definitionId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionId (${String(value)})`;
      this.definitionId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.definitionId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionId` property exists and has a value; `false` otherwise
   */
  public hasDefinitionId(): boolean {
    return this.hasDefinitionIdElement();
  }

  /**
   * @returns the `definitionByTypeAndValue` property value as a EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent object if defined; else an empty EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent object
   */
  public getDefinitionByTypeAndValue(): EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent {
    return this.definitionByTypeAndValue ?? new EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent();
  }

  /**
   * Assigns the provided DefinitionByTypeAndValue object value to the `definitionByTypeAndValue` property.
   *
   * @param value - the `definitionByTypeAndValue` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDefinitionByTypeAndValue(value: EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent | undefined): this {
    if (isDefined<EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByTypeAndValue; Provided element is not an instance of EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent.`;
      assertFhirType<EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent>(value, EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent, optErrMsg);
      this.definitionByTypeAndValue = value;
    } else {
      this.definitionByTypeAndValue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionByTypeAndValue` property exists and has a value; `false` otherwise
   */
  public hasDefinitionByTypeAndValue(): boolean {
    return isDefined<EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent>(this.definitionByTypeAndValue) && !this.definitionByTypeAndValue.isEmpty();
  }

  /**
   * @returns the `definitionByCombination` property value as a EvidenceVariableCharacteristicDefinitionByCombinationComponent object if defined; else an empty EvidenceVariableCharacteristicDefinitionByCombinationComponent object
   */
  public getDefinitionByCombination(): EvidenceVariableCharacteristicDefinitionByCombinationComponent {
    return this.definitionByCombination ?? new EvidenceVariableCharacteristicDefinitionByCombinationComponent();
  }

  /**
   * Assigns the provided DefinitionByCombination object value to the `definitionByCombination` property.
   *
   * @param value - the `definitionByCombination` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDefinitionByCombination(value: EvidenceVariableCharacteristicDefinitionByCombinationComponent | undefined): this {
    if (isDefined<EvidenceVariableCharacteristicDefinitionByCombinationComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByCombination; Provided element is not an instance of EvidenceVariableCharacteristicDefinitionByCombinationComponent.`;
      assertFhirType<EvidenceVariableCharacteristicDefinitionByCombinationComponent>(value, EvidenceVariableCharacteristicDefinitionByCombinationComponent, optErrMsg);
      this.definitionByCombination = value;
    } else {
      this.definitionByCombination = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definitionByCombination` property exists and has a value; `false` otherwise
   */
  public hasDefinitionByCombination(): boolean {
    return isDefined<EvidenceVariableCharacteristicDefinitionByCombinationComponent>(this.definitionByCombination) && !this.definitionByCombination.isEmpty();
  }

  /**
   * @returns the `instances` property value as a DataType object if defined; else undefined
   */
  public getInstances(): IDataType | undefined {
    return this.instances;
  }

  /**
   * Assigns the provided DataType object value to the `instances` property.
   *
   * @decorator `@ChoiceDataTypes('EvidenceVariable.characteristic.instances[x]')`
   *
   * @param value - the `instances` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceVariable.characteristic.instances[x]')
  public setInstances(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.instances = value;
    } else {
      this.instances = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instances` property exists and has a value; `false` otherwise
   */
  public hasInstances(): boolean {
    return isDefined<IDataType>(this.instances) && !this.instances.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `instances` property value as a Quantity object if defined; else undefined
   */
  public getInstancesQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.instances)) {
      return undefined;
    }
    if (!(this.instances instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.instances[x]: Expected Quantity but encountered ${this.instances.fhirType()}`,
      );
    }
    return this.instances;
  }

  /**
   * @returns `true` if the `instances` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasInstancesQuantity(): boolean {
    return this.hasInstances() && this.instances instanceof Quantity;
  }

  /**
   * @returns the `instances` property value as a Range object if defined; else undefined
   */
  public getInstancesRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.instances)) {
      return undefined;
    }
    if (!(this.instances instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.instances[x]: Expected Range but encountered ${this.instances.fhirType()}`,
      );
    }
    return this.instances;
  }

  /**
   * @returns `true` if the `instances` property exists as a Range and has a value; `false` otherwise
   */
  public hasInstancesRange(): boolean {
    return this.hasInstances() && this.instances instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `duration` property value as a DataType object if defined; else undefined
   */
  public getDuration(): IDataType | undefined {
    return this.duration;
  }

  /**
   * Assigns the provided DataType object value to the `duration` property.
   *
   * @decorator `@ChoiceDataTypes('EvidenceVariable.characteristic.duration[x]')`
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceVariable.characteristic.duration[x]')
  public setDuration(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.duration = value;
    } else {
      this.duration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `duration` property exists and has a value; `false` otherwise
   */
  public hasDuration(): boolean {
    return isDefined<IDataType>(this.duration) && !this.duration.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `duration` property value as a Quantity object if defined; else undefined
   */
  public getDurationQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.duration)) {
      return undefined;
    }
    if (!(this.duration instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.duration[x]: Expected Quantity but encountered ${this.duration.fhirType()}`,
      );
    }
    return this.duration;
  }

  /**
   * @returns `true` if the `duration` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasDurationQuantity(): boolean {
    return this.hasDuration() && this.duration instanceof Quantity;
  }

  /**
   * @returns the `duration` property value as a Range object if defined; else undefined
   */
  public getDurationRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.duration)) {
      return undefined;
    }
    if (!(this.duration instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.duration[x]: Expected Range but encountered ${this.duration.fhirType()}`,
      );
    }
    return this.duration;
  }

  /**
   * @returns `true` if the `duration` property exists as a Range and has a value; `false` otherwise
   */
  public hasDurationRange(): boolean {
    return this.hasDuration() && this.duration instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `timeFromEvent` property value as a EvidenceVariableCharacteristicTimeFromEventComponent array
   */
  public getTimeFromEvent(): EvidenceVariableCharacteristicTimeFromEventComponent[] {
    return this.timeFromEvent ?? ([] as EvidenceVariableCharacteristicTimeFromEventComponent[]);
  }

  /**
   * Assigns the provided EvidenceVariableCharacteristicTimeFromEventComponent array value to the `timeFromEvent` property.
   *
   * @param value - the `timeFromEvent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTimeFromEvent(value: EvidenceVariableCharacteristicTimeFromEventComponent[] | undefined): this {
    if (isDefinedList<EvidenceVariableCharacteristicTimeFromEventComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent; Provided value array has an element that is not an instance of EvidenceVariableCharacteristicTimeFromEventComponent.`;
      assertFhirTypeList<EvidenceVariableCharacteristicTimeFromEventComponent>(value, EvidenceVariableCharacteristicTimeFromEventComponent, optErrMsg);
      this.timeFromEvent = value;
    } else {
      this.timeFromEvent = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceVariableCharacteristicTimeFromEventComponent value to the `timeFromEvent` array property.
   *
   * @param value - the `timeFromEvent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTimeFromEvent(value: EvidenceVariableCharacteristicTimeFromEventComponent | undefined): this {
    if (isDefined<EvidenceVariableCharacteristicTimeFromEventComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent; Provided element is not an instance of EvidenceVariableCharacteristicTimeFromEventComponent.`;
      assertFhirType<EvidenceVariableCharacteristicTimeFromEventComponent>(value, EvidenceVariableCharacteristicTimeFromEventComponent, optErrMsg);
      this.initTimeFromEvent();
      this.timeFromEvent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `timeFromEvent` property exists and has a value; `false` otherwise
   */
  public hasTimeFromEvent(): boolean {
    return isDefinedList<EvidenceVariableCharacteristicTimeFromEventComponent>(this.timeFromEvent) && this.timeFromEvent.some((item: EvidenceVariableCharacteristicTimeFromEventComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `timeFromEvent` property
   */
  private initTimeFromEvent(): void {
    if(!this.hasTimeFromEvent()) {
      this.timeFromEvent = [] as EvidenceVariableCharacteristicTimeFromEventComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceVariable.characteristic';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.description,
      this.note,
      this.exclude,
      this.definitionReference,
      this.definitionCanonical,
      this.definitionCodeableConcept,
      this.definitionExpression,
      this.definitionId,
      this.definitionByTypeAndValue,
      this.definitionByCombination,
      this.instances,
      this.duration,
      this.timeFromEvent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceVariableCharacteristicComponent {
    const dest = new EvidenceVariableCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceVariableCharacteristicComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.exclude = this.exclude?.copy();
    dest.definitionReference = this.definitionReference?.copy();
    dest.definitionCanonical = this.definitionCanonical?.copy();
    dest.definitionCodeableConcept = this.definitionCodeableConcept?.copy();
    dest.definitionExpression = this.definitionExpression?.copy();
    dest.definitionId = this.definitionId?.copy();
    dest.definitionByTypeAndValue = this.definitionByTypeAndValue?.copy();
    dest.definitionByCombination = this.definitionByCombination?.copy();
    dest.instances = this.instances?.copy() as IDataType;
    dest.duration = this.duration?.copy() as IDataType;
    const timeFromEventList = copyListValues<EvidenceVariableCharacteristicTimeFromEventComponent>(this.timeFromEvent);
    dest.timeFromEvent = timeFromEventList.length === 0 ? undefined : timeFromEventList;
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasExcludeElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExcludeElement(), 'exclude', jsonObj);
    }

    if (this.hasDefinitionReference()) {
      setFhirComplexJson(this.getDefinitionReference(), 'definitionReference', jsonObj);
    }

    if (this.hasDefinitionCanonicalElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getDefinitionCanonicalElement(), 'definitionCanonical', jsonObj);
    }

    if (this.hasDefinitionCodeableConcept()) {
      setFhirComplexJson(this.getDefinitionCodeableConcept(), 'definitionCodeableConcept', jsonObj);
    }

    if (this.hasDefinitionExpression()) {
      setFhirComplexJson(this.getDefinitionExpression(), 'definitionExpression', jsonObj);
    }

    if (this.hasDefinitionIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getDefinitionIdElement(), 'definitionId', jsonObj);
    }

    if (this.hasDefinitionByTypeAndValue()) {
      setFhirBackboneElementJson(this.getDefinitionByTypeAndValue(), 'definitionByTypeAndValue', jsonObj);
    }

    if (this.hasDefinitionByCombination()) {
      setFhirBackboneElementJson(this.getDefinitionByCombination(), 'definitionByCombination', jsonObj);
    }

    if (this.hasInstances()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getInstances()!, 'instances', jsonObj);
    }

    if (this.hasDuration()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDuration()!, 'duration', jsonObj);
    }

    if (this.hasTimeFromEvent()) {
      setFhirBackboneElementListJson(this.getTimeFromEvent(), 'timeFromEvent', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Defines the characteristic using type and value
 * - **Definition:** Defines the characteristic using both a type and value[x] elements.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceVariable](http://hl7.org/fhir/StructureDefinition/EvidenceVariable)
 */
export class EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent` JSON to instantiate the EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent
   * @returns EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent data model or undefined for `EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent`;
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

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addMethod(datatype);
          }
        });
      }
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDevice(datatype);
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

    fieldName = 'offset';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOffset(datatype);
    }

    return instance;
  }

  /**
   * EvidenceVariable.characteristic.definitionByTypeAndValue.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Expresses the type of characteristic
   * - **Definition:** Used to express the type of characteristic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * EvidenceVariable.characteristic.definitionByTypeAndValue.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Method for how the characteristic value was determined
   * - **Definition:** Method for how the characteristic value was determined.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private method?: CodeableConcept[] | undefined;

  /**
   * EvidenceVariable.characteristic.definitionByTypeAndValue.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device used for determining characteristic
   * - **Definition:** Device used for determining characteristic.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/DeviceMetric',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: Reference | undefined;

  /**
   * EvidenceVariable.characteristic.definitionByTypeAndValue.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]', ['CodeableConcept','boolean','Quantity','Range','Reference','id',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines the characteristic when coupled with characteristic.type
   * - **Definition:** Defines the characteristic when paired with characteristic.type.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'boolean',
   *     'Quantity',
   *     'Range',
   *     'Reference',
   *     'id',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]',[
    'CodeableConcept',
    'boolean',
    'Quantity',
    'Range',
    'Reference',
    'id',
  ])
  private value: IDataType | null;

  /**
   * EvidenceVariable.characteristic.definitionByTypeAndValue.offset Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference point for valueQuantity or valueRange
   * - **Definition:** Defines the reference point for comparison when valueQuantity or valueRange is not compared to zero.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private offset?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByTypeAndValue.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `method` property value as a CodeableConcept array
   */
  public getMethod(): CodeableConcept[] {
    return this.method ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `method` property.
   *
   * @param value - the `method` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMethod(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByTypeAndValue.method; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.method = value;
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `method` array property.
   *
   * @param value - the `method` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByTypeAndValue.method; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initMethod();
      this.method?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return isDefinedList<CodeableConcept>(this.method) && this.method.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `method` property
   */
  private initMethod(): void {
    if(!this.hasMethod()) {
      this.method = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `device` property value as a Reference object; else an empty Reference object
   */
  public getDevice(): Reference {
    return this.device ?? new Reference();
  }

  /**
   * Assigns the provided Device object value to the `device` property.
   *
   * @decorator `@ReferenceTargets('EvidenceVariable.characteristic.definitionByTypeAndValue.device', ['Device','DeviceMetric',])`
   *
   * @param value - the `device` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('EvidenceVariable.characteristic.definitionByTypeAndValue.device', [
    'Device',
  
    'DeviceMetric',
  ])
  public setDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefined<Reference>(this.device) && !this.device.isEmpty();
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
   * @decorator `@ChoiceDataTypes('EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]')
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
   * @returns the `value` property value as a CodeableConcept object if defined; else null
   */
  public getValueCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a IdType object if defined; else null
   */
  public getValueIdType(): IdType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.definitionByTypeAndValue.value[x]: Expected IdType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && this.value instanceof IdType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `offset` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOffset(): CodeableConcept {
    return this.offset ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Offset object value to the `offset` property.
   *
   * @param value - the `offset` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOffset(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByTypeAndValue.offset; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.offset = value;
    } else {
      this.offset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `offset` property exists and has a value; `false` otherwise
   */
  public hasOffset(): boolean {
    return isDefined<CodeableConcept>(this.offset) && !this.offset.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceVariable.characteristic.definitionByTypeAndValue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.method,
      this.device,
      this.value,
      this.offset,
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
  public override copy(): EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent {
    const dest = new EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceVariableCharacteristicDefinitionByTypeAndValueComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const methodList = copyListValues<CodeableConcept>(this.method);
    dest.method = methodList.length === 0 ? undefined : methodList;
    dest.device = this.device?.copy();
    dest.value = this.value ? this.value.copy() as IDataType : null;
    dest.offset = this.offset?.copy();
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

    if (this.hasMethod()) {
      setFhirComplexListJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasOffset()) {
      setFhirComplexJson(this.getOffset(), 'offset', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceVariableCharacteristicDefinitionByCombinationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Used to specify how two or more characteristics are combined
 * - **Definition:** Defines the characteristic as a combination of two or more characteristics.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceVariable](http://hl7.org/fhir/StructureDefinition/EvidenceVariable)
 */
export class EvidenceVariableCharacteristicDefinitionByCombinationComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null, characteristic: EvidenceVariableCharacteristicComponent[] | null = null) {
    super();

    this.characteristicCombinationEnum = new CharacteristicCombinationEnum();

    this.code = constructorCodeValueAsEnumCodeType<CharacteristicCombinationEnum>(
      code,
      CharacteristicCombinationEnum,
      this.characteristicCombinationEnum,
      'EvidenceVariable.characteristic.definitionByCombination.code',
    );

    this.characteristic = null;
    if (isDefinedList<EvidenceVariableCharacteristicComponent>(characteristic)) {
      this.setCharacteristic(characteristic);
    }
  }

  /**
   * Parse the provided `EvidenceVariableCharacteristicDefinitionByCombinationComponent` JSON to instantiate the EvidenceVariableCharacteristicDefinitionByCombinationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceVariableCharacteristicDefinitionByCombinationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceVariableCharacteristicDefinitionByCombinationComponent
   * @returns EvidenceVariableCharacteristicDefinitionByCombinationComponent data model or undefined for `EvidenceVariableCharacteristicDefinitionByCombinationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceVariableCharacteristicDefinitionByCombinationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceVariableCharacteristicDefinitionByCombinationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceVariableCharacteristicDefinitionByCombinationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'threshold';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: PositiveIntType | undefined = fhirParser.parsePositiveIntType(dtJson, dtSiblingJson);
      instance.setThresholdElement(datatype);
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setCharacteristic(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: EvidenceVariableCharacteristicComponent | undefined = EvidenceVariableCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component === undefined) {
            instance.setCharacteristic(null);
          } else {
            instance.addCharacteristic(component);
          }
        });
      }
    } else {
      instance.setCharacteristic(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: CharacteristicCombination
   *
   * @see {@link CharacteristicCombinationEnum }
   */
  private readonly characteristicCombinationEnum: CharacteristicCombinationEnum;

  /**
   * EvidenceVariable.characteristic.definitionByCombination.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** all-of | any-of | at-least | at-most | statistical | net-effect | dataset
   * - **Definition:** Used to specify if two or more characteristics are combined with OR or AND.
   * - **Requirements:** If code is "at-least" or "at-most" then threshold SHALL be used. If code is neither "at-least" nor "at-most" then threshold SHALL NOT be used.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link CharacteristicCombinationEnum }
   */
  private code: EnumCodeType | null;

  /**
   * EvidenceVariable.characteristic.definitionByCombination.threshold Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Provides the value of "n" when "at-least" or "at-most" codes are used
   * - **Definition:** Provides the value of "n" when "at-least" or "at-most" codes are used.
   * - **FHIR Type:** `positiveInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private threshold?: PositiveIntType | undefined;

  /**
   * EvidenceVariable.characteristic.definitionByCombination.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A defining factor of the characteristic
   * - **Definition:** A defining factor of the characteristic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private characteristic: EvidenceVariableCharacteristicComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CharacteristicCombinationEnum }
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
   * @see CodeSystem Enumeration: {@link CharacteristicCombinationEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid EvidenceVariable.characteristic.definitionByCombination.code`;
      assertEnumCodeType<CharacteristicCombinationEnum>(enumType, CharacteristicCombinationEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link CharacteristicCombinationEnum }
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
   * @see CodeSystem Enumeration: {@link CharacteristicCombinationEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByCombination.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.characteristicCombinationEnum);
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
   * @see CodeSystem Enumeration: {@link CharacteristicCombinationEnum }
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
   * @see CodeSystem Enumeration: {@link CharacteristicCombinationEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByCombination.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.characteristicCombinationEnum);
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
   * @returns the `threshold` property value as a PositiveIntType object if defined; else an empty PositiveIntType object
   */
  public getThresholdElement(): PositiveIntType {
    return this.threshold ?? new PositiveIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `threshold` property.
   *
   * @param element - the `threshold` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setThresholdElement(element: PositiveIntType | undefined): this {
    if (isDefined<PositiveIntType>(element)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByCombination.threshold; Provided element is not an instance of PositiveIntType.`;
      assertFhirType<PositiveIntType>(element, PositiveIntType, optErrMsg);
      this.threshold = element;
    } else {
      this.threshold = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `threshold` property exists and has a value; `false` otherwise
   */
  public hasThresholdElement(): boolean {
    return isDefined<PositiveIntType>(this.threshold) && !this.threshold.isEmpty();
  }

  /**
   * @returns the `threshold` property value as a fhirPositiveInt if defined; else undefined
   */
  public getThreshold(): fhirPositiveInt | undefined {
    return this.threshold?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `threshold` property.
   *
   * @param value - the `threshold` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setThreshold(value: fhirPositiveInt | undefined): this {
    if (isDefined<fhirPositiveInt>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByCombination.threshold (${String(value)})`;
      this.threshold = new PositiveIntType(parseFhirPrimitiveData(value, fhirPositiveIntSchema, optErrMsg));
    } else {
      this.threshold = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `threshold` property exists and has a value; `false` otherwise
   */
  public hasThreshold(): boolean {
    return this.hasThresholdElement();
  }

  /**
   * @returns the `characteristic` property value as a EvidenceVariableCharacteristicComponent array
   */
  public getCharacteristic(): EvidenceVariableCharacteristicComponent[] {
    return this.characteristic ?? ([] as EvidenceVariableCharacteristicComponent[]);
  }

  /**
   * Assigns the provided EvidenceVariableCharacteristicComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: EvidenceVariableCharacteristicComponent[] | undefined | null): this {
    if (isDefinedList<EvidenceVariableCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByCombination.characteristic; Provided value array has an element that is not an instance of EvidenceVariableCharacteristicComponent.`;
      assertFhirTypeList<EvidenceVariableCharacteristicComponent>(value, EvidenceVariableCharacteristicComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = null;
    }
    return this;
  }

  /**
   * Add the provided EvidenceVariableCharacteristicComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: EvidenceVariableCharacteristicComponent | undefined): this {
    if (isDefined<EvidenceVariableCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.definitionByCombination.characteristic; Provided element is not an instance of EvidenceVariableCharacteristicComponent.`;
      assertFhirType<EvidenceVariableCharacteristicComponent>(value, EvidenceVariableCharacteristicComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<EvidenceVariableCharacteristicComponent>(this.characteristic) && this.characteristic.some((item: EvidenceVariableCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as EvidenceVariableCharacteristicComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceVariable.characteristic.definitionByCombination';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.threshold,
      this.characteristic,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceVariableCharacteristicDefinitionByCombinationComponent {
    const dest = new EvidenceVariableCharacteristicDefinitionByCombinationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceVariableCharacteristicDefinitionByCombinationComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.threshold = this.threshold?.copy();
    const characteristicList = copyListValues<EvidenceVariableCharacteristicComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? null : characteristicList;
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

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    }

    if (this.hasThresholdElement()) {
      setFhirPrimitiveJson<fhirPositiveInt>(this.getThresholdElement(), 'threshold', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceVariableCharacteristicTimeFromEventComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Timing in which the characteristic is determined
 * - **Definition:** Timing in which the characteristic is determined.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceVariable](http://hl7.org/fhir/StructureDefinition/EvidenceVariable)
 */
export class EvidenceVariableCharacteristicTimeFromEventComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceVariableCharacteristicTimeFromEventComponent` JSON to instantiate the EvidenceVariableCharacteristicTimeFromEventComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceVariableCharacteristicTimeFromEventComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceVariableCharacteristicTimeFromEventComponent
   * @returns EvidenceVariableCharacteristicTimeFromEventComponent data model or undefined for `EvidenceVariableCharacteristicTimeFromEventComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceVariableCharacteristicTimeFromEventComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceVariableCharacteristicTimeFromEventComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceVariableCharacteristicTimeFromEventComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = EvidenceVariableCharacteristicTimeFromEventComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceVariableCharacteristicTimeFromEventComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
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

    fieldName = 'event[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const event: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setEvent(event);

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'range';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRange(datatype);
    }

    return instance;
  }

  /**
   * EvidenceVariable.characteristic.timeFromEvent.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human readable description
   * - **Definition:** Human readable description.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * EvidenceVariable.characteristic.timeFromEvent.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes or explanatory notes
   * - **Definition:** A human-readable string to clarify or explain concepts about the timeFromEvent.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * EvidenceVariable.characteristic.timeFromEvent.event[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceVariable.characteristic.timeFromEvent.event[x]', ['CodeableConcept','Reference','dateTime','id',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The event used as a base point (reference point) in time
   * - **Definition:** The event used as a base point (reference point) in time.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   *     'dateTime',
   *     'id',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('EvidenceVariable.characteristic.timeFromEvent.event[x]',[
    'CodeableConcept',
    'Reference',
    'dateTime',
    'id',
  ])
  private event?: IDataType | undefined;

  /**
   * EvidenceVariable.characteristic.timeFromEvent.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to express the observation at a defined amount of time before or after the event
   * - **Definition:** Used to express the observation at a defined amount of time before or after the event.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * EvidenceVariable.characteristic.timeFromEvent.range Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to express the observation within a period before and/or after the event
   * - **Definition:** Used to express the observation within a period before and/or after the event.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private range?: Range | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent.description (${String(value)})`;
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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `event` property value as a DataType object if defined; else undefined
   */
  public getEvent(): IDataType | undefined {
    return this.event;
  }

  /**
   * Assigns the provided DataType object value to the `event` property.
   *
   * @decorator `@ChoiceDataTypes('EvidenceVariable.characteristic.timeFromEvent.event[x]')`
   *
   * @param value - the `event` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceVariable.characteristic.timeFromEvent.event[x]')
  public setEvent(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.event = value;
    } else {
      this.event = undefined;
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
   * @returns the `event` property value as a CodeableConcept object if defined; else undefined
   */
  public getEventCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.event)) {
      return undefined;
    }
    if (!(this.event instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.timeFromEvent.event[x]: Expected CodeableConcept but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `event` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasEventCodeableConcept(): boolean {
    return this.hasEvent() && this.event instanceof CodeableConcept;
  }

  /**
   * @returns the `event` property value as a Reference object if defined; else undefined
   */
  public getEventReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.event)) {
      return undefined;
    }
    if (!(this.event instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.timeFromEvent.event[x]: Expected Reference but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `event` property exists as a Reference and has a value; `false` otherwise
   */
  public hasEventReference(): boolean {
    return this.hasEvent() && this.event instanceof Reference;
  }

  /**
   * @returns the `event` property value as a DateTimeType object if defined; else undefined
   */
  public getEventDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.event)) {
      return undefined;
    }
    if (!(this.event instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.timeFromEvent.event[x]: Expected DateTimeType but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `event` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasEventDateTimeType(): boolean {
    return this.hasEvent() && this.event instanceof DateTimeType;
  }

  /**
   * @returns the `event` property value as a IdType object if defined; else undefined
   */
  public getEventIdType(): IdType | undefined {
    if (!isDefined<IDataType | undefined>(this.event)) {
      return undefined;
    }
    if (!(this.event instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for EvidenceVariable.characteristic.timeFromEvent.event[x]: Expected IdType but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `event` property exists as a IdType and has a value; `false` otherwise
   */
  public hasEventIdType(): boolean {
    return this.hasEvent() && this.event instanceof IdType;
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
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `range` property value as a Range object if defined; else an empty Range object
   */
  public getRange(): Range {
    return this.range ?? new Range();
  }

  /**
   * Assigns the provided Range object value to the `range` property.
   *
   * @param value - the `range` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRange(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid EvidenceVariable.characteristic.timeFromEvent.range; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.range = value;
    } else {
      this.range = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `range` property exists and has a value; `false` otherwise
   */
  public hasRange(): boolean {
    return isDefined<Range>(this.range) && !this.range.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceVariable.characteristic.timeFromEvent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.note,
      this.event,
      this.quantity,
      this.range,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceVariableCharacteristicTimeFromEventComponent {
    const dest = new EvidenceVariableCharacteristicTimeFromEventComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceVariableCharacteristicTimeFromEventComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.event = this.event?.copy() as IDataType;
    dest.quantity = this.quantity?.copy();
    dest.range = this.range?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasEvent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEvent()!, 'event', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasRange()) {
      setFhirComplexJson(this.getRange(), 'range', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceVariableCategoryComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A grouping for ordinal or polychotomous variables
 * - **Definition:** A grouping for ordinal or polychotomous variables.
 *
 * @category Data Models: Resource
 * @see [FHIR EvidenceVariable](http://hl7.org/fhir/StructureDefinition/EvidenceVariable)
 */
export class EvidenceVariableCategoryComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceVariableCategoryComponent` JSON to instantiate the EvidenceVariableCategoryComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceVariableCategoryComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceVariableCategoryComponent
   * @returns EvidenceVariableCategoryComponent data model or undefined for `EvidenceVariableCategoryComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceVariableCategoryComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceVariableCategoryComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceVariableCategoryComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = EvidenceVariableCategoryComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for EvidenceVariableCategoryComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
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
   * EvidenceVariable.category.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the grouping
   * - **Definition:** Description of the grouping.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * EvidenceVariable.category.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('EvidenceVariable.category.value[x]', ['CodeableConcept','Quantity','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of the grouping
   * - **Definition:** Definition of the grouping.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('EvidenceVariable.category.value[x]',[
    'CodeableConcept',
    'Quantity',
    'Range',
  ])
  private value?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid EvidenceVariable.category.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid EvidenceVariable.category.name (${String(value)})`;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('EvidenceVariable.category.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('EvidenceVariable.category.value[x]')
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
        `DataType mismatch for EvidenceVariable.category.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for EvidenceVariable.category.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for EvidenceVariable.category.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
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

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'EvidenceVariable.category';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceVariableCategoryComponent {
    const dest = new EvidenceVariableCategoryComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceVariableCategoryComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
