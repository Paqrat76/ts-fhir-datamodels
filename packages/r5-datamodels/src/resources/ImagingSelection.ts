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
 * ImagingSelection Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ImagingSelection
 * StructureDefinition.name: ImagingSelection
 * StructureDefinition.description: A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  IdType,
  InstantType,
  JSON,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UnsignedIntType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirId,
  fhirIdSchema,
  fhirInstant,
  fhirInstantSchema,
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Coding, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { Imagingselection2DgraphictypeEnum } from '../code-systems/Imagingselection2DgraphictypeEnum';
import { Imagingselection3DgraphictypeEnum } from '../code-systems/Imagingselection3DgraphictypeEnum';
import { ImagingselectionStatusEnum } from '../code-systems/ImagingselectionStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * ImagingSelection Class
 *
 * @remarks
 * A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.
 *
 * **FHIR Specification**
 * - **Short:** A selection of DICOM SOP instances and/or frames
 * - **Definition:** A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingSelection](http://hl7.org/fhir/StructureDefinition/ImagingSelection)
 */
export class ImagingSelection extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, code: CodeableConcept | null = null) {
    super();

    this.imagingselectionStatusEnum = new ImagingselectionStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<ImagingselectionStatusEnum>(
      status,
      ImagingselectionStatusEnum,
      this.imagingselectionStatusEnum,
      'ImagingSelection.status',
    );

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ImagingSelection` JSON to instantiate the ImagingSelection data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingSelection`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingSelection
   * @returns ImagingSelection data model or undefined for `ImagingSelection`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ImagingSelection | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingSelection';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingSelection();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ImagingSelection');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'issued';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setIssuedElement(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ImagingSelectionPerformerComponent | undefined = ImagingSelectionPerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPerformer(component);
          }
        });
      }
    }

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addBasedOn(datatype);
          }
        });
      }
  }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCategory(datatype);
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

    fieldName = 'studyUid';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setStudyUidElement(datatype);
    }

    fieldName = 'derivedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addDerivedFrom(datatype);
          }
        });
      }
  }

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEndpoint(datatype);
          }
        });
      }
  }

    fieldName = 'seriesUid';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setSeriesUidElement(datatype);
    }

    fieldName = 'seriesNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setSeriesNumberElement(datatype);
    }

    fieldName = 'frameOfReferenceUid';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setFrameOfReferenceUidElement(datatype);
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableReference | undefined = CodeableReference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addFocus(datatype);
          }
        });
      }
  }

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ImagingSelectionInstanceComponent | undefined = ImagingSelectionInstanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addInstance(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ImagingSelection.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for Imaging Selection
   * - **Definition:** A unique identifier assigned to this imaging selection.
   * - **Comment:** This is a business identifier, not a resource identifier -- see discussion under [Business Identifiers](https://hl7.org/fhir/resource.html#identifiers). 
   * - **Requirements:** Allows imaging selections to be distinguished and referenced.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ImagingselectionStatus
   *
   * @see {@link ImagingselectionStatusEnum }
   */
  private readonly imagingselectionStatusEnum: ImagingselectionStatusEnum;

  /**
   * ImagingSelection.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** available | entered-in-error | unknown
   * - **Definition:** The current state of the ImagingSelection resource. This is not the status of any ImagingStudy, ServiceRequest, or Task resources associated with the ImagingSelection.
   * - **Comment:** Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ImagingselectionStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ImagingSelection.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subject of the selected instances
   * - **Definition:** The patient, or group of patients, location, device, organization, procedure or practitioner this imaging selection is about and into whose or what record the imaging selection is placed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * ImagingSelection.issued Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date / Time when this imaging selection was created
   * - **Definition:** The date and time this imaging selection was created.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issued?: InstantType | undefined;

  /**
   * ImagingSelection.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Selector of the instances (human or machine)
   * - **Definition:** Selector of the instances - human or machine.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: ImagingSelectionPerformerComponent[] | undefined;

  /**
   * ImagingSelection.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated request
   * - **Definition:** A list of the diagnostic requests that resulted in this imaging selection being performed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/Appointment',
   *       'http://hl7.org/fhir/StructureDefinition/AppointmentResponse',
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * ImagingSelection.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classifies the imaging selection
   * - **Definition:** Classifies the imaging selection.
   * - **Requirements:** Used for filtering what imaging selections are retrieved and displayed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * ImagingSelection.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Imaging Selection purpose text or code
   * - **Definition:** Reason for referencing the selected content.
   * - **Comment:** *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
   * - **Requirements:** Knowing what kind of observation is being made is essential to understanding the observation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * ImagingSelection.studyUid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM Study Instance UID
   * - **Definition:** The Study Instance UID for the DICOM Study from which the images were selected.
   * - **Comment:** See [DICOM PS3.3 C.7.2](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.https://hl7.org/fhir/2.html).
   * - **Requirements:** DICOM Study Instance UID.        Required unless frameOfReferenceUid and imageRegion are present and instance is not present.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private studyUid?: IdType | undefined;

  /**
   * ImagingSelection.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The imaging study from which the imaging selection is derived
   * - **Definition:** The imaging study from which the imaging selection is made.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ImagingStudy',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFrom?: Reference[] | undefined;

  /**
   * ImagingSelection.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The network service providing retrieval for the images referenced in the imaging selection
   * - **Definition:** The network service providing retrieval access to the selected images, frames, etc. See implementation notes for information about using DICOM endpoints.
   * - **Comment:** Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach.
   * - **Requirements:** Access methods for retrieving (e.g., DICOM\'s WADO-URI and WADO-RS) the selected images, frames, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private endpoint?: Reference[] | undefined;

  /**
   * ImagingSelection.seriesUid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM Series Instance UID
   * - **Definition:** The Series Instance UID for the DICOM Series from which the images were selected.
   * - **Comment:** See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.https://hl7.org/fhir/3.html).
   * - **Requirements:** DICOM Series Instance UID.        Required unless frameOfReferenceUid and imageRegion are present and instance is not present.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private seriesUid?: IdType | undefined;

  /**
   * ImagingSelection.seriesNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM Series Number
   * - **Definition:** The Series Number for the DICOM Series from which the images were selected.
   * - **Comment:** See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.https://hl7.org/fhir/3.html).
   * - **Requirements:** DICOM Series Number.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private seriesNumber?: UnsignedIntType | undefined;

  /**
   * ImagingSelection.frameOfReferenceUid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The Frame of Reference UID for the selected images
   * - **Definition:** The Frame of Reference UID identifying the coordinate system that conveys spatial and/or temporal information for the selected images or frames.
   * - **Comment:** See [DICOM PS3.3 C.7.4.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.https://hl7.org/fhir/4.html).
   * - **Requirements:** DICOM Frame of Reference UID.                             Required if studyInstanceUid and seriesInstanceUid are not present.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private frameOfReferenceUid?: IdType | undefined;

  /**
   * ImagingSelection.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body part examined
   * - **Definition:** The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_https://hl7.org/fhir/L.html) for DICOM to SNOMED-CT mappings.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/BodyStructure',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodySite?: CodeableReference | undefined;

  /**
   * ImagingSelection.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Related resource that is the focus for the imaging selection
   * - **Definition:** The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother\'s record.  The focus of an observation could also be an existing condition,  an intervention, the subject\'s diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child\'s tracheostomy tube. In this example, the child is the patient of record and the mother is the focus.
   * - **Comment:** An imaging selection may reference a DICOM resource that itself references other DICOM resources.        e.g. a presentation state references a set of source images or frames.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ImagingSelection',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: Reference[] | undefined;

  /**
   * ImagingSelection.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The selected instances
   * - **Definition:** Each imaging selection includes one or more selected DICOM SOP instances.
   * - **Requirements:** Required if the the selection does not include all instances in the specified series.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instance_?: ImagingSelectionInstanceComponent[] | undefined;

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
      const optErrMsg = `Invalid ImagingSelection.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ImagingSelection.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link ImagingselectionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ImagingselectionStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImagingSelection.status`;
      assertEnumCodeType<ImagingselectionStatusEnum>(enumType, ImagingselectionStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ImagingselectionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ImagingselectionStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.imagingselectionStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ImagingselectionStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ImagingselectionStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ImagingSelection.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.imagingselectionStatusEnum);
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.subject', ['Patient','Group','Device','Location','Organization','Procedure','Practitioner','Medication','Substance','Specimen',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.subject', [
    'Patient',
  
    'Group',
  
    'Device',
  
    'Location',
  
    'Organization',
  
    'Procedure',
  
    'Practitioner',
  
    'Medication',
  
    'Substance',
  
    'Specimen',
  ])
  public setSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
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
   * @returns the `issued` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getIssuedElement(): InstantType {
    return this.issued ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `issued` property.
   *
   * @param element - the `issued` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuedElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.issued; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
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
    return isDefined<InstantType>(this.issued) && !this.issued.isEmpty();
  }

  /**
   * @returns the `issued` property value as a fhirInstant if defined; else undefined
   */
  public getIssued(): fhirInstant | undefined {
    return this.issued?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `issued` property.
   *
   * @param value - the `issued` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssued(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid ImagingSelection.issued (${String(value)})`;
      this.issued = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
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
   * @returns the `performer` property value as a ImagingSelectionPerformerComponent array
   */
  public getPerformer(): ImagingSelectionPerformerComponent[] {
    return this.performer ?? ([] as ImagingSelectionPerformerComponent[]);
  }

  /**
   * Assigns the provided ImagingSelectionPerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: ImagingSelectionPerformerComponent[] | undefined): this {
    if (isDefinedList<ImagingSelectionPerformerComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.performer; Provided value array has an element that is not an instance of ImagingSelectionPerformerComponent.`;
      assertFhirTypeList<ImagingSelectionPerformerComponent>(value, ImagingSelectionPerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImagingSelectionPerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: ImagingSelectionPerformerComponent | undefined): this {
    if (isDefined<ImagingSelectionPerformerComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.performer; Provided element is not an instance of ImagingSelectionPerformerComponent.`;
      assertFhirType<ImagingSelectionPerformerComponent>(value, ImagingSelectionPerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<ImagingSelectionPerformerComponent>(this.performer) && this.performer.some((item: ImagingSelectionPerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as ImagingSelectionPerformerComponent[];
    }
  }

  /**
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.basedOn', ['CarePlan','ServiceRequest','Appointment','AppointmentResponse','Task',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
  
    'Appointment',
  
    'AppointmentResponse',
  
    'Task',
  ])
  public setBasedOn(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basedOn = value;
    } else {
      this.basedOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `basedOn` array property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.basedOn', ['CarePlan','ServiceRequest','Appointment','AppointmentResponse','Task',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
  
    'Appointment',
  
    'AppointmentResponse',
  
    'Task',
  ])
  public addBasedOn(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initBasedOn();
      this.basedOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basedOn` property exists and has a value; `false` otherwise
   */
  public hasBasedOn(): boolean {
    return isDefinedList<Reference>(this.basedOn) && this.basedOn.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `basedOn` property
   */
  private initBasedOn(): void {
    if (!this.hasBasedOn()) {
      this.basedOn = [] as Reference[];
    }
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
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ImagingSelection.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
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
      const optErrMsg = `Invalid ImagingSelection.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ImagingSelection.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `studyUid` property value as a IdType object if defined; else an empty IdType object
   */
  public getStudyUidElement(): IdType {
    return this.studyUid ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `studyUid` property.
   *
   * @param element - the `studyUid` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStudyUidElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.studyUid; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.studyUid = element;
    } else {
      this.studyUid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyUid` property exists and has a value; `false` otherwise
   */
  public hasStudyUidElement(): boolean {
    return isDefined<IdType>(this.studyUid) && !this.studyUid.isEmpty();
  }

  /**
   * @returns the `studyUid` property value as a fhirId if defined; else undefined
   */
  public getStudyUid(): fhirId | undefined {
    return this.studyUid?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `studyUid` property.
   *
   * @param value - the `studyUid` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStudyUid(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImagingSelection.studyUid (${String(value)})`;
      this.studyUid = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.studyUid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyUid` property exists and has a value; `false` otherwise
   */
  public hasStudyUid(): boolean {
    return this.hasStudyUidElement();
  }

  /**
   * @returns the `derivedFrom` property value as a Reference array
   */
  public getDerivedFrom(): Reference[] {
    return this.derivedFrom ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `derivedFrom` property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.derivedFrom', ['ImagingStudy','DocumentReference',])`
   *
   * @param value - the `derivedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.derivedFrom', [
    'ImagingStudy',
  
    'DocumentReference',
  ])
  public setDerivedFrom(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.derivedFrom = value;
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `derivedFrom` array property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.derivedFrom', ['ImagingStudy','DocumentReference',])`
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.derivedFrom', [
    'ImagingStudy',
  
    'DocumentReference',
  ])
  public addDerivedFrom(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDerivedFrom();
      this.derivedFrom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFrom(): boolean {
    return isDefinedList<Reference>(this.derivedFrom) && this.derivedFrom.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `derivedFrom` property
   */
  private initDerivedFrom(): void {
    if (!this.hasDerivedFrom()) {
      this.derivedFrom = [] as Reference[];
    }
  }

  /**
   * @returns the `endpoint` property value as a Reference array
   */
  public getEndpoint(): Reference[] {
    return this.endpoint ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `endpoint` property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.endpoint', [
    'Endpoint',
  ])
  public setEndpoint(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `endpoint` array property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.endpoint', [
    'Endpoint',
  ])
  public addEndpoint(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEndpoint();
      this.endpoint?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefinedList<Reference>(this.endpoint) && this.endpoint.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `endpoint` property
   */
  private initEndpoint(): void {
    if (!this.hasEndpoint()) {
      this.endpoint = [] as Reference[];
    }
  }

  /**
   * @returns the `seriesUid` property value as a IdType object if defined; else an empty IdType object
   */
  public getSeriesUidElement(): IdType {
    return this.seriesUid ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `seriesUid` property.
   *
   * @param element - the `seriesUid` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesUidElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.seriesUid; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.seriesUid = element;
    } else {
      this.seriesUid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesUid` property exists and has a value; `false` otherwise
   */
  public hasSeriesUidElement(): boolean {
    return isDefined<IdType>(this.seriesUid) && !this.seriesUid.isEmpty();
  }

  /**
   * @returns the `seriesUid` property value as a fhirId if defined; else undefined
   */
  public getSeriesUid(): fhirId | undefined {
    return this.seriesUid?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `seriesUid` property.
   *
   * @param value - the `seriesUid` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesUid(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImagingSelection.seriesUid (${String(value)})`;
      this.seriesUid = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.seriesUid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesUid` property exists and has a value; `false` otherwise
   */
  public hasSeriesUid(): boolean {
    return this.hasSeriesUidElement();
  }

  /**
   * @returns the `seriesNumber` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getSeriesNumberElement(): UnsignedIntType {
    return this.seriesNumber ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `seriesNumber` property.
   *
   * @param element - the `seriesNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.seriesNumber; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.seriesNumber = element;
    } else {
      this.seriesNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesNumber` property exists and has a value; `false` otherwise
   */
  public hasSeriesNumberElement(): boolean {
    return isDefined<UnsignedIntType>(this.seriesNumber) && !this.seriesNumber.isEmpty();
  }

  /**
   * @returns the `seriesNumber` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getSeriesNumber(): fhirUnsignedInt | undefined {
    return this.seriesNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `seriesNumber` property.
   *
   * @param value - the `seriesNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSeriesNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ImagingSelection.seriesNumber (${String(value)})`;
      this.seriesNumber = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.seriesNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `seriesNumber` property exists and has a value; `false` otherwise
   */
  public hasSeriesNumber(): boolean {
    return this.hasSeriesNumberElement();
  }

  /**
   * @returns the `frameOfReferenceUid` property value as a IdType object if defined; else an empty IdType object
   */
  public getFrameOfReferenceUidElement(): IdType {
    return this.frameOfReferenceUid ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `frameOfReferenceUid` property.
   *
   * @param element - the `frameOfReferenceUid` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFrameOfReferenceUidElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.frameOfReferenceUid; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.frameOfReferenceUid = element;
    } else {
      this.frameOfReferenceUid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `frameOfReferenceUid` property exists and has a value; `false` otherwise
   */
  public hasFrameOfReferenceUidElement(): boolean {
    return isDefined<IdType>(this.frameOfReferenceUid) && !this.frameOfReferenceUid.isEmpty();
  }

  /**
   * @returns the `frameOfReferenceUid` property value as a fhirId if defined; else undefined
   */
  public getFrameOfReferenceUid(): fhirId | undefined {
    return this.frameOfReferenceUid?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `frameOfReferenceUid` property.
   *
   * @param value - the `frameOfReferenceUid` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFrameOfReferenceUid(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImagingSelection.frameOfReferenceUid (${String(value)})`;
      this.frameOfReferenceUid = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.frameOfReferenceUid = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `frameOfReferenceUid` property exists and has a value; `false` otherwise
   */
  public hasFrameOfReferenceUid(): boolean {
    return this.hasFrameOfReferenceUidElement();
  }

  /**
   * @returns the `bodySite` property value as a CodeableReference object if defined; else an empty CodeableReference object
   */
  public getBodySite(): CodeableReference {
    return this.bodySite ?? new CodeableReference();
  }

  /**
   * Assigns the provided BodySite object value to the `bodySite` property.
   *
   * @param value - the `bodySite` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ImagingSelection.bodySite; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefined<CodeableReference>(this.bodySite) && !this.bodySite.isEmpty();
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
   * @decorator `@ReferenceTargets('ImagingSelection.focus', ['ImagingSelection',])`
   *
   * @param value - the `focus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.focus', [
    'ImagingSelection',
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
   * @decorator `@ReferenceTargets('ImagingSelection.focus', ['ImagingSelection',])`
   *
   * @param value - the `focus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.focus', [
    'ImagingSelection',
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
   * @returns the `instance_` property value as a ImagingSelectionInstanceComponent array
   */
  public getInstance(): ImagingSelectionInstanceComponent[] {
    return this.instance_ ?? ([] as ImagingSelectionInstanceComponent[]);
  }

  /**
   * Assigns the provided ImagingSelectionInstanceComponent array value to the `instance_` property.
   *
   * @param value - the `instance_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInstance(value: ImagingSelectionInstanceComponent[] | undefined): this {
    if (isDefinedList<ImagingSelectionInstanceComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance; Provided value array has an element that is not an instance of ImagingSelectionInstanceComponent.`;
      assertFhirTypeList<ImagingSelectionInstanceComponent>(value, ImagingSelectionInstanceComponent, optErrMsg);
      this.instance_ = value;
    } else {
      this.instance_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImagingSelectionInstanceComponent value to the `instance_` array property.
   *
   * @param value - the `instance_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInstance(value: ImagingSelectionInstanceComponent | undefined): this {
    if (isDefined<ImagingSelectionInstanceComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance; Provided element is not an instance of ImagingSelectionInstanceComponent.`;
      assertFhirType<ImagingSelectionInstanceComponent>(value, ImagingSelectionInstanceComponent, optErrMsg);
      this.initInstance();
      this.instance_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `instance_` property exists and has a value; `false` otherwise
   */
  public hasInstance(): boolean {
    return isDefinedList<ImagingSelectionInstanceComponent>(this.instance_) && this.instance_.some((item: ImagingSelectionInstanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `instance_` property
   */
  private initInstance(): void {
    if(!this.hasInstance()) {
      this.instance_ = [] as ImagingSelectionInstanceComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImagingSelection';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.subject,
      this.issued,
      this.performer,
      this.basedOn,
      this.category,
      this.code,
      this.studyUid,
      this.derivedFrom,
      this.endpoint,
      this.seriesUid,
      this.seriesNumber,
      this.frameOfReferenceUid,
      this.bodySite,
      this.focus,
      this.instance_,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingSelection {
    const dest = new ImagingSelection();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingSelection): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.subject = this.subject?.copy();
    dest.issued = this.issued?.copy();
    const performerList = copyListValues<ImagingSelectionPerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code ? this.code.copy() : null;
    dest.studyUid = this.studyUid?.copy();
    const derivedFromList = copyListValues<Reference>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
    dest.seriesUid = this.seriesUid?.copy();
    dest.seriesNumber = this.seriesNumber?.copy();
    dest.frameOfReferenceUid = this.frameOfReferenceUid?.copy();
    dest.bodySite = this.bodySite?.copy();
    const focusList = copyListValues<Reference>(this.focus);
    dest.focus = focusList.length === 0 ? undefined : focusList;
    const instanceList = copyListValues<ImagingSelectionInstanceComponent>(this.instance_);
    dest.instance_ = instanceList.length === 0 ? undefined : instanceList;
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

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasIssuedElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getIssuedElement(), 'issued', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasStudyUidElement()) {
      setFhirPrimitiveJson<fhirId>(this.getStudyUidElement(), 'studyUid', jsonObj);
    }

    if (this.hasDerivedFrom()) {
      setFhirComplexListJson(this.getDerivedFrom(), 'derivedFrom', jsonObj);
    }

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    if (this.hasSeriesUidElement()) {
      setFhirPrimitiveJson<fhirId>(this.getSeriesUidElement(), 'seriesUid', jsonObj);
    }

    if (this.hasSeriesNumberElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getSeriesNumberElement(), 'seriesNumber', jsonObj);
    }

    if (this.hasFrameOfReferenceUidElement()) {
      setFhirPrimitiveJson<fhirId>(this.getFrameOfReferenceUidElement(), 'frameOfReferenceUid', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexListJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasInstance()) {
      setFhirBackboneElementListJson(this.getInstance(), 'instance', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ImagingSelectionPerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Selector of the instances (human or machine)
 * - **Definition:** Selector of the instances - human or machine.
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingSelection](http://hl7.org/fhir/StructureDefinition/ImagingSelection)
 */
export class ImagingSelectionPerformerComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ImagingSelectionPerformerComponent` JSON to instantiate the ImagingSelectionPerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingSelectionPerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingSelectionPerformerComponent
   * @returns ImagingSelectionPerformerComponent data model or undefined for `ImagingSelectionPerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImagingSelectionPerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingSelectionPerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingSelectionPerformerComponent();

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
      instance.setActor(datatype);
    }

    return instance;
  }

  /**
   * ImagingSelection.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of performer
   * - **Definition:** Distinguishes the type of involvement of the performer.
   * - **Requirements:** Allows disambiguation of the types and involvement of different performers.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * ImagingSelection.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Author (human or machine)
   * - **Definition:** Author - human or machine.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/HealthcareService',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor?: Reference | undefined;

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
      const optErrMsg = `Invalid ImagingSelection.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `actor` property value as a Reference object; else an empty Reference object
   */
  public getActor(): Reference {
    return this.actor ?? new Reference();
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('ImagingSelection.performer.actor', ['Practitioner','PractitionerRole','Device','Organization','CareTeam','Patient','RelatedPerson','HealthcareService',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImagingSelection.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Device',
  
    'Organization',
  
    'CareTeam',
  
    'Patient',
  
    'RelatedPerson',
  
    'HealthcareService',
  ])
  public setActor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.actor = value;
    } else {
      this.actor = undefined;
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
    return 'ImagingSelection.performer';
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
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingSelectionPerformerComponent {
    const dest = new ImagingSelectionPerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingSelectionPerformerComponent): void {
    super.copyValues(dest);
    dest.function_ = this.function_?.copy();
    dest.actor = this.actor?.copy();
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
/**
 * ImagingSelectionInstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The selected instances
 * - **Definition:** Each imaging selection includes one or more selected DICOM SOP instances.
 * - **Requirements:** Required if the the selection does not include all instances in the specified series.
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingSelection](http://hl7.org/fhir/StructureDefinition/ImagingSelection)
 */
export class ImagingSelectionInstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(uid: IdType | fhirId | null = null) {
    super();

    this.uid = null;
    if (isDefined<IdType | fhirId>(uid)) {
      if (uid instanceof PrimitiveType) {
        this.setUidElement(uid);
      } else {
        this.setUid(uid);
      }
    }
  }

  /**
   * Parse the provided `ImagingSelectionInstanceComponent` JSON to instantiate the ImagingSelectionInstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingSelectionInstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingSelectionInstanceComponent
   * @returns ImagingSelectionInstanceComponent data model or undefined for `ImagingSelectionInstanceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImagingSelectionInstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingSelectionInstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingSelectionInstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'uid';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setUid(null);
      } else {
        instance.setUidElement(datatype);
      }
    } else {
      instance.setUid(null);
    }

    fieldName = 'number';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberElement(datatype);
    }

    fieldName = 'sopClass';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSopClass(datatype);
    }

    fieldName = 'subset';
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
            instance.addSubsetElement(datatype);
          }
        });
      }
    }

    fieldName = 'imageRegion2D';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ImagingSelectionInstanceImageRegion2DComponent | undefined = ImagingSelectionInstanceImageRegion2DComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addImageRegion2D(component);
          }
        });
      }
    }

    fieldName = 'imageRegion3D';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ImagingSelectionInstanceImageRegion3DComponent | undefined = ImagingSelectionInstanceImageRegion3DComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addImageRegion3D(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * ImagingSelection.instance.uid Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM SOP Instance UID
   * - **Definition:** The SOP Instance UID for the selected DICOM instance.
   * - **Comment:** See [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.https://hl7.org/fhir/12.html).
   * - **Requirements:** DICOM SOP Instance UID.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private uid: IdType | null;

  /**
   * ImagingSelection.instance.number Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM Instance Number
   * - **Definition:** The Instance Number for the selected DICOM instance.
   * - **Comment:** See [DICOM PS3.3 C.7.6.1](https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.6.html#sect_C.7.6.1).        Note: A multiframe instance has a single instance number with each frame identified by a frame number.
   * - **Requirements:** DICOM Instance Number.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private number?: UnsignedIntType | undefined;

  /**
   * ImagingSelection.instance.sopClass Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** DICOM SOP Class UID
   * - **Definition:** The SOP Class UID for the selected DICOM instance.
   * - **Comment:** See [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.https://hl7.org/fhir/12.html).
   * - **Requirements:** DICOM SOP Class UID.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sopClass?: Coding | undefined;

  /**
   * ImagingSelection.instance.subset Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The selected subset of the SOP Instance
   * - **Definition:** Selected subset of the SOP Instance. The content and format of the subset item is determined by the SOP Class of the selected instance.        May be one of:        - A list of frame numbers selected from a multiframe SOP Instance.        - A list of Content Item Observation UID values selected from a DICOM SR or other structured document SOP Instance.        - A list of segment numbers selected from a segmentation SOP Instance.        - A list of Region of Interest (ROI) numbers selected from a radiotherapy structure set SOP Instance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subset?: StringType[] | undefined;

  /**
   * ImagingSelection.instance.imageRegion2D Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A specific 2D region in a DICOM image / frame
   * - **Definition:** Each imaging selection instance or frame list might includes an image region, specified by a region type and a set of 2D coordinates.        If the parent imagingSelection.instance contains a subset element of type frame, the image region applies to all frames in the subset list.
   * - **Requirements:** Shall not be present if the parent imagingSelection.instance is not an image.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private imageRegion2D?: ImagingSelectionInstanceImageRegion2DComponent[] | undefined;

  /**
   * ImagingSelection.instance.imageRegion3D Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A specific 3D region in a DICOM frame of reference
   * - **Definition:** Each imaging selection might includes a 3D image region, specified by a region type and a set of 3D coordinates.
   * - **Requirements:** Requires that the ImagingSelection.frameOfReferenceUid element is present.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private imageRegion3D?: ImagingSelectionInstanceImageRegion3DComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `uid` property value as a IdType object if defined; else an empty IdType object
   */
  public getUidElement(): IdType {
    return this.uid ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `uid` property.
   *
   * @param element - the `uid` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUidElement(element: IdType | undefined | null): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.uid; Provided value is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.uid = element;
    } else {
      this.uid = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uid` property exists and has a value; `false` otherwise
   */
  public hasUidElement(): boolean {
    return isDefined<IdType>(this.uid) && !this.uid.isEmpty();
  }

  /**
   * @returns the `uid` property value as a fhirId if defined; else null
   */
  public getUid(): fhirId | null {
    if (this.uid?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.uid.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `uid` property.
   *
   * @param value - the `uid` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUid(value: fhirId | undefined | null): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.uid (${String(value)})`;
      this.uid = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.uid = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uid` property exists and has a value; `false` otherwise
   */
  public hasUid(): boolean {
    return this.hasUidElement();
  }

  /**
   * @returns the `number` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberElement(): UnsignedIntType {
    return this.number ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `number` property.
   *
   * @param element - the `number` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.number; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.number = element;
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumberElement(): boolean {
    return isDefined<UnsignedIntType>(this.number) && !this.number.isEmpty();
  }

  /**
   * @returns the `number` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumber(): fhirUnsignedInt | undefined {
    return this.number?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `number` property.
   *
   * @param value - the `number` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.number (${String(value)})`;
      this.number = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.number = undefined;
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
   * @returns the `sopClass` property value as a Coding object if defined; else an empty Coding object
   */
  public getSopClass(): Coding {
    return this.sopClass ?? new Coding();
  }

  /**
   * Assigns the provided SopClass object value to the `sopClass` property.
   *
   * @param value - the `sopClass` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSopClass(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.sopClass; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.sopClass = value;
    } else {
      this.sopClass = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sopClass` property exists and has a value; `false` otherwise
   */
  public hasSopClass(): boolean {
    return isDefined<Coding>(this.sopClass) && !this.sopClass.isEmpty();
  }

  /**
   * @returns the `subset` property value as a StringType array
   */
  public getSubsetElement(): StringType[] {
    return this.subset ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `subset` property.
   *
   * @param element - the `subset` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubsetElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.subset; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.subset = element;
    } else {
      this.subset = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `subset` array property.
   *
   * @param element - the `subset` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSubsetElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.subset; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initSubset();
      this.subset?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `subset` property exists and has a value; `false` otherwise
   */
  public hasSubsetElement(): boolean {
    return isDefinedList<StringType>(this.subset) && this.subset.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `subset` property value as a fhirString array
   */
  public getSubset(): fhirString[] {
    this.initSubset();
    const subsetValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.subset!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        subsetValues.push(value);
      }
    }
    return subsetValues;
  }

  /**
   * Assigns the provided primitive value array to the `subset` property.
   *
   * @param value - the `subset` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubset(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const subsetElements = [] as StringType[];
      for (const subsetValue of value) {
        const optErrMsg = `Invalid ImagingSelection.instance.subset array item (${String(subsetValue)})`;
        const element = new StringType(parseFhirPrimitiveData(subsetValue, fhirStringSchema, optErrMsg));
        subsetElements.push(element);
      }
      this.subset = subsetElements;
    } else {
      this.subset = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `subset` array property.
   *
   * @param value - the `subset` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSubset(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.subset array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initSubset();
      this.addSubsetElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `subset` property exists and has a value; `false` otherwise
   */
  public hasSubset(): boolean {
    return this.hasSubsetElement();
  }

  /**
   * Initialize the `subset` property
   */
  private initSubset(): void {
    if (!this.hasSubset()) {
      this.subset = [] as StringType[];
    }
  }

  /**
   * @returns the `imageRegion2D` property value as a ImagingSelectionInstanceImageRegion2DComponent array
   */
  public getImageRegion2D(): ImagingSelectionInstanceImageRegion2DComponent[] {
    return this.imageRegion2D ?? ([] as ImagingSelectionInstanceImageRegion2DComponent[]);
  }

  /**
   * Assigns the provided ImagingSelectionInstanceImageRegion2DComponent array value to the `imageRegion2D` property.
   *
   * @param value - the `imageRegion2D` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImageRegion2D(value: ImagingSelectionInstanceImageRegion2DComponent[] | undefined): this {
    if (isDefinedList<ImagingSelectionInstanceImageRegion2DComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D; Provided value array has an element that is not an instance of ImagingSelectionInstanceImageRegion2DComponent.`;
      assertFhirTypeList<ImagingSelectionInstanceImageRegion2DComponent>(value, ImagingSelectionInstanceImageRegion2DComponent, optErrMsg);
      this.imageRegion2D = value;
    } else {
      this.imageRegion2D = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImagingSelectionInstanceImageRegion2DComponent value to the `imageRegion2D` array property.
   *
   * @param value - the `imageRegion2D` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addImageRegion2D(value: ImagingSelectionInstanceImageRegion2DComponent | undefined): this {
    if (isDefined<ImagingSelectionInstanceImageRegion2DComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D; Provided element is not an instance of ImagingSelectionInstanceImageRegion2DComponent.`;
      assertFhirType<ImagingSelectionInstanceImageRegion2DComponent>(value, ImagingSelectionInstanceImageRegion2DComponent, optErrMsg);
      this.initImageRegion2D();
      this.imageRegion2D?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `imageRegion2D` property exists and has a value; `false` otherwise
   */
  public hasImageRegion2D(): boolean {
    return isDefinedList<ImagingSelectionInstanceImageRegion2DComponent>(this.imageRegion2D) && this.imageRegion2D.some((item: ImagingSelectionInstanceImageRegion2DComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `imageRegion2D` property
   */
  private initImageRegion2D(): void {
    if(!this.hasImageRegion2D()) {
      this.imageRegion2D = [] as ImagingSelectionInstanceImageRegion2DComponent[];
    }
  }

  /**
   * @returns the `imageRegion3D` property value as a ImagingSelectionInstanceImageRegion3DComponent array
   */
  public getImageRegion3D(): ImagingSelectionInstanceImageRegion3DComponent[] {
    return this.imageRegion3D ?? ([] as ImagingSelectionInstanceImageRegion3DComponent[]);
  }

  /**
   * Assigns the provided ImagingSelectionInstanceImageRegion3DComponent array value to the `imageRegion3D` property.
   *
   * @param value - the `imageRegion3D` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImageRegion3D(value: ImagingSelectionInstanceImageRegion3DComponent[] | undefined): this {
    if (isDefinedList<ImagingSelectionInstanceImageRegion3DComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D; Provided value array has an element that is not an instance of ImagingSelectionInstanceImageRegion3DComponent.`;
      assertFhirTypeList<ImagingSelectionInstanceImageRegion3DComponent>(value, ImagingSelectionInstanceImageRegion3DComponent, optErrMsg);
      this.imageRegion3D = value;
    } else {
      this.imageRegion3D = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImagingSelectionInstanceImageRegion3DComponent value to the `imageRegion3D` array property.
   *
   * @param value - the `imageRegion3D` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addImageRegion3D(value: ImagingSelectionInstanceImageRegion3DComponent | undefined): this {
    if (isDefined<ImagingSelectionInstanceImageRegion3DComponent>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D; Provided element is not an instance of ImagingSelectionInstanceImageRegion3DComponent.`;
      assertFhirType<ImagingSelectionInstanceImageRegion3DComponent>(value, ImagingSelectionInstanceImageRegion3DComponent, optErrMsg);
      this.initImageRegion3D();
      this.imageRegion3D?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `imageRegion3D` property exists and has a value; `false` otherwise
   */
  public hasImageRegion3D(): boolean {
    return isDefinedList<ImagingSelectionInstanceImageRegion3DComponent>(this.imageRegion3D) && this.imageRegion3D.some((item: ImagingSelectionInstanceImageRegion3DComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `imageRegion3D` property
   */
  private initImageRegion3D(): void {
    if(!this.hasImageRegion3D()) {
      this.imageRegion3D = [] as ImagingSelectionInstanceImageRegion3DComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImagingSelection.instance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.uid,
      this.number,
      this.sopClass,
      this.subset,
      this.imageRegion2D,
      this.imageRegion3D,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.uid, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingSelectionInstanceComponent {
    const dest = new ImagingSelectionInstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingSelectionInstanceComponent): void {
    super.copyValues(dest);
    dest.uid = this.uid ? this.uid.copy() : null;
    dest.number = this.number?.copy();
    dest.sopClass = this.sopClass?.copy();
    const subsetList = copyListValues<StringType>(this.subset);
    dest.subset = subsetList.length === 0 ? undefined : subsetList;
    const imageRegion2DList = copyListValues<ImagingSelectionInstanceImageRegion2DComponent>(this.imageRegion2D);
    dest.imageRegion2D = imageRegion2DList.length === 0 ? undefined : imageRegion2DList;
    const imageRegion3DList = copyListValues<ImagingSelectionInstanceImageRegion3DComponent>(this.imageRegion3D);
    dest.imageRegion3D = imageRegion3DList.length === 0 ? undefined : imageRegion3DList;
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

    if (this.hasUidElement()) {
      setFhirPrimitiveJson<fhirId>(this.getUidElement(), 'uid', jsonObj);
    }

    if (this.hasNumberElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberElement(), 'number', jsonObj);
    }

    if (this.hasSopClass()) {
      setFhirComplexJson(this.getSopClass(), 'sopClass', jsonObj);
    }

    if (this.hasSubset()) {
      setFhirPrimitiveListJson(this.getSubsetElement(), 'subset', jsonObj);
    }

    if (this.hasImageRegion2D()) {
      setFhirBackboneElementListJson(this.getImageRegion2D(), 'imageRegion2D', jsonObj);
    }

    if (this.hasImageRegion3D()) {
      setFhirBackboneElementListJson(this.getImageRegion3D(), 'imageRegion3D', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ImagingSelectionInstanceImageRegion2DComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A specific 2D region in a DICOM image / frame
 * - **Definition:** Each imaging selection instance or frame list might includes an image region, specified by a region type and a set of 2D coordinates.        If the parent imagingSelection.instance contains a subset element of type frame, the image region applies to all frames in the subset list.
 * - **Requirements:** Shall not be present if the parent imagingSelection.instance is not an image.
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingSelection](http://hl7.org/fhir/StructureDefinition/ImagingSelection)
 */
export class ImagingSelectionInstanceImageRegion2DComponent extends BackboneElement implements IBackboneElement {
  constructor(regionType: EnumCodeType | CodeType | fhirCode | null = null, coordinate: DecimalType[] | fhirDecimal[] | null = null) {
    super();

    this.imagingselection2DgraphictypeEnum = new Imagingselection2DgraphictypeEnum();

    this.regionType = constructorCodeValueAsEnumCodeType<Imagingselection2DgraphictypeEnum>(
      regionType,
      Imagingselection2DgraphictypeEnum,
      this.imagingselection2DgraphictypeEnum,
      'ImagingSelection.instance.imageRegion2D.regionType',
    );

    this.coordinate = null;
    if (isDefinedList<DecimalType | fhirDecimal>(coordinate)) {
      if (coordinate[0] instanceof PrimitiveType) {
        this.setCoordinateElement(coordinate as DecimalType[]);
      } else {
        this.setCoordinate(coordinate as fhirDecimal[]);
      }
    }
  }

  /**
   * Parse the provided `ImagingSelectionInstanceImageRegion2DComponent` JSON to instantiate the ImagingSelectionInstanceImageRegion2DComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingSelectionInstanceImageRegion2DComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingSelectionInstanceImageRegion2DComponent
   * @returns ImagingSelectionInstanceImageRegion2DComponent data model or undefined for `ImagingSelectionInstanceImageRegion2DComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImagingSelectionInstanceImageRegion2DComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingSelectionInstanceImageRegion2DComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingSelectionInstanceImageRegion2DComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'regionType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRegionType(null);
      } else {
        instance.setRegionTypeElement(datatype);
      }
    } else {
      instance.setRegionType(null);
    }

    fieldName = 'coordinate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setCoordinate(null);
      } else {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype === undefined) {
            instance.setCoordinate(null);
          } else {
            instance.addCoordinateElement(datatype);
          }
        });
      }
    } else {
      instance.setCoordinate(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: Imagingselection2Dgraphictype
   *
   * @see {@link Imagingselection2DgraphictypeEnum }
   */
  private readonly imagingselection2DgraphictypeEnum: Imagingselection2DgraphictypeEnum;

  /**
   * ImagingSelection.instance.imageRegion2D.regionType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** point | polyline | interpolated | circle | ellipse
   * - **Definition:** Specifies the type of image region.
   * - **Comment:** See [DICOM PS3.3 C.10.5.1.2](https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.10.5.html#sect_C.10.5.1.2).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link Imagingselection2DgraphictypeEnum }
   */
  private regionType: EnumCodeType | null;

  /**
   * ImagingSelection.instance.imageRegion2D.coordinate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies the coordinates that define the image region
   * - **Definition:** The coordinates describing the image region. Encoded as a set of (column, row) pairs that denote positions in the selected image / frames specified with sub-pixel resolution.        The origin at the TLHC of the TLHC pixel is 0.0\0.0, the BRHC of the TLHC pixel is 1.0\1.0, and the BRHC of the BRHC pixel is the number of columns\rows in the image / frames. The values must be within the range 0\0 to the number of columns\rows in the image / frames.
   * - **Comment:** For a description of how 2D coordinates are encoded, see [DICOM PS3.3 C.18.6](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.18.https://hl7.org/fhir/6.html).
   * - **Requirements:** The number of values must be a multiple of two.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private coordinate: DecimalType[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `regionType` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link Imagingselection2DgraphictypeEnum }
   */
  public getRegionTypeEnumType(): EnumCodeType | null {
    return this.regionType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `regionType` property.
   *
   * @param enumType - the `regionType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link Imagingselection2DgraphictypeEnum }
   */
  public setRegionTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImagingSelection.instance.imageRegion2D.regionType`;
      assertEnumCodeType<Imagingselection2DgraphictypeEnum>(enumType, Imagingselection2DgraphictypeEnum, errMsgPrefix);
      this.regionType = enumType;
    } else {
      this.regionType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `regionType` property exists and has a value; `false` otherwise
   */
  public hasRegionTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.regionType) && !this.regionType.isEmpty() && this.regionType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `regionType` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link Imagingselection2DgraphictypeEnum }
   */
  public getRegionTypeElement(): CodeType | null {
    if (this.regionType === null) {
      return null;
    }
    return this.regionType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `regionType` property.
   *
   * @param element - the `regionType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link Imagingselection2DgraphictypeEnum }
   */
  public setRegionTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D.regionType; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.regionType = new EnumCodeType(element, this.imagingselection2DgraphictypeEnum);
    } else {
      this.regionType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `regionType` property exists and has a value; `false` otherwise
   */
  public hasRegionTypeElement(): boolean {
    return this.hasRegionTypeEnumType();
  }

  /**
   * @returns the `regionType` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link Imagingselection2DgraphictypeEnum }
   */
  public getRegionType(): fhirCode | null {
    if (this.regionType === null) {
      return null;
    }
    return this.regionType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `regionType` property.
   *
   * @param value - the `regionType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link Imagingselection2DgraphictypeEnum }
   */
  public setRegionType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D.regionType (${String(value)})`;
      this.regionType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.imagingselection2DgraphictypeEnum);
    } else {
      this.regionType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `regionType` property exists and has a value; `false` otherwise
   */
  public hasRegionType(): boolean {
    return this.hasRegionTypeEnumType();
  }

  /**
   * @returns the `coordinate` property value as a DecimalType array
   */
  public getCoordinateElement(): DecimalType[] {
    return this.coordinate ?? ([] as DecimalType[]);
  }

  /**
   * Assigns the provided DecimalType array value to the `coordinate` property.
   *
   * @param element - the `coordinate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCoordinateElement(element: DecimalType[] | undefined | null): this {
     if (isDefinedList<DecimalType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D.coordinate; Provided value array has an element that is not an instance of DecimalType.`;
      assertFhirTypeList<DecimalType>(element, DecimalType, optErrMsg);
      this.coordinate = element;
    } else {
      this.coordinate = null;
    }
    return this;
  }

  /**
   * Add the provided DecimalType value to the `coordinate` array property.
   *
   * @param element - the `coordinate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCoordinateElement(element: DecimalType): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D.coordinate; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.initCoordinate();
      this.coordinate?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `coordinate` property exists and has a value; `false` otherwise
   */
  public hasCoordinateElement(): boolean {
    return isDefinedList<DecimalType>(this.coordinate) && this.coordinate.some((item: DecimalType) => !item.isEmpty());
  }

  /**
   * @returns the `coordinate` property value as a fhirDecimal array
   */
  public getCoordinate(): fhirDecimal[] {
    this.initCoordinate();
    const coordinateValues = [] as fhirDecimal[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.coordinate!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        coordinateValues.push(value);
      }
    }
    return coordinateValues;
  }

  /**
   * Assigns the provided primitive value array to the `coordinate` property.
   *
   * @param value - the `coordinate` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCoordinate(value: fhirDecimal[] | undefined | null): this {
    if (isDefinedList<fhirDecimal>(value)) {
      const coordinateElements = [] as DecimalType[];
      for (const coordinateValue of value) {
        const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D.coordinate array item (${String(coordinateValue)})`;
        const element = new DecimalType(parseFhirPrimitiveData(coordinateValue, fhirDecimalSchema, optErrMsg));
        coordinateElements.push(element);
      }
      this.coordinate = coordinateElements;
    } else {
      this.coordinate = null;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `coordinate` array property.
   *
   * @param value - the `coordinate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCoordinate(value: fhirDecimal): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion2D.coordinate array item (${String(value)})`;
      const element = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
      this.initCoordinate();
      this.addCoordinateElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `coordinate` property exists and has a value; `false` otherwise
   */
  public hasCoordinate(): boolean {
    return this.hasCoordinateElement();
  }

  /**
   * Initialize the `coordinate` property
   */
  private initCoordinate(): void {
    if (!this.hasCoordinate()) {
      this.coordinate = [] as DecimalType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImagingSelection.instance.imageRegion2D';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.regionType,
      this.coordinate,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.regionType, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingSelectionInstanceImageRegion2DComponent {
    const dest = new ImagingSelectionInstanceImageRegion2DComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingSelectionInstanceImageRegion2DComponent): void {
    super.copyValues(dest);
    dest.regionType = this.regionType ? this.regionType.copy() : null;
    const coordinateList = copyListValues<DecimalType>(this.coordinate);
    dest.coordinate = coordinateList.length === 0 ? null : coordinateList;
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

    if (this.hasRegionTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRegionTypeElement()!, 'regionType', jsonObj);
    }

    if (this.hasCoordinateElement()) {
      setFhirPrimitiveListJson(this.getCoordinateElement(), 'coordinate', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ImagingSelectionInstanceImageRegion3DComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A specific 3D region in a DICOM frame of reference
 * - **Definition:** Each imaging selection might includes a 3D image region, specified by a region type and a set of 3D coordinates.
 * - **Requirements:** Requires that the ImagingSelection.frameOfReferenceUid element is present.
 *
 * @category Data Models: Resource
 * @see [FHIR ImagingSelection](http://hl7.org/fhir/StructureDefinition/ImagingSelection)
 */
export class ImagingSelectionInstanceImageRegion3DComponent extends BackboneElement implements IBackboneElement {
  constructor(regionType: EnumCodeType | CodeType | fhirCode | null = null, coordinate: DecimalType[] | fhirDecimal[] | null = null) {
    super();

    this.imagingselection3DgraphictypeEnum = new Imagingselection3DgraphictypeEnum();

    this.regionType = constructorCodeValueAsEnumCodeType<Imagingselection3DgraphictypeEnum>(
      regionType,
      Imagingselection3DgraphictypeEnum,
      this.imagingselection3DgraphictypeEnum,
      'ImagingSelection.instance.imageRegion3D.regionType',
    );

    this.coordinate = null;
    if (isDefinedList<DecimalType | fhirDecimal>(coordinate)) {
      if (coordinate[0] instanceof PrimitiveType) {
        this.setCoordinateElement(coordinate as DecimalType[]);
      } else {
        this.setCoordinate(coordinate as fhirDecimal[]);
      }
    }
  }

  /**
   * Parse the provided `ImagingSelectionInstanceImageRegion3DComponent` JSON to instantiate the ImagingSelectionInstanceImageRegion3DComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImagingSelectionInstanceImageRegion3DComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImagingSelectionInstanceImageRegion3DComponent
   * @returns ImagingSelectionInstanceImageRegion3DComponent data model or undefined for `ImagingSelectionInstanceImageRegion3DComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImagingSelectionInstanceImageRegion3DComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImagingSelectionInstanceImageRegion3DComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImagingSelectionInstanceImageRegion3DComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'regionType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRegionType(null);
      } else {
        instance.setRegionTypeElement(datatype);
      }
    } else {
      instance.setRegionType(null);
    }

    fieldName = 'coordinate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setCoordinate(null);
      } else {
        const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
          classJsonObj,
          sourceField,
          fieldName,
          primitiveJsonType,
        );
        dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
          const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype === undefined) {
            instance.setCoordinate(null);
          } else {
            instance.addCoordinateElement(datatype);
          }
        });
      }
    } else {
      instance.setCoordinate(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: Imagingselection3Dgraphictype
   *
   * @see {@link Imagingselection3DgraphictypeEnum }
   */
  private readonly imagingselection3DgraphictypeEnum: Imagingselection3DgraphictypeEnum;

  /**
   * ImagingSelection.instance.imageRegion3D.regionType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** point | multipoint | polyline | polygon | ellipse | ellipsoid
   * - **Definition:** Specifies the type of image region.
   * - **Comment:** See [DICOM PS3.3 C.18.9.1.2](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.18.9.html#sect_C.18.9.1.2).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link Imagingselection3DgraphictypeEnum }
   */
  private regionType: EnumCodeType | null;

  /**
   * ImagingSelection.instance.imageRegion3D.coordinate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specifies the coordinates that define the image region
   * - **Definition:** The coordinates describing the image region. Encoded as an ordered set of (x,y,z) triplets (in mm and may be negative) that define a region of interest in the patient-relative Reference Coordinate System defined by ImagingSelection.frameOfReferenceUid element.
   * - **Comment:** For a description of how 3D coordinates are encoded, see [DICOM PS3.3 C.18.9](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.18.https://hl7.org/fhir/9.html).
   * - **Requirements:** The number of values must be a multiple of three.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private coordinate: DecimalType[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `regionType` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link Imagingselection3DgraphictypeEnum }
   */
  public getRegionTypeEnumType(): EnumCodeType | null {
    return this.regionType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `regionType` property.
   *
   * @param enumType - the `regionType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link Imagingselection3DgraphictypeEnum }
   */
  public setRegionTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImagingSelection.instance.imageRegion3D.regionType`;
      assertEnumCodeType<Imagingselection3DgraphictypeEnum>(enumType, Imagingselection3DgraphictypeEnum, errMsgPrefix);
      this.regionType = enumType;
    } else {
      this.regionType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `regionType` property exists and has a value; `false` otherwise
   */
  public hasRegionTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.regionType) && !this.regionType.isEmpty() && this.regionType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `regionType` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link Imagingselection3DgraphictypeEnum }
   */
  public getRegionTypeElement(): CodeType | null {
    if (this.regionType === null) {
      return null;
    }
    return this.regionType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `regionType` property.
   *
   * @param element - the `regionType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link Imagingselection3DgraphictypeEnum }
   */
  public setRegionTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D.regionType; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.regionType = new EnumCodeType(element, this.imagingselection3DgraphictypeEnum);
    } else {
      this.regionType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `regionType` property exists and has a value; `false` otherwise
   */
  public hasRegionTypeElement(): boolean {
    return this.hasRegionTypeEnumType();
  }

  /**
   * @returns the `regionType` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link Imagingselection3DgraphictypeEnum }
   */
  public getRegionType(): fhirCode | null {
    if (this.regionType === null) {
      return null;
    }
    return this.regionType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `regionType` property.
   *
   * @param value - the `regionType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link Imagingselection3DgraphictypeEnum }
   */
  public setRegionType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D.regionType (${String(value)})`;
      this.regionType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.imagingselection3DgraphictypeEnum);
    } else {
      this.regionType = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `regionType` property exists and has a value; `false` otherwise
   */
  public hasRegionType(): boolean {
    return this.hasRegionTypeEnumType();
  }

  /**
   * @returns the `coordinate` property value as a DecimalType array
   */
  public getCoordinateElement(): DecimalType[] {
    return this.coordinate ?? ([] as DecimalType[]);
  }

  /**
   * Assigns the provided DecimalType array value to the `coordinate` property.
   *
   * @param element - the `coordinate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCoordinateElement(element: DecimalType[] | undefined | null): this {
     if (isDefinedList<DecimalType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D.coordinate; Provided value array has an element that is not an instance of DecimalType.`;
      assertFhirTypeList<DecimalType>(element, DecimalType, optErrMsg);
      this.coordinate = element;
    } else {
      this.coordinate = null;
    }
    return this;
  }

  /**
   * Add the provided DecimalType value to the `coordinate` array property.
   *
   * @param element - the `coordinate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCoordinateElement(element: DecimalType): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D.coordinate; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.initCoordinate();
      this.coordinate?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `coordinate` property exists and has a value; `false` otherwise
   */
  public hasCoordinateElement(): boolean {
    return isDefinedList<DecimalType>(this.coordinate) && this.coordinate.some((item: DecimalType) => !item.isEmpty());
  }

  /**
   * @returns the `coordinate` property value as a fhirDecimal array
   */
  public getCoordinate(): fhirDecimal[] {
    this.initCoordinate();
    const coordinateValues = [] as fhirDecimal[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.coordinate!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        coordinateValues.push(value);
      }
    }
    return coordinateValues;
  }

  /**
   * Assigns the provided primitive value array to the `coordinate` property.
   *
   * @param value - the `coordinate` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCoordinate(value: fhirDecimal[] | undefined | null): this {
    if (isDefinedList<fhirDecimal>(value)) {
      const coordinateElements = [] as DecimalType[];
      for (const coordinateValue of value) {
        const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D.coordinate array item (${String(coordinateValue)})`;
        const element = new DecimalType(parseFhirPrimitiveData(coordinateValue, fhirDecimalSchema, optErrMsg));
        coordinateElements.push(element);
      }
      this.coordinate = coordinateElements;
    } else {
      this.coordinate = null;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `coordinate` array property.
   *
   * @param value - the `coordinate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCoordinate(value: fhirDecimal): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid ImagingSelection.instance.imageRegion3D.coordinate array item (${String(value)})`;
      const element = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
      this.initCoordinate();
      this.addCoordinateElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `coordinate` property exists and has a value; `false` otherwise
   */
  public hasCoordinate(): boolean {
    return this.hasCoordinateElement();
  }

  /**
   * Initialize the `coordinate` property
   */
  private initCoordinate(): void {
    if (!this.hasCoordinate()) {
      this.coordinate = [] as DecimalType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImagingSelection.instance.imageRegion3D';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.regionType,
      this.coordinate,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.regionType, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImagingSelectionInstanceImageRegion3DComponent {
    const dest = new ImagingSelectionInstanceImageRegion3DComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImagingSelectionInstanceImageRegion3DComponent): void {
    super.copyValues(dest);
    dest.regionType = this.regionType ? this.regionType.copy() : null;
    const coordinateList = copyListValues<DecimalType>(this.coordinate);
    dest.coordinate = coordinateList.length === 0 ? null : coordinateList;
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

    if (this.hasRegionTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRegionTypeElement()!, 'regionType', jsonObj);
    }

    if (this.hasCoordinateElement()) {
      setFhirPrimitiveListJson(this.getCoordinateElement(), 'coordinate', jsonObj);
    }

    return jsonObj;
  }
}
