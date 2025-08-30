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
 * SubstanceSpecification Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubstanceSpecification
 * StructureDefinition.name: SubstanceSpecification
 * StructureDefinition.description: The detailed description of a substance, typically at a level beyond what is used for prescribing.
 * StructureDefinition.fhirVersion: 4.0.1
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
  DateTimeType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirDateTime,
  fhirDateTimeSchema,
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
import { Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Range, Ratio, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * SubstanceSpecification Class
 *
 * @remarks
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 *
 * **FHIR Specification**
 * - **Short:** The detailed description of a substance, typically at a level beyond what is used for prescribing
 * - **Definition:** The detailed description of a substance, typically at a level beyond what is used for prescribing.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecification extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecification` JSON to instantiate the SubstanceSpecification data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecification`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecification
   * @returns SubstanceSpecification data model or undefined for `SubstanceSpecification`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecification | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecification';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecification();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubstanceSpecification');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'domain';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDomain(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'moiety';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationMoietyComponent | undefined = SubstanceSpecificationMoietyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMoiety(component);
        }
      });
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationPropertyComponent | undefined = SubstanceSpecificationPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProperty(component);
        }
      });
    }

    fieldName = 'referenceInformation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReferenceInformation(datatype);
    }

    fieldName = 'structure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceSpecificationStructureComponent | undefined = SubstanceSpecificationStructureComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStructure(component);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationCodeComponent | undefined = SubstanceSpecificationCodeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCode(component);
        }
      });
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationNameComponent | undefined = SubstanceSpecificationNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addName(component);
        }
      });
    }

    fieldName = 'molecularWeight';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined = SubstanceSpecificationStructureIsotopeMolecularWeightComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMolecularWeight(component);
        }
      });
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationRelationshipComponent | undefined = SubstanceSpecificationRelationshipComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelationship(component);
        }
      });
    }

    fieldName = 'nucleicAcid';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNucleicAcid(datatype);
    }

    fieldName = 'polymer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPolymer(datatype);
    }

    fieldName = 'protein';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProtein(datatype);
    }

    fieldName = 'sourceMaterial';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSourceMaterial(datatype);
    }

    return instance;
  }

  /**
   * SubstanceSpecification.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier by which this substance is known
   * - **Definition:** Identifier by which this substance is known.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SubstanceSpecification.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** High level categorization, e.g. polymer or nucleic acid
   * - **Definition:** High level categorization, e.g. polymer or nucleic acid.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status of substance within the catalogue e.g. approved
   * - **Definition:** Status of substance within the catalogue e.g. approved.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.domain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If the substance applies to only human or veterinary use
   * - **Definition:** If the substance applies to only human or veterinary use.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private domain?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of the substance
   * - **Definition:** Textual description of the substance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * SubstanceSpecification.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting literature
   * - **Definition:** Supporting literature.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

  /**
   * SubstanceSpecification.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual comment about this record of a substance
   * - **Definition:** Textual comment about this record of a substance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private comment?: StringType | undefined;

  /**
   * SubstanceSpecification.moiety Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Moiety, for structural modifications
   * - **Definition:** Moiety, for structural modifications.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private moiety?: SubstanceSpecificationMoietyComponent[] | undefined;

  /**
   * SubstanceSpecification.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General specifications for this substance, including how it is related to other substances
   * - **Definition:** General specifications for this substance, including how it is related to other substances.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private property?: SubstanceSpecificationPropertyComponent[] | undefined;

  /**
   * SubstanceSpecification.referenceInformation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General information detailing this substance
   * - **Definition:** General information detailing this substance.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private referenceInformation?: Reference | undefined;

  /**
   * SubstanceSpecification.structure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structural information
   * - **Definition:** Structural information.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private structure?: SubstanceSpecificationStructureComponent | undefined;

  /**
   * SubstanceSpecification.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Codes associated with the substance
   * - **Definition:** Codes associated with the substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: SubstanceSpecificationCodeComponent[] | undefined;

  /**
   * SubstanceSpecification.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Names applicable to this substance
   * - **Definition:** Names applicable to this substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: SubstanceSpecificationNameComponent[] | undefined;

  /**
   * SubstanceSpecification.molecularWeight Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The molecular weight or weight range (for proteins, polymers or nucleic acids)
   * - **Definition:** The molecular weight or weight range (for proteins, polymers or nucleic acids).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeightComponent[] | undefined;

  /**
   * SubstanceSpecification.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A link between this substance and another, with details of the relationship
   * - **Definition:** A link between this substance and another, with details of the relationship.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relationship?: SubstanceSpecificationRelationshipComponent[] | undefined;

  /**
   * SubstanceSpecification.nucleicAcid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data items specific to nucleic acids
   * - **Definition:** Data items specific to nucleic acids.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private nucleicAcid?: Reference | undefined;

  /**
   * SubstanceSpecification.polymer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data items specific to polymers
   * - **Definition:** Data items specific to polymers.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstancePolymer',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private polymer?: Reference | undefined;

  /**
   * SubstanceSpecification.protein Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data items specific to proteins
   * - **Definition:** Data items specific to proteins.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceProtein',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private protein?: Reference | undefined;

  /**
   * SubstanceSpecification.sourceMaterial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Material or taxonomic/anatomical source for the substance
   * - **Definition:** Material or taxonomic/anatomical source for the substance.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sourceMaterial?: Reference | undefined;

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
      const optErrMsg = `Invalid SubstanceSpecification.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.status; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `domain` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDomain(): CodeableConcept {
    return this.domain ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Domain object value to the `domain` property.
   *
   * @param value - the `domain` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDomain(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.domain; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.domain = value;
    } else {
      this.domain = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `domain` property exists and has a value; `false` otherwise
   */
  public hasDomain(): boolean {
    return isDefined<CodeableConcept>(this.domain) && !this.domain.isEmpty();
  }

  /**
   * @returns the `description` property value as a StringType object if defined; else an empty StringType object
   */
  public getDescriptionElement(): StringType {
    return this.description ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.description; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else undefined
   */
  public getDescription(): fhirString | undefined {
    return this.description?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /**
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /**
   * @returns the `moiety` property value as a SubstanceSpecificationMoietyComponent array
   */
  public getMoiety(): SubstanceSpecificationMoietyComponent[] {
    return this.moiety ?? ([] as SubstanceSpecificationMoietyComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationMoietyComponent array value to the `moiety` property.
   *
   * @param value - the `moiety` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMoiety(value: SubstanceSpecificationMoietyComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationMoietyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.moiety; Provided value array has an element that is not an instance of SubstanceSpecificationMoietyComponent.`;
      assertFhirTypeList<SubstanceSpecificationMoietyComponent>(value, SubstanceSpecificationMoietyComponent, optErrMsg);
      this.moiety = value;
    } else {
      this.moiety = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationMoietyComponent value to the `moiety` array property.
   *
   * @param value - the `moiety` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMoiety(value: SubstanceSpecificationMoietyComponent | undefined): this {
    if (isDefined<SubstanceSpecificationMoietyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.moiety; Provided element is not an instance of SubstanceSpecificationMoietyComponent.`;
      assertFhirType<SubstanceSpecificationMoietyComponent>(value, SubstanceSpecificationMoietyComponent, optErrMsg);
      this.initMoiety();
      this.moiety?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `moiety` property exists and has a value; `false` otherwise
   */
  public hasMoiety(): boolean {
    return isDefinedList<SubstanceSpecificationMoietyComponent>(this.moiety) && this.moiety.some((item: SubstanceSpecificationMoietyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `moiety` property
   */
  private initMoiety(): void {
    if(!this.hasMoiety()) {
      this.moiety = [] as SubstanceSpecificationMoietyComponent[];
    }
  }

  /**
   * @returns the `property` property value as a SubstanceSpecificationPropertyComponent array
   */
  public getProperty(): SubstanceSpecificationPropertyComponent[] {
    return this.property ?? ([] as SubstanceSpecificationPropertyComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: SubstanceSpecificationPropertyComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationPropertyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.property; Provided value array has an element that is not an instance of SubstanceSpecificationPropertyComponent.`;
      assertFhirTypeList<SubstanceSpecificationPropertyComponent>(value, SubstanceSpecificationPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: SubstanceSpecificationPropertyComponent | undefined): this {
    if (isDefined<SubstanceSpecificationPropertyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.property; Provided element is not an instance of SubstanceSpecificationPropertyComponent.`;
      assertFhirType<SubstanceSpecificationPropertyComponent>(value, SubstanceSpecificationPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<SubstanceSpecificationPropertyComponent>(this.property) && this.property.some((item: SubstanceSpecificationPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as SubstanceSpecificationPropertyComponent[];
    }
  }

  /**
   * @returns the `referenceInformation` property value as a Reference object; else an empty Reference object
   */
  public getReferenceInformation(): Reference {
    return this.referenceInformation ?? new Reference();
  }

  /**
   * Assigns the provided ReferenceInformation object value to the `referenceInformation` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.referenceInformation', ['SubstanceReferenceInformation',])`
   *
   * @param value - the `referenceInformation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.referenceInformation', [
    'SubstanceReferenceInformation',
  ])
  public setReferenceInformation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.referenceInformation = value;
    } else {
      this.referenceInformation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referenceInformation` property exists and has a value; `false` otherwise
   */
  public hasReferenceInformation(): boolean {
    return isDefined<Reference>(this.referenceInformation) && !this.referenceInformation.isEmpty();
  }

  /**
   * @returns the `structure` property value as a SubstanceSpecificationStructureComponent object if defined; else an empty SubstanceSpecificationStructureComponent object
   */
  public getStructure(): SubstanceSpecificationStructureComponent {
    return this.structure ?? new SubstanceSpecificationStructureComponent();
  }

  /**
   * Assigns the provided Structure object value to the `structure` property.
   *
   * @param value - the `structure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStructure(value: SubstanceSpecificationStructureComponent | undefined): this {
    if (isDefined<SubstanceSpecificationStructureComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure; Provided element is not an instance of SubstanceSpecificationStructureComponent.`;
      assertFhirType<SubstanceSpecificationStructureComponent>(value, SubstanceSpecificationStructureComponent, optErrMsg);
      this.structure = value;
    } else {
      this.structure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `structure` property exists and has a value; `false` otherwise
   */
  public hasStructure(): boolean {
    return isDefined<SubstanceSpecificationStructureComponent>(this.structure) && !this.structure.isEmpty();
  }

  /**
   * @returns the `code` property value as a SubstanceSpecificationCodeComponent array
   */
  public getCode(): SubstanceSpecificationCodeComponent[] {
    return this.code ?? ([] as SubstanceSpecificationCodeComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationCodeComponent array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: SubstanceSpecificationCodeComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationCodeComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.code; Provided value array has an element that is not an instance of SubstanceSpecificationCodeComponent.`;
      assertFhirTypeList<SubstanceSpecificationCodeComponent>(value, SubstanceSpecificationCodeComponent, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationCodeComponent value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: SubstanceSpecificationCodeComponent | undefined): this {
    if (isDefined<SubstanceSpecificationCodeComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.code; Provided element is not an instance of SubstanceSpecificationCodeComponent.`;
      assertFhirType<SubstanceSpecificationCodeComponent>(value, SubstanceSpecificationCodeComponent, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<SubstanceSpecificationCodeComponent>(this.code) && this.code.some((item: SubstanceSpecificationCodeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as SubstanceSpecificationCodeComponent[];
    }
  }

  /**
   * @returns the `name` property value as a SubstanceSpecificationNameComponent array
   */
  public getName(): SubstanceSpecificationNameComponent[] {
    return this.name ?? ([] as SubstanceSpecificationNameComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationNameComponent array value to the `name` property.
   *
   * @param value - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: SubstanceSpecificationNameComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name; Provided value array has an element that is not an instance of SubstanceSpecificationNameComponent.`;
      assertFhirTypeList<SubstanceSpecificationNameComponent>(value, SubstanceSpecificationNameComponent, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationNameComponent value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addName(value: SubstanceSpecificationNameComponent | undefined): this {
    if (isDefined<SubstanceSpecificationNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name; Provided element is not an instance of SubstanceSpecificationNameComponent.`;
      assertFhirType<SubstanceSpecificationNameComponent>(value, SubstanceSpecificationNameComponent, optErrMsg);
      this.initName();
      this.name?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefinedList<SubstanceSpecificationNameComponent>(this.name) && this.name.some((item: SubstanceSpecificationNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `name` property
   */
  private initName(): void {
    if(!this.hasName()) {
      this.name = [] as SubstanceSpecificationNameComponent[];
    }
  }

  /**
   * @returns the `molecularWeight` property value as a SubstanceSpecificationStructureIsotopeMolecularWeightComponent array
   */
  public getMolecularWeight(): SubstanceSpecificationStructureIsotopeMolecularWeightComponent[] {
    return this.molecularWeight ?? ([] as SubstanceSpecificationStructureIsotopeMolecularWeightComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationStructureIsotopeMolecularWeightComponent array value to the `molecularWeight` property.
   *
   * @param value - the `molecularWeight` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMolecularWeight(value: SubstanceSpecificationStructureIsotopeMolecularWeightComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.molecularWeight; Provided value array has an element that is not an instance of SubstanceSpecificationStructureIsotopeMolecularWeightComponent.`;
      assertFhirTypeList<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value, SubstanceSpecificationStructureIsotopeMolecularWeightComponent, optErrMsg);
      this.molecularWeight = value;
    } else {
      this.molecularWeight = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationStructureIsotopeMolecularWeightComponent value to the `molecularWeight` array property.
   *
   * @param value - the `molecularWeight` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMolecularWeight(value: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined): this {
    if (isDefined<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.molecularWeight; Provided element is not an instance of SubstanceSpecificationStructureIsotopeMolecularWeightComponent.`;
      assertFhirType<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value, SubstanceSpecificationStructureIsotopeMolecularWeightComponent, optErrMsg);
      this.initMolecularWeight();
      this.molecularWeight?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularWeight` property exists and has a value; `false` otherwise
   */
  public hasMolecularWeight(): boolean {
    return isDefinedList<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(this.molecularWeight) && this.molecularWeight.some((item: SubstanceSpecificationStructureIsotopeMolecularWeightComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `molecularWeight` property
   */
  private initMolecularWeight(): void {
    if(!this.hasMolecularWeight()) {
      this.molecularWeight = [] as SubstanceSpecificationStructureIsotopeMolecularWeightComponent[];
    }
  }

  /**
   * @returns the `relationship` property value as a SubstanceSpecificationRelationshipComponent array
   */
  public getRelationship(): SubstanceSpecificationRelationshipComponent[] {
    return this.relationship ?? ([] as SubstanceSpecificationRelationshipComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationRelationshipComponent array value to the `relationship` property.
   *
   * @param value - the `relationship` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: SubstanceSpecificationRelationshipComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationRelationshipComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.relationship; Provided value array has an element that is not an instance of SubstanceSpecificationRelationshipComponent.`;
      assertFhirTypeList<SubstanceSpecificationRelationshipComponent>(value, SubstanceSpecificationRelationshipComponent, optErrMsg);
      this.relationship = value;
    } else {
      this.relationship = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationRelationshipComponent value to the `relationship` array property.
   *
   * @param value - the `relationship` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelationship(value: SubstanceSpecificationRelationshipComponent | undefined): this {
    if (isDefined<SubstanceSpecificationRelationshipComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.relationship; Provided element is not an instance of SubstanceSpecificationRelationshipComponent.`;
      assertFhirType<SubstanceSpecificationRelationshipComponent>(value, SubstanceSpecificationRelationshipComponent, optErrMsg);
      this.initRelationship();
      this.relationship?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return isDefinedList<SubstanceSpecificationRelationshipComponent>(this.relationship) && this.relationship.some((item: SubstanceSpecificationRelationshipComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relationship` property
   */
  private initRelationship(): void {
    if(!this.hasRelationship()) {
      this.relationship = [] as SubstanceSpecificationRelationshipComponent[];
    }
  }

  /**
   * @returns the `nucleicAcid` property value as a Reference object; else an empty Reference object
   */
  public getNucleicAcid(): Reference {
    return this.nucleicAcid ?? new Reference();
  }

  /**
   * Assigns the provided NucleicAcid object value to the `nucleicAcid` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.nucleicAcid', ['SubstanceNucleicAcid',])`
   *
   * @param value - the `nucleicAcid` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.nucleicAcid', [
    'SubstanceNucleicAcid',
  ])
  public setNucleicAcid(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.nucleicAcid = value;
    } else {
      this.nucleicAcid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `nucleicAcid` property exists and has a value; `false` otherwise
   */
  public hasNucleicAcid(): boolean {
    return isDefined<Reference>(this.nucleicAcid) && !this.nucleicAcid.isEmpty();
  }

  /**
   * @returns the `polymer` property value as a Reference object; else an empty Reference object
   */
  public getPolymer(): Reference {
    return this.polymer ?? new Reference();
  }

  /**
   * Assigns the provided Polymer object value to the `polymer` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.polymer', ['SubstancePolymer',])`
   *
   * @param value - the `polymer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.polymer', [
    'SubstancePolymer',
  ])
  public setPolymer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.polymer = value;
    } else {
      this.polymer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `polymer` property exists and has a value; `false` otherwise
   */
  public hasPolymer(): boolean {
    return isDefined<Reference>(this.polymer) && !this.polymer.isEmpty();
  }

  /**
   * @returns the `protein` property value as a Reference object; else an empty Reference object
   */
  public getProtein(): Reference {
    return this.protein ?? new Reference();
  }

  /**
   * Assigns the provided Protein object value to the `protein` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.protein', ['SubstanceProtein',])`
   *
   * @param value - the `protein` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.protein', [
    'SubstanceProtein',
  ])
  public setProtein(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.protein = value;
    } else {
      this.protein = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `protein` property exists and has a value; `false` otherwise
   */
  public hasProtein(): boolean {
    return isDefined<Reference>(this.protein) && !this.protein.isEmpty();
  }

  /**
   * @returns the `sourceMaterial` property value as a Reference object; else an empty Reference object
   */
  public getSourceMaterial(): Reference {
    return this.sourceMaterial ?? new Reference();
  }

  /**
   * Assigns the provided SourceMaterial object value to the `sourceMaterial` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.sourceMaterial', ['SubstanceSourceMaterial',])`
   *
   * @param value - the `sourceMaterial` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.sourceMaterial', [
    'SubstanceSourceMaterial',
  ])
  public setSourceMaterial(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.sourceMaterial = value;
    } else {
      this.sourceMaterial = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceMaterial` property exists and has a value; `false` otherwise
   */
  public hasSourceMaterial(): boolean {
    return isDefined<Reference>(this.sourceMaterial) && !this.sourceMaterial.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.status,
      this.domain,
      this.description,
      this.source,
      this.comment,
      this.moiety,
      this.property,
      this.referenceInformation,
      this.structure,
      this.code,
      this.name,
      this.molecularWeight,
      this.relationship,
      this.nucleicAcid,
      this.polymer,
      this.protein,
      this.sourceMaterial,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecification {
    const dest = new SubstanceSpecification();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecification): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.type_ = this.type_?.copy();
    dest.status = this.status?.copy();
    dest.domain = this.domain?.copy();
    dest.description = this.description?.copy();
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
    dest.comment = this.comment?.copy();
    const moietyList = copyListValues<SubstanceSpecificationMoietyComponent>(this.moiety);
    dest.moiety = moietyList.length === 0 ? undefined : moietyList;
    const propertyList = copyListValues<SubstanceSpecificationPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    dest.referenceInformation = this.referenceInformation?.copy();
    dest.structure = this.structure?.copy();
    const codeList = copyListValues<SubstanceSpecificationCodeComponent>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const nameList = copyListValues<SubstanceSpecificationNameComponent>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    const molecularWeightList = copyListValues<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(this.molecularWeight);
    dest.molecularWeight = molecularWeightList.length === 0 ? undefined : molecularWeightList;
    const relationshipList = copyListValues<SubstanceSpecificationRelationshipComponent>(this.relationship);
    dest.relationship = relationshipList.length === 0 ? undefined : relationshipList;
    dest.nucleicAcid = this.nucleicAcid?.copy();
    dest.polymer = this.polymer?.copy();
    dest.protein = this.protein?.copy();
    dest.sourceMaterial = this.sourceMaterial?.copy();
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

    if (this.hasDomain()) {
      setFhirComplexJson(this.getDomain(), 'domain', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasMoiety()) {
      setFhirBackboneElementListJson(this.getMoiety(), 'moiety', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasReferenceInformation()) {
      setFhirComplexJson(this.getReferenceInformation(), 'referenceInformation', jsonObj);
    }

    if (this.hasStructure()) {
      setFhirBackboneElementJson(this.getStructure(), 'structure', jsonObj);
    }

    if (this.hasCode()) {
      setFhirBackboneElementListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasName()) {
      setFhirBackboneElementListJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasMolecularWeight()) {
      setFhirBackboneElementListJson(this.getMolecularWeight(), 'molecularWeight', jsonObj);
    }

    if (this.hasRelationship()) {
      setFhirBackboneElementListJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasNucleicAcid()) {
      setFhirComplexJson(this.getNucleicAcid(), 'nucleicAcid', jsonObj);
    }

    if (this.hasPolymer()) {
      setFhirComplexJson(this.getPolymer(), 'polymer', jsonObj);
    }

    if (this.hasProtein()) {
      setFhirComplexJson(this.getProtein(), 'protein', jsonObj);
    }

    if (this.hasSourceMaterial()) {
      setFhirComplexJson(this.getSourceMaterial(), 'sourceMaterial', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubstanceSpecificationMoietyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Moiety, for structural modifications
 * - **Definition:** Moiety, for structural modifications.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationMoietyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationMoietyComponent` JSON to instantiate the SubstanceSpecificationMoietyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationMoietyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationMoietyComponent
   * @returns SubstanceSpecificationMoietyComponent data model or undefined for `SubstanceSpecificationMoietyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationMoietyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationMoietyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationMoietyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = SubstanceSpecificationMoietyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubstanceSpecificationMoietyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'stereochemistry';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStereochemistry(datatype);
    }

    fieldName = 'opticalActivity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOpticalActivity(datatype);
    }

    fieldName = 'molecularFormula';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMolecularFormulaElement(datatype);
    }

    fieldName = 'amount[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const amount: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAmount(amount);

    return instance;
  }

  /**
   * SubstanceSpecification.moiety.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role that the moiety is playing
   * - **Definition:** Role that the moiety is playing.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private role?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.moiety.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier by which this moiety substance is known
   * - **Definition:** Identifier by which this moiety substance is known.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SubstanceSpecification.moiety.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual name for this moiety substance
   * - **Definition:** Textual name for this moiety substance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * SubstanceSpecification.moiety.stereochemistry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stereochemistry type
   * - **Definition:** Stereochemistry type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private stereochemistry?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.moiety.opticalActivity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Optical activity type
   * - **Definition:** Optical activity type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private opticalActivity?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.moiety.molecularFormula Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Molecular formula
   * - **Definition:** Molecular formula.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularFormula?: StringType | undefined;

  /**
   * SubstanceSpecification.moiety.amount[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceSpecification.moiety.amount[x]', ['Quantity','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantitative value for this moiety
   * - **Definition:** Quantitative value for this moiety.
   * - **FHIR Types:**
   *     'Quantity',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceSpecification.moiety.amount[x]',[
    'Quantity',
    'string',
  ])
  private amount?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid SubstanceSpecification.moiety.role; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.moiety.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.moiety.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.moiety.name (${String(value)})`;
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
   * @returns the `stereochemistry` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStereochemistry(): CodeableConcept {
    return this.stereochemistry ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Stereochemistry object value to the `stereochemistry` property.
   *
   * @param value - the `stereochemistry` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStereochemistry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.moiety.stereochemistry; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.stereochemistry = value;
    } else {
      this.stereochemistry = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `stereochemistry` property exists and has a value; `false` otherwise
   */
  public hasStereochemistry(): boolean {
    return isDefined<CodeableConcept>(this.stereochemistry) && !this.stereochemistry.isEmpty();
  }

  /**
   * @returns the `opticalActivity` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOpticalActivity(): CodeableConcept {
    return this.opticalActivity ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OpticalActivity object value to the `opticalActivity` property.
   *
   * @param value - the `opticalActivity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOpticalActivity(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.moiety.opticalActivity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.opticalActivity = value;
    } else {
      this.opticalActivity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `opticalActivity` property exists and has a value; `false` otherwise
   */
  public hasOpticalActivity(): boolean {
    return isDefined<CodeableConcept>(this.opticalActivity) && !this.opticalActivity.isEmpty();
  }

  /**
   * @returns the `molecularFormula` property value as a StringType object if defined; else an empty StringType object
   */
  public getMolecularFormulaElement(): StringType {
    return this.molecularFormula ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `molecularFormula` property.
   *
   * @param element - the `molecularFormula` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMolecularFormulaElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.moiety.molecularFormula; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.molecularFormula = element;
    } else {
      this.molecularFormula = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularFormula` property exists and has a value; `false` otherwise
   */
  public hasMolecularFormulaElement(): boolean {
    return isDefined<StringType>(this.molecularFormula) && !this.molecularFormula.isEmpty();
  }

  /**
   * @returns the `molecularFormula` property value as a fhirString if defined; else undefined
   */
  public getMolecularFormula(): fhirString | undefined {
    return this.molecularFormula?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `molecularFormula` property.
   *
   * @param value - the `molecularFormula` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMolecularFormula(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.moiety.molecularFormula (${String(value)})`;
      this.molecularFormula = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.molecularFormula = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularFormula` property exists and has a value; `false` otherwise
   */
  public hasMolecularFormula(): boolean {
    return this.hasMolecularFormulaElement();
  }

  /**
   * @returns the `amount` property value as a DataType object if defined; else undefined
   */
  public getAmount(): IDataType | undefined {
    return this.amount;
  }

  /**
   * Assigns the provided DataType object value to the `amount` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceSpecification.moiety.amount[x]')`
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceSpecification.moiety.amount[x]')
  public setAmount(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<IDataType>(this.amount) && !this.amount.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `amount` property value as a Quantity object if defined; else undefined
   */
  public getAmountQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.moiety.amount[x]: Expected Quantity but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasAmountQuantity(): boolean {
    return this.hasAmount() && this.amount instanceof Quantity;
  }

  /**
   * @returns the `amount` property value as a StringType object if defined; else undefined
   */
  public getAmountStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.moiety.amount[x]: Expected StringType but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAmountStringType(): boolean {
    return this.hasAmount() && this.amount instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.moiety';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.identifier,
      this.name,
      this.stereochemistry,
      this.opticalActivity,
      this.molecularFormula,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationMoietyComponent {
    const dest = new SubstanceSpecificationMoietyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationMoietyComponent): void {
    super.copyValues(dest);
    dest.role = this.role?.copy();
    dest.identifier = this.identifier?.copy();
    dest.name = this.name?.copy();
    dest.stereochemistry = this.stereochemistry?.copy();
    dest.opticalActivity = this.opticalActivity?.copy();
    dest.molecularFormula = this.molecularFormula?.copy();
    dest.amount = this.amount?.copy() as IDataType;
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

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasStereochemistry()) {
      setFhirComplexJson(this.getStereochemistry(), 'stereochemistry', jsonObj);
    }

    if (this.hasOpticalActivity()) {
      setFhirComplexJson(this.getOpticalActivity(), 'opticalActivity', jsonObj);
    }

    if (this.hasMolecularFormulaElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMolecularFormulaElement(), 'molecularFormula', jsonObj);
    }

    if (this.hasAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAmount()!, 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** General specifications for this substance, including how it is related to other substances
 * - **Definition:** General specifications for this substance, including how it is related to other substances.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationPropertyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationPropertyComponent` JSON to instantiate the SubstanceSpecificationPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationPropertyComponent
   * @returns SubstanceSpecificationPropertyComponent data model or undefined for `SubstanceSpecificationPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = SubstanceSpecificationPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubstanceSpecificationPropertyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'parameters';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setParametersElement(datatype);
    }

    fieldName = 'definingSubstance[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const definingSubstance: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDefiningSubstance(definingSubstance);

    fieldName = 'amount[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const amount: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAmount(amount);

    return instance;
  }

  /**
   * SubstanceSpecification.property.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A category for this property, e.g. Physical, Chemical, Enzymatic
   * - **Definition:** A category for this property, e.g. Physical, Chemical, Enzymatic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.property.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Property type e.g. viscosity, pH, isoelectric point
   * - **Definition:** Property type e.g. viscosity, pH, isoelectric point.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.property.parameters Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1)
   * - **Definition:** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private parameters?: StringType | undefined;

  /**
   * SubstanceSpecification.property.definingSubstance[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceSpecification.property.definingSubstance[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol)
   * - **Definition:** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceSpecification.property.definingSubstance[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private definingSubstance?: IDataType | undefined;

  /**
   * SubstanceSpecification.property.amount[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceSpecification.property.amount[x]', ['Quantity','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantitative value for this property
   * - **Definition:** Quantitative value for this property.
   * - **FHIR Types:**
   *     'Quantity',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceSpecification.property.amount[x]',[
    'Quantity',
    'string',
  ])
  private amount?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid SubstanceSpecification.property.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.property.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `parameters` property value as a StringType object if defined; else an empty StringType object
   */
  public getParametersElement(): StringType {
    return this.parameters ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `parameters` property.
   *
   * @param element - the `parameters` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParametersElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.property.parameters; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.parameters = element;
    } else {
      this.parameters = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `parameters` property exists and has a value; `false` otherwise
   */
  public hasParametersElement(): boolean {
    return isDefined<StringType>(this.parameters) && !this.parameters.isEmpty();
  }

  /**
   * @returns the `parameters` property value as a fhirString if defined; else undefined
   */
  public getParameters(): fhirString | undefined {
    return this.parameters?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `parameters` property.
   *
   * @param value - the `parameters` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParameters(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.property.parameters (${String(value)})`;
      this.parameters = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.parameters = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `parameters` property exists and has a value; `false` otherwise
   */
  public hasParameters(): boolean {
    return this.hasParametersElement();
  }

  /**
   * @returns the `definingSubstance` property value as a DataType object if defined; else undefined
   */
  public getDefiningSubstance(): IDataType | undefined {
    return this.definingSubstance;
  }

  /**
   * Assigns the provided DataType object value to the `definingSubstance` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceSpecification.property.definingSubstance[x]')`
   *
   * @param value - the `definingSubstance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceSpecification.property.definingSubstance[x]')
  public setDefiningSubstance(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.definingSubstance = value;
    } else {
      this.definingSubstance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definingSubstance` property exists and has a value; `false` otherwise
   */
  public hasDefiningSubstance(): boolean {
    return isDefined<IDataType>(this.definingSubstance) && !this.definingSubstance.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `definingSubstance` property value as a Reference object if defined; else undefined
   */
  public getDefiningSubstanceReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.definingSubstance)) {
      return undefined;
    }
    if (!(this.definingSubstance instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.property.definingSubstance[x]: Expected Reference but encountered ${this.definingSubstance.fhirType()}`,
      );
    }
    return this.definingSubstance;
  }

  /**
   * @returns `true` if the `definingSubstance` property exists as a Reference and has a value; `false` otherwise
   */
  public hasDefiningSubstanceReference(): boolean {
    return this.hasDefiningSubstance() && this.definingSubstance instanceof Reference;
  }

  /**
   * @returns the `definingSubstance` property value as a CodeableConcept object if defined; else undefined
   */
  public getDefiningSubstanceCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.definingSubstance)) {
      return undefined;
    }
    if (!(this.definingSubstance instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.property.definingSubstance[x]: Expected CodeableConcept but encountered ${this.definingSubstance.fhirType()}`,
      );
    }
    return this.definingSubstance;
  }

  /**
   * @returns `true` if the `definingSubstance` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasDefiningSubstanceCodeableConcept(): boolean {
    return this.hasDefiningSubstance() && this.definingSubstance instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `amount` property value as a DataType object if defined; else undefined
   */
  public getAmount(): IDataType | undefined {
    return this.amount;
  }

  /**
   * Assigns the provided DataType object value to the `amount` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceSpecification.property.amount[x]')`
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceSpecification.property.amount[x]')
  public setAmount(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<IDataType>(this.amount) && !this.amount.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `amount` property value as a Quantity object if defined; else undefined
   */
  public getAmountQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.property.amount[x]: Expected Quantity but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasAmountQuantity(): boolean {
    return this.hasAmount() && this.amount instanceof Quantity;
  }

  /**
   * @returns the `amount` property value as a StringType object if defined; else undefined
   */
  public getAmountStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.property.amount[x]: Expected StringType but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAmountStringType(): boolean {
    return this.hasAmount() && this.amount instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.code,
      this.parameters,
      this.definingSubstance,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationPropertyComponent {
    const dest = new SubstanceSpecificationPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationPropertyComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.code = this.code?.copy();
    dest.parameters = this.parameters?.copy();
    dest.definingSubstance = this.definingSubstance?.copy() as IDataType;
    dest.amount = this.amount?.copy() as IDataType;
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

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasParametersElement()) {
      setFhirPrimitiveJson<fhirString>(this.getParametersElement(), 'parameters', jsonObj);
    }

    if (this.hasDefiningSubstance()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDefiningSubstance()!, 'definingSubstance', jsonObj);
    }

    if (this.hasAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAmount()!, 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationStructureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Structural information
 * - **Definition:** Structural information.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationStructureComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationStructureComponent` JSON to instantiate the SubstanceSpecificationStructureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationStructureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationStructureComponent
   * @returns SubstanceSpecificationStructureComponent data model or undefined for `SubstanceSpecificationStructureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationStructureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationStructureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationStructureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'stereochemistry';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStereochemistry(datatype);
    }

    fieldName = 'opticalActivity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOpticalActivity(datatype);
    }

    fieldName = 'molecularFormula';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMolecularFormulaElement(datatype);
    }

    fieldName = 'molecularFormulaByMoiety';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMolecularFormulaByMoietyElement(datatype);
    }

    fieldName = 'isotope';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationStructureIsotopeComponent | undefined = SubstanceSpecificationStructureIsotopeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addIsotope(component);
        }
      });
    }

    fieldName = 'molecularWeight';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined = SubstanceSpecificationStructureIsotopeMolecularWeightComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMolecularWeight(component);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    fieldName = 'representation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationStructureRepresentationComponent | undefined = SubstanceSpecificationStructureRepresentationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRepresentation(component);
        }
      });
    }

    return instance;
  }

  /**
   * SubstanceSpecification.structure.stereochemistry Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stereochemistry type
   * - **Definition:** Stereochemistry type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private stereochemistry?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.structure.opticalActivity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Optical activity type
   * - **Definition:** Optical activity type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private opticalActivity?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.structure.molecularFormula Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Molecular formula
   * - **Definition:** Molecular formula.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularFormula?: StringType | undefined;

  /**
   * SubstanceSpecification.structure.molecularFormulaByMoiety Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot
   * - **Definition:** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularFormulaByMoiety?: StringType | undefined;

  /**
   * SubstanceSpecification.structure.isotope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
   * - **Definition:** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private isotope?: SubstanceSpecificationStructureIsotopeComponent[] | undefined;

  /**
   * SubstanceSpecification.structure.molecularWeight Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The molecular weight or weight range (for proteins, polymers or nucleic acids)
   * - **Definition:** The molecular weight or weight range (for proteins, polymers or nucleic acids).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined;

  /**
   * SubstanceSpecification.structure.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting literature
   * - **Definition:** Supporting literature.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

  /**
   * SubstanceSpecification.structure.representation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Molecular structural representation
   * - **Definition:** Molecular structural representation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private representation?: SubstanceSpecificationStructureRepresentationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `stereochemistry` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStereochemistry(): CodeableConcept {
    return this.stereochemistry ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Stereochemistry object value to the `stereochemistry` property.
   *
   * @param value - the `stereochemistry` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStereochemistry(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.stereochemistry; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.stereochemistry = value;
    } else {
      this.stereochemistry = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `stereochemistry` property exists and has a value; `false` otherwise
   */
  public hasStereochemistry(): boolean {
    return isDefined<CodeableConcept>(this.stereochemistry) && !this.stereochemistry.isEmpty();
  }

  /**
   * @returns the `opticalActivity` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOpticalActivity(): CodeableConcept {
    return this.opticalActivity ?? new CodeableConcept();
  }

  /**
   * Assigns the provided OpticalActivity object value to the `opticalActivity` property.
   *
   * @param value - the `opticalActivity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOpticalActivity(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.opticalActivity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.opticalActivity = value;
    } else {
      this.opticalActivity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `opticalActivity` property exists and has a value; `false` otherwise
   */
  public hasOpticalActivity(): boolean {
    return isDefined<CodeableConcept>(this.opticalActivity) && !this.opticalActivity.isEmpty();
  }

  /**
   * @returns the `molecularFormula` property value as a StringType object if defined; else an empty StringType object
   */
  public getMolecularFormulaElement(): StringType {
    return this.molecularFormula ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `molecularFormula` property.
   *
   * @param element - the `molecularFormula` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMolecularFormulaElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.molecularFormula; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.molecularFormula = element;
    } else {
      this.molecularFormula = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularFormula` property exists and has a value; `false` otherwise
   */
  public hasMolecularFormulaElement(): boolean {
    return isDefined<StringType>(this.molecularFormula) && !this.molecularFormula.isEmpty();
  }

  /**
   * @returns the `molecularFormula` property value as a fhirString if defined; else undefined
   */
  public getMolecularFormula(): fhirString | undefined {
    return this.molecularFormula?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `molecularFormula` property.
   *
   * @param value - the `molecularFormula` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMolecularFormula(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.molecularFormula (${String(value)})`;
      this.molecularFormula = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.molecularFormula = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularFormula` property exists and has a value; `false` otherwise
   */
  public hasMolecularFormula(): boolean {
    return this.hasMolecularFormulaElement();
  }

  /**
   * @returns the `molecularFormulaByMoiety` property value as a StringType object if defined; else an empty StringType object
   */
  public getMolecularFormulaByMoietyElement(): StringType {
    return this.molecularFormulaByMoiety ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `molecularFormulaByMoiety` property.
   *
   * @param element - the `molecularFormulaByMoiety` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMolecularFormulaByMoietyElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.molecularFormulaByMoiety; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.molecularFormulaByMoiety = element;
    } else {
      this.molecularFormulaByMoiety = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularFormulaByMoiety` property exists and has a value; `false` otherwise
   */
  public hasMolecularFormulaByMoietyElement(): boolean {
    return isDefined<StringType>(this.molecularFormulaByMoiety) && !this.molecularFormulaByMoiety.isEmpty();
  }

  /**
   * @returns the `molecularFormulaByMoiety` property value as a fhirString if defined; else undefined
   */
  public getMolecularFormulaByMoiety(): fhirString | undefined {
    return this.molecularFormulaByMoiety?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `molecularFormulaByMoiety` property.
   *
   * @param value - the `molecularFormulaByMoiety` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMolecularFormulaByMoiety(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.molecularFormulaByMoiety (${String(value)})`;
      this.molecularFormulaByMoiety = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.molecularFormulaByMoiety = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularFormulaByMoiety` property exists and has a value; `false` otherwise
   */
  public hasMolecularFormulaByMoiety(): boolean {
    return this.hasMolecularFormulaByMoietyElement();
  }

  /**
   * @returns the `isotope` property value as a SubstanceSpecificationStructureIsotopeComponent array
   */
  public getIsotope(): SubstanceSpecificationStructureIsotopeComponent[] {
    return this.isotope ?? ([] as SubstanceSpecificationStructureIsotopeComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationStructureIsotopeComponent array value to the `isotope` property.
   *
   * @param value - the `isotope` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIsotope(value: SubstanceSpecificationStructureIsotopeComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationStructureIsotopeComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope; Provided value array has an element that is not an instance of SubstanceSpecificationStructureIsotopeComponent.`;
      assertFhirTypeList<SubstanceSpecificationStructureIsotopeComponent>(value, SubstanceSpecificationStructureIsotopeComponent, optErrMsg);
      this.isotope = value;
    } else {
      this.isotope = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationStructureIsotopeComponent value to the `isotope` array property.
   *
   * @param value - the `isotope` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIsotope(value: SubstanceSpecificationStructureIsotopeComponent | undefined): this {
    if (isDefined<SubstanceSpecificationStructureIsotopeComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope; Provided element is not an instance of SubstanceSpecificationStructureIsotopeComponent.`;
      assertFhirType<SubstanceSpecificationStructureIsotopeComponent>(value, SubstanceSpecificationStructureIsotopeComponent, optErrMsg);
      this.initIsotope();
      this.isotope?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `isotope` property exists and has a value; `false` otherwise
   */
  public hasIsotope(): boolean {
    return isDefinedList<SubstanceSpecificationStructureIsotopeComponent>(this.isotope) && this.isotope.some((item: SubstanceSpecificationStructureIsotopeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `isotope` property
   */
  private initIsotope(): void {
    if(!this.hasIsotope()) {
      this.isotope = [] as SubstanceSpecificationStructureIsotopeComponent[];
    }
  }

  /**
   * @returns the `molecularWeight` property value as a SubstanceSpecificationStructureIsotopeMolecularWeightComponent object if defined; else an empty SubstanceSpecificationStructureIsotopeMolecularWeightComponent object
   */
  public getMolecularWeight(): SubstanceSpecificationStructureIsotopeMolecularWeightComponent {
    return this.molecularWeight ?? new SubstanceSpecificationStructureIsotopeMolecularWeightComponent();
  }

  /**
   * Assigns the provided MolecularWeight object value to the `molecularWeight` property.
   *
   * @param value - the `molecularWeight` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMolecularWeight(value: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined): this {
    if (isDefined<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.molecularWeight; Provided element is not an instance of SubstanceSpecificationStructureIsotopeMolecularWeightComponent.`;
      assertFhirType<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value, SubstanceSpecificationStructureIsotopeMolecularWeightComponent, optErrMsg);
      this.molecularWeight = value;
    } else {
      this.molecularWeight = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularWeight` property exists and has a value; `false` otherwise
   */
  public hasMolecularWeight(): boolean {
    return isDefined<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(this.molecularWeight) && !this.molecularWeight.isEmpty();
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.structure.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.structure.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.structure.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.structure.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /**
   * @returns the `representation` property value as a SubstanceSpecificationStructureRepresentationComponent array
   */
  public getRepresentation(): SubstanceSpecificationStructureRepresentationComponent[] {
    return this.representation ?? ([] as SubstanceSpecificationStructureRepresentationComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationStructureRepresentationComponent array value to the `representation` property.
   *
   * @param value - the `representation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRepresentation(value: SubstanceSpecificationStructureRepresentationComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationStructureRepresentationComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.representation; Provided value array has an element that is not an instance of SubstanceSpecificationStructureRepresentationComponent.`;
      assertFhirTypeList<SubstanceSpecificationStructureRepresentationComponent>(value, SubstanceSpecificationStructureRepresentationComponent, optErrMsg);
      this.representation = value;
    } else {
      this.representation = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationStructureRepresentationComponent value to the `representation` array property.
   *
   * @param value - the `representation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRepresentation(value: SubstanceSpecificationStructureRepresentationComponent | undefined): this {
    if (isDefined<SubstanceSpecificationStructureRepresentationComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.representation; Provided element is not an instance of SubstanceSpecificationStructureRepresentationComponent.`;
      assertFhirType<SubstanceSpecificationStructureRepresentationComponent>(value, SubstanceSpecificationStructureRepresentationComponent, optErrMsg);
      this.initRepresentation();
      this.representation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `representation` property exists and has a value; `false` otherwise
   */
  public hasRepresentation(): boolean {
    return isDefinedList<SubstanceSpecificationStructureRepresentationComponent>(this.representation) && this.representation.some((item: SubstanceSpecificationStructureRepresentationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `representation` property
   */
  private initRepresentation(): void {
    if(!this.hasRepresentation()) {
      this.representation = [] as SubstanceSpecificationStructureRepresentationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.structure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.stereochemistry,
      this.opticalActivity,
      this.molecularFormula,
      this.molecularFormulaByMoiety,
      this.isotope,
      this.molecularWeight,
      this.source,
      this.representation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationStructureComponent {
    const dest = new SubstanceSpecificationStructureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationStructureComponent): void {
    super.copyValues(dest);
    dest.stereochemistry = this.stereochemistry?.copy();
    dest.opticalActivity = this.opticalActivity?.copy();
    dest.molecularFormula = this.molecularFormula?.copy();
    dest.molecularFormulaByMoiety = this.molecularFormulaByMoiety?.copy();
    const isotopeList = copyListValues<SubstanceSpecificationStructureIsotopeComponent>(this.isotope);
    dest.isotope = isotopeList.length === 0 ? undefined : isotopeList;
    dest.molecularWeight = this.molecularWeight?.copy();
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
    const representationList = copyListValues<SubstanceSpecificationStructureRepresentationComponent>(this.representation);
    dest.representation = representationList.length === 0 ? undefined : representationList;
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

    if (this.hasStereochemistry()) {
      setFhirComplexJson(this.getStereochemistry(), 'stereochemistry', jsonObj);
    }

    if (this.hasOpticalActivity()) {
      setFhirComplexJson(this.getOpticalActivity(), 'opticalActivity', jsonObj);
    }

    if (this.hasMolecularFormulaElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMolecularFormulaElement(), 'molecularFormula', jsonObj);
    }

    if (this.hasMolecularFormulaByMoietyElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMolecularFormulaByMoietyElement(), 'molecularFormulaByMoiety', jsonObj);
    }

    if (this.hasIsotope()) {
      setFhirBackboneElementListJson(this.getIsotope(), 'isotope', jsonObj);
    }

    if (this.hasMolecularWeight()) {
      setFhirBackboneElementJson(this.getMolecularWeight(), 'molecularWeight', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    if (this.hasRepresentation()) {
      setFhirBackboneElementListJson(this.getRepresentation(), 'representation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationStructureIsotopeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 * - **Definition:** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationStructureIsotopeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationStructureIsotopeComponent` JSON to instantiate the SubstanceSpecificationStructureIsotopeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationStructureIsotopeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationStructureIsotopeComponent
   * @returns SubstanceSpecificationStructureIsotopeComponent data model or undefined for `SubstanceSpecificationStructureIsotopeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationStructureIsotopeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationStructureIsotopeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationStructureIsotopeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setName(datatype);
    }

    fieldName = 'substitution';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubstitution(datatype);
    }

    fieldName = 'halfLife';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHalfLife(datatype);
    }

    fieldName = 'molecularWeight';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined = SubstanceSpecificationStructureIsotopeMolecularWeightComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMolecularWeight(component);
    }

    return instance;
  }

  /**
   * SubstanceSpecification.structure.isotope.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Substance identifier for each non-natural or radioisotope
   * - **Definition:** Substance identifier for each non-natural or radioisotope.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SubstanceSpecification.structure.isotope.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Substance name for each non-natural or radioisotope
   * - **Definition:** Substance name for each non-natural or radioisotope.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.structure.isotope.substitution Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of isotopic substitution present in a single substance
   * - **Definition:** The type of isotopic substitution present in a single substance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private substitution?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.structure.isotope.halfLife Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Half life - for a non-natural nuclide
   * - **Definition:** Half life - for a non-natural nuclide.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private halfLife?: Quantity | undefined;

  /**
   * SubstanceSpecification.structure.isotope.molecularWeight Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The molecular weight or weight range (for proteins, polymers or nucleic acids)
   * - **Definition:** The molecular weight or weight range (for proteins, polymers or nucleic acids).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined;

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
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `name` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getName(): CodeableConcept {
    return this.name ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Name object value to the `name` property.
   *
   * @param value - the `name` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.name; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefined<CodeableConcept>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `substitution` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubstitution(): CodeableConcept {
    return this.substitution ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Substitution object value to the `substitution` property.
   *
   * @param value - the `substitution` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstitution(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.substitution; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.substitution = value;
    } else {
      this.substitution = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `substitution` property exists and has a value; `false` otherwise
   */
  public hasSubstitution(): boolean {
    return isDefined<CodeableConcept>(this.substitution) && !this.substitution.isEmpty();
  }

  /**
   * @returns the `halfLife` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getHalfLife(): Quantity {
    return this.halfLife ?? new Quantity();
  }

  /**
   * Assigns the provided HalfLife object value to the `halfLife` property.
   *
   * @param value - the `halfLife` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHalfLife(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.halfLife; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.halfLife = value;
    } else {
      this.halfLife = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `halfLife` property exists and has a value; `false` otherwise
   */
  public hasHalfLife(): boolean {
    return isDefined<Quantity>(this.halfLife) && !this.halfLife.isEmpty();
  }

  /**
   * @returns the `molecularWeight` property value as a SubstanceSpecificationStructureIsotopeMolecularWeightComponent object if defined; else an empty SubstanceSpecificationStructureIsotopeMolecularWeightComponent object
   */
  public getMolecularWeight(): SubstanceSpecificationStructureIsotopeMolecularWeightComponent {
    return this.molecularWeight ?? new SubstanceSpecificationStructureIsotopeMolecularWeightComponent();
  }

  /**
   * Assigns the provided MolecularWeight object value to the `molecularWeight` property.
   *
   * @param value - the `molecularWeight` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMolecularWeight(value: SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined): this {
    if (isDefined<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.molecularWeight; Provided element is not an instance of SubstanceSpecificationStructureIsotopeMolecularWeightComponent.`;
      assertFhirType<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(value, SubstanceSpecificationStructureIsotopeMolecularWeightComponent, optErrMsg);
      this.molecularWeight = value;
    } else {
      this.molecularWeight = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularWeight` property exists and has a value; `false` otherwise
   */
  public hasMolecularWeight(): boolean {
    return isDefined<SubstanceSpecificationStructureIsotopeMolecularWeightComponent>(this.molecularWeight) && !this.molecularWeight.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.structure.isotope';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.name,
      this.substitution,
      this.halfLife,
      this.molecularWeight,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationStructureIsotopeComponent {
    const dest = new SubstanceSpecificationStructureIsotopeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationStructureIsotopeComponent): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.name = this.name?.copy();
    dest.substitution = this.substitution?.copy();
    dest.halfLife = this.halfLife?.copy();
    dest.molecularWeight = this.molecularWeight?.copy();
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

    if (this.hasName()) {
      setFhirComplexJson(this.getName(), 'name', jsonObj);
    }

    if (this.hasSubstitution()) {
      setFhirComplexJson(this.getSubstitution(), 'substitution', jsonObj);
    }

    if (this.hasHalfLife()) {
      setFhirComplexJson(this.getHalfLife(), 'halfLife', jsonObj);
    }

    if (this.hasMolecularWeight()) {
      setFhirBackboneElementJson(this.getMolecularWeight(), 'molecularWeight', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationStructureIsotopeMolecularWeightComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The molecular weight or weight range (for proteins, polymers or nucleic acids)
 * - **Definition:** The molecular weight or weight range (for proteins, polymers or nucleic acids).
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationStructureIsotopeMolecularWeightComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationStructureIsotopeMolecularWeightComponent` JSON to instantiate the SubstanceSpecificationStructureIsotopeMolecularWeightComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationStructureIsotopeMolecularWeightComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationStructureIsotopeMolecularWeightComponent
   * @returns SubstanceSpecificationStructureIsotopeMolecularWeightComponent data model or undefined for `SubstanceSpecificationStructureIsotopeMolecularWeightComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationStructureIsotopeMolecularWeightComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationStructureIsotopeMolecularWeightComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationStructureIsotopeMolecularWeightComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    return instance;
  }

  /**
   * SubstanceSpecification.structure.isotope.molecularWeight.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The method by which the molecular weight was determined
   * - **Definition:** The method by which the molecular weight was determined.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private method?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.structure.isotope.molecularWeight.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of molecular weight such as exact, average (also known as. number average), weight average
   * - **Definition:** Type of molecular weight such as exact, average (also known as. number average), weight average.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.structure.isotope.molecularWeight.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field
   * - **Definition:** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount?: Quantity | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `method` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMethod(): CodeableConcept {
    return this.method ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Method object value to the `method` property.
   *
   * @param value - the `method` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.molecularWeight.method; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.method = value;
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return isDefined<CodeableConcept>(this.method) && !this.method.isEmpty();
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
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.molecularWeight.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `amount` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getAmount(): Quantity {
    return this.amount ?? new Quantity();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.isotope.molecularWeight.amount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Quantity>(this.amount) && !this.amount.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.structure.isotope.molecularWeight';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.method,
      this.type_,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationStructureIsotopeMolecularWeightComponent {
    const dest = new SubstanceSpecificationStructureIsotopeMolecularWeightComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationStructureIsotopeMolecularWeightComponent): void {
    super.copyValues(dest);
    dest.method = this.method?.copy();
    dest.type_ = this.type_?.copy();
    dest.amount = this.amount?.copy();
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

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationStructureRepresentationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Molecular structural representation
 * - **Definition:** Molecular structural representation.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationStructureRepresentationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationStructureRepresentationComponent` JSON to instantiate the SubstanceSpecificationStructureRepresentationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationStructureRepresentationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationStructureRepresentationComponent
   * @returns SubstanceSpecificationStructureRepresentationComponent data model or undefined for `SubstanceSpecificationStructureRepresentationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationStructureRepresentationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationStructureRepresentationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationStructureRepresentationComponent();

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

    fieldName = 'representation';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRepresentationElement(datatype);
    }

    fieldName = 'attachment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Attachment | undefined = Attachment.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAttachment(datatype);
    }

    return instance;
  }

  /**
   * SubstanceSpecification.structure.representation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of structure (e.g. Full, Partial, Representative)
   * - **Definition:** The type of structure (e.g. Full, Partial, Representative).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.structure.representation.representation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX
   * - **Definition:** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private representation?: StringType | undefined;

  /**
   * SubstanceSpecification.structure.representation.attachment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An attached file with the structural representation
   * - **Definition:** An attached file with the structural representation.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private attachment?: Attachment | undefined;

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
      const optErrMsg = `Invalid SubstanceSpecification.structure.representation.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `representation` property value as a StringType object if defined; else an empty StringType object
   */
  public getRepresentationElement(): StringType {
    return this.representation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `representation` property.
   *
   * @param element - the `representation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepresentationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.representation.representation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.representation = element;
    } else {
      this.representation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `representation` property exists and has a value; `false` otherwise
   */
  public hasRepresentationElement(): boolean {
    return isDefined<StringType>(this.representation) && !this.representation.isEmpty();
  }

  /**
   * @returns the `representation` property value as a fhirString if defined; else undefined
   */
  public getRepresentation(): fhirString | undefined {
    return this.representation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `representation` property.
   *
   * @param value - the `representation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepresentation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.representation.representation (${String(value)})`;
      this.representation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.representation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `representation` property exists and has a value; `false` otherwise
   */
  public hasRepresentation(): boolean {
    return this.hasRepresentationElement();
  }

  /**
   * @returns the `attachment` property value as a Attachment object if defined; else an empty Attachment object
   */
  public getAttachment(): Attachment {
    return this.attachment ?? new Attachment();
  }

  /**
   * Assigns the provided Attachment object value to the `attachment` property.
   *
   * @param value - the `attachment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttachment(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.structure.representation.attachment; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.attachment = value;
    } else {
      this.attachment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `attachment` property exists and has a value; `false` otherwise
   */
  public hasAttachment(): boolean {
    return isDefined<Attachment>(this.attachment) && !this.attachment.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.structure.representation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.representation,
      this.attachment,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationStructureRepresentationComponent {
    const dest = new SubstanceSpecificationStructureRepresentationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationStructureRepresentationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.representation = this.representation?.copy();
    dest.attachment = this.attachment?.copy();
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

    if (this.hasRepresentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRepresentationElement(), 'representation', jsonObj);
    }

    if (this.hasAttachment()) {
      setFhirComplexJson(this.getAttachment(), 'attachment', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationCodeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Codes associated with the substance
 * - **Definition:** Codes associated with the substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationCodeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationCodeComponent` JSON to instantiate the SubstanceSpecificationCodeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationCodeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationCodeComponent
   * @returns SubstanceSpecificationCodeComponent data model or undefined for `SubstanceSpecificationCodeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationCodeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationCodeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationCodeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
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

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    return instance;
  }

  /**
   * SubstanceSpecification.code.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific code
   * - **Definition:** The specific code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.code.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status of the code assignment
   * - **Definition:** Status of the code assignment.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.code.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date at which the code status is changed as part of the terminology maintenance
   * - **Definition:** The date at which the code status is changed as part of the terminology maintenance.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateTimeType | undefined;

  /**
   * SubstanceSpecification.code.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any comment can be provided in this field, if necessary
   * - **Definition:** Any comment can be provided in this field, if necessary.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private comment?: StringType | undefined;

  /**
   * SubstanceSpecification.code.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting literature
   * - **Definition:** Supporting literature.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

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
      const optErrMsg = `Invalid SubstanceSpecification.code.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.code.status; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.code.statusDate; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.code.statusDate (${String(value)})`;
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
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.code.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.code.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.code.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.code.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.code.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.code.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.code';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.status,
      this.statusDate,
      this.comment,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationCodeComponent {
    const dest = new SubstanceSpecificationCodeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationCodeComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.status = this.status?.copy();
    dest.statusDate = this.statusDate?.copy();
    dest.comment = this.comment?.copy();
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasStatusDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStatusDateElement(), 'statusDate', jsonObj);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Names applicable to this substance
 * - **Definition:** Names applicable to this substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationNameComponent extends BackboneElement implements IBackboneElement {
  constructor(name: StringType | fhirString | null = null) {
    super();

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }
  }

  /**
   * Parse the provided `SubstanceSpecificationNameComponent` JSON to instantiate the SubstanceSpecificationNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationNameComponent
   * @returns SubstanceSpecificationNameComponent data model or undefined for `SubstanceSpecificationNameComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationNameComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setName(null);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      instance.setName(null);
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

    fieldName = 'preferred';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setPreferredElement(datatype);
    }

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addLanguage(datatype);
        }
      });
    }

    fieldName = 'domain';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDomain(datatype);
        }
      });
    }

    fieldName = 'jurisdiction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addJurisdiction(datatype);
        }
      });
    }

    fieldName = 'synonym';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationNameComponent | undefined = SubstanceSpecificationNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSynonym(component);
        }
      });
    }

    fieldName = 'translation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationNameComponent | undefined = SubstanceSpecificationNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTranslation(component);
        }
      });
    }

    fieldName = 'official';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSpecificationNameOfficialComponent | undefined = SubstanceSpecificationNameOfficialComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOfficial(component);
        }
      });
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    return instance;
  }

  /**
   * SubstanceSpecification.name.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual name
   * - **Definition:** The actual name.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * SubstanceSpecification.name.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name type
   * - **Definition:** Name type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.name.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the name
   * - **Definition:** The status of the name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.name.preferred Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this is the preferred name for this substance
   * - **Definition:** If this is the preferred name for this substance.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private preferred?: BooleanType | undefined;

  /**
   * SubstanceSpecification.name.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language of the name
   * - **Definition:** Language of the name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private language?: CodeableConcept[] | undefined;

  /**
   * SubstanceSpecification.name.domain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive
   * - **Definition:** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private domain?: CodeableConcept[] | undefined;

  /**
   * SubstanceSpecification.name.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The jurisdiction where this name applies
   * - **Definition:** The jurisdiction where this name applies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * SubstanceSpecification.name.synonym Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A synonym of this name
   * - **Definition:** A synonym of this name.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private synonym?: SubstanceSpecificationNameComponent[] | undefined;

  /**
   * SubstanceSpecification.name.translation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A translation for this name
   * - **Definition:** A translation for this name.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private translation?: SubstanceSpecificationNameComponent[] | undefined;

  /**
   * SubstanceSpecification.name.official Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details of the official nature of this name
   * - **Definition:** Details of the official nature of this name.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private official?: SubstanceSpecificationNameOfficialComponent[] | undefined;

  /**
   * SubstanceSpecification.name.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting literature
   * - **Definition:** Supporting literature.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

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
  public setNameElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.name; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = null;
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
   * @returns the `name` property value as a fhirString if defined; else null
   */
  public getName(): fhirString | null {
    if (this.name?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.name.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = null;
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
      const optErrMsg = `Invalid SubstanceSpecification.name.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.name.status; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `preferred` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getPreferredElement(): BooleanType {
    return this.preferred ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preferred` property.
   *
   * @param element - the `preferred` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreferredElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.preferred; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.preferred = element;
    } else {
      this.preferred = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preferred` property exists and has a value; `false` otherwise
   */
  public hasPreferredElement(): boolean {
    return isDefined<BooleanType>(this.preferred) && !this.preferred.isEmpty();
  }

  /**
   * @returns the `preferred` property value as a fhirBoolean if defined; else undefined
   */
  public getPreferred(): fhirBoolean | undefined {
    return this.preferred?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preferred` property.
   *
   * @param value - the `preferred` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreferred(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.preferred (${String(value)})`;
      this.preferred = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.preferred = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preferred` property exists and has a value; `false` otherwise
   */
  public hasPreferred(): boolean {
    return this.hasPreferredElement();
  }

  /**
   * @returns the `language` property value as a CodeableConcept array
   */
  public getLanguage(): CodeableConcept[] {
    return this.language ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `language` property.
   *
   * @param value - the `language` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.language; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `language` array property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLanguage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initLanguage();
      this.language?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return isDefinedList<CodeableConcept>(this.language) && this.language.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `language` property
   */
  private initLanguage(): void {
    if(!this.hasLanguage()) {
      this.language = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `domain` property value as a CodeableConcept array
   */
  public getDomain(): CodeableConcept[] {
    return this.domain ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `domain` property.
   *
   * @param value - the `domain` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDomain(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.domain; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.domain = value;
    } else {
      this.domain = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `domain` array property.
   *
   * @param value - the `domain` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDomain(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.domain; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initDomain();
      this.domain?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `domain` property exists and has a value; `false` otherwise
   */
  public hasDomain(): boolean {
    return isDefinedList<CodeableConcept>(this.domain) && this.domain.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `domain` property
   */
  private initDomain(): void {
    if(!this.hasDomain()) {
      this.domain = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `jurisdiction` property value as a CodeableConcept array
   */
  public getJurisdiction(): CodeableConcept[] {
    return this.jurisdiction ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `jurisdiction` property.
   *
   * @param value - the `jurisdiction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setJurisdiction(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.jurisdiction = value;
    } else {
      this.jurisdiction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `jurisdiction` array property.
   *
   * @param value - the `jurisdiction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addJurisdiction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.jurisdiction; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initJurisdiction();
      this.jurisdiction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `jurisdiction` property exists and has a value; `false` otherwise
   */
  public hasJurisdiction(): boolean {
    return isDefinedList<CodeableConcept>(this.jurisdiction) && this.jurisdiction.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `jurisdiction` property
   */
  private initJurisdiction(): void {
    if(!this.hasJurisdiction()) {
      this.jurisdiction = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `synonym` property value as a SubstanceSpecificationNameComponent array
   */
  public getSynonym(): SubstanceSpecificationNameComponent[] {
    return this.synonym ?? ([] as SubstanceSpecificationNameComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationNameComponent array value to the `synonym` property.
   *
   * @param value - the `synonym` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSynonym(value: SubstanceSpecificationNameComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.synonym; Provided value array has an element that is not an instance of SubstanceSpecificationNameComponent.`;
      assertFhirTypeList<SubstanceSpecificationNameComponent>(value, SubstanceSpecificationNameComponent, optErrMsg);
      this.synonym = value;
    } else {
      this.synonym = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationNameComponent value to the `synonym` array property.
   *
   * @param value - the `synonym` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSynonym(value: SubstanceSpecificationNameComponent | undefined): this {
    if (isDefined<SubstanceSpecificationNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.synonym; Provided element is not an instance of SubstanceSpecificationNameComponent.`;
      assertFhirType<SubstanceSpecificationNameComponent>(value, SubstanceSpecificationNameComponent, optErrMsg);
      this.initSynonym();
      this.synonym?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `synonym` property exists and has a value; `false` otherwise
   */
  public hasSynonym(): boolean {
    return isDefinedList<SubstanceSpecificationNameComponent>(this.synonym) && this.synonym.some((item: SubstanceSpecificationNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `synonym` property
   */
  private initSynonym(): void {
    if(!this.hasSynonym()) {
      this.synonym = [] as SubstanceSpecificationNameComponent[];
    }
  }

  /**
   * @returns the `translation` property value as a SubstanceSpecificationNameComponent array
   */
  public getTranslation(): SubstanceSpecificationNameComponent[] {
    return this.translation ?? ([] as SubstanceSpecificationNameComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationNameComponent array value to the `translation` property.
   *
   * @param value - the `translation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTranslation(value: SubstanceSpecificationNameComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.translation; Provided value array has an element that is not an instance of SubstanceSpecificationNameComponent.`;
      assertFhirTypeList<SubstanceSpecificationNameComponent>(value, SubstanceSpecificationNameComponent, optErrMsg);
      this.translation = value;
    } else {
      this.translation = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationNameComponent value to the `translation` array property.
   *
   * @param value - the `translation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTranslation(value: SubstanceSpecificationNameComponent | undefined): this {
    if (isDefined<SubstanceSpecificationNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.translation; Provided element is not an instance of SubstanceSpecificationNameComponent.`;
      assertFhirType<SubstanceSpecificationNameComponent>(value, SubstanceSpecificationNameComponent, optErrMsg);
      this.initTranslation();
      this.translation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `translation` property exists and has a value; `false` otherwise
   */
  public hasTranslation(): boolean {
    return isDefinedList<SubstanceSpecificationNameComponent>(this.translation) && this.translation.some((item: SubstanceSpecificationNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `translation` property
   */
  private initTranslation(): void {
    if(!this.hasTranslation()) {
      this.translation = [] as SubstanceSpecificationNameComponent[];
    }
  }

  /**
   * @returns the `official` property value as a SubstanceSpecificationNameOfficialComponent array
   */
  public getOfficial(): SubstanceSpecificationNameOfficialComponent[] {
    return this.official ?? ([] as SubstanceSpecificationNameOfficialComponent[]);
  }

  /**
   * Assigns the provided SubstanceSpecificationNameOfficialComponent array value to the `official` property.
   *
   * @param value - the `official` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOfficial(value: SubstanceSpecificationNameOfficialComponent[] | undefined): this {
    if (isDefinedList<SubstanceSpecificationNameOfficialComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.official; Provided value array has an element that is not an instance of SubstanceSpecificationNameOfficialComponent.`;
      assertFhirTypeList<SubstanceSpecificationNameOfficialComponent>(value, SubstanceSpecificationNameOfficialComponent, optErrMsg);
      this.official = value;
    } else {
      this.official = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSpecificationNameOfficialComponent value to the `official` array property.
   *
   * @param value - the `official` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOfficial(value: SubstanceSpecificationNameOfficialComponent | undefined): this {
    if (isDefined<SubstanceSpecificationNameOfficialComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.official; Provided element is not an instance of SubstanceSpecificationNameOfficialComponent.`;
      assertFhirType<SubstanceSpecificationNameOfficialComponent>(value, SubstanceSpecificationNameOfficialComponent, optErrMsg);
      this.initOfficial();
      this.official?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `official` property exists and has a value; `false` otherwise
   */
  public hasOfficial(): boolean {
    return isDefinedList<SubstanceSpecificationNameOfficialComponent>(this.official) && this.official.some((item: SubstanceSpecificationNameOfficialComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `official` property
   */
  private initOfficial(): void {
    if(!this.hasOfficial()) {
      this.official = [] as SubstanceSpecificationNameOfficialComponent[];
    }
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.name.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.name.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.name.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.name.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.name';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.type_,
      this.status,
      this.preferred,
      this.language,
      this.domain,
      this.jurisdiction,
      this.synonym,
      this.translation,
      this.official,
      this.source,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.name, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationNameComponent {
    const dest = new SubstanceSpecificationNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationNameComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.type_ = this.type_?.copy();
    dest.status = this.status?.copy();
    dest.preferred = this.preferred?.copy();
    const languageList = copyListValues<CodeableConcept>(this.language);
    dest.language = languageList.length === 0 ? undefined : languageList;
    const domainList = copyListValues<CodeableConcept>(this.domain);
    dest.domain = domainList.length === 0 ? undefined : domainList;
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
    const synonymList = copyListValues<SubstanceSpecificationNameComponent>(this.synonym);
    dest.synonym = synonymList.length === 0 ? undefined : synonymList;
    const translationList = copyListValues<SubstanceSpecificationNameComponent>(this.translation);
    dest.translation = translationList.length === 0 ? undefined : translationList;
    const officialList = copyListValues<SubstanceSpecificationNameOfficialComponent>(this.official);
    dest.official = officialList.length === 0 ? undefined : officialList;
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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
    } else {
      jsonObj['name'] = null;
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasPreferredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getPreferredElement(), 'preferred', jsonObj);
    }

    if (this.hasLanguage()) {
      setFhirComplexListJson(this.getLanguage(), 'language', jsonObj);
    }

    if (this.hasDomain()) {
      setFhirComplexListJson(this.getDomain(), 'domain', jsonObj);
    }

    if (this.hasJurisdiction()) {
      setFhirComplexListJson(this.getJurisdiction(), 'jurisdiction', jsonObj);
    }

    if (this.hasSynonym()) {
      setFhirBackboneElementListJson(this.getSynonym(), 'synonym', jsonObj);
    }

    if (this.hasTranslation()) {
      setFhirBackboneElementListJson(this.getTranslation(), 'translation', jsonObj);
    }

    if (this.hasOfficial()) {
      setFhirBackboneElementListJson(this.getOfficial(), 'official', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationNameOfficialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details of the official nature of this name
 * - **Definition:** Details of the official nature of this name.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationNameOfficialComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationNameOfficialComponent` JSON to instantiate the SubstanceSpecificationNameOfficialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationNameOfficialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationNameOfficialComponent
   * @returns SubstanceSpecificationNameOfficialComponent data model or undefined for `SubstanceSpecificationNameOfficialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationNameOfficialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationNameOfficialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationNameOfficialComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'authority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthority(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    return instance;
  }

  /**
   * SubstanceSpecification.name.official.authority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which authority uses this official name
   * - **Definition:** Which authority uses this official name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authority?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.name.official.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the official name
   * - **Definition:** The status of the official name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.name.official.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date of official name change
   * - **Definition:** Date of official name change.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `authority` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAuthority(): CodeableConcept {
    return this.authority ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Authority object value to the `authority` property.
   *
   * @param value - the `authority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthority(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.name.official.authority; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.authority = value;
    } else {
      this.authority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authority` property exists and has a value; `false` otherwise
   */
  public hasAuthority(): boolean {
    return isDefined<CodeableConcept>(this.authority) && !this.authority.isEmpty();
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
      const optErrMsg = `Invalid SubstanceSpecification.name.official.status; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.name.official.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid SubstanceSpecification.name.official.date (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.name.official';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.authority,
      this.status,
      this.date,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationNameOfficialComponent {
    const dest = new SubstanceSpecificationNameOfficialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationNameOfficialComponent): void {
    super.copyValues(dest);
    dest.authority = this.authority?.copy();
    dest.status = this.status?.copy();
    dest.date = this.date?.copy();
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

    if (this.hasAuthority()) {
      setFhirComplexJson(this.getAuthority(), 'authority', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSpecificationRelationshipComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A link between this substance and another, with details of the relationship
 * - **Definition:** A link between this substance and another, with details of the relationship.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSpecification](http://hl7.org/fhir/StructureDefinition/SubstanceSpecification)
 */
export class SubstanceSpecificationRelationshipComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSpecificationRelationshipComponent` JSON to instantiate the SubstanceSpecificationRelationshipComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSpecificationRelationshipComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSpecificationRelationshipComponent
   * @returns SubstanceSpecificationRelationshipComponent data model or undefined for `SubstanceSpecificationRelationshipComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSpecificationRelationshipComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSpecificationRelationshipComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSpecificationRelationshipComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = SubstanceSpecificationRelationshipComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubstanceSpecificationRelationshipComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'substance[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const substance: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSubstance(substance);

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRelationship(datatype);
    }

    fieldName = 'isDefining';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsDefiningElement(datatype);
    }

    fieldName = 'amount[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const amount: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAmount(amount);

    fieldName = 'amountRatioLowLimit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmountRatioLowLimit(datatype);
    }

    fieldName = 'amountType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmountType(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSource(datatype);
        }
      });
  }

    return instance;
  }

  /**
   * SubstanceSpecification.relationship.substance[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceSpecification.relationship.substance[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A pointer to another substance, as a resource or just a representational code
   * - **Definition:** A pointer to another substance, as a resource or just a representational code.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceSpecification.relationship.substance[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private substance?: IDataType | undefined;

  /**
   * SubstanceSpecification.relationship.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For example "salt to parent", "active moiety", "starting material"
   * - **Definition:** For example "salt to parent", "active moiety", "starting material".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relationship?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.relationship.isDefining Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships
   * - **Definition:** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private isDefining?: BooleanType | undefined;

  /**
   * SubstanceSpecification.relationship.amount[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceSpecification.relationship.amount[x]', ['Quantity','Range','Ratio','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
   * - **Definition:** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceSpecification.relationship.amount[x]',[
    'Quantity',
    'Range',
    'Ratio',
    'string',
  ])
  private amount?: IDataType | undefined;

  /**
   * SubstanceSpecification.relationship.amountRatioLowLimit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For use when the numeric
   * - **Definition:** For use when the numeric.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amountRatioLowLimit?: Ratio | undefined;

  /**
   * SubstanceSpecification.relationship.amountType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An operator for the amount, for example "average", "approximately", "less than"
   * - **Definition:** An operator for the amount, for example "average", "approximately", "less than".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amountType?: CodeableConcept | undefined;

  /**
   * SubstanceSpecification.relationship.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting literature
   * - **Definition:** Supporting literature.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `substance` property value as a DataType object if defined; else undefined
   */
  public getSubstance(): IDataType | undefined {
    return this.substance;
  }

  /**
   * Assigns the provided DataType object value to the `substance` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceSpecification.relationship.substance[x]')`
   *
   * @param value - the `substance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceSpecification.relationship.substance[x]')
  public setSubstance(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.substance = value;
    } else {
      this.substance = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `substance` property exists and has a value; `false` otherwise
   */
  public hasSubstance(): boolean {
    return isDefined<IDataType>(this.substance) && !this.substance.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `substance` property value as a Reference object if defined; else undefined
   */
  public getSubstanceReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.substance)) {
      return undefined;
    }
    if (!(this.substance instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.relationship.substance[x]: Expected Reference but encountered ${this.substance.fhirType()}`,
      );
    }
    return this.substance;
  }

  /**
   * @returns `true` if the `substance` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSubstanceReference(): boolean {
    return this.hasSubstance() && this.substance instanceof Reference;
  }

  /**
   * @returns the `substance` property value as a CodeableConcept object if defined; else undefined
   */
  public getSubstanceCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.substance)) {
      return undefined;
    }
    if (!(this.substance instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.relationship.substance[x]: Expected CodeableConcept but encountered ${this.substance.fhirType()}`,
      );
    }
    return this.substance;
  }

  /**
   * @returns `true` if the `substance` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasSubstanceCodeableConcept(): boolean {
    return this.hasSubstance() && this.substance instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `relationship` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRelationship(): CodeableConcept {
    return this.relationship ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Relationship object value to the `relationship` property.
   *
   * @param value - the `relationship` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.relationship.relationship; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.relationship) && !this.relationship.isEmpty();
  }

  /**
   * @returns the `isDefining` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsDefiningElement(): BooleanType {
    return this.isDefining ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isDefining` property.
   *
   * @param element - the `isDefining` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDefiningElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SubstanceSpecification.relationship.isDefining; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isDefining = element;
    } else {
      this.isDefining = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDefining` property exists and has a value; `false` otherwise
   */
  public hasIsDefiningElement(): boolean {
    return isDefined<BooleanType>(this.isDefining) && !this.isDefining.isEmpty();
  }

  /**
   * @returns the `isDefining` property value as a fhirBoolean if defined; else undefined
   */
  public getIsDefining(): fhirBoolean | undefined {
    return this.isDefining?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isDefining` property.
   *
   * @param value - the `isDefining` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDefining(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.relationship.isDefining (${String(value)})`;
      this.isDefining = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isDefining = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDefining` property exists and has a value; `false` otherwise
   */
  public hasIsDefining(): boolean {
    return this.hasIsDefiningElement();
  }

  /**
   * @returns the `amount` property value as a DataType object if defined; else undefined
   */
  public getAmount(): IDataType | undefined {
    return this.amount;
  }

  /**
   * Assigns the provided DataType object value to the `amount` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceSpecification.relationship.amount[x]')`
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceSpecification.relationship.amount[x]')
  public setAmount(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<IDataType>(this.amount) && !this.amount.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `amount` property value as a Quantity object if defined; else undefined
   */
  public getAmountQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.relationship.amount[x]: Expected Quantity but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasAmountQuantity(): boolean {
    return this.hasAmount() && this.amount instanceof Quantity;
  }

  /**
   * @returns the `amount` property value as a Range object if defined; else undefined
   */
  public getAmountRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.relationship.amount[x]: Expected Range but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a Range and has a value; `false` otherwise
   */
  public hasAmountRange(): boolean {
    return this.hasAmount() && this.amount instanceof Range;
  }

  /**
   * @returns the `amount` property value as a Ratio object if defined; else undefined
   */
  public getAmountRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.relationship.amount[x]: Expected Ratio but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasAmountRatio(): boolean {
    return this.hasAmount() && this.amount instanceof Ratio;
  }

  /**
   * @returns the `amount` property value as a StringType object if defined; else undefined
   */
  public getAmountStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceSpecification.relationship.amount[x]: Expected StringType but encountered ${this.amount.fhirType()}`,
      );
    }
    return this.amount;
  }

  /**
   * @returns `true` if the `amount` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAmountStringType(): boolean {
    return this.hasAmount() && this.amount instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `amountRatioLowLimit` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getAmountRatioLowLimit(): Ratio {
    return this.amountRatioLowLimit ?? new Ratio();
  }

  /**
   * Assigns the provided AmountRatioLowLimit object value to the `amountRatioLowLimit` property.
   *
   * @param value - the `amountRatioLowLimit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmountRatioLowLimit(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.relationship.amountRatioLowLimit; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.amountRatioLowLimit = value;
    } else {
      this.amountRatioLowLimit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amountRatioLowLimit` property exists and has a value; `false` otherwise
   */
  public hasAmountRatioLowLimit(): boolean {
    return isDefined<Ratio>(this.amountRatioLowLimit) && !this.amountRatioLowLimit.isEmpty();
  }

  /**
   * @returns the `amountType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAmountType(): CodeableConcept {
    return this.amountType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AmountType object value to the `amountType` property.
   *
   * @param value - the `amountType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmountType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSpecification.relationship.amountType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.amountType = value;
    } else {
      this.amountType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amountType` property exists and has a value; `false` otherwise
   */
  public hasAmountType(): boolean {
    return isDefined<CodeableConcept>(this.amountType) && !this.amountType.isEmpty();
  }

  /**
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.relationship.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.relationship.source', [
    'DocumentReference',
  ])
  public setSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `source` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceSpecification.relationship.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceSpecification.relationship.source', [
    'DocumentReference',
  ])
  public addSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<Reference>(this.source) && this.source.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if (!this.hasSource()) {
      this.source = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSpecification.relationship';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.substance,
      this.relationship,
      this.isDefining,
      this.amount,
      this.amountRatioLowLimit,
      this.amountType,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSpecificationRelationshipComponent {
    const dest = new SubstanceSpecificationRelationshipComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSpecificationRelationshipComponent): void {
    super.copyValues(dest);
    dest.substance = this.substance?.copy() as IDataType;
    dest.relationship = this.relationship?.copy();
    dest.isDefining = this.isDefining?.copy();
    dest.amount = this.amount?.copy() as IDataType;
    dest.amountRatioLowLimit = this.amountRatioLowLimit?.copy();
    dest.amountType = this.amountType?.copy();
    const sourceList = copyListValues<Reference>(this.source);
    dest.source = sourceList.length === 0 ? undefined : sourceList;
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

    if (this.hasSubstance()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSubstance()!, 'substance', jsonObj);
    }

    if (this.hasRelationship()) {
      setFhirComplexJson(this.getRelationship(), 'relationship', jsonObj);
    }

    if (this.hasIsDefiningElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsDefiningElement(), 'isDefining', jsonObj);
    }

    if (this.hasAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAmount()!, 'amount', jsonObj);
    }

    if (this.hasAmountRatioLowLimit()) {
      setFhirComplexJson(this.getAmountRatioLowLimit(), 'amountRatioLowLimit', jsonObj);
    }

    if (this.hasAmountType()) {
      setFhirComplexJson(this.getAmountType(), 'amountType', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
