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
 * SubstanceDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
 * StructureDefinition.name: SubstanceDefinition
 * StructureDefinition.description: The detailed description of a substance, typically at a level beyond what is used for prescribing.
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
  DateTimeType,
  DateType,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
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
  fhirMarkdown,
  fhirMarkdownSchema,
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
import { Annotation, Attachment, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Ratio, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * SubstanceDefinition Class
 *
 * @remarks
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 *
 * **FHIR Specification**
 * - **Short:** The detailed description of a substance, typically at a level beyond what is used for prescribing
 * - **Definition:** The detailed description of a substance, typically at a level beyond what is used for prescribing.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinition extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinition` JSON to instantiate the SubstanceDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinition
   * @returns SubstanceDefinition data model or undefined for `SubstanceDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubstanceDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatus(datatype);
    }

    fieldName = 'classification';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addClassification(datatype);
        }
      });
    }

    fieldName = 'domain';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDomain(datatype);
    }

    fieldName = 'grade';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addGrade(datatype);
        }
      });
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'informationSource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInformationSource(datatype);
        }
      });
  }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
    }

    fieldName = 'manufacturer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addManufacturer(datatype);
        }
      });
  }

    fieldName = 'supplier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSupplier(datatype);
        }
      });
  }

    fieldName = 'moiety';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceDefinitionMoietyComponent | undefined = SubstanceDefinitionMoietyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMoiety(component);
        }
      });
    }

    fieldName = 'characterization';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceDefinitionCharacterizationComponent | undefined = SubstanceDefinitionCharacterizationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCharacterization(component);
        }
      });
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceDefinitionPropertyComponent | undefined = SubstanceDefinitionPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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

    fieldName = 'molecularWeight';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceDefinitionMolecularWeightComponent | undefined = SubstanceDefinitionMolecularWeightComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMolecularWeight(component);
        }
      });
    }

    fieldName = 'structure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceDefinitionStructureComponent | undefined = SubstanceDefinitionStructureComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStructure(component);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceDefinitionCodeComponent | undefined = SubstanceDefinitionCodeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
        const component: SubstanceDefinitionNameComponent | undefined = SubstanceDefinitionNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addName(component);
        }
      });
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceDefinitionRelationshipComponent | undefined = SubstanceDefinitionRelationshipComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
      const component: SubstanceDefinitionSourceMaterialComponent | undefined = SubstanceDefinitionSourceMaterialComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSourceMaterial(component);
    }

    return instance;
  }

  /**
   * SubstanceDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier by which this substance is known
   * - **Definition:** Identifier by which this substance is known.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * SubstanceDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A business level version identifier of the substance
   * - **Definition:** A business level version identifier of the substance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * SubstanceDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status of substance within the catalogue e.g. active, retired
   * - **Definition:** Status of substance within the catalogue e.g. active, retired.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.classification Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity
   * - **Definition:** A high level categorization, e.g. polymer or nucleic acid, or food, chemical, biological, or a lower level such as the general types of polymer (linear or branch chain) or type of impurity (process related or contaminant).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private classification?: CodeableConcept[] | undefined;

  /**
   * SubstanceDefinition.domain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If the substance applies to human or veterinary use
   * - **Definition:** If the substance applies to human or veterinary use.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private domain?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.grade Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP)
   * - **Definition:** The quality standard, established benchmark, to which substance complies (e.g. USP/NF, Ph. Eur, JP, BP, Company Standard).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private grade?: CodeableConcept[] | undefined;

  /**
   * SubstanceDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of the substance
   * - **Definition:** Textual description of the substance.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * SubstanceDefinition.informationSource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting literature
   * - **Definition:** Supporting literature.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Citation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private informationSource?: Reference[] | undefined;

  /**
   * SubstanceDefinition.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual comment about the substance\'s catalogue or registry record
   * - **Definition:** Textual comment about the substance\'s catalogue or registry record.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private note?: Annotation[] | undefined;

  /**
   * SubstanceDefinition.manufacturer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The entity that creates, makes, produces or fabricates the substance
   * - **Definition:** The entity that creates, makes, produces or fabricates the substance. This is a set of potential manufacturers but is not necessarily comprehensive.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private manufacturer?: Reference[] | undefined;

  /**
   * SubstanceDefinition.supplier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An entity that is the source for the substance. It may be different from the manufacturer
   * - **Definition:** An entity that is the source for the substance. It may be different from the manufacturer. Supplier is synonymous to a distributor.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private supplier?: Reference[] | undefined;

  /**
   * SubstanceDefinition.moiety Element
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
  private moiety?: SubstanceDefinitionMoietyComponent[] | undefined;

  /**
   * SubstanceDefinition.characterization Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General specifications for this substance
   * - **Definition:** General specifications for this substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private characterization?: SubstanceDefinitionCharacterizationComponent[] | undefined;

  /**
   * SubstanceDefinition.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General specifications for this substance
   * - **Definition:** General specifications for this substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private property?: SubstanceDefinitionPropertyComponent[] | undefined;

  /**
   * SubstanceDefinition.referenceInformation Element
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
   * SubstanceDefinition.molecularWeight Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The average mass of a molecule of a compound
   * - **Definition:** The average mass of a molecule of a compound compared to 1/12 the mass of carbon 12 and calculated as the sum of the atomic weights of the constituent atoms.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularWeight?: SubstanceDefinitionMolecularWeightComponent[] | undefined;

  /**
   * SubstanceDefinition.structure Element
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
  private structure?: SubstanceDefinitionStructureComponent | undefined;

  /**
   * SubstanceDefinition.code Element
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
  private code?: SubstanceDefinitionCodeComponent[] | undefined;

  /**
   * SubstanceDefinition.name Element
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
  private name?: SubstanceDefinitionNameComponent[] | undefined;

  /**
   * SubstanceDefinition.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A link between this substance and another
   * - **Definition:** A link between this substance and another, with details of the relationship.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private relationship?: SubstanceDefinitionRelationshipComponent[] | undefined;

  /**
   * SubstanceDefinition.nucleicAcid Element
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
   * SubstanceDefinition.polymer Element
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
   * SubstanceDefinition.protein Element
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
   * SubstanceDefinition.sourceMaterial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Material or taxonomic/anatomical source
   * - **Definition:** Material or taxonomic/anatomical source for the substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sourceMaterial?: SubstanceDefinitionSourceMaterialComponent | undefined;

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
      const optErrMsg = `Invalid SubstanceDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.version (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceDefinition.status; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `classification` property value as a CodeableConcept array
   */
  public getClassification(): CodeableConcept[] {
    return this.classification ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `classification` property.
   *
   * @param value - the `classification` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassification(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.classification; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classification = value;
    } else {
      this.classification = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `classification` array property.
   *
   * @param value - the `classification` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassification(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.classification; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClassification();
      this.classification?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classification` property exists and has a value; `false` otherwise
   */
  public hasClassification(): boolean {
    return isDefinedList<CodeableConcept>(this.classification) && this.classification.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `classification` property
   */
  private initClassification(): void {
    if(!this.hasClassification()) {
      this.classification = [] as CodeableConcept[];
    }
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
      const optErrMsg = `Invalid SubstanceDefinition.domain; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `grade` property value as a CodeableConcept array
   */
  public getGrade(): CodeableConcept[] {
    return this.grade ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `grade` property.
   *
   * @param value - the `grade` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGrade(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.grade; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.grade = value;
    } else {
      this.grade = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `grade` array property.
   *
   * @param value - the `grade` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGrade(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.grade; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initGrade();
      this.grade?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `grade` property exists and has a value; `false` otherwise
   */
  public hasGrade(): boolean {
    return isDefinedList<CodeableConcept>(this.grade) && this.grade.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `grade` property
   */
  private initGrade(): void {
    if(!this.hasGrade()) {
      this.grade = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid SubstanceDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.description (${String(value)})`;
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
   * @returns the `informationSource` property value as a Reference array
   */
  public getInformationSource(): Reference[] {
    return this.informationSource ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `informationSource` property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.informationSource', ['Citation',])`
   *
   * @param value - the `informationSource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.informationSource', [
    'Citation',
  ])
  public setInformationSource(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.informationSource = value;
    } else {
      this.informationSource = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `informationSource` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.informationSource', ['Citation',])`
   *
   * @param value - the `informationSource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.informationSource', [
    'Citation',
  ])
  public addInformationSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initInformationSource();
      this.informationSource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `informationSource` property exists and has a value; `false` otherwise
   */
  public hasInformationSource(): boolean {
    return isDefinedList<Reference>(this.informationSource) && this.informationSource.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `informationSource` property
   */
  private initInformationSource(): void {
    if (!this.hasInformationSource()) {
      this.informationSource = [] as Reference[];
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
      const optErrMsg = `Invalid SubstanceDefinition.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `manufacturer` property value as a Reference array
   */
  public getManufacturer(): Reference[] {
    return this.manufacturer ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `manufacturer` property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.manufacturer', [
    'Organization',
  ])
  public setManufacturer(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manufacturer = value;
    } else {
      this.manufacturer = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `manufacturer` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.manufacturer', ['Organization',])`
   *
   * @param value - the `manufacturer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.manufacturer', [
    'Organization',
  ])
  public addManufacturer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initManufacturer();
      this.manufacturer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manufacturer` property exists and has a value; `false` otherwise
   */
  public hasManufacturer(): boolean {
    return isDefinedList<Reference>(this.manufacturer) && this.manufacturer.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `manufacturer` property
   */
  private initManufacturer(): void {
    if (!this.hasManufacturer()) {
      this.manufacturer = [] as Reference[];
    }
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.supplier', ['Organization',])`
   *
   * @param value - the `supplier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.supplier', [
    'Organization',
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.supplier', ['Organization',])`
   *
   * @param value - the `supplier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.supplier', [
    'Organization',
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
   * @returns the `moiety` property value as a SubstanceDefinitionMoietyComponent array
   */
  public getMoiety(): SubstanceDefinitionMoietyComponent[] {
    return this.moiety ?? ([] as SubstanceDefinitionMoietyComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionMoietyComponent array value to the `moiety` property.
   *
   * @param value - the `moiety` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMoiety(value: SubstanceDefinitionMoietyComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionMoietyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.moiety; Provided value array has an element that is not an instance of SubstanceDefinitionMoietyComponent.`;
      assertFhirTypeList<SubstanceDefinitionMoietyComponent>(value, SubstanceDefinitionMoietyComponent, optErrMsg);
      this.moiety = value;
    } else {
      this.moiety = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionMoietyComponent value to the `moiety` array property.
   *
   * @param value - the `moiety` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMoiety(value: SubstanceDefinitionMoietyComponent | undefined): this {
    if (isDefined<SubstanceDefinitionMoietyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.moiety; Provided element is not an instance of SubstanceDefinitionMoietyComponent.`;
      assertFhirType<SubstanceDefinitionMoietyComponent>(value, SubstanceDefinitionMoietyComponent, optErrMsg);
      this.initMoiety();
      this.moiety?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `moiety` property exists and has a value; `false` otherwise
   */
  public hasMoiety(): boolean {
    return isDefinedList<SubstanceDefinitionMoietyComponent>(this.moiety) && this.moiety.some((item: SubstanceDefinitionMoietyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `moiety` property
   */
  private initMoiety(): void {
    if(!this.hasMoiety()) {
      this.moiety = [] as SubstanceDefinitionMoietyComponent[];
    }
  }

  /**
   * @returns the `characterization` property value as a SubstanceDefinitionCharacterizationComponent array
   */
  public getCharacterization(): SubstanceDefinitionCharacterizationComponent[] {
    return this.characterization ?? ([] as SubstanceDefinitionCharacterizationComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionCharacterizationComponent array value to the `characterization` property.
   *
   * @param value - the `characterization` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacterization(value: SubstanceDefinitionCharacterizationComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionCharacterizationComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.characterization; Provided value array has an element that is not an instance of SubstanceDefinitionCharacterizationComponent.`;
      assertFhirTypeList<SubstanceDefinitionCharacterizationComponent>(value, SubstanceDefinitionCharacterizationComponent, optErrMsg);
      this.characterization = value;
    } else {
      this.characterization = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionCharacterizationComponent value to the `characterization` array property.
   *
   * @param value - the `characterization` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacterization(value: SubstanceDefinitionCharacterizationComponent | undefined): this {
    if (isDefined<SubstanceDefinitionCharacterizationComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.characterization; Provided element is not an instance of SubstanceDefinitionCharacterizationComponent.`;
      assertFhirType<SubstanceDefinitionCharacterizationComponent>(value, SubstanceDefinitionCharacterizationComponent, optErrMsg);
      this.initCharacterization();
      this.characterization?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characterization` property exists and has a value; `false` otherwise
   */
  public hasCharacterization(): boolean {
    return isDefinedList<SubstanceDefinitionCharacterizationComponent>(this.characterization) && this.characterization.some((item: SubstanceDefinitionCharacterizationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characterization` property
   */
  private initCharacterization(): void {
    if(!this.hasCharacterization()) {
      this.characterization = [] as SubstanceDefinitionCharacterizationComponent[];
    }
  }

  /**
   * @returns the `property` property value as a SubstanceDefinitionPropertyComponent array
   */
  public getProperty(): SubstanceDefinitionPropertyComponent[] {
    return this.property ?? ([] as SubstanceDefinitionPropertyComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: SubstanceDefinitionPropertyComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.property; Provided value array has an element that is not an instance of SubstanceDefinitionPropertyComponent.`;
      assertFhirTypeList<SubstanceDefinitionPropertyComponent>(value, SubstanceDefinitionPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: SubstanceDefinitionPropertyComponent | undefined): this {
    if (isDefined<SubstanceDefinitionPropertyComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.property; Provided element is not an instance of SubstanceDefinitionPropertyComponent.`;
      assertFhirType<SubstanceDefinitionPropertyComponent>(value, SubstanceDefinitionPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<SubstanceDefinitionPropertyComponent>(this.property) && this.property.some((item: SubstanceDefinitionPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as SubstanceDefinitionPropertyComponent[];
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.referenceInformation', ['SubstanceReferenceInformation',])`
   *
   * @param value - the `referenceInformation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.referenceInformation', [
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
   * @returns the `molecularWeight` property value as a SubstanceDefinitionMolecularWeightComponent array
   */
  public getMolecularWeight(): SubstanceDefinitionMolecularWeightComponent[] {
    return this.molecularWeight ?? ([] as SubstanceDefinitionMolecularWeightComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionMolecularWeightComponent array value to the `molecularWeight` property.
   *
   * @param value - the `molecularWeight` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMolecularWeight(value: SubstanceDefinitionMolecularWeightComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionMolecularWeightComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.molecularWeight; Provided value array has an element that is not an instance of SubstanceDefinitionMolecularWeightComponent.`;
      assertFhirTypeList<SubstanceDefinitionMolecularWeightComponent>(value, SubstanceDefinitionMolecularWeightComponent, optErrMsg);
      this.molecularWeight = value;
    } else {
      this.molecularWeight = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionMolecularWeightComponent value to the `molecularWeight` array property.
   *
   * @param value - the `molecularWeight` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMolecularWeight(value: SubstanceDefinitionMolecularWeightComponent | undefined): this {
    if (isDefined<SubstanceDefinitionMolecularWeightComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.molecularWeight; Provided element is not an instance of SubstanceDefinitionMolecularWeightComponent.`;
      assertFhirType<SubstanceDefinitionMolecularWeightComponent>(value, SubstanceDefinitionMolecularWeightComponent, optErrMsg);
      this.initMolecularWeight();
      this.molecularWeight?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `molecularWeight` property exists and has a value; `false` otherwise
   */
  public hasMolecularWeight(): boolean {
    return isDefinedList<SubstanceDefinitionMolecularWeightComponent>(this.molecularWeight) && this.molecularWeight.some((item: SubstanceDefinitionMolecularWeightComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `molecularWeight` property
   */
  private initMolecularWeight(): void {
    if(!this.hasMolecularWeight()) {
      this.molecularWeight = [] as SubstanceDefinitionMolecularWeightComponent[];
    }
  }

  /**
   * @returns the `structure` property value as a SubstanceDefinitionStructureComponent object if defined; else an empty SubstanceDefinitionStructureComponent object
   */
  public getStructure(): SubstanceDefinitionStructureComponent {
    return this.structure ?? new SubstanceDefinitionStructureComponent();
  }

  /**
   * Assigns the provided Structure object value to the `structure` property.
   *
   * @param value - the `structure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStructure(value: SubstanceDefinitionStructureComponent | undefined): this {
    if (isDefined<SubstanceDefinitionStructureComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.structure; Provided element is not an instance of SubstanceDefinitionStructureComponent.`;
      assertFhirType<SubstanceDefinitionStructureComponent>(value, SubstanceDefinitionStructureComponent, optErrMsg);
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
    return isDefined<SubstanceDefinitionStructureComponent>(this.structure) && !this.structure.isEmpty();
  }

  /**
   * @returns the `code` property value as a SubstanceDefinitionCodeComponent array
   */
  public getCode(): SubstanceDefinitionCodeComponent[] {
    return this.code ?? ([] as SubstanceDefinitionCodeComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionCodeComponent array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: SubstanceDefinitionCodeComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionCodeComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.code; Provided value array has an element that is not an instance of SubstanceDefinitionCodeComponent.`;
      assertFhirTypeList<SubstanceDefinitionCodeComponent>(value, SubstanceDefinitionCodeComponent, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionCodeComponent value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: SubstanceDefinitionCodeComponent | undefined): this {
    if (isDefined<SubstanceDefinitionCodeComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.code; Provided element is not an instance of SubstanceDefinitionCodeComponent.`;
      assertFhirType<SubstanceDefinitionCodeComponent>(value, SubstanceDefinitionCodeComponent, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<SubstanceDefinitionCodeComponent>(this.code) && this.code.some((item: SubstanceDefinitionCodeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as SubstanceDefinitionCodeComponent[];
    }
  }

  /**
   * @returns the `name` property value as a SubstanceDefinitionNameComponent array
   */
  public getName(): SubstanceDefinitionNameComponent[] {
    return this.name ?? ([] as SubstanceDefinitionNameComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionNameComponent array value to the `name` property.
   *
   * @param value - the `name` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setName(value: SubstanceDefinitionNameComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name; Provided value array has an element that is not an instance of SubstanceDefinitionNameComponent.`;
      assertFhirTypeList<SubstanceDefinitionNameComponent>(value, SubstanceDefinitionNameComponent, optErrMsg);
      this.name = value;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionNameComponent value to the `name` array property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addName(value: SubstanceDefinitionNameComponent | undefined): this {
    if (isDefined<SubstanceDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name; Provided element is not an instance of SubstanceDefinitionNameComponent.`;
      assertFhirType<SubstanceDefinitionNameComponent>(value, SubstanceDefinitionNameComponent, optErrMsg);
      this.initName();
      this.name?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefinedList<SubstanceDefinitionNameComponent>(this.name) && this.name.some((item: SubstanceDefinitionNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `name` property
   */
  private initName(): void {
    if(!this.hasName()) {
      this.name = [] as SubstanceDefinitionNameComponent[];
    }
  }

  /**
   * @returns the `relationship` property value as a SubstanceDefinitionRelationshipComponent array
   */
  public getRelationship(): SubstanceDefinitionRelationshipComponent[] {
    return this.relationship ?? ([] as SubstanceDefinitionRelationshipComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionRelationshipComponent array value to the `relationship` property.
   *
   * @param value - the `relationship` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelationship(value: SubstanceDefinitionRelationshipComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionRelationshipComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.relationship; Provided value array has an element that is not an instance of SubstanceDefinitionRelationshipComponent.`;
      assertFhirTypeList<SubstanceDefinitionRelationshipComponent>(value, SubstanceDefinitionRelationshipComponent, optErrMsg);
      this.relationship = value;
    } else {
      this.relationship = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionRelationshipComponent value to the `relationship` array property.
   *
   * @param value - the `relationship` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelationship(value: SubstanceDefinitionRelationshipComponent | undefined): this {
    if (isDefined<SubstanceDefinitionRelationshipComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.relationship; Provided element is not an instance of SubstanceDefinitionRelationshipComponent.`;
      assertFhirType<SubstanceDefinitionRelationshipComponent>(value, SubstanceDefinitionRelationshipComponent, optErrMsg);
      this.initRelationship();
      this.relationship?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return isDefinedList<SubstanceDefinitionRelationshipComponent>(this.relationship) && this.relationship.some((item: SubstanceDefinitionRelationshipComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relationship` property
   */
  private initRelationship(): void {
    if(!this.hasRelationship()) {
      this.relationship = [] as SubstanceDefinitionRelationshipComponent[];
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.nucleicAcid', ['SubstanceNucleicAcid',])`
   *
   * @param value - the `nucleicAcid` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.nucleicAcid', [
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.polymer', ['SubstancePolymer',])`
   *
   * @param value - the `polymer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.polymer', [
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.protein', ['SubstanceProtein',])`
   *
   * @param value - the `protein` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.protein', [
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
   * @returns the `sourceMaterial` property value as a SubstanceDefinitionSourceMaterialComponent object if defined; else an empty SubstanceDefinitionSourceMaterialComponent object
   */
  public getSourceMaterial(): SubstanceDefinitionSourceMaterialComponent {
    return this.sourceMaterial ?? new SubstanceDefinitionSourceMaterialComponent();
  }

  /**
   * Assigns the provided SourceMaterial object value to the `sourceMaterial` property.
   *
   * @param value - the `sourceMaterial` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSourceMaterial(value: SubstanceDefinitionSourceMaterialComponent | undefined): this {
    if (isDefined<SubstanceDefinitionSourceMaterialComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.sourceMaterial; Provided element is not an instance of SubstanceDefinitionSourceMaterialComponent.`;
      assertFhirType<SubstanceDefinitionSourceMaterialComponent>(value, SubstanceDefinitionSourceMaterialComponent, optErrMsg);
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
    return isDefined<SubstanceDefinitionSourceMaterialComponent>(this.sourceMaterial) && !this.sourceMaterial.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.version,
      this.status,
      this.classification,
      this.domain,
      this.grade,
      this.description,
      this.informationSource,
      this.note,
      this.manufacturer,
      this.supplier,
      this.moiety,
      this.characterization,
      this.property,
      this.referenceInformation,
      this.molecularWeight,
      this.structure,
      this.code,
      this.name,
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
  public override copy(): SubstanceDefinition {
    const dest = new SubstanceDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinition): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.status = this.status?.copy();
    const classificationList = copyListValues<CodeableConcept>(this.classification);
    dest.classification = classificationList.length === 0 ? undefined : classificationList;
    dest.domain = this.domain?.copy();
    const gradeList = copyListValues<CodeableConcept>(this.grade);
    dest.grade = gradeList.length === 0 ? undefined : gradeList;
    dest.description = this.description?.copy();
    const informationSourceList = copyListValues<Reference>(this.informationSource);
    dest.informationSource = informationSourceList.length === 0 ? undefined : informationSourceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const manufacturerList = copyListValues<Reference>(this.manufacturer);
    dest.manufacturer = manufacturerList.length === 0 ? undefined : manufacturerList;
    const supplierList = copyListValues<Reference>(this.supplier);
    dest.supplier = supplierList.length === 0 ? undefined : supplierList;
    const moietyList = copyListValues<SubstanceDefinitionMoietyComponent>(this.moiety);
    dest.moiety = moietyList.length === 0 ? undefined : moietyList;
    const characterizationList = copyListValues<SubstanceDefinitionCharacterizationComponent>(this.characterization);
    dest.characterization = characterizationList.length === 0 ? undefined : characterizationList;
    const propertyList = copyListValues<SubstanceDefinitionPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    dest.referenceInformation = this.referenceInformation?.copy();
    const molecularWeightList = copyListValues<SubstanceDefinitionMolecularWeightComponent>(this.molecularWeight);
    dest.molecularWeight = molecularWeightList.length === 0 ? undefined : molecularWeightList;
    dest.structure = this.structure?.copy();
    const codeList = copyListValues<SubstanceDefinitionCodeComponent>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const nameList = copyListValues<SubstanceDefinitionNameComponent>(this.name);
    dest.name = nameList.length === 0 ? undefined : nameList;
    const relationshipList = copyListValues<SubstanceDefinitionRelationshipComponent>(this.relationship);
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
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasStatus()) {
      setFhirComplexJson(this.getStatus(), 'status', jsonObj);
    }

    if (this.hasClassification()) {
      setFhirComplexListJson(this.getClassification(), 'classification', jsonObj);
    }

    if (this.hasDomain()) {
      setFhirComplexJson(this.getDomain(), 'domain', jsonObj);
    }

    if (this.hasGrade()) {
      setFhirComplexListJson(this.getGrade(), 'grade', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasInformationSource()) {
      setFhirComplexListJson(this.getInformationSource(), 'informationSource', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasManufacturer()) {
      setFhirComplexListJson(this.getManufacturer(), 'manufacturer', jsonObj);
    }

    if (this.hasSupplier()) {
      setFhirComplexListJson(this.getSupplier(), 'supplier', jsonObj);
    }

    if (this.hasMoiety()) {
      setFhirBackboneElementListJson(this.getMoiety(), 'moiety', jsonObj);
    }

    if (this.hasCharacterization()) {
      setFhirBackboneElementListJson(this.getCharacterization(), 'characterization', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasReferenceInformation()) {
      setFhirComplexJson(this.getReferenceInformation(), 'referenceInformation', jsonObj);
    }

    if (this.hasMolecularWeight()) {
      setFhirBackboneElementListJson(this.getMolecularWeight(), 'molecularWeight', jsonObj);
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
      setFhirBackboneElementJson(this.getSourceMaterial(), 'sourceMaterial', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubstanceDefinitionMoietyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Moiety, for structural modifications
 * - **Definition:** Moiety, for structural modifications.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionMoietyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinitionMoietyComponent` JSON to instantiate the SubstanceDefinitionMoietyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionMoietyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionMoietyComponent
   * @returns SubstanceDefinitionMoietyComponent data model or undefined for `SubstanceDefinitionMoietyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionMoietyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionMoietyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionMoietyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = SubstanceDefinitionMoietyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubstanceDefinitionMoietyComponent`;
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

    fieldName = 'measurementType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMeasurementType(datatype);
    }

    return instance;
  }

  /**
   * SubstanceDefinition.moiety.role Element
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
   * SubstanceDefinition.moiety.identifier Element
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
   * SubstanceDefinition.moiety.name Element
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
   * SubstanceDefinition.moiety.stereochemistry Element
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
   * SubstanceDefinition.moiety.opticalActivity Element
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
   * SubstanceDefinition.moiety.molecularFormula Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Molecular formula for this moiety (e.g. with the Hill system)
   * - **Definition:** Molecular formula for this moiety of this substance, typically using the Hill system.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularFormula?: StringType | undefined;

  /**
   * SubstanceDefinition.moiety.amount[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceDefinition.moiety.amount[x]', ['Quantity','string',]`
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
  @ChoiceDataTypesMeta('SubstanceDefinition.moiety.amount[x]',[
    'Quantity',
    'string',
  ])
  private amount?: IDataType | undefined;

  /**
   * SubstanceDefinition.moiety.measurementType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The measurement type of the quantitative value
   * - **Definition:** The measurement type of the quantitative value. In capturing the actual relative amounts of substances or molecular fragments it may be necessary to indicate whether the amount refers to, for example, a mole ratio or weight ratio.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private measurementType?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.role; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.name (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.stereochemistry; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.opticalActivity; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.molecularFormula; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.moiety.molecularFormula (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('SubstanceDefinition.moiety.amount[x]')`
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceDefinition.moiety.amount[x]')
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
        `DataType mismatch for SubstanceDefinition.moiety.amount[x]: Expected Quantity but encountered ${this.amount.fhirType()}`,
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
        `DataType mismatch for SubstanceDefinition.moiety.amount[x]: Expected StringType but encountered ${this.amount.fhirType()}`,
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
   * @returns the `measurementType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMeasurementType(): CodeableConcept {
    return this.measurementType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided MeasurementType object value to the `measurementType` property.
   *
   * @param value - the `measurementType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMeasurementType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.moiety.measurementType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.measurementType = value;
    } else {
      this.measurementType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementType` property exists and has a value; `false` otherwise
   */
  public hasMeasurementType(): boolean {
    return isDefined<CodeableConcept>(this.measurementType) && !this.measurementType.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceDefinition.moiety';
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
      this.measurementType,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionMoietyComponent {
    const dest = new SubstanceDefinitionMoietyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionMoietyComponent): void {
    super.copyValues(dest);
    dest.role = this.role?.copy();
    dest.identifier = this.identifier?.copy();
    dest.name = this.name?.copy();
    dest.stereochemistry = this.stereochemistry?.copy();
    dest.opticalActivity = this.opticalActivity?.copy();
    dest.molecularFormula = this.molecularFormula?.copy();
    dest.amount = this.amount?.copy() as IDataType;
    dest.measurementType = this.measurementType?.copy();
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

    if (this.hasMeasurementType()) {
      setFhirComplexJson(this.getMeasurementType(), 'measurementType', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionCharacterizationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** General specifications for this substance
 * - **Definition:** General specifications for this substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionCharacterizationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinitionCharacterizationComponent` JSON to instantiate the SubstanceDefinitionCharacterizationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionCharacterizationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionCharacterizationComponent
   * @returns SubstanceDefinitionCharacterizationComponent data model or undefined for `SubstanceDefinitionCharacterizationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionCharacterizationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionCharacterizationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionCharacterizationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'technique';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTechnique(datatype);
    }

    fieldName = 'form';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setForm(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'file';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Attachment | undefined = Attachment.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFile(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * SubstanceDefinition.characterization.technique Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The method used to find the characterization e.g. HPLC
   * - **Definition:** The method used to elucidate the characterization of the drug substance. Example: HPLC.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private technique?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.characterization.form Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form
   * - **Definition:** Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private form?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.characterization.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The description or justification in support of the interpretation of the data file
   * - **Definition:** The description or justification in support of the interpretation of the data file.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * SubstanceDefinition.characterization.file Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis
   * - **Definition:** The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private file?: Attachment[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `technique` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTechnique(): CodeableConcept {
    return this.technique ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Technique object value to the `technique` property.
   *
   * @param value - the `technique` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTechnique(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.characterization.technique; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.technique = value;
    } else {
      this.technique = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `technique` property exists and has a value; `false` otherwise
   */
  public hasTechnique(): boolean {
    return isDefined<CodeableConcept>(this.technique) && !this.technique.isEmpty();
  }

  /**
   * @returns the `form` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getForm(): CodeableConcept {
    return this.form ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Form object value to the `form` property.
   *
   * @param value - the `form` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setForm(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.characterization.form; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.form = value;
    } else {
      this.form = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `form` property exists and has a value; `false` otherwise
   */
  public hasForm(): boolean {
    return isDefined<CodeableConcept>(this.form) && !this.form.isEmpty();
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
      const optErrMsg = `Invalid SubstanceDefinition.characterization.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.characterization.description (${String(value)})`;
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
   * @returns the `file` property value as a Attachment array
   */
  public getFile(): Attachment[] {
    return this.file ?? ([] as Attachment[]);
  }

  /**
   * Assigns the provided Attachment array value to the `file` property.
   *
   * @param value - the `file` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFile(value: Attachment[] | undefined): this {
    if (isDefinedList<Attachment>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.characterization.file; Provided value array has an element that is not an instance of Attachment.`;
      assertFhirTypeList<Attachment>(value, Attachment, optErrMsg);
      this.file = value;
    } else {
      this.file = undefined;
    }
    return this;
  }

  /**
   * Add the provided Attachment value to the `file` array property.
   *
   * @param value - the `file` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFile(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.characterization.file; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.initFile();
      this.file?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `file` property exists and has a value; `false` otherwise
   */
  public hasFile(): boolean {
    return isDefinedList<Attachment>(this.file) && this.file.some((item: Attachment) => !item.isEmpty());
  }

  /**
   * Initialize the `file` property
   */
  private initFile(): void {
    if(!this.hasFile()) {
      this.file = [] as Attachment[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceDefinition.characterization';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.technique,
      this.form,
      this.description,
      this.file,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionCharacterizationComponent {
    const dest = new SubstanceDefinitionCharacterizationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionCharacterizationComponent): void {
    super.copyValues(dest);
    dest.technique = this.technique?.copy();
    dest.form = this.form?.copy();
    dest.description = this.description?.copy();
    const fileList = copyListValues<Attachment>(this.file);
    dest.file = fileList.length === 0 ? undefined : fileList;
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

    if (this.hasTechnique()) {
      setFhirComplexJson(this.getTechnique(), 'technique', jsonObj);
    }

    if (this.hasForm()) {
      setFhirComplexJson(this.getForm(), 'form', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasFile()) {
      setFhirComplexListJson(this.getFile(), 'file', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** General specifications for this substance
 * - **Definition:** General specifications for this substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `SubstanceDefinitionPropertyComponent` JSON to instantiate the SubstanceDefinitionPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionPropertyComponent
   * @returns SubstanceDefinitionPropertyComponent data model or undefined for `SubstanceDefinitionPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = SubstanceDefinitionPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubstanceDefinitionPropertyComponent`;
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
   * SubstanceDefinition.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code expressing the type of property
   * - **Definition:** A code expressing the type of property.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * SubstanceDefinition.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceDefinition.property.value[x]', ['CodeableConcept','Quantity','date','boolean','Attachment',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A value for the property
   * - **Definition:** A value for the property.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   *     'date',
   *     'boolean',
   *     'Attachment',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceDefinition.property.value[x]',[
    'CodeableConcept',
    'Quantity',
    'date',
    'boolean',
    'Attachment',
  ])
  private value?: IDataType | undefined;

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
      const optErrMsg = `Invalid SubstanceDefinition.property.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceDefinition.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceDefinition.property.value[x]')
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
        `DataType mismatch for SubstanceDefinition.property.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for SubstanceDefinition.property.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DateType object if defined; else undefined
   */
  public getValueDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceDefinition.property.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
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
        `DataType mismatch for SubstanceDefinition.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceDefinition.property.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceDefinition.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionPropertyComponent {
    const dest = new SubstanceDefinitionPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionPropertyComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionMolecularWeightComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The average mass of a molecule of a compound
 * - **Definition:** The average mass of a molecule of a compound compared to 1/12 the mass of carbon 12 and calculated as the sum of the atomic weights of the constituent atoms.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionMolecularWeightComponent extends BackboneElement implements IBackboneElement {
  constructor(amount: Quantity | null = null) {
    super();

    this.amount = null;
    if (isDefined<Quantity>(amount)) {
      this.setAmount(amount);
    }
  }

  /**
   * Parse the provided `SubstanceDefinitionMolecularWeightComponent` JSON to instantiate the SubstanceDefinitionMolecularWeightComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionMolecularWeightComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionMolecularWeightComponent
   * @returns SubstanceDefinitionMolecularWeightComponent data model or undefined for `SubstanceDefinitionMolecularWeightComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionMolecularWeightComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionMolecularWeightComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionMolecularWeightComponent();

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
      if (datatype === undefined) {
        instance.setAmount(null);
      } else {
        instance.setAmount(datatype);
      }
    } else {
      instance.setAmount(null);
    }

    return instance;
  }

  /**
   * SubstanceDefinition.molecularWeight.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The method by which the weight was determined
   * - **Definition:** The method by which the molecular weight was determined.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private method?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.molecularWeight.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of molecular weight e.g. exact, average, weight average
   * - **Definition:** Type of molecular weight such as exact, average (also known as. number average), weight average.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.molecularWeight.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to capture quantitative values for a variety of elements
   * - **Definition:** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private amount: Quantity | null;

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
      const optErrMsg = `Invalid SubstanceDefinition.molecularWeight.method; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.molecularWeight.type; Provided element is not an instance of CodeableConcept.`;
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
   * Assigns the provided Quantity object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Quantity | undefined | null): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.molecularWeight.amount; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.amount = value;
    } else {
      this.amount = null;
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
    return 'SubstanceDefinition.molecularWeight';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.amount, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionMolecularWeightComponent {
    const dest = new SubstanceDefinitionMolecularWeightComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionMolecularWeightComponent): void {
    super.copyValues(dest);
    dest.method = this.method?.copy();
    dest.type_ = this.type_?.copy();
    dest.amount = this.amount ? this.amount.copy() : null;
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
    } else {
      jsonObj['amount'] = null;
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionStructureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Structural information
 * - **Definition:** Structural information.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionStructureComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinitionStructureComponent` JSON to instantiate the SubstanceDefinitionStructureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionStructureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionStructureComponent
   * @returns SubstanceDefinitionStructureComponent data model or undefined for `SubstanceDefinitionStructureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionStructureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionStructureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionStructureComponent();

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

    fieldName = 'molecularWeight';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceDefinitionMolecularWeightComponent | undefined = SubstanceDefinitionMolecularWeightComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMolecularWeight(component);
    }

    fieldName = 'technique';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTechnique(datatype);
        }
      });
    }

    fieldName = 'sourceDocument';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSourceDocument(datatype);
        }
      });
  }

    fieldName = 'representation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceDefinitionStructureRepresentationComponent | undefined = SubstanceDefinitionStructureRepresentationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRepresentation(component);
        }
      });
    }

    return instance;
  }

  /**
   * SubstanceDefinition.structure.stereochemistry Element
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
   * SubstanceDefinition.structure.opticalActivity Element
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
   * SubstanceDefinition.structure.molecularFormula Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An expression which states the number and type of atoms present in a molecule of a substance
   * - **Definition:** An expression which states the number and type of atoms present in a molecule of a substance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularFormula?: StringType | undefined;

  /**
   * SubstanceDefinition.structure.molecularFormulaByMoiety Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specified per moiety according to the Hill system
   * - **Definition:** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularFormulaByMoiety?: StringType | undefined;

  /**
   * SubstanceDefinition.structure.molecularWeight Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The molecular weight or weight range
   * - **Definition:** The molecular weight or weight range (for proteins, polymers or nucleic acids).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private molecularWeight?: SubstanceDefinitionMolecularWeightComponent | undefined;

  /**
   * SubstanceDefinition.structure.technique Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The method used to find the structure e.g. X-ray, NMR
   * - **Definition:** The method used to elucidate the structure of the drug substance. Examples: X-ray, NMR, Peptide mapping, Ligand binding assay.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private technique?: CodeableConcept[] | undefined;

  /**
   * SubstanceDefinition.structure.sourceDocument Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source of information for the structure
   * - **Definition:** The source of information about the structure.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sourceDocument?: Reference[] | undefined;

  /**
   * SubstanceDefinition.structure.representation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A depiction of the structure of the substance
   * - **Definition:** A depiction of the structure of the substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private representation?: SubstanceDefinitionStructureRepresentationComponent[] | undefined;

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
      const optErrMsg = `Invalid SubstanceDefinition.structure.stereochemistry; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.structure.opticalActivity; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.structure.molecularFormula; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.structure.molecularFormula (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceDefinition.structure.molecularFormulaByMoiety; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.structure.molecularFormulaByMoiety (${String(value)})`;
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
   * @returns the `molecularWeight` property value as a SubstanceDefinitionMolecularWeightComponent object if defined; else an empty SubstanceDefinitionMolecularWeightComponent object
   */
  public getMolecularWeight(): SubstanceDefinitionMolecularWeightComponent {
    return this.molecularWeight ?? new SubstanceDefinitionMolecularWeightComponent();
  }

  /**
   * Assigns the provided MolecularWeight object value to the `molecularWeight` property.
   *
   * @param value - the `molecularWeight` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMolecularWeight(value: SubstanceDefinitionMolecularWeightComponent | undefined): this {
    if (isDefined<SubstanceDefinitionMolecularWeightComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.structure.molecularWeight; Provided element is not an instance of SubstanceDefinitionMolecularWeightComponent.`;
      assertFhirType<SubstanceDefinitionMolecularWeightComponent>(value, SubstanceDefinitionMolecularWeightComponent, optErrMsg);
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
    return isDefined<SubstanceDefinitionMolecularWeightComponent>(this.molecularWeight) && !this.molecularWeight.isEmpty();
  }

  /**
   * @returns the `technique` property value as a CodeableConcept array
   */
  public getTechnique(): CodeableConcept[] {
    return this.technique ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `technique` property.
   *
   * @param value - the `technique` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTechnique(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.structure.technique; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.technique = value;
    } else {
      this.technique = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `technique` array property.
   *
   * @param value - the `technique` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTechnique(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.structure.technique; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTechnique();
      this.technique?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `technique` property exists and has a value; `false` otherwise
   */
  public hasTechnique(): boolean {
    return isDefinedList<CodeableConcept>(this.technique) && this.technique.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `technique` property
   */
  private initTechnique(): void {
    if(!this.hasTechnique()) {
      this.technique = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `sourceDocument` property value as a Reference array
   */
  public getSourceDocument(): Reference[] {
    return this.sourceDocument ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `sourceDocument` property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.structure.sourceDocument', ['DocumentReference',])`
   *
   * @param value - the `sourceDocument` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.structure.sourceDocument', [
    'DocumentReference',
  ])
  public setSourceDocument(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.sourceDocument = value;
    } else {
      this.sourceDocument = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `sourceDocument` array property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.structure.sourceDocument', ['DocumentReference',])`
   *
   * @param value - the `sourceDocument` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.structure.sourceDocument', [
    'DocumentReference',
  ])
  public addSourceDocument(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSourceDocument();
      this.sourceDocument?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceDocument` property exists and has a value; `false` otherwise
   */
  public hasSourceDocument(): boolean {
    return isDefinedList<Reference>(this.sourceDocument) && this.sourceDocument.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `sourceDocument` property
   */
  private initSourceDocument(): void {
    if (!this.hasSourceDocument()) {
      this.sourceDocument = [] as Reference[];
    }
  }

  /**
   * @returns the `representation` property value as a SubstanceDefinitionStructureRepresentationComponent array
   */
  public getRepresentation(): SubstanceDefinitionStructureRepresentationComponent[] {
    return this.representation ?? ([] as SubstanceDefinitionStructureRepresentationComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionStructureRepresentationComponent array value to the `representation` property.
   *
   * @param value - the `representation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRepresentation(value: SubstanceDefinitionStructureRepresentationComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionStructureRepresentationComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.structure.representation; Provided value array has an element that is not an instance of SubstanceDefinitionStructureRepresentationComponent.`;
      assertFhirTypeList<SubstanceDefinitionStructureRepresentationComponent>(value, SubstanceDefinitionStructureRepresentationComponent, optErrMsg);
      this.representation = value;
    } else {
      this.representation = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionStructureRepresentationComponent value to the `representation` array property.
   *
   * @param value - the `representation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRepresentation(value: SubstanceDefinitionStructureRepresentationComponent | undefined): this {
    if (isDefined<SubstanceDefinitionStructureRepresentationComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.structure.representation; Provided element is not an instance of SubstanceDefinitionStructureRepresentationComponent.`;
      assertFhirType<SubstanceDefinitionStructureRepresentationComponent>(value, SubstanceDefinitionStructureRepresentationComponent, optErrMsg);
      this.initRepresentation();
      this.representation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `representation` property exists and has a value; `false` otherwise
   */
  public hasRepresentation(): boolean {
    return isDefinedList<SubstanceDefinitionStructureRepresentationComponent>(this.representation) && this.representation.some((item: SubstanceDefinitionStructureRepresentationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `representation` property
   */
  private initRepresentation(): void {
    if(!this.hasRepresentation()) {
      this.representation = [] as SubstanceDefinitionStructureRepresentationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceDefinition.structure';
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
      this.molecularWeight,
      this.technique,
      this.sourceDocument,
      this.representation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionStructureComponent {
    const dest = new SubstanceDefinitionStructureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionStructureComponent): void {
    super.copyValues(dest);
    dest.stereochemistry = this.stereochemistry?.copy();
    dest.opticalActivity = this.opticalActivity?.copy();
    dest.molecularFormula = this.molecularFormula?.copy();
    dest.molecularFormulaByMoiety = this.molecularFormulaByMoiety?.copy();
    dest.molecularWeight = this.molecularWeight?.copy();
    const techniqueList = copyListValues<CodeableConcept>(this.technique);
    dest.technique = techniqueList.length === 0 ? undefined : techniqueList;
    const sourceDocumentList = copyListValues<Reference>(this.sourceDocument);
    dest.sourceDocument = sourceDocumentList.length === 0 ? undefined : sourceDocumentList;
    const representationList = copyListValues<SubstanceDefinitionStructureRepresentationComponent>(this.representation);
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

    if (this.hasMolecularWeight()) {
      setFhirBackboneElementJson(this.getMolecularWeight(), 'molecularWeight', jsonObj);
    }

    if (this.hasTechnique()) {
      setFhirComplexListJson(this.getTechnique(), 'technique', jsonObj);
    }

    if (this.hasSourceDocument()) {
      setFhirComplexListJson(this.getSourceDocument(), 'sourceDocument', jsonObj);
    }

    if (this.hasRepresentation()) {
      setFhirBackboneElementListJson(this.getRepresentation(), 'representation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionStructureRepresentationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A depiction of the structure of the substance
 * - **Definition:** A depiction of the structure of the substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionStructureRepresentationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinitionStructureRepresentationComponent` JSON to instantiate the SubstanceDefinitionStructureRepresentationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionStructureRepresentationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionStructureRepresentationComponent
   * @returns SubstanceDefinitionStructureRepresentationComponent data model or undefined for `SubstanceDefinitionStructureRepresentationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionStructureRepresentationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionStructureRepresentationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionStructureRepresentationComponent();

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

    fieldName = 'format';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFormat(datatype);
    }

    fieldName = 'document';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDocument(datatype);
    }

    return instance;
  }

  /**
   * SubstanceDefinition.structure.representation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kind of structural representation (e.g. full, partial)
   * - **Definition:** The kind of structural representation (e.g. full, partial).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.structure.representation.representation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The structural representation as a text string in a standard format
   * - **Definition:** The structural representation as a text string in a standard format.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private representation?: StringType | undefined;

  /**
   * SubstanceDefinition.structure.representation.format Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The format of the representation e.g. InChI, SMILES, MOLFILE (note: not the physical file format)
   * - **Definition:** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF. The logical content type rather than the physical file format of a document.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private format?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.structure.representation.document Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An attachment with the structural representation e.g. a structure graphic or AnIML file
   * - **Definition:** An attached file with the structural representation e.g. a molecular structure graphic of the substance, a JCAMP or AnIML file.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private document?: Reference | undefined;

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
      const optErrMsg = `Invalid SubstanceDefinition.structure.representation.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.structure.representation.representation; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.structure.representation.representation (${String(value)})`;
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
   * @returns the `format` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFormat(): CodeableConcept {
    return this.format ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Format object value to the `format` property.
   *
   * @param value - the `format` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFormat(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.structure.representation.format; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.format = value;
    } else {
      this.format = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `format` property exists and has a value; `false` otherwise
   */
  public hasFormat(): boolean {
    return isDefined<CodeableConcept>(this.format) && !this.format.isEmpty();
  }

  /**
   * @returns the `document` property value as a Reference object; else an empty Reference object
   */
  public getDocument(): Reference {
    return this.document ?? new Reference();
  }

  /**
   * Assigns the provided Document object value to the `document` property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.structure.representation.document', ['DocumentReference',])`
   *
   * @param value - the `document` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.structure.representation.document', [
    'DocumentReference',
  ])
  public setDocument(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.document = value;
    } else {
      this.document = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `document` property exists and has a value; `false` otherwise
   */
  public hasDocument(): boolean {
    return isDefined<Reference>(this.document) && !this.document.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceDefinition.structure.representation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.representation,
      this.format,
      this.document,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionStructureRepresentationComponent {
    const dest = new SubstanceDefinitionStructureRepresentationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionStructureRepresentationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.representation = this.representation?.copy();
    dest.format = this.format?.copy();
    dest.document = this.document?.copy();
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

    if (this.hasFormat()) {
      setFhirComplexJson(this.getFormat(), 'format', jsonObj);
    }

    if (this.hasDocument()) {
      setFhirComplexJson(this.getDocument(), 'document', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionCodeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Codes associated with the substance
 * - **Definition:** Codes associated with the substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionCodeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinitionCodeComponent` JSON to instantiate the SubstanceDefinitionCodeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionCodeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionCodeComponent
   * @returns SubstanceDefinitionCodeComponent data model or undefined for `SubstanceDefinitionCodeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionCodeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionCodeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionCodeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStatusDateElement(datatype);
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
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
   * SubstanceDefinition.code.code Element
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
   * SubstanceDefinition.code.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status of the code assignment, for example \'provisional\', \'approved\'
   * - **Definition:** Status of the code assignment, for example \'provisional\', \'approved\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.code.statusDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date at which the code status was changed
   * - **Definition:** The date at which the code status was changed as part of the terminology maintenance.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusDate?: DateTimeType | undefined;

  /**
   * SubstanceDefinition.code.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any comment can be provided in this field
   * - **Definition:** Any comment can be provided in this field, if necessary.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private note?: Annotation[] | undefined;

  /**
   * SubstanceDefinition.code.source Element
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
      const optErrMsg = `Invalid SubstanceDefinition.code.code; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.code.status; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.code.statusDate; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.code.statusDate (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceDefinition.code.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.code.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `source` property value as a Reference array
   */
  public getSource(): Reference[] {
    return this.source ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `source` property.
   *
   * @decorator `@ReferenceTargets('SubstanceDefinition.code.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.code.source', [
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.code.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.code.source', [
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
    return 'SubstanceDefinition.code';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.status,
      this.statusDate,
      this.note,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionCodeComponent {
    const dest = new SubstanceDefinitionCodeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionCodeComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.status = this.status?.copy();
    dest.statusDate = this.statusDate?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionNameComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Names applicable to this substance
 * - **Definition:** Names applicable to this substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionNameComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `SubstanceDefinitionNameComponent` JSON to instantiate the SubstanceDefinitionNameComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionNameComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionNameComponent
   * @returns SubstanceDefinitionNameComponent data model or undefined for `SubstanceDefinitionNameComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionNameComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionNameComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionNameComponent();

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
        const component: SubstanceDefinitionNameComponent | undefined = SubstanceDefinitionNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
        const component: SubstanceDefinitionNameComponent | undefined = SubstanceDefinitionNameComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
        const component: SubstanceDefinitionNameOfficialComponent | undefined = SubstanceDefinitionNameOfficialComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
   * SubstanceDefinition.name.name Element
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
   * SubstanceDefinition.name.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name type e.g. \'systematic\',  \'scientific, \'brand\'
   * - **Definition:** Name type, for example \'systematic\',  \'scientific, \'brand\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.name.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the name e.g. \'current\', \'proposed\'
   * - **Definition:** The status of the name, for example \'current\', \'proposed\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.name.preferred Element
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
   * SubstanceDefinition.name.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human language that the name is written in
   * - **Definition:** Human language that the name is written in.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private language?: CodeableConcept[] | undefined;

  /**
   * SubstanceDefinition.name.domain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The use context of this name e.g. as an active ingredient or as a food colour additive
   * - **Definition:** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private domain?: CodeableConcept[] | undefined;

  /**
   * SubstanceDefinition.name.jurisdiction Element
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
   * SubstanceDefinition.name.synonym Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A synonym of this particular name, by which the substance is also known
   * - **Definition:** A synonym of this particular name, by which the substance is also known.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private synonym?: SubstanceDefinitionNameComponent[] | undefined;

  /**
   * SubstanceDefinition.name.translation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A translation for this name into another human language
   * - **Definition:** A translation for this name into another human language.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private translation?: SubstanceDefinitionNameComponent[] | undefined;

  /**
   * SubstanceDefinition.name.official Element
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
  private official?: SubstanceDefinitionNameOfficialComponent[] | undefined;

  /**
   * SubstanceDefinition.name.source Element
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
      const optErrMsg = `Invalid SubstanceDefinition.name.name; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.name (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.status; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.preferred; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.preferred (${String(value)})`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.language; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.language; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.domain; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.domain; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `synonym` property value as a SubstanceDefinitionNameComponent array
   */
  public getSynonym(): SubstanceDefinitionNameComponent[] {
    return this.synonym ?? ([] as SubstanceDefinitionNameComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionNameComponent array value to the `synonym` property.
   *
   * @param value - the `synonym` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSynonym(value: SubstanceDefinitionNameComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name.synonym; Provided value array has an element that is not an instance of SubstanceDefinitionNameComponent.`;
      assertFhirTypeList<SubstanceDefinitionNameComponent>(value, SubstanceDefinitionNameComponent, optErrMsg);
      this.synonym = value;
    } else {
      this.synonym = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionNameComponent value to the `synonym` array property.
   *
   * @param value - the `synonym` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSynonym(value: SubstanceDefinitionNameComponent | undefined): this {
    if (isDefined<SubstanceDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name.synonym; Provided element is not an instance of SubstanceDefinitionNameComponent.`;
      assertFhirType<SubstanceDefinitionNameComponent>(value, SubstanceDefinitionNameComponent, optErrMsg);
      this.initSynonym();
      this.synonym?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `synonym` property exists and has a value; `false` otherwise
   */
  public hasSynonym(): boolean {
    return isDefinedList<SubstanceDefinitionNameComponent>(this.synonym) && this.synonym.some((item: SubstanceDefinitionNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `synonym` property
   */
  private initSynonym(): void {
    if(!this.hasSynonym()) {
      this.synonym = [] as SubstanceDefinitionNameComponent[];
    }
  }

  /**
   * @returns the `translation` property value as a SubstanceDefinitionNameComponent array
   */
  public getTranslation(): SubstanceDefinitionNameComponent[] {
    return this.translation ?? ([] as SubstanceDefinitionNameComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionNameComponent array value to the `translation` property.
   *
   * @param value - the `translation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTranslation(value: SubstanceDefinitionNameComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name.translation; Provided value array has an element that is not an instance of SubstanceDefinitionNameComponent.`;
      assertFhirTypeList<SubstanceDefinitionNameComponent>(value, SubstanceDefinitionNameComponent, optErrMsg);
      this.translation = value;
    } else {
      this.translation = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionNameComponent value to the `translation` array property.
   *
   * @param value - the `translation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTranslation(value: SubstanceDefinitionNameComponent | undefined): this {
    if (isDefined<SubstanceDefinitionNameComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name.translation; Provided element is not an instance of SubstanceDefinitionNameComponent.`;
      assertFhirType<SubstanceDefinitionNameComponent>(value, SubstanceDefinitionNameComponent, optErrMsg);
      this.initTranslation();
      this.translation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `translation` property exists and has a value; `false` otherwise
   */
  public hasTranslation(): boolean {
    return isDefinedList<SubstanceDefinitionNameComponent>(this.translation) && this.translation.some((item: SubstanceDefinitionNameComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `translation` property
   */
  private initTranslation(): void {
    if(!this.hasTranslation()) {
      this.translation = [] as SubstanceDefinitionNameComponent[];
    }
  }

  /**
   * @returns the `official` property value as a SubstanceDefinitionNameOfficialComponent array
   */
  public getOfficial(): SubstanceDefinitionNameOfficialComponent[] {
    return this.official ?? ([] as SubstanceDefinitionNameOfficialComponent[]);
  }

  /**
   * Assigns the provided SubstanceDefinitionNameOfficialComponent array value to the `official` property.
   *
   * @param value - the `official` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOfficial(value: SubstanceDefinitionNameOfficialComponent[] | undefined): this {
    if (isDefinedList<SubstanceDefinitionNameOfficialComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name.official; Provided value array has an element that is not an instance of SubstanceDefinitionNameOfficialComponent.`;
      assertFhirTypeList<SubstanceDefinitionNameOfficialComponent>(value, SubstanceDefinitionNameOfficialComponent, optErrMsg);
      this.official = value;
    } else {
      this.official = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceDefinitionNameOfficialComponent value to the `official` array property.
   *
   * @param value - the `official` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOfficial(value: SubstanceDefinitionNameOfficialComponent | undefined): this {
    if (isDefined<SubstanceDefinitionNameOfficialComponent>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.name.official; Provided element is not an instance of SubstanceDefinitionNameOfficialComponent.`;
      assertFhirType<SubstanceDefinitionNameOfficialComponent>(value, SubstanceDefinitionNameOfficialComponent, optErrMsg);
      this.initOfficial();
      this.official?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `official` property exists and has a value; `false` otherwise
   */
  public hasOfficial(): boolean {
    return isDefinedList<SubstanceDefinitionNameOfficialComponent>(this.official) && this.official.some((item: SubstanceDefinitionNameOfficialComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `official` property
   */
  private initOfficial(): void {
    if(!this.hasOfficial()) {
      this.official = [] as SubstanceDefinitionNameOfficialComponent[];
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.name.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.name.source', [
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.name.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.name.source', [
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
    return 'SubstanceDefinition.name';
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
  public override copy(): SubstanceDefinitionNameComponent {
    const dest = new SubstanceDefinitionNameComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionNameComponent): void {
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
    const synonymList = copyListValues<SubstanceDefinitionNameComponent>(this.synonym);
    dest.synonym = synonymList.length === 0 ? undefined : synonymList;
    const translationList = copyListValues<SubstanceDefinitionNameComponent>(this.translation);
    dest.translation = translationList.length === 0 ? undefined : translationList;
    const officialList = copyListValues<SubstanceDefinitionNameOfficialComponent>(this.official);
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
 * SubstanceDefinitionNameOfficialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Details of the official nature of this name
 * - **Definition:** Details of the official nature of this name.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionNameOfficialComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinitionNameOfficialComponent` JSON to instantiate the SubstanceDefinitionNameOfficialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionNameOfficialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionNameOfficialComponent
   * @returns SubstanceDefinitionNameOfficialComponent data model or undefined for `SubstanceDefinitionNameOfficialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionNameOfficialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionNameOfficialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionNameOfficialComponent();

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
   * SubstanceDefinition.name.official.authority Element
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
   * SubstanceDefinition.name.official.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The status of the official name, for example \'draft\', \'active\'
   * - **Definition:** The status of the official name, for example \'draft\', \'active\', \'retired\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private status?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.name.official.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date of official name change
   * - **Definition:** Date of the official name change.
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
      const optErrMsg = `Invalid SubstanceDefinition.name.official.authority; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.official.status; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.official.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.name.official.date (${String(value)})`;
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
    return 'SubstanceDefinition.name.official';
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
  public override copy(): SubstanceDefinitionNameOfficialComponent {
    const dest = new SubstanceDefinitionNameOfficialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionNameOfficialComponent): void {
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
 * SubstanceDefinitionRelationshipComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A link between this substance and another
 * - **Definition:** A link between this substance and another, with details of the relationship.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionRelationshipComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: CodeableConcept | null = null) {
    super();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `SubstanceDefinitionRelationshipComponent` JSON to instantiate the SubstanceDefinitionRelationshipComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionRelationshipComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionRelationshipComponent
   * @returns SubstanceDefinitionRelationshipComponent data model or undefined for `SubstanceDefinitionRelationshipComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionRelationshipComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionRelationshipComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionRelationshipComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = SubstanceDefinitionRelationshipComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubstanceDefinitionRelationshipComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'substanceDefinition[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const substanceDefinition: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSubstanceDefinition(substanceDefinition);

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

    fieldName = 'ratioHighLimitAmount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Ratio | undefined = Ratio.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRatioHighLimitAmount(datatype);
    }

    fieldName = 'comparator';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setComparator(datatype);
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
   * SubstanceDefinition.relationship.substanceDefinition[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceDefinition.relationship.substanceDefinition[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A pointer to another substance, as a resource or a representational code
   * - **Definition:** A pointer to another substance, as a resource or just a representational code.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceDefinition.relationship.substanceDefinition[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private substanceDefinition?: IDataType | undefined;

  /**
   * SubstanceDefinition.relationship.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For example "salt to parent", "active moiety"
   * - **Definition:** For example "salt to parent", "active moiety", "starting material", "polymorph", "impurity of".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * SubstanceDefinition.relationship.isDefining Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible relationships
   * - **Definition:** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private isDefining?: BooleanType | undefined;

  /**
   * SubstanceDefinition.relationship.amount[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubstanceDefinition.relationship.amount[x]', ['Quantity','Ratio','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other
   * - **Definition:** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Ratio',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SubstanceDefinition.relationship.amount[x]',[
    'Quantity',
    'Ratio',
    'string',
  ])
  private amount?: IDataType | undefined;

  /**
   * SubstanceDefinition.relationship.ratioHighLimitAmount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For use when the numeric has an uncertain range
   * - **Definition:** For use when the numeric has an uncertain range.
   * - **FHIR Type:** `Ratio`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private ratioHighLimitAmount?: Ratio | undefined;

  /**
   * SubstanceDefinition.relationship.comparator Element
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
  private comparator?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.relationship.source Element
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
   * @returns the `substanceDefinition` property value as a DataType object if defined; else undefined
   */
  public getSubstanceDefinition(): IDataType | undefined {
    return this.substanceDefinition;
  }

  /**
   * Assigns the provided DataType object value to the `substanceDefinition` property.
   *
   * @decorator `@ChoiceDataTypes('SubstanceDefinition.relationship.substanceDefinition[x]')`
   *
   * @param value - the `substanceDefinition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceDefinition.relationship.substanceDefinition[x]')
  public setSubstanceDefinition(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.substanceDefinition = value;
    } else {
      this.substanceDefinition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `substanceDefinition` property exists and has a value; `false` otherwise
   */
  public hasSubstanceDefinition(): boolean {
    return isDefined<IDataType>(this.substanceDefinition) && !this.substanceDefinition.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `substanceDefinition` property value as a Reference object if defined; else undefined
   */
  public getSubstanceDefinitionReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.substanceDefinition)) {
      return undefined;
    }
    if (!(this.substanceDefinition instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceDefinition.relationship.substanceDefinition[x]: Expected Reference but encountered ${this.substanceDefinition.fhirType()}`,
      );
    }
    return this.substanceDefinition;
  }

  /**
   * @returns `true` if the `substanceDefinition` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSubstanceDefinitionReference(): boolean {
    return this.hasSubstanceDefinition() && this.substanceDefinition instanceof Reference;
  }

  /**
   * @returns the `substanceDefinition` property value as a CodeableConcept object if defined; else undefined
   */
  public getSubstanceDefinitionCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.substanceDefinition)) {
      return undefined;
    }
    if (!(this.substanceDefinition instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceDefinition.relationship.substanceDefinition[x]: Expected CodeableConcept but encountered ${this.substanceDefinition.fhirType()}`,
      );
    }
    return this.substanceDefinition;
  }

  /**
   * @returns `true` if the `substanceDefinition` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasSubstanceDefinitionCodeableConcept(): boolean {
    return this.hasSubstanceDefinition() && this.substanceDefinition instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid SubstanceDefinition.relationship.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.relationship.isDefining; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid SubstanceDefinition.relationship.isDefining (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('SubstanceDefinition.relationship.amount[x]')`
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubstanceDefinition.relationship.amount[x]')
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
        `DataType mismatch for SubstanceDefinition.relationship.amount[x]: Expected Quantity but encountered ${this.amount.fhirType()}`,
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
   * @returns the `amount` property value as a Ratio object if defined; else undefined
   */
  public getAmountRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.amount)) {
      return undefined;
    }
    if (!(this.amount instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for SubstanceDefinition.relationship.amount[x]: Expected Ratio but encountered ${this.amount.fhirType()}`,
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
        `DataType mismatch for SubstanceDefinition.relationship.amount[x]: Expected StringType but encountered ${this.amount.fhirType()}`,
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
   * @returns the `ratioHighLimitAmount` property value as a Ratio object if defined; else an empty Ratio object
   */
  public getRatioHighLimitAmount(): Ratio {
    return this.ratioHighLimitAmount ?? new Ratio();
  }

  /**
   * Assigns the provided RatioHighLimitAmount object value to the `ratioHighLimitAmount` property.
   *
   * @param value - the `ratioHighLimitAmount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRatioHighLimitAmount(value: Ratio | undefined): this {
    if (isDefined<Ratio>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.relationship.ratioHighLimitAmount; Provided element is not an instance of Ratio.`;
      assertFhirType<Ratio>(value, Ratio, optErrMsg);
      this.ratioHighLimitAmount = value;
    } else {
      this.ratioHighLimitAmount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `ratioHighLimitAmount` property exists and has a value; `false` otherwise
   */
  public hasRatioHighLimitAmount(): boolean {
    return isDefined<Ratio>(this.ratioHighLimitAmount) && !this.ratioHighLimitAmount.isEmpty();
  }

  /**
   * @returns the `comparator` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getComparator(): CodeableConcept {
    return this.comparator ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Comparator object value to the `comparator` property.
   *
   * @param value - the `comparator` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComparator(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.relationship.comparator; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.comparator = value;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparator(): boolean {
    return isDefined<CodeableConcept>(this.comparator) && !this.comparator.isEmpty();
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.relationship.source', ['DocumentReference',])`
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.relationship.source', [
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
   * @decorator `@ReferenceTargets('SubstanceDefinition.relationship.source', ['DocumentReference',])`
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('SubstanceDefinition.relationship.source', [
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
    return 'SubstanceDefinition.relationship';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.substanceDefinition,
      this.type_,
      this.isDefining,
      this.amount,
      this.ratioHighLimitAmount,
      this.comparator,
      this.source,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionRelationshipComponent {
    const dest = new SubstanceDefinitionRelationshipComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionRelationshipComponent): void {
    super.copyValues(dest);
    dest.substanceDefinition = this.substanceDefinition?.copy() as IDataType;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.isDefining = this.isDefining?.copy();
    dest.amount = this.amount?.copy() as IDataType;
    dest.ratioHighLimitAmount = this.ratioHighLimitAmount?.copy();
    dest.comparator = this.comparator?.copy();
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

    if (this.hasSubstanceDefinition()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSubstanceDefinition()!, 'substanceDefinition', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasIsDefiningElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsDefiningElement(), 'isDefining', jsonObj);
    }

    if (this.hasAmount()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAmount()!, 'amount', jsonObj);
    }

    if (this.hasRatioHighLimitAmount()) {
      setFhirComplexJson(this.getRatioHighLimitAmount(), 'ratioHighLimitAmount', jsonObj);
    }

    if (this.hasComparator()) {
      setFhirComplexJson(this.getComparator(), 'comparator', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexListJson(this.getSource(), 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceDefinitionSourceMaterialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Material or taxonomic/anatomical source
 * - **Definition:** Material or taxonomic/anatomical source for the substance.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceDefinition](http://hl7.org/fhir/StructureDefinition/SubstanceDefinition)
 */
export class SubstanceDefinitionSourceMaterialComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceDefinitionSourceMaterialComponent` JSON to instantiate the SubstanceDefinitionSourceMaterialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceDefinitionSourceMaterialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceDefinitionSourceMaterialComponent
   * @returns SubstanceDefinitionSourceMaterialComponent data model or undefined for `SubstanceDefinitionSourceMaterialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceDefinitionSourceMaterialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceDefinitionSourceMaterialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceDefinitionSourceMaterialComponent();

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

    fieldName = 'genus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGenus(datatype);
    }

    fieldName = 'species';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSpecies(datatype);
    }

    fieldName = 'part';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPart(datatype);
    }

    fieldName = 'countryOfOrigin';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCountryOfOrigin(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * SubstanceDefinition.sourceMaterial.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the origin of the raw material. e.g. cat hair is an Animal source type
   * - **Definition:** A classification that provides the origin of the raw material. Example: cat hair would be an Animal source type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.sourceMaterial.genus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The genus of an organism e.g. the Latin epithet of the plant/animal scientific name
   * - **Definition:** The genus of an organism, typically referring to the Latin epithet of the genus element of the plant/animal scientific name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private genus?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.sourceMaterial.species Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The species of an organism e.g. the Latin epithet of the species of the plant/animal
   * - **Definition:** The species of an organism, typically referring to the Latin epithet of the species of the plant/animal.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private species?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.sourceMaterial.part Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An anatomical origin of the source material within an organism
   * - **Definition:** An anatomical origin of the source material within an organism.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private part?: CodeableConcept | undefined;

  /**
   * SubstanceDefinition.sourceMaterial.countryOfOrigin Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The country or countries where the material is harvested
   * - **Definition:** The country or countries where the material is harvested.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private countryOfOrigin?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid SubstanceDefinition.sourceMaterial.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `genus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getGenus(): CodeableConcept {
    return this.genus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Genus object value to the `genus` property.
   *
   * @param value - the `genus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGenus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.sourceMaterial.genus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.genus = value;
    } else {
      this.genus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `genus` property exists and has a value; `false` otherwise
   */
  public hasGenus(): boolean {
    return isDefined<CodeableConcept>(this.genus) && !this.genus.isEmpty();
  }

  /**
   * @returns the `species` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSpecies(): CodeableConcept {
    return this.species ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Species object value to the `species` property.
   *
   * @param value - the `species` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecies(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.sourceMaterial.species; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.species = value;
    } else {
      this.species = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `species` property exists and has a value; `false` otherwise
   */
  public hasSpecies(): boolean {
    return isDefined<CodeableConcept>(this.species) && !this.species.isEmpty();
  }

  /**
   * @returns the `part` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPart(): CodeableConcept {
    return this.part ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Part object value to the `part` property.
   *
   * @param value - the `part` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPart(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.sourceMaterial.part; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.part = value;
    } else {
      this.part = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `part` property exists and has a value; `false` otherwise
   */
  public hasPart(): boolean {
    return isDefined<CodeableConcept>(this.part) && !this.part.isEmpty();
  }

  /**
   * @returns the `countryOfOrigin` property value as a CodeableConcept array
   */
  public getCountryOfOrigin(): CodeableConcept[] {
    return this.countryOfOrigin ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `countryOfOrigin` property.
   *
   * @param value - the `countryOfOrigin` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCountryOfOrigin(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.sourceMaterial.countryOfOrigin; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.countryOfOrigin = value;
    } else {
      this.countryOfOrigin = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `countryOfOrigin` array property.
   *
   * @param value - the `countryOfOrigin` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCountryOfOrigin(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceDefinition.sourceMaterial.countryOfOrigin; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCountryOfOrigin();
      this.countryOfOrigin?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `countryOfOrigin` property exists and has a value; `false` otherwise
   */
  public hasCountryOfOrigin(): boolean {
    return isDefinedList<CodeableConcept>(this.countryOfOrigin) && this.countryOfOrigin.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `countryOfOrigin` property
   */
  private initCountryOfOrigin(): void {
    if(!this.hasCountryOfOrigin()) {
      this.countryOfOrigin = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceDefinition.sourceMaterial';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.genus,
      this.species,
      this.part,
      this.countryOfOrigin,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceDefinitionSourceMaterialComponent {
    const dest = new SubstanceDefinitionSourceMaterialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceDefinitionSourceMaterialComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.genus = this.genus?.copy();
    dest.species = this.species?.copy();
    dest.part = this.part?.copy();
    const countryOfOriginList = copyListValues<CodeableConcept>(this.countryOfOrigin);
    dest.countryOfOrigin = countryOfOriginList.length === 0 ? undefined : countryOfOriginList;
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

    if (this.hasGenus()) {
      setFhirComplexJson(this.getGenus(), 'genus', jsonObj);
    }

    if (this.hasSpecies()) {
      setFhirComplexJson(this.getSpecies(), 'species', jsonObj);
    }

    if (this.hasPart()) {
      setFhirComplexJson(this.getPart(), 'part', jsonObj);
    }

    if (this.hasCountryOfOrigin()) {
      setFhirComplexListJson(this.getCountryOfOrigin(), 'countryOfOrigin', jsonObj);
    }

    return jsonObj;
  }
}
