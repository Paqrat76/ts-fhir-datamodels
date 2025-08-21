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
 * SubstanceSourceMaterial Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
 * StructureDefinition.name: SubstanceSourceMaterial
 * StructureDefinition.description: Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  DomainResource,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  JSON,
  PrimitiveTypeJson,
  StringType,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * SubstanceSourceMaterial Class
 *
 * @remarks
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 *
 * **FHIR Specification**
 * - **Short:** Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex
 * - **Definition:** Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSourceMaterial](http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial)
 */
export class SubstanceSourceMaterial extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSourceMaterial` JSON to instantiate the SubstanceSourceMaterial data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSourceMaterial`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSourceMaterial
   * @returns SubstanceSourceMaterial data model or undefined for `SubstanceSourceMaterial`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSourceMaterial | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSourceMaterial';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSourceMaterial();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubstanceSourceMaterial');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'sourceMaterialClass';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSourceMaterialClass(datatype);
    }

    fieldName = 'sourceMaterialType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSourceMaterialType(datatype);
    }

    fieldName = 'sourceMaterialState';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSourceMaterialState(datatype);
    }

    fieldName = 'organismId';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganismId(datatype);
    }

    fieldName = 'organismName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setOrganismNameElement(datatype);
    }

    fieldName = 'parentSubstanceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Identifier | undefined = Identifier.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addParentSubstanceId(datatype);
        }
      });
    }

    fieldName = 'parentSubstanceName';
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
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addParentSubstanceNameElement(datatype);
        }
      });
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

    fieldName = 'geographicalLocation';
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
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addGeographicalLocationElement(datatype);
        }
      });
    }

    fieldName = 'developmentStage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDevelopmentStage(datatype);
    }

    fieldName = 'fractionDescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSourceMaterialFractionDescriptionComponent | undefined = SubstanceSourceMaterialFractionDescriptionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFractionDescription(component);
        }
      });
    }

    fieldName = 'organism';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceSourceMaterialOrganismComponent | undefined = SubstanceSourceMaterialOrganismComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganism(component);
    }

    fieldName = 'partDescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSourceMaterialPartDescriptionComponent | undefined = SubstanceSourceMaterialPartDescriptionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPartDescription(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceSourceMaterial.sourceMaterialClass Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General high level classification of the source material specific to the origin of the material
   * - **Definition:** General high level classification of the source material specific to the origin of the material.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sourceMaterialClass?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.sourceMaterialType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent
   * - **Definition:** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sourceMaterialType?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.sourceMaterialState Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The state of the source material when extracted
   * - **Definition:** The state of the source material when extracted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private sourceMaterialState?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organismId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The unique identifier associated with the source material parent organism shall be specified
   * - **Definition:** The unique identifier associated with the source material parent organism shall be specified.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private organismId?: Identifier | undefined;

  /**
   * SubstanceSourceMaterial.organismName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organism accepted Scientific name shall be provided based on the organism taxonomy
   * - **Definition:** The organism accepted Scientific name shall be provided based on the organism taxonomy.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private organismName?: StringType | undefined;

  /**
   * SubstanceSourceMaterial.parentSubstanceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant)
   * - **Definition:** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private parentSubstanceId?: Identifier[] | undefined;

  /**
   * SubstanceSourceMaterial.parentSubstanceName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parent substance of the Herbal Drug, or Herbal preparation
   * - **Definition:** The parent substance of the Herbal Drug, or Herbal preparation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private parentSubstanceName?: StringType[] | undefined;

  /**
   * SubstanceSourceMaterial.countryOfOrigin Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For "Plasma-derived substances" the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate
   * - **Definition:** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For "Plasma-derived substances" the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private countryOfOrigin?: CodeableConcept[] | undefined;

  /**
   * SubstanceSourceMaterial.geographicalLocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat
   * - **Definition:** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private geographicalLocation?: StringType[] | undefined;

  /**
   * SubstanceSourceMaterial.developmentStage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum)
   * - **Definition:** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private developmentStage?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.fractionDescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
   * - **Definition:** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private fractionDescription?: SubstanceSourceMaterialFractionDescriptionComponent[] | undefined;

  /**
   * SubstanceSourceMaterial.organism Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
   * - **Definition:** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private organism?: SubstanceSourceMaterialOrganismComponent | undefined;

  /**
   * SubstanceSourceMaterial.partDescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** To do
   * - **Definition:** To do.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partDescription?: SubstanceSourceMaterialPartDescriptionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sourceMaterialClass` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSourceMaterialClass(): CodeableConcept {
    return this.sourceMaterialClass ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SourceMaterialClass object value to the `sourceMaterialClass` property.
   *
   * @param value - the `sourceMaterialClass` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSourceMaterialClass(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.sourceMaterialClass; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.sourceMaterialClass = value;
    } else {
      this.sourceMaterialClass = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceMaterialClass` property exists and has a value; `false` otherwise
   */
  public hasSourceMaterialClass(): boolean {
    return isDefined<CodeableConcept>(this.sourceMaterialClass) && !this.sourceMaterialClass.isEmpty();
  }

  /**
   * @returns the `sourceMaterialType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSourceMaterialType(): CodeableConcept {
    return this.sourceMaterialType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SourceMaterialType object value to the `sourceMaterialType` property.
   *
   * @param value - the `sourceMaterialType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSourceMaterialType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.sourceMaterialType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.sourceMaterialType = value;
    } else {
      this.sourceMaterialType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceMaterialType` property exists and has a value; `false` otherwise
   */
  public hasSourceMaterialType(): boolean {
    return isDefined<CodeableConcept>(this.sourceMaterialType) && !this.sourceMaterialType.isEmpty();
  }

  /**
   * @returns the `sourceMaterialState` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSourceMaterialState(): CodeableConcept {
    return this.sourceMaterialState ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SourceMaterialState object value to the `sourceMaterialState` property.
   *
   * @param value - the `sourceMaterialState` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSourceMaterialState(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.sourceMaterialState; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.sourceMaterialState = value;
    } else {
      this.sourceMaterialState = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceMaterialState` property exists and has a value; `false` otherwise
   */
  public hasSourceMaterialState(): boolean {
    return isDefined<CodeableConcept>(this.sourceMaterialState) && !this.sourceMaterialState.isEmpty();
  }

  /**
   * @returns the `organismId` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getOrganismId(): Identifier {
    return this.organismId ?? new Identifier();
  }

  /**
   * Assigns the provided OrganismId object value to the `organismId` property.
   *
   * @param value - the `organismId` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrganismId(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organismId; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.organismId = value;
    } else {
      this.organismId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organismId` property exists and has a value; `false` otherwise
   */
  public hasOrganismId(): boolean {
    return isDefined<Identifier>(this.organismId) && !this.organismId.isEmpty();
  }

  /**
   * @returns the `organismName` property value as a StringType object if defined; else an empty StringType object
   */
  public getOrganismNameElement(): StringType {
    return this.organismName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `organismName` property.
   *
   * @param element - the `organismName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrganismNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organismName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.organismName = element;
    } else {
      this.organismName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organismName` property exists and has a value; `false` otherwise
   */
  public hasOrganismNameElement(): boolean {
    return isDefined<StringType>(this.organismName) && !this.organismName.isEmpty();
  }

  /**
   * @returns the `organismName` property value as a fhirString if defined; else undefined
   */
  public getOrganismName(): fhirString | undefined {
    return this.organismName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `organismName` property.
   *
   * @param value - the `organismName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrganismName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organismName (${String(value)})`;
      this.organismName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.organismName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organismName` property exists and has a value; `false` otherwise
   */
  public hasOrganismName(): boolean {
    return this.hasOrganismNameElement();
  }

  /**
   * @returns the `parentSubstanceId` property value as a Identifier array
   */
  public getParentSubstanceId(): Identifier[] {
    return this.parentSubstanceId ?? ([] as Identifier[]);
  }

  /**
   * Assigns the provided Identifier array value to the `parentSubstanceId` property.
   *
   * @param value - the `parentSubstanceId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParentSubstanceId(value: Identifier[] | undefined): this {
    if (isDefinedList<Identifier>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.parentSubstanceId; Provided value array has an element that is not an instance of Identifier.`;
      assertFhirTypeList<Identifier>(value, Identifier, optErrMsg);
      this.parentSubstanceId = value;
    } else {
      this.parentSubstanceId = undefined;
    }
    return this;
  }

  /**
   * Add the provided Identifier value to the `parentSubstanceId` array property.
   *
   * @param value - the `parentSubstanceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParentSubstanceId(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.parentSubstanceId; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.initParentSubstanceId();
      this.parentSubstanceId?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parentSubstanceId` property exists and has a value; `false` otherwise
   */
  public hasParentSubstanceId(): boolean {
    return isDefinedList<Identifier>(this.parentSubstanceId) && this.parentSubstanceId.some((item: Identifier) => !item.isEmpty());
  }

  /**
   * Initialize the `parentSubstanceId` property
   */
  private initParentSubstanceId(): void {
    if(!this.hasParentSubstanceId()) {
      this.parentSubstanceId = [] as Identifier[];
    }
  }

  /**
   * @returns the `parentSubstanceName` property value as a StringType array
   */
  public getParentSubstanceNameElement(): StringType[] {
    return this.parentSubstanceName ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `parentSubstanceName` property.
   *
   * @param element - the `parentSubstanceName` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParentSubstanceNameElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.parentSubstanceName; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.parentSubstanceName = element;
    } else {
      this.parentSubstanceName = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `parentSubstanceName` array property.
   *
   * @param element - the `parentSubstanceName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParentSubstanceNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.parentSubstanceName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initParentSubstanceName();
      this.parentSubstanceName?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `parentSubstanceName` property exists and has a value; `false` otherwise
   */
  public hasParentSubstanceNameElement(): boolean {
    return isDefinedList<StringType>(this.parentSubstanceName) && this.parentSubstanceName.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `parentSubstanceName` property value as a fhirString array
   */
  public getParentSubstanceName(): fhirString[] {
    this.initParentSubstanceName();
    const parentSubstanceNameValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.parentSubstanceName!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        parentSubstanceNameValues.push(value);
      }
    }
    return parentSubstanceNameValues;
  }

  /**
   * Assigns the provided primitive value array to the `parentSubstanceName` property.
   *
   * @param value - the `parentSubstanceName` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParentSubstanceName(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const parentSubstanceNameElements = [] as StringType[];
      for (const parentSubstanceNameValue of value) {
        const optErrMsg = `Invalid SubstanceSourceMaterial.parentSubstanceName array item (${String(parentSubstanceNameValue)})`;
        const element = new StringType(parseFhirPrimitiveData(parentSubstanceNameValue, fhirStringSchema, optErrMsg));
        parentSubstanceNameElements.push(element);
      }
      this.parentSubstanceName = parentSubstanceNameElements;
    } else {
      this.parentSubstanceName = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `parentSubstanceName` array property.
   *
   * @param value - the `parentSubstanceName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParentSubstanceName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.parentSubstanceName array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initParentSubstanceName();
      this.addParentSubstanceNameElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `parentSubstanceName` property exists and has a value; `false` otherwise
   */
  public hasParentSubstanceName(): boolean {
    return this.hasParentSubstanceNameElement();
  }

  /**
   * Initialize the `parentSubstanceName` property
   */
  private initParentSubstanceName(): void {
    if (!this.hasParentSubstanceName()) {
      this.parentSubstanceName = [] as StringType[];
    }
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
      const optErrMsg = `Invalid SubstanceSourceMaterial.countryOfOrigin; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSourceMaterial.countryOfOrigin; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `geographicalLocation` property value as a StringType array
   */
  public getGeographicalLocationElement(): StringType[] {
    return this.geographicalLocation ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `geographicalLocation` property.
   *
   * @param element - the `geographicalLocation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGeographicalLocationElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.geographicalLocation; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.geographicalLocation = element;
    } else {
      this.geographicalLocation = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `geographicalLocation` array property.
   *
   * @param element - the `geographicalLocation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addGeographicalLocationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.geographicalLocation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initGeographicalLocation();
      this.geographicalLocation?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `geographicalLocation` property exists and has a value; `false` otherwise
   */
  public hasGeographicalLocationElement(): boolean {
    return isDefinedList<StringType>(this.geographicalLocation) && this.geographicalLocation.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `geographicalLocation` property value as a fhirString array
   */
  public getGeographicalLocation(): fhirString[] {
    this.initGeographicalLocation();
    const geographicalLocationValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.geographicalLocation!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        geographicalLocationValues.push(value);
      }
    }
    return geographicalLocationValues;
  }

  /**
   * Assigns the provided primitive value array to the `geographicalLocation` property.
   *
   * @param value - the `geographicalLocation` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGeographicalLocation(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const geographicalLocationElements = [] as StringType[];
      for (const geographicalLocationValue of value) {
        const optErrMsg = `Invalid SubstanceSourceMaterial.geographicalLocation array item (${String(geographicalLocationValue)})`;
        const element = new StringType(parseFhirPrimitiveData(geographicalLocationValue, fhirStringSchema, optErrMsg));
        geographicalLocationElements.push(element);
      }
      this.geographicalLocation = geographicalLocationElements;
    } else {
      this.geographicalLocation = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `geographicalLocation` array property.
   *
   * @param value - the `geographicalLocation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addGeographicalLocation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.geographicalLocation array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initGeographicalLocation();
      this.addGeographicalLocationElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `geographicalLocation` property exists and has a value; `false` otherwise
   */
  public hasGeographicalLocation(): boolean {
    return this.hasGeographicalLocationElement();
  }

  /**
   * Initialize the `geographicalLocation` property
   */
  private initGeographicalLocation(): void {
    if (!this.hasGeographicalLocation()) {
      this.geographicalLocation = [] as StringType[];
    }
  }

  /**
   * @returns the `developmentStage` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDevelopmentStage(): CodeableConcept {
    return this.developmentStage ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DevelopmentStage object value to the `developmentStage` property.
   *
   * @param value - the `developmentStage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDevelopmentStage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.developmentStage; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.developmentStage = value;
    } else {
      this.developmentStage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `developmentStage` property exists and has a value; `false` otherwise
   */
  public hasDevelopmentStage(): boolean {
    return isDefined<CodeableConcept>(this.developmentStage) && !this.developmentStage.isEmpty();
  }

  /**
   * @returns the `fractionDescription` property value as a SubstanceSourceMaterialFractionDescriptionComponent array
   */
  public getFractionDescription(): SubstanceSourceMaterialFractionDescriptionComponent[] {
    return this.fractionDescription ?? ([] as SubstanceSourceMaterialFractionDescriptionComponent[]);
  }

  /**
   * Assigns the provided SubstanceSourceMaterialFractionDescriptionComponent array value to the `fractionDescription` property.
   *
   * @param value - the `fractionDescription` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFractionDescription(value: SubstanceSourceMaterialFractionDescriptionComponent[] | undefined): this {
    if (isDefinedList<SubstanceSourceMaterialFractionDescriptionComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.fractionDescription; Provided value array has an element that is not an instance of SubstanceSourceMaterialFractionDescriptionComponent.`;
      assertFhirTypeList<SubstanceSourceMaterialFractionDescriptionComponent>(value, SubstanceSourceMaterialFractionDescriptionComponent, optErrMsg);
      this.fractionDescription = value;
    } else {
      this.fractionDescription = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSourceMaterialFractionDescriptionComponent value to the `fractionDescription` array property.
   *
   * @param value - the `fractionDescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFractionDescription(value: SubstanceSourceMaterialFractionDescriptionComponent | undefined): this {
    if (isDefined<SubstanceSourceMaterialFractionDescriptionComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.fractionDescription; Provided element is not an instance of SubstanceSourceMaterialFractionDescriptionComponent.`;
      assertFhirType<SubstanceSourceMaterialFractionDescriptionComponent>(value, SubstanceSourceMaterialFractionDescriptionComponent, optErrMsg);
      this.initFractionDescription();
      this.fractionDescription?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `fractionDescription` property exists and has a value; `false` otherwise
   */
  public hasFractionDescription(): boolean {
    return isDefinedList<SubstanceSourceMaterialFractionDescriptionComponent>(this.fractionDescription) && this.fractionDescription.some((item: SubstanceSourceMaterialFractionDescriptionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `fractionDescription` property
   */
  private initFractionDescription(): void {
    if(!this.hasFractionDescription()) {
      this.fractionDescription = [] as SubstanceSourceMaterialFractionDescriptionComponent[];
    }
  }

  /**
   * @returns the `organism` property value as a SubstanceSourceMaterialOrganismComponent object if defined; else an empty SubstanceSourceMaterialOrganismComponent object
   */
  public getOrganism(): SubstanceSourceMaterialOrganismComponent {
    return this.organism ?? new SubstanceSourceMaterialOrganismComponent();
  }

  /**
   * Assigns the provided Organism object value to the `organism` property.
   *
   * @param value - the `organism` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrganism(value: SubstanceSourceMaterialOrganismComponent | undefined): this {
    if (isDefined<SubstanceSourceMaterialOrganismComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism; Provided element is not an instance of SubstanceSourceMaterialOrganismComponent.`;
      assertFhirType<SubstanceSourceMaterialOrganismComponent>(value, SubstanceSourceMaterialOrganismComponent, optErrMsg);
      this.organism = value;
    } else {
      this.organism = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organism` property exists and has a value; `false` otherwise
   */
  public hasOrganism(): boolean {
    return isDefined<SubstanceSourceMaterialOrganismComponent>(this.organism) && !this.organism.isEmpty();
  }

  /**
   * @returns the `partDescription` property value as a SubstanceSourceMaterialPartDescriptionComponent array
   */
  public getPartDescription(): SubstanceSourceMaterialPartDescriptionComponent[] {
    return this.partDescription ?? ([] as SubstanceSourceMaterialPartDescriptionComponent[]);
  }

  /**
   * Assigns the provided SubstanceSourceMaterialPartDescriptionComponent array value to the `partDescription` property.
   *
   * @param value - the `partDescription` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPartDescription(value: SubstanceSourceMaterialPartDescriptionComponent[] | undefined): this {
    if (isDefinedList<SubstanceSourceMaterialPartDescriptionComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.partDescription; Provided value array has an element that is not an instance of SubstanceSourceMaterialPartDescriptionComponent.`;
      assertFhirTypeList<SubstanceSourceMaterialPartDescriptionComponent>(value, SubstanceSourceMaterialPartDescriptionComponent, optErrMsg);
      this.partDescription = value;
    } else {
      this.partDescription = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSourceMaterialPartDescriptionComponent value to the `partDescription` array property.
   *
   * @param value - the `partDescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPartDescription(value: SubstanceSourceMaterialPartDescriptionComponent | undefined): this {
    if (isDefined<SubstanceSourceMaterialPartDescriptionComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.partDescription; Provided element is not an instance of SubstanceSourceMaterialPartDescriptionComponent.`;
      assertFhirType<SubstanceSourceMaterialPartDescriptionComponent>(value, SubstanceSourceMaterialPartDescriptionComponent, optErrMsg);
      this.initPartDescription();
      this.partDescription?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `partDescription` property exists and has a value; `false` otherwise
   */
  public hasPartDescription(): boolean {
    return isDefinedList<SubstanceSourceMaterialPartDescriptionComponent>(this.partDescription) && this.partDescription.some((item: SubstanceSourceMaterialPartDescriptionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `partDescription` property
   */
  private initPartDescription(): void {
    if(!this.hasPartDescription()) {
      this.partDescription = [] as SubstanceSourceMaterialPartDescriptionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSourceMaterial';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sourceMaterialClass,
      this.sourceMaterialType,
      this.sourceMaterialState,
      this.organismId,
      this.organismName,
      this.parentSubstanceId,
      this.parentSubstanceName,
      this.countryOfOrigin,
      this.geographicalLocation,
      this.developmentStage,
      this.fractionDescription,
      this.organism,
      this.partDescription,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSourceMaterial {
    const dest = new SubstanceSourceMaterial();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSourceMaterial): void {
    super.copyValues(dest);
    dest.sourceMaterialClass = this.sourceMaterialClass?.copy();
    dest.sourceMaterialType = this.sourceMaterialType?.copy();
    dest.sourceMaterialState = this.sourceMaterialState?.copy();
    dest.organismId = this.organismId?.copy();
    dest.organismName = this.organismName?.copy();
    const parentSubstanceIdList = copyListValues<Identifier>(this.parentSubstanceId);
    dest.parentSubstanceId = parentSubstanceIdList.length === 0 ? undefined : parentSubstanceIdList;
    const parentSubstanceNameList = copyListValues<StringType>(this.parentSubstanceName);
    dest.parentSubstanceName = parentSubstanceNameList.length === 0 ? undefined : parentSubstanceNameList;
    const countryOfOriginList = copyListValues<CodeableConcept>(this.countryOfOrigin);
    dest.countryOfOrigin = countryOfOriginList.length === 0 ? undefined : countryOfOriginList;
    const geographicalLocationList = copyListValues<StringType>(this.geographicalLocation);
    dest.geographicalLocation = geographicalLocationList.length === 0 ? undefined : geographicalLocationList;
    dest.developmentStage = this.developmentStage?.copy();
    const fractionDescriptionList = copyListValues<SubstanceSourceMaterialFractionDescriptionComponent>(this.fractionDescription);
    dest.fractionDescription = fractionDescriptionList.length === 0 ? undefined : fractionDescriptionList;
    dest.organism = this.organism?.copy();
    const partDescriptionList = copyListValues<SubstanceSourceMaterialPartDescriptionComponent>(this.partDescription);
    dest.partDescription = partDescriptionList.length === 0 ? undefined : partDescriptionList;
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

    if (this.hasSourceMaterialClass()) {
      setFhirComplexJson(this.getSourceMaterialClass(), 'sourceMaterialClass', jsonObj);
    }

    if (this.hasSourceMaterialType()) {
      setFhirComplexJson(this.getSourceMaterialType(), 'sourceMaterialType', jsonObj);
    }

    if (this.hasSourceMaterialState()) {
      setFhirComplexJson(this.getSourceMaterialState(), 'sourceMaterialState', jsonObj);
    }

    if (this.hasOrganismId()) {
      setFhirComplexJson(this.getOrganismId(), 'organismId', jsonObj);
    }

    if (this.hasOrganismNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getOrganismNameElement(), 'organismName', jsonObj);
    }

    if (this.hasParentSubstanceId()) {
      setFhirComplexListJson(this.getParentSubstanceId(), 'parentSubstanceId', jsonObj);
    }

    if (this.hasParentSubstanceName()) {
      setFhirPrimitiveListJson(this.getParentSubstanceNameElement(), 'parentSubstanceName', jsonObj);
    }

    if (this.hasCountryOfOrigin()) {
      setFhirComplexListJson(this.getCountryOfOrigin(), 'countryOfOrigin', jsonObj);
    }

    if (this.hasGeographicalLocation()) {
      setFhirPrimitiveListJson(this.getGeographicalLocationElement(), 'geographicalLocation', jsonObj);
    }

    if (this.hasDevelopmentStage()) {
      setFhirComplexJson(this.getDevelopmentStage(), 'developmentStage', jsonObj);
    }

    if (this.hasFractionDescription()) {
      setFhirBackboneElementListJson(this.getFractionDescription(), 'fractionDescription', jsonObj);
    }

    if (this.hasOrganism()) {
      setFhirBackboneElementJson(this.getOrganism(), 'organism', jsonObj);
    }

    if (this.hasPartDescription()) {
      setFhirBackboneElementListJson(this.getPartDescription(), 'partDescription', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SubstanceSourceMaterialFractionDescriptionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
 * - **Definition:** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSourceMaterial](http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial)
 */
export class SubstanceSourceMaterialFractionDescriptionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSourceMaterialFractionDescriptionComponent` JSON to instantiate the SubstanceSourceMaterialFractionDescriptionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSourceMaterialFractionDescriptionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSourceMaterialFractionDescriptionComponent
   * @returns SubstanceSourceMaterialFractionDescriptionComponent data model or undefined for `SubstanceSourceMaterialFractionDescriptionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSourceMaterialFractionDescriptionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSourceMaterialFractionDescriptionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSourceMaterialFractionDescriptionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'fraction';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setFractionElement(datatype);
    }

    fieldName = 'materialType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaterialType(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceSourceMaterial.fractionDescription.fraction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** This element is capturing information about the fraction of a plant part, or human plasma for fractionation
   * - **Definition:** This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private fraction?: StringType | undefined;

  /**
   * SubstanceSourceMaterial.fractionDescription.materialType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1
   * - **Definition:** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private materialType?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `fraction` property value as a StringType object if defined; else an empty StringType object
   */
  public getFractionElement(): StringType {
    return this.fraction ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `fraction` property.
   *
   * @param element - the `fraction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFractionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.fractionDescription.fraction; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.fraction = element;
    } else {
      this.fraction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fraction` property exists and has a value; `false` otherwise
   */
  public hasFractionElement(): boolean {
    return isDefined<StringType>(this.fraction) && !this.fraction.isEmpty();
  }

  /**
   * @returns the `fraction` property value as a fhirString if defined; else undefined
   */
  public getFraction(): fhirString | undefined {
    return this.fraction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `fraction` property.
   *
   * @param value - the `fraction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFraction(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.fractionDescription.fraction (${String(value)})`;
      this.fraction = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.fraction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fraction` property exists and has a value; `false` otherwise
   */
  public hasFraction(): boolean {
    return this.hasFractionElement();
  }

  /**
   * @returns the `materialType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMaterialType(): CodeableConcept {
    return this.materialType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided MaterialType object value to the `materialType` property.
   *
   * @param value - the `materialType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaterialType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.fractionDescription.materialType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.materialType = value;
    } else {
      this.materialType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `materialType` property exists and has a value; `false` otherwise
   */
  public hasMaterialType(): boolean {
    return isDefined<CodeableConcept>(this.materialType) && !this.materialType.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSourceMaterial.fractionDescription';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.fraction,
      this.materialType,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSourceMaterialFractionDescriptionComponent {
    const dest = new SubstanceSourceMaterialFractionDescriptionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSourceMaterialFractionDescriptionComponent): void {
    super.copyValues(dest);
    dest.fraction = this.fraction?.copy();
    dest.materialType = this.materialType?.copy();
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

    if (this.hasFractionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getFractionElement(), 'fraction', jsonObj);
    }

    if (this.hasMaterialType()) {
      setFhirComplexJson(this.getMaterialType(), 'materialType', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSourceMaterialOrganismComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
 * - **Definition:** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSourceMaterial](http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial)
 */
export class SubstanceSourceMaterialOrganismComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSourceMaterialOrganismComponent` JSON to instantiate the SubstanceSourceMaterialOrganismComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSourceMaterialOrganismComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSourceMaterialOrganismComponent
   * @returns SubstanceSourceMaterialOrganismComponent data model or undefined for `SubstanceSourceMaterialOrganismComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSourceMaterialOrganismComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSourceMaterialOrganismComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSourceMaterialOrganismComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'family';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFamily(datatype);
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

    fieldName = 'intraspecificType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIntraspecificType(datatype);
    }

    fieldName = 'intraspecificDescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setIntraspecificDescriptionElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubstanceSourceMaterialOrganismAuthorComponent | undefined = SubstanceSourceMaterialOrganismAuthorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAuthor(component);
        }
      });
    }

    fieldName = 'hybrid';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceSourceMaterialOrganismHybridComponent | undefined = SubstanceSourceMaterialOrganismHybridComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHybrid(component);
    }

    fieldName = 'organismGeneral';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubstanceSourceMaterialOrganismOrganismGeneralComponent | undefined = SubstanceSourceMaterialOrganismOrganismGeneralComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrganismGeneral(component);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceSourceMaterial.organism.family Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The family of an organism shall be specified
   * - **Definition:** The family of an organism shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private family?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.genus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies
   * - **Definition:** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private genus?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.species Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies
   * - **Definition:** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private species?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.intraspecificType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Intraspecific type of an organism shall be specified
   * - **Definition:** The Intraspecific type of an organism shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intraspecificType?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.intraspecificDescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention
   * - **Definition:** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private intraspecificDescription?: StringType | undefined;

  /**
   * SubstanceSourceMaterial.organism.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** 4.9.13.6.1 Author type (Conditional)
   * - **Definition:** 4.9.13.6.1 Author type (Conditional).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: SubstanceSourceMaterialOrganismAuthorComponent[] | undefined;

  /**
   * SubstanceSourceMaterial.organism.hybrid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
   * - **Definition:** 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private hybrid?: SubstanceSourceMaterialOrganismHybridComponent | undefined;

  /**
   * SubstanceSourceMaterial.organism.organismGeneral Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** 4.9.13.7.1 Kingdom (Conditional)
   * - **Definition:** 4.9.13.7.1 Kingdom (Conditional).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneralComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `family` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFamily(): CodeableConcept {
    return this.family ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Family object value to the `family` property.
   *
   * @param value - the `family` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFamily(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.family; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.family = value;
    } else {
      this.family = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `family` property exists and has a value; `false` otherwise
   */
  public hasFamily(): boolean {
    return isDefined<CodeableConcept>(this.family) && !this.family.isEmpty();
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
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.genus; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.species; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `intraspecificType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getIntraspecificType(): CodeableConcept {
    return this.intraspecificType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided IntraspecificType object value to the `intraspecificType` property.
   *
   * @param value - the `intraspecificType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIntraspecificType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.intraspecificType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.intraspecificType = value;
    } else {
      this.intraspecificType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intraspecificType` property exists and has a value; `false` otherwise
   */
  public hasIntraspecificType(): boolean {
    return isDefined<CodeableConcept>(this.intraspecificType) && !this.intraspecificType.isEmpty();
  }

  /**
   * @returns the `intraspecificDescription` property value as a StringType object if defined; else an empty StringType object
   */
  public getIntraspecificDescriptionElement(): StringType {
    return this.intraspecificDescription ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `intraspecificDescription` property.
   *
   * @param element - the `intraspecificDescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntraspecificDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.intraspecificDescription; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.intraspecificDescription = element;
    } else {
      this.intraspecificDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intraspecificDescription` property exists and has a value; `false` otherwise
   */
  public hasIntraspecificDescriptionElement(): boolean {
    return isDefined<StringType>(this.intraspecificDescription) && !this.intraspecificDescription.isEmpty();
  }

  /**
   * @returns the `intraspecificDescription` property value as a fhirString if defined; else undefined
   */
  public getIntraspecificDescription(): fhirString | undefined {
    return this.intraspecificDescription?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `intraspecificDescription` property.
   *
   * @param value - the `intraspecificDescription` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIntraspecificDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.intraspecificDescription (${String(value)})`;
      this.intraspecificDescription = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.intraspecificDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intraspecificDescription` property exists and has a value; `false` otherwise
   */
  public hasIntraspecificDescription(): boolean {
    return this.hasIntraspecificDescriptionElement();
  }

  /**
   * @returns the `author` property value as a SubstanceSourceMaterialOrganismAuthorComponent array
   */
  public getAuthor(): SubstanceSourceMaterialOrganismAuthorComponent[] {
    return this.author ?? ([] as SubstanceSourceMaterialOrganismAuthorComponent[]);
  }

  /**
   * Assigns the provided SubstanceSourceMaterialOrganismAuthorComponent array value to the `author` property.
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthor(value: SubstanceSourceMaterialOrganismAuthorComponent[] | undefined): this {
    if (isDefinedList<SubstanceSourceMaterialOrganismAuthorComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.author; Provided value array has an element that is not an instance of SubstanceSourceMaterialOrganismAuthorComponent.`;
      assertFhirTypeList<SubstanceSourceMaterialOrganismAuthorComponent>(value, SubstanceSourceMaterialOrganismAuthorComponent, optErrMsg);
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubstanceSourceMaterialOrganismAuthorComponent value to the `author` array property.
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthor(value: SubstanceSourceMaterialOrganismAuthorComponent | undefined): this {
    if (isDefined<SubstanceSourceMaterialOrganismAuthorComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.author; Provided element is not an instance of SubstanceSourceMaterialOrganismAuthorComponent.`;
      assertFhirType<SubstanceSourceMaterialOrganismAuthorComponent>(value, SubstanceSourceMaterialOrganismAuthorComponent, optErrMsg);
      this.initAuthor();
      this.author?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefinedList<SubstanceSourceMaterialOrganismAuthorComponent>(this.author) && this.author.some((item: SubstanceSourceMaterialOrganismAuthorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `author` property
   */
  private initAuthor(): void {
    if(!this.hasAuthor()) {
      this.author = [] as SubstanceSourceMaterialOrganismAuthorComponent[];
    }
  }

  /**
   * @returns the `hybrid` property value as a SubstanceSourceMaterialOrganismHybridComponent object if defined; else an empty SubstanceSourceMaterialOrganismHybridComponent object
   */
  public getHybrid(): SubstanceSourceMaterialOrganismHybridComponent {
    return this.hybrid ?? new SubstanceSourceMaterialOrganismHybridComponent();
  }

  /**
   * Assigns the provided Hybrid object value to the `hybrid` property.
   *
   * @param value - the `hybrid` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHybrid(value: SubstanceSourceMaterialOrganismHybridComponent | undefined): this {
    if (isDefined<SubstanceSourceMaterialOrganismHybridComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid; Provided element is not an instance of SubstanceSourceMaterialOrganismHybridComponent.`;
      assertFhirType<SubstanceSourceMaterialOrganismHybridComponent>(value, SubstanceSourceMaterialOrganismHybridComponent, optErrMsg);
      this.hybrid = value;
    } else {
      this.hybrid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hybrid` property exists and has a value; `false` otherwise
   */
  public hasHybrid(): boolean {
    return isDefined<SubstanceSourceMaterialOrganismHybridComponent>(this.hybrid) && !this.hybrid.isEmpty();
  }

  /**
   * @returns the `organismGeneral` property value as a SubstanceSourceMaterialOrganismOrganismGeneralComponent object if defined; else an empty SubstanceSourceMaterialOrganismOrganismGeneralComponent object
   */
  public getOrganismGeneral(): SubstanceSourceMaterialOrganismOrganismGeneralComponent {
    return this.organismGeneral ?? new SubstanceSourceMaterialOrganismOrganismGeneralComponent();
  }

  /**
   * Assigns the provided OrganismGeneral object value to the `organismGeneral` property.
   *
   * @param value - the `organismGeneral` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrganismGeneral(value: SubstanceSourceMaterialOrganismOrganismGeneralComponent | undefined): this {
    if (isDefined<SubstanceSourceMaterialOrganismOrganismGeneralComponent>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.organismGeneral; Provided element is not an instance of SubstanceSourceMaterialOrganismOrganismGeneralComponent.`;
      assertFhirType<SubstanceSourceMaterialOrganismOrganismGeneralComponent>(value, SubstanceSourceMaterialOrganismOrganismGeneralComponent, optErrMsg);
      this.organismGeneral = value;
    } else {
      this.organismGeneral = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `organismGeneral` property exists and has a value; `false` otherwise
   */
  public hasOrganismGeneral(): boolean {
    return isDefined<SubstanceSourceMaterialOrganismOrganismGeneralComponent>(this.organismGeneral) && !this.organismGeneral.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSourceMaterial.organism';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.family,
      this.genus,
      this.species,
      this.intraspecificType,
      this.intraspecificDescription,
      this.author,
      this.hybrid,
      this.organismGeneral,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSourceMaterialOrganismComponent {
    const dest = new SubstanceSourceMaterialOrganismComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSourceMaterialOrganismComponent): void {
    super.copyValues(dest);
    dest.family = this.family?.copy();
    dest.genus = this.genus?.copy();
    dest.species = this.species?.copy();
    dest.intraspecificType = this.intraspecificType?.copy();
    dest.intraspecificDescription = this.intraspecificDescription?.copy();
    const authorList = copyListValues<SubstanceSourceMaterialOrganismAuthorComponent>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    dest.hybrid = this.hybrid?.copy();
    dest.organismGeneral = this.organismGeneral?.copy();
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

    if (this.hasFamily()) {
      setFhirComplexJson(this.getFamily(), 'family', jsonObj);
    }

    if (this.hasGenus()) {
      setFhirComplexJson(this.getGenus(), 'genus', jsonObj);
    }

    if (this.hasSpecies()) {
      setFhirComplexJson(this.getSpecies(), 'species', jsonObj);
    }

    if (this.hasIntraspecificType()) {
      setFhirComplexJson(this.getIntraspecificType(), 'intraspecificType', jsonObj);
    }

    if (this.hasIntraspecificDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getIntraspecificDescriptionElement(), 'intraspecificDescription', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirBackboneElementListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasHybrid()) {
      setFhirBackboneElementJson(this.getHybrid(), 'hybrid', jsonObj);
    }

    if (this.hasOrganismGeneral()) {
      setFhirBackboneElementJson(this.getOrganismGeneral(), 'organismGeneral', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSourceMaterialOrganismAuthorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** 4.9.13.6.1 Author type (Conditional)
 * - **Definition:** 4.9.13.6.1 Author type (Conditional).
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSourceMaterial](http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial)
 */
export class SubstanceSourceMaterialOrganismAuthorComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSourceMaterialOrganismAuthorComponent` JSON to instantiate the SubstanceSourceMaterialOrganismAuthorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSourceMaterialOrganismAuthorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSourceMaterialOrganismAuthorComponent
   * @returns SubstanceSourceMaterialOrganismAuthorComponent data model or undefined for `SubstanceSourceMaterialOrganismAuthorComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSourceMaterialOrganismAuthorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSourceMaterialOrganismAuthorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSourceMaterialOrganismAuthorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'authorType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthorType(datatype);
    }

    fieldName = 'authorDescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAuthorDescriptionElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceSourceMaterial.organism.author.authorType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name
   * - **Definition:** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authorType?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.author.authorDescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank)
   * - **Definition:** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authorDescription?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `authorType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAuthorType(): CodeableConcept {
    return this.authorType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided AuthorType object value to the `authorType` property.
   *
   * @param value - the `authorType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthorType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.author.authorType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.authorType = value;
    } else {
      this.authorType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorType` property exists and has a value; `false` otherwise
   */
  public hasAuthorType(): boolean {
    return isDefined<CodeableConcept>(this.authorType) && !this.authorType.isEmpty();
  }

  /**
   * @returns the `authorDescription` property value as a StringType object if defined; else an empty StringType object
   */
  public getAuthorDescriptionElement(): StringType {
    return this.authorDescription ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authorDescription` property.
   *
   * @param element - the `authorDescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.author.authorDescription; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.authorDescription = element;
    } else {
      this.authorDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorDescription` property exists and has a value; `false` otherwise
   */
  public hasAuthorDescriptionElement(): boolean {
    return isDefined<StringType>(this.authorDescription) && !this.authorDescription.isEmpty();
  }

  /**
   * @returns the `authorDescription` property value as a fhirString if defined; else undefined
   */
  public getAuthorDescription(): fhirString | undefined {
    return this.authorDescription?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authorDescription` property.
   *
   * @param value - the `authorDescription` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthorDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.author.authorDescription (${String(value)})`;
      this.authorDescription = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.authorDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authorDescription` property exists and has a value; `false` otherwise
   */
  public hasAuthorDescription(): boolean {
    return this.hasAuthorDescriptionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSourceMaterial.organism.author';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.authorType,
      this.authorDescription,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSourceMaterialOrganismAuthorComponent {
    const dest = new SubstanceSourceMaterialOrganismAuthorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSourceMaterialOrganismAuthorComponent): void {
    super.copyValues(dest);
    dest.authorType = this.authorType?.copy();
    dest.authorDescription = this.authorDescription?.copy();
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

    if (this.hasAuthorType()) {
      setFhirComplexJson(this.getAuthorType(), 'authorType', jsonObj);
    }

    if (this.hasAuthorDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAuthorDescriptionElement(), 'authorDescription', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSourceMaterialOrganismHybridComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
 * - **Definition:** 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSourceMaterial](http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial)
 */
export class SubstanceSourceMaterialOrganismHybridComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSourceMaterialOrganismHybridComponent` JSON to instantiate the SubstanceSourceMaterialOrganismHybridComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSourceMaterialOrganismHybridComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSourceMaterialOrganismHybridComponent
   * @returns SubstanceSourceMaterialOrganismHybridComponent data model or undefined for `SubstanceSourceMaterialOrganismHybridComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSourceMaterialOrganismHybridComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSourceMaterialOrganismHybridComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSourceMaterialOrganismHybridComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'maternalOrganismId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMaternalOrganismIdElement(datatype);
    }

    fieldName = 'maternalOrganismName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMaternalOrganismNameElement(datatype);
    }

    fieldName = 'paternalOrganismId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPaternalOrganismIdElement(datatype);
    }

    fieldName = 'paternalOrganismName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPaternalOrganismNameElement(datatype);
    }

    fieldName = 'hybridType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setHybridType(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceSourceMaterial.organism.hybrid.maternalOrganismId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren\'t always known, and it is unlikely that it will be known which is maternal and which is paternal
   * - **Definition:** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren\'t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maternalOrganismId?: StringType | undefined;

  /**
   * SubstanceSourceMaterial.organism.hybrid.maternalOrganismName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren\'t always known, and it is unlikely that it will be known which is maternal and which is paternal
   * - **Definition:** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren\'t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private maternalOrganismName?: StringType | undefined;

  /**
   * SubstanceSourceMaterial.organism.hybrid.paternalOrganismId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary
   * - **Definition:** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private paternalOrganismId?: StringType | undefined;

  /**
   * SubstanceSourceMaterial.organism.hybrid.paternalOrganismName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the paternal species constituting the hybrid organism shall be specified
   * - **Definition:** The name of the paternal species constituting the hybrid organism shall be specified.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private paternalOrganismName?: StringType | undefined;

  /**
   * SubstanceSourceMaterial.organism.hybrid.hybridType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The hybrid type of an organism shall be specified
   * - **Definition:** The hybrid type of an organism shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private hybridType?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `maternalOrganismId` property value as a StringType object if defined; else an empty StringType object
   */
  public getMaternalOrganismIdElement(): StringType {
    return this.maternalOrganismId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `maternalOrganismId` property.
   *
   * @param element - the `maternalOrganismId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaternalOrganismIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.maternalOrganismId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.maternalOrganismId = element;
    } else {
      this.maternalOrganismId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maternalOrganismId` property exists and has a value; `false` otherwise
   */
  public hasMaternalOrganismIdElement(): boolean {
    return isDefined<StringType>(this.maternalOrganismId) && !this.maternalOrganismId.isEmpty();
  }

  /**
   * @returns the `maternalOrganismId` property value as a fhirString if defined; else undefined
   */
  public getMaternalOrganismId(): fhirString | undefined {
    return this.maternalOrganismId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `maternalOrganismId` property.
   *
   * @param value - the `maternalOrganismId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaternalOrganismId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.maternalOrganismId (${String(value)})`;
      this.maternalOrganismId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.maternalOrganismId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maternalOrganismId` property exists and has a value; `false` otherwise
   */
  public hasMaternalOrganismId(): boolean {
    return this.hasMaternalOrganismIdElement();
  }

  /**
   * @returns the `maternalOrganismName` property value as a StringType object if defined; else an empty StringType object
   */
  public getMaternalOrganismNameElement(): StringType {
    return this.maternalOrganismName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `maternalOrganismName` property.
   *
   * @param element - the `maternalOrganismName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaternalOrganismNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.maternalOrganismName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.maternalOrganismName = element;
    } else {
      this.maternalOrganismName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maternalOrganismName` property exists and has a value; `false` otherwise
   */
  public hasMaternalOrganismNameElement(): boolean {
    return isDefined<StringType>(this.maternalOrganismName) && !this.maternalOrganismName.isEmpty();
  }

  /**
   * @returns the `maternalOrganismName` property value as a fhirString if defined; else undefined
   */
  public getMaternalOrganismName(): fhirString | undefined {
    return this.maternalOrganismName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `maternalOrganismName` property.
   *
   * @param value - the `maternalOrganismName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaternalOrganismName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.maternalOrganismName (${String(value)})`;
      this.maternalOrganismName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.maternalOrganismName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maternalOrganismName` property exists and has a value; `false` otherwise
   */
  public hasMaternalOrganismName(): boolean {
    return this.hasMaternalOrganismNameElement();
  }

  /**
   * @returns the `paternalOrganismId` property value as a StringType object if defined; else an empty StringType object
   */
  public getPaternalOrganismIdElement(): StringType {
    return this.paternalOrganismId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `paternalOrganismId` property.
   *
   * @param element - the `paternalOrganismId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaternalOrganismIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.paternalOrganismId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.paternalOrganismId = element;
    } else {
      this.paternalOrganismId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paternalOrganismId` property exists and has a value; `false` otherwise
   */
  public hasPaternalOrganismIdElement(): boolean {
    return isDefined<StringType>(this.paternalOrganismId) && !this.paternalOrganismId.isEmpty();
  }

  /**
   * @returns the `paternalOrganismId` property value as a fhirString if defined; else undefined
   */
  public getPaternalOrganismId(): fhirString | undefined {
    return this.paternalOrganismId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `paternalOrganismId` property.
   *
   * @param value - the `paternalOrganismId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaternalOrganismId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.paternalOrganismId (${String(value)})`;
      this.paternalOrganismId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.paternalOrganismId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paternalOrganismId` property exists and has a value; `false` otherwise
   */
  public hasPaternalOrganismId(): boolean {
    return this.hasPaternalOrganismIdElement();
  }

  /**
   * @returns the `paternalOrganismName` property value as a StringType object if defined; else an empty StringType object
   */
  public getPaternalOrganismNameElement(): StringType {
    return this.paternalOrganismName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `paternalOrganismName` property.
   *
   * @param element - the `paternalOrganismName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaternalOrganismNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.paternalOrganismName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.paternalOrganismName = element;
    } else {
      this.paternalOrganismName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paternalOrganismName` property exists and has a value; `false` otherwise
   */
  public hasPaternalOrganismNameElement(): boolean {
    return isDefined<StringType>(this.paternalOrganismName) && !this.paternalOrganismName.isEmpty();
  }

  /**
   * @returns the `paternalOrganismName` property value as a fhirString if defined; else undefined
   */
  public getPaternalOrganismName(): fhirString | undefined {
    return this.paternalOrganismName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `paternalOrganismName` property.
   *
   * @param value - the `paternalOrganismName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaternalOrganismName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.paternalOrganismName (${String(value)})`;
      this.paternalOrganismName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.paternalOrganismName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paternalOrganismName` property exists and has a value; `false` otherwise
   */
  public hasPaternalOrganismName(): boolean {
    return this.hasPaternalOrganismNameElement();
  }

  /**
   * @returns the `hybridType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getHybridType(): CodeableConcept {
    return this.hybridType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided HybridType object value to the `hybridType` property.
   *
   * @param value - the `hybridType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHybridType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.hybrid.hybridType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.hybridType = value;
    } else {
      this.hybridType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hybridType` property exists and has a value; `false` otherwise
   */
  public hasHybridType(): boolean {
    return isDefined<CodeableConcept>(this.hybridType) && !this.hybridType.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSourceMaterial.organism.hybrid';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.maternalOrganismId,
      this.maternalOrganismName,
      this.paternalOrganismId,
      this.paternalOrganismName,
      this.hybridType,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSourceMaterialOrganismHybridComponent {
    const dest = new SubstanceSourceMaterialOrganismHybridComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSourceMaterialOrganismHybridComponent): void {
    super.copyValues(dest);
    dest.maternalOrganismId = this.maternalOrganismId?.copy();
    dest.maternalOrganismName = this.maternalOrganismName?.copy();
    dest.paternalOrganismId = this.paternalOrganismId?.copy();
    dest.paternalOrganismName = this.paternalOrganismName?.copy();
    dest.hybridType = this.hybridType?.copy();
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

    if (this.hasMaternalOrganismIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMaternalOrganismIdElement(), 'maternalOrganismId', jsonObj);
    }

    if (this.hasMaternalOrganismNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMaternalOrganismNameElement(), 'maternalOrganismName', jsonObj);
    }

    if (this.hasPaternalOrganismIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPaternalOrganismIdElement(), 'paternalOrganismId', jsonObj);
    }

    if (this.hasPaternalOrganismNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPaternalOrganismNameElement(), 'paternalOrganismName', jsonObj);
    }

    if (this.hasHybridType()) {
      setFhirComplexJson(this.getHybridType(), 'hybridType', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSourceMaterialOrganismOrganismGeneralComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** 4.9.13.7.1 Kingdom (Conditional)
 * - **Definition:** 4.9.13.7.1 Kingdom (Conditional).
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSourceMaterial](http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial)
 */
export class SubstanceSourceMaterialOrganismOrganismGeneralComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSourceMaterialOrganismOrganismGeneralComponent` JSON to instantiate the SubstanceSourceMaterialOrganismOrganismGeneralComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSourceMaterialOrganismOrganismGeneralComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSourceMaterialOrganismOrganismGeneralComponent
   * @returns SubstanceSourceMaterialOrganismOrganismGeneralComponent data model or undefined for `SubstanceSourceMaterialOrganismOrganismGeneralComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSourceMaterialOrganismOrganismGeneralComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSourceMaterialOrganismOrganismGeneralComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSourceMaterialOrganismOrganismGeneralComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'kingdom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setKingdom(datatype);
    }

    fieldName = 'phylum';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPhylum(datatype);
    }

    fieldName = 'class';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClass(datatype);
    }

    fieldName = 'order';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOrder(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceSourceMaterial.organism.organismGeneral.kingdom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The kingdom of an organism shall be specified
   * - **Definition:** The kingdom of an organism shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private kingdom?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.organismGeneral.phylum Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The phylum of an organism shall be specified
   * - **Definition:** The phylum of an organism shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private phylum?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.organismGeneral.class Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The class of an organism shall be specified
   * - **Definition:** The class of an organism shall be specified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private class_?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.organism.organismGeneral.order Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The order of an organism shall be specified,
   * - **Definition:** The order of an organism shall be specified,.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private order?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `kingdom` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getKingdom(): CodeableConcept {
    return this.kingdom ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Kingdom object value to the `kingdom` property.
   *
   * @param value - the `kingdom` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setKingdom(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.organismGeneral.kingdom; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.kingdom = value;
    } else {
      this.kingdom = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `kingdom` property exists and has a value; `false` otherwise
   */
  public hasKingdom(): boolean {
    return isDefined<CodeableConcept>(this.kingdom) && !this.kingdom.isEmpty();
  }

  /**
   * @returns the `phylum` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPhylum(): CodeableConcept {
    return this.phylum ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Phylum object value to the `phylum` property.
   *
   * @param value - the `phylum` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhylum(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.organismGeneral.phylum; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.phylum = value;
    } else {
      this.phylum = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `phylum` property exists and has a value; `false` otherwise
   */
  public hasPhylum(): boolean {
    return isDefined<CodeableConcept>(this.phylum) && !this.phylum.isEmpty();
  }

  /**
   * @returns the `class_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getClass(): CodeableConcept {
    return this.class_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Class object value to the `class_` property.
   *
   * @param value - the `class_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClass(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.organismGeneral.class; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.class_ = value;
    } else {
      this.class_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `class_` property exists and has a value; `false` otherwise
   */
  public hasClass(): boolean {
    return isDefined<CodeableConcept>(this.class_) && !this.class_.isEmpty();
  }

  /**
   * @returns the `order` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOrder(): CodeableConcept {
    return this.order ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Order object value to the `order` property.
   *
   * @param value - the `order` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrder(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.organism.organismGeneral.order; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.order = value;
    } else {
      this.order = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `order` property exists and has a value; `false` otherwise
   */
  public hasOrder(): boolean {
    return isDefined<CodeableConcept>(this.order) && !this.order.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSourceMaterial.organism.organismGeneral';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.kingdom,
      this.phylum,
      this.class_,
      this.order,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSourceMaterialOrganismOrganismGeneralComponent {
    const dest = new SubstanceSourceMaterialOrganismOrganismGeneralComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSourceMaterialOrganismOrganismGeneralComponent): void {
    super.copyValues(dest);
    dest.kingdom = this.kingdom?.copy();
    dest.phylum = this.phylum?.copy();
    dest.class_ = this.class_?.copy();
    dest.order = this.order?.copy();
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

    if (this.hasKingdom()) {
      setFhirComplexJson(this.getKingdom(), 'kingdom', jsonObj);
    }

    if (this.hasPhylum()) {
      setFhirComplexJson(this.getPhylum(), 'phylum', jsonObj);
    }

    if (this.hasClass()) {
      setFhirComplexJson(this.getClass(), 'class', jsonObj);
    }

    if (this.hasOrder()) {
      setFhirComplexJson(this.getOrder(), 'order', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubstanceSourceMaterialPartDescriptionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** To do
 * - **Definition:** To do.
 *
 * @category Data Models: Resource
 * @see [FHIR SubstanceSourceMaterial](http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial)
 */
export class SubstanceSourceMaterialPartDescriptionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SubstanceSourceMaterialPartDescriptionComponent` JSON to instantiate the SubstanceSourceMaterialPartDescriptionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubstanceSourceMaterialPartDescriptionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubstanceSourceMaterialPartDescriptionComponent
   * @returns SubstanceSourceMaterialPartDescriptionComponent data model or undefined for `SubstanceSourceMaterialPartDescriptionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubstanceSourceMaterialPartDescriptionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubstanceSourceMaterialPartDescriptionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubstanceSourceMaterialPartDescriptionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'part';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPart(datatype);
    }

    fieldName = 'partLocation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPartLocation(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubstanceSourceMaterial.partDescription.part Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Entity of anatomical origin of source material within an organism
   * - **Definition:** Entity of anatomical origin of source material within an organism.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private part?: CodeableConcept | undefined;

  /**
   * SubstanceSourceMaterial.partDescription.partLocation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply
   * - **Definition:** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partLocation?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid SubstanceSourceMaterial.partDescription.part; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `partLocation` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPartLocation(): CodeableConcept {
    return this.partLocation ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PartLocation object value to the `partLocation` property.
   *
   * @param value - the `partLocation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPartLocation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SubstanceSourceMaterial.partDescription.partLocation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.partLocation = value;
    } else {
      this.partLocation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `partLocation` property exists and has a value; `false` otherwise
   */
  public hasPartLocation(): boolean {
    return isDefined<CodeableConcept>(this.partLocation) && !this.partLocation.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubstanceSourceMaterial.partDescription';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.part,
      this.partLocation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubstanceSourceMaterialPartDescriptionComponent {
    const dest = new SubstanceSourceMaterialPartDescriptionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubstanceSourceMaterialPartDescriptionComponent): void {
    super.copyValues(dest);
    dest.part = this.part?.copy();
    dest.partLocation = this.partLocation?.copy();
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

    if (this.hasPart()) {
      setFhirComplexJson(this.getPart(), 'part', jsonObj);
    }

    if (this.hasPartLocation()) {
      setFhirComplexJson(this.getPartLocation(), 'partLocation', jsonObj);
    }

    return jsonObj;
  }
}
