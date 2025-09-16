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
 * HealthcareService Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/HealthcareService
 * StructureDefinition.name: HealthcareService
 * StructureDefinition.description: The details of a healthcare service available at a location.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  TimeType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  fhirTime,
  fhirTimeSchema,
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
import { Attachment, CodeableConcept, ContactPoint, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { DaysOfWeekEnum } from '../code-systems/DaysOfWeekEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * HealthcareService Class
 *
 * @remarks
 * The details of a healthcare service available at a location.
 *
 * **FHIR Specification**
 * - **Short:** The details of a healthcare service available at a location
 * - **Definition:** The details of a healthcare service available at a location.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR HealthcareService](http://hl7.org/fhir/StructureDefinition/HealthcareService)
 */
export class HealthcareService extends DomainResource implements IDomainResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `HealthcareService` JSON to instantiate the HealthcareService data model.
   *
   * @param sourceJson - JSON representing FHIR `HealthcareService`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to HealthcareService
   * @returns HealthcareService data model or undefined for `HealthcareService`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): HealthcareService | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'HealthcareService';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new HealthcareService();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'HealthcareService');
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

    fieldName = 'active';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActiveElement(datatype);
    }

    fieldName = 'providedBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProvidedBy(datatype);
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

    fieldName = 'specialty';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addSpecialty(datatype);
          }
        });
      }
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addLocation(datatype);
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

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'extraDetails';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setExtraDetailsElement(datatype);
    }

    fieldName = 'photo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Attachment | undefined = Attachment.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPhoto(datatype);
    }

    fieldName = 'telecom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactPoint | undefined = ContactPoint.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addTelecom(datatype);
          }
        });
      }
    }

    fieldName = 'coverageArea';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCoverageArea(datatype);
          }
        });
      }
  }

    fieldName = 'serviceProvisionCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addServiceProvisionCode(datatype);
          }
        });
      }
    }

    fieldName = 'eligibility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: HealthcareServiceEligibilityComponent | undefined = HealthcareServiceEligibilityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addEligibility(component);
          }
        });
      }
    }

    fieldName = 'program';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addProgram(datatype);
          }
        });
      }
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCharacteristic(datatype);
          }
        });
      }
    }

    fieldName = 'communication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCommunication(datatype);
          }
        });
      }
    }

    fieldName = 'referralMethod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReferralMethod(datatype);
          }
        });
      }
    }

    fieldName = 'appointmentRequired';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAppointmentRequiredElement(datatype);
    }

    fieldName = 'availableTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: HealthcareServiceAvailableTimeComponent | undefined = HealthcareServiceAvailableTimeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAvailableTime(component);
          }
        });
      }
    }

    fieldName = 'notAvailable';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: HealthcareServiceNotAvailableComponent | undefined = HealthcareServiceNotAvailableComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addNotAvailable(component);
          }
        });
      }
    }

    fieldName = 'availabilityExceptions';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAvailabilityExceptionsElement(datatype);
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

    return instance;
  }

  /**
   * HealthcareService.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifiers for this item
   * - **Definition:** External identifiers for this item.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * HealthcareService.active Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether this HealthcareService record is in active use
   * - **Definition:** This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this.
   * - **Comment:** This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid
   * - **isSummary:** true
   */
  private active?: BooleanType | undefined;

  /**
   * HealthcareService.providedBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that provides this service
   * - **Definition:** The organization that provides this healthcare service.
   * - **Comment:** This property is recommended to be the same as the Location\'s managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private providedBy?: Reference | undefined;

  /**
   * HealthcareService.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Broad category of service being performed or delivered
   * - **Definition:** Identifies the broad category of service being performed or delivered.
   * - **Comment:** Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of service that may be delivered or performed
   * - **Definition:** The specific type of service that may be delivered or performed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.specialty Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specialties handled by the HealthcareService
   * - **Definition:** Collection of specialties handled by the service site. This is more of a medical term.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specialty?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location(s) where service may be provided
   * - **Definition:** The location(s) where this healthcare service may be provided.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: Reference[] | undefined;

  /**
   * HealthcareService.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of service as presented to a consumer while searching
   * - **Definition:** Further description of the service as it would be presented to a consumer while searching.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * HealthcareService.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional description and/or any specific issues not covered elsewhere
   * - **Definition:** Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
   * - **Comment:** Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private comment?: StringType | undefined;

  /**
   * HealthcareService.extraDetails Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extra details about the service that can\'t be placed in the other fields
   * - **Definition:** Extra details about the service that can\'t be placed in the other fields.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private extraDetails?: MarkdownType | undefined;

  /**
   * HealthcareService.photo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Facilitates quick identification of the service
   * - **Definition:** If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   * - **FHIR Type:** `Attachment`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private photo?: Attachment | undefined;

  /**
   * HealthcareService.telecom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contacts related to the healthcare service
   * - **Definition:** List of contacts related to this specific healthcare service.
   * - **Comment:** If this is empty, then refer to the location\'s contacts.
   * - **FHIR Type:** `ContactPoint`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private telecom?: ContactPoint[] | undefined;

  /**
   * HealthcareService.coverageArea Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location(s) service is intended for/available to
   * - **Definition:** The location(s) that this service is available to (not where the service is provided).
   * - **Comment:** The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private coverageArea?: Reference[] | undefined;

  /**
   * HealthcareService.serviceProvisionCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Conditions under which service is available/offered
   * - **Definition:** The code(s) that detail the conditions under which the healthcare service is available/offered.
   * - **Comment:** The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private serviceProvisionCode?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.eligibility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific eligibility requirements required to use the service
   * - **Definition:** Does this service have specific eligibility requirements that need to be met in order to use the service?
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private eligibility?: HealthcareServiceEligibilityComponent[] | undefined;

  /**
   * HealthcareService.program Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Programs that this service is applicable to
   * - **Definition:** Programs that this service is applicable to.
   * - **Comment:** Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ....
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private program?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Collection of characteristics (attributes)
   * - **Definition:** Collection of characteristics (attributes).
   * - **Comment:** These could be such things as is wheelchair accessible.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private characteristic?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.communication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The language that this service is offered in
   * - **Definition:** Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used.
   * - **Comment:** When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private communication?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.referralMethod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Ways that the service accepts referrals
   * - **Definition:** Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referralMethod?: CodeableConcept[] | undefined;

  /**
   * HealthcareService.appointmentRequired Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If an appointment is required for access to this service
   * - **Definition:** Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private appointmentRequired?: BooleanType | undefined;

  /**
   * HealthcareService.availableTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Times the Service Site is available
   * - **Definition:** A collection of times that the Service Site is available.
   * - **Comment:** More detailed availability information may be provided in associated Schedule/Slot resources.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private availableTime?: HealthcareServiceAvailableTimeComponent[] | undefined;

  /**
   * HealthcareService.notAvailable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Not available during this time due to provided reason
   * - **Definition:** The HealthcareService is not available during this period of time due to the provided reason.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private notAvailable?: HealthcareServiceNotAvailableComponent[] | undefined;

  /**
   * HealthcareService.availabilityExceptions Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of availability exceptions
   * - **Definition:** A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private availabilityExceptions?: StringType | undefined;

  /**
   * HealthcareService.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Technical endpoints providing access to electronic services operated for the healthcare service
   * - **Definition:** Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Endpoint',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endpoint?: Reference[] | undefined;

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
      const optErrMsg = `Invalid HealthcareService.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid HealthcareService.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `active` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getActiveElement(): BooleanType {
    return this.active ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `active` property.
   *
   * @param element - the `active` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid HealthcareService.active; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.active = element;
    } else {
      this.active = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `active` property exists and has a value; `false` otherwise
   */
  public hasActiveElement(): boolean {
    return isDefined<BooleanType>(this.active) && !this.active.isEmpty();
  }

  /**
   * @returns the `active` property value as a fhirBoolean if defined; else undefined
   */
  public getActive(): fhirBoolean | undefined {
    return this.active?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `active` property.
   *
   * @param value - the `active` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid HealthcareService.active (${String(value)})`;
      this.active = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.active = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `active` property exists and has a value; `false` otherwise
   */
  public hasActive(): boolean {
    return this.hasActiveElement();
  }

  /**
   * @returns the `providedBy` property value as a Reference object; else an empty Reference object
   */
  public getProvidedBy(): Reference {
    return this.providedBy ?? new Reference();
  }

  /**
   * Assigns the provided ProvidedBy object value to the `providedBy` property.
   *
   * @decorator `@ReferenceTargets('HealthcareService.providedBy', ['Organization',])`
   *
   * @param value - the `providedBy` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('HealthcareService.providedBy', [
    'Organization',
  ])
  public setProvidedBy(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.providedBy = value;
    } else {
      this.providedBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `providedBy` property exists and has a value; `false` otherwise
   */
  public hasProvidedBy(): boolean {
    return isDefined<Reference>(this.providedBy) && !this.providedBy.isEmpty();
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
      const optErrMsg = `Invalid HealthcareService.category; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid HealthcareService.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid HealthcareService.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid HealthcareService.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `specialty` property value as a CodeableConcept array
   */
  public getSpecialty(): CodeableConcept[] {
    return this.specialty ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `specialty` property.
   *
   * @param value - the `specialty` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecialty(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.specialty; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.specialty = value;
    } else {
      this.specialty = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `specialty` array property.
   *
   * @param value - the `specialty` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSpecialty(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.specialty; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSpecialty();
      this.specialty?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specialty` property exists and has a value; `false` otherwise
   */
  public hasSpecialty(): boolean {
    return isDefinedList<CodeableConcept>(this.specialty) && this.specialty.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `specialty` property
   */
  private initSpecialty(): void {
    if(!this.hasSpecialty()) {
      this.specialty = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `location` property value as a Reference array
   */
  public getLocation(): Reference[] {
    return this.location ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `location` property.
   *
   * @decorator `@ReferenceTargets('HealthcareService.location', ['Location',])`
   *
   * @param value - the `location` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('HealthcareService.location', [
    'Location',
  ])
  public setLocation(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `location` array property.
   *
   * @decorator `@ReferenceTargets('HealthcareService.location', ['Location',])`
   *
   * @param value - the `location` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('HealthcareService.location', [
    'Location',
  ])
  public addLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initLocation();
      this.location?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefinedList<Reference>(this.location) && this.location.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `location` property
   */
  private initLocation(): void {
    if (!this.hasLocation()) {
      this.location = [] as Reference[];
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
      const optErrMsg = `Invalid HealthcareService.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid HealthcareService.name (${String(value)})`;
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
      const optErrMsg = `Invalid HealthcareService.comment; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid HealthcareService.comment (${String(value)})`;
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
   * @returns the `extraDetails` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getExtraDetailsElement(): MarkdownType {
    return this.extraDetails ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `extraDetails` property.
   *
   * @param element - the `extraDetails` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExtraDetailsElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid HealthcareService.extraDetails; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.extraDetails = element;
    } else {
      this.extraDetails = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `extraDetails` property exists and has a value; `false` otherwise
   */
  public hasExtraDetailsElement(): boolean {
    return isDefined<MarkdownType>(this.extraDetails) && !this.extraDetails.isEmpty();
  }

  /**
   * @returns the `extraDetails` property value as a fhirMarkdown if defined; else undefined
   */
  public getExtraDetails(): fhirMarkdown | undefined {
    return this.extraDetails?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `extraDetails` property.
   *
   * @param value - the `extraDetails` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExtraDetails(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid HealthcareService.extraDetails (${String(value)})`;
      this.extraDetails = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.extraDetails = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `extraDetails` property exists and has a value; `false` otherwise
   */
  public hasExtraDetails(): boolean {
    return this.hasExtraDetailsElement();
  }

  /**
   * @returns the `photo` property value as a Attachment object if defined; else an empty Attachment object
   */
  public getPhoto(): Attachment {
    return this.photo ?? new Attachment();
  }

  /**
   * Assigns the provided Photo object value to the `photo` property.
   *
   * @param value - the `photo` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhoto(value: Attachment | undefined): this {
    if (isDefined<Attachment>(value)) {
      const optErrMsg = `Invalid HealthcareService.photo; Provided element is not an instance of Attachment.`;
      assertFhirType<Attachment>(value, Attachment, optErrMsg);
      this.photo = value;
    } else {
      this.photo = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `photo` property exists and has a value; `false` otherwise
   */
  public hasPhoto(): boolean {
    return isDefined<Attachment>(this.photo) && !this.photo.isEmpty();
  }

  /**
   * @returns the `telecom` property value as a ContactPoint array
   */
  public getTelecom(): ContactPoint[] {
    return this.telecom ?? ([] as ContactPoint[]);
  }

  /**
   * Assigns the provided ContactPoint array value to the `telecom` property.
   *
   * @param value - the `telecom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTelecom(value: ContactPoint[] | undefined): this {
    if (isDefinedList<ContactPoint>(value)) {
      const optErrMsg = `Invalid HealthcareService.telecom; Provided value array has an element that is not an instance of ContactPoint.`;
      assertFhirTypeList<ContactPoint>(value, ContactPoint, optErrMsg);
      this.telecom = value;
    } else {
      this.telecom = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactPoint value to the `telecom` array property.
   *
   * @param value - the `telecom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTelecom(value: ContactPoint | undefined): this {
    if (isDefined<ContactPoint>(value)) {
      const optErrMsg = `Invalid HealthcareService.telecom; Provided element is not an instance of ContactPoint.`;
      assertFhirType<ContactPoint>(value, ContactPoint, optErrMsg);
      this.initTelecom();
      this.telecom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `telecom` property exists and has a value; `false` otherwise
   */
  public hasTelecom(): boolean {
    return isDefinedList<ContactPoint>(this.telecom) && this.telecom.some((item: ContactPoint) => !item.isEmpty());
  }

  /**
   * Initialize the `telecom` property
   */
  private initTelecom(): void {
    if(!this.hasTelecom()) {
      this.telecom = [] as ContactPoint[];
    }
  }

  /**
   * @returns the `coverageArea` property value as a Reference array
   */
  public getCoverageArea(): Reference[] {
    return this.coverageArea ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `coverageArea` property.
   *
   * @decorator `@ReferenceTargets('HealthcareService.coverageArea', ['Location',])`
   *
   * @param value - the `coverageArea` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('HealthcareService.coverageArea', [
    'Location',
  ])
  public setCoverageArea(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.coverageArea = value;
    } else {
      this.coverageArea = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `coverageArea` array property.
   *
   * @decorator `@ReferenceTargets('HealthcareService.coverageArea', ['Location',])`
   *
   * @param value - the `coverageArea` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('HealthcareService.coverageArea', [
    'Location',
  ])
  public addCoverageArea(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initCoverageArea();
      this.coverageArea?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `coverageArea` property exists and has a value; `false` otherwise
   */
  public hasCoverageArea(): boolean {
    return isDefinedList<Reference>(this.coverageArea) && this.coverageArea.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `coverageArea` property
   */
  private initCoverageArea(): void {
    if (!this.hasCoverageArea()) {
      this.coverageArea = [] as Reference[];
    }
  }

  /**
   * @returns the `serviceProvisionCode` property value as a CodeableConcept array
   */
  public getServiceProvisionCode(): CodeableConcept[] {
    return this.serviceProvisionCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `serviceProvisionCode` property.
   *
   * @param value - the `serviceProvisionCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setServiceProvisionCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.serviceProvisionCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.serviceProvisionCode = value;
    } else {
      this.serviceProvisionCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `serviceProvisionCode` array property.
   *
   * @param value - the `serviceProvisionCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addServiceProvisionCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.serviceProvisionCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initServiceProvisionCode();
      this.serviceProvisionCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `serviceProvisionCode` property exists and has a value; `false` otherwise
   */
  public hasServiceProvisionCode(): boolean {
    return isDefinedList<CodeableConcept>(this.serviceProvisionCode) && this.serviceProvisionCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `serviceProvisionCode` property
   */
  private initServiceProvisionCode(): void {
    if(!this.hasServiceProvisionCode()) {
      this.serviceProvisionCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `eligibility` property value as a HealthcareServiceEligibilityComponent array
   */
  public getEligibility(): HealthcareServiceEligibilityComponent[] {
    return this.eligibility ?? ([] as HealthcareServiceEligibilityComponent[]);
  }

  /**
   * Assigns the provided HealthcareServiceEligibilityComponent array value to the `eligibility` property.
   *
   * @param value - the `eligibility` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEligibility(value: HealthcareServiceEligibilityComponent[] | undefined): this {
    if (isDefinedList<HealthcareServiceEligibilityComponent>(value)) {
      const optErrMsg = `Invalid HealthcareService.eligibility; Provided value array has an element that is not an instance of HealthcareServiceEligibilityComponent.`;
      assertFhirTypeList<HealthcareServiceEligibilityComponent>(value, HealthcareServiceEligibilityComponent, optErrMsg);
      this.eligibility = value;
    } else {
      this.eligibility = undefined;
    }
    return this;
  }

  /**
   * Add the provided HealthcareServiceEligibilityComponent value to the `eligibility` array property.
   *
   * @param value - the `eligibility` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEligibility(value: HealthcareServiceEligibilityComponent | undefined): this {
    if (isDefined<HealthcareServiceEligibilityComponent>(value)) {
      const optErrMsg = `Invalid HealthcareService.eligibility; Provided element is not an instance of HealthcareServiceEligibilityComponent.`;
      assertFhirType<HealthcareServiceEligibilityComponent>(value, HealthcareServiceEligibilityComponent, optErrMsg);
      this.initEligibility();
      this.eligibility?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `eligibility` property exists and has a value; `false` otherwise
   */
  public hasEligibility(): boolean {
    return isDefinedList<HealthcareServiceEligibilityComponent>(this.eligibility) && this.eligibility.some((item: HealthcareServiceEligibilityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `eligibility` property
   */
  private initEligibility(): void {
    if(!this.hasEligibility()) {
      this.eligibility = [] as HealthcareServiceEligibilityComponent[];
    }
  }

  /**
   * @returns the `program` property value as a CodeableConcept array
   */
  public getProgram(): CodeableConcept[] {
    return this.program ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `program` property.
   *
   * @param value - the `program` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgram(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.program; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.program = value;
    } else {
      this.program = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `program` array property.
   *
   * @param value - the `program` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgram(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.program; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initProgram();
      this.program?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `program` property exists and has a value; `false` otherwise
   */
  public hasProgram(): boolean {
    return isDefinedList<CodeableConcept>(this.program) && this.program.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `program` property
   */
  private initProgram(): void {
    if(!this.hasProgram()) {
      this.program = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `characteristic` property value as a CodeableConcept array
   */
  public getCharacteristic(): CodeableConcept[] {
    return this.characteristic ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.characteristic; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.characteristic; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<CodeableConcept>(this.characteristic) && this.characteristic.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `communication` property value as a CodeableConcept array
   */
  public getCommunication(): CodeableConcept[] {
    return this.communication ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `communication` property.
   *
   * @param value - the `communication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCommunication(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.communication; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.communication = value;
    } else {
      this.communication = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `communication` array property.
   *
   * @param value - the `communication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCommunication(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.communication; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCommunication();
      this.communication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `communication` property exists and has a value; `false` otherwise
   */
  public hasCommunication(): boolean {
    return isDefinedList<CodeableConcept>(this.communication) && this.communication.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `communication` property
   */
  private initCommunication(): void {
    if(!this.hasCommunication()) {
      this.communication = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `referralMethod` property value as a CodeableConcept array
   */
  public getReferralMethod(): CodeableConcept[] {
    return this.referralMethod ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `referralMethod` property.
   *
   * @param value - the `referralMethod` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferralMethod(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.referralMethod; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.referralMethod = value;
    } else {
      this.referralMethod = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `referralMethod` array property.
   *
   * @param value - the `referralMethod` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReferralMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid HealthcareService.referralMethod; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReferralMethod();
      this.referralMethod?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referralMethod` property exists and has a value; `false` otherwise
   */
  public hasReferralMethod(): boolean {
    return isDefinedList<CodeableConcept>(this.referralMethod) && this.referralMethod.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `referralMethod` property
   */
  private initReferralMethod(): void {
    if(!this.hasReferralMethod()) {
      this.referralMethod = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `appointmentRequired` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAppointmentRequiredElement(): BooleanType {
    return this.appointmentRequired ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `appointmentRequired` property.
   *
   * @param element - the `appointmentRequired` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAppointmentRequiredElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid HealthcareService.appointmentRequired; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.appointmentRequired = element;
    } else {
      this.appointmentRequired = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `appointmentRequired` property exists and has a value; `false` otherwise
   */
  public hasAppointmentRequiredElement(): boolean {
    return isDefined<BooleanType>(this.appointmentRequired) && !this.appointmentRequired.isEmpty();
  }

  /**
   * @returns the `appointmentRequired` property value as a fhirBoolean if defined; else undefined
   */
  public getAppointmentRequired(): fhirBoolean | undefined {
    return this.appointmentRequired?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `appointmentRequired` property.
   *
   * @param value - the `appointmentRequired` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAppointmentRequired(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid HealthcareService.appointmentRequired (${String(value)})`;
      this.appointmentRequired = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.appointmentRequired = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `appointmentRequired` property exists and has a value; `false` otherwise
   */
  public hasAppointmentRequired(): boolean {
    return this.hasAppointmentRequiredElement();
  }

  /**
   * @returns the `availableTime` property value as a HealthcareServiceAvailableTimeComponent array
   */
  public getAvailableTime(): HealthcareServiceAvailableTimeComponent[] {
    return this.availableTime ?? ([] as HealthcareServiceAvailableTimeComponent[]);
  }

  /**
   * Assigns the provided HealthcareServiceAvailableTimeComponent array value to the `availableTime` property.
   *
   * @param value - the `availableTime` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAvailableTime(value: HealthcareServiceAvailableTimeComponent[] | undefined): this {
    if (isDefinedList<HealthcareServiceAvailableTimeComponent>(value)) {
      const optErrMsg = `Invalid HealthcareService.availableTime; Provided value array has an element that is not an instance of HealthcareServiceAvailableTimeComponent.`;
      assertFhirTypeList<HealthcareServiceAvailableTimeComponent>(value, HealthcareServiceAvailableTimeComponent, optErrMsg);
      this.availableTime = value;
    } else {
      this.availableTime = undefined;
    }
    return this;
  }

  /**
   * Add the provided HealthcareServiceAvailableTimeComponent value to the `availableTime` array property.
   *
   * @param value - the `availableTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAvailableTime(value: HealthcareServiceAvailableTimeComponent | undefined): this {
    if (isDefined<HealthcareServiceAvailableTimeComponent>(value)) {
      const optErrMsg = `Invalid HealthcareService.availableTime; Provided element is not an instance of HealthcareServiceAvailableTimeComponent.`;
      assertFhirType<HealthcareServiceAvailableTimeComponent>(value, HealthcareServiceAvailableTimeComponent, optErrMsg);
      this.initAvailableTime();
      this.availableTime?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `availableTime` property exists and has a value; `false` otherwise
   */
  public hasAvailableTime(): boolean {
    return isDefinedList<HealthcareServiceAvailableTimeComponent>(this.availableTime) && this.availableTime.some((item: HealthcareServiceAvailableTimeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `availableTime` property
   */
  private initAvailableTime(): void {
    if(!this.hasAvailableTime()) {
      this.availableTime = [] as HealthcareServiceAvailableTimeComponent[];
    }
  }

  /**
   * @returns the `notAvailable` property value as a HealthcareServiceNotAvailableComponent array
   */
  public getNotAvailable(): HealthcareServiceNotAvailableComponent[] {
    return this.notAvailable ?? ([] as HealthcareServiceNotAvailableComponent[]);
  }

  /**
   * Assigns the provided HealthcareServiceNotAvailableComponent array value to the `notAvailable` property.
   *
   * @param value - the `notAvailable` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNotAvailable(value: HealthcareServiceNotAvailableComponent[] | undefined): this {
    if (isDefinedList<HealthcareServiceNotAvailableComponent>(value)) {
      const optErrMsg = `Invalid HealthcareService.notAvailable; Provided value array has an element that is not an instance of HealthcareServiceNotAvailableComponent.`;
      assertFhirTypeList<HealthcareServiceNotAvailableComponent>(value, HealthcareServiceNotAvailableComponent, optErrMsg);
      this.notAvailable = value;
    } else {
      this.notAvailable = undefined;
    }
    return this;
  }

  /**
   * Add the provided HealthcareServiceNotAvailableComponent value to the `notAvailable` array property.
   *
   * @param value - the `notAvailable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNotAvailable(value: HealthcareServiceNotAvailableComponent | undefined): this {
    if (isDefined<HealthcareServiceNotAvailableComponent>(value)) {
      const optErrMsg = `Invalid HealthcareService.notAvailable; Provided element is not an instance of HealthcareServiceNotAvailableComponent.`;
      assertFhirType<HealthcareServiceNotAvailableComponent>(value, HealthcareServiceNotAvailableComponent, optErrMsg);
      this.initNotAvailable();
      this.notAvailable?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `notAvailable` property exists and has a value; `false` otherwise
   */
  public hasNotAvailable(): boolean {
    return isDefinedList<HealthcareServiceNotAvailableComponent>(this.notAvailable) && this.notAvailable.some((item: HealthcareServiceNotAvailableComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `notAvailable` property
   */
  private initNotAvailable(): void {
    if(!this.hasNotAvailable()) {
      this.notAvailable = [] as HealthcareServiceNotAvailableComponent[];
    }
  }

  /**
   * @returns the `availabilityExceptions` property value as a StringType object if defined; else an empty StringType object
   */
  public getAvailabilityExceptionsElement(): StringType {
    return this.availabilityExceptions ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `availabilityExceptions` property.
   *
   * @param element - the `availabilityExceptions` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailabilityExceptionsElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid HealthcareService.availabilityExceptions; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.availabilityExceptions = element;
    } else {
      this.availabilityExceptions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availabilityExceptions` property exists and has a value; `false` otherwise
   */
  public hasAvailabilityExceptionsElement(): boolean {
    return isDefined<StringType>(this.availabilityExceptions) && !this.availabilityExceptions.isEmpty();
  }

  /**
   * @returns the `availabilityExceptions` property value as a fhirString if defined; else undefined
   */
  public getAvailabilityExceptions(): fhirString | undefined {
    return this.availabilityExceptions?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `availabilityExceptions` property.
   *
   * @param value - the `availabilityExceptions` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailabilityExceptions(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid HealthcareService.availabilityExceptions (${String(value)})`;
      this.availabilityExceptions = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.availabilityExceptions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availabilityExceptions` property exists and has a value; `false` otherwise
   */
  public hasAvailabilityExceptions(): boolean {
    return this.hasAvailabilityExceptionsElement();
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
   * @decorator `@ReferenceTargets('HealthcareService.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('HealthcareService.endpoint', [
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
   * @decorator `@ReferenceTargets('HealthcareService.endpoint', ['Endpoint',])`
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('HealthcareService.endpoint', [
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'HealthcareService';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.active,
      this.providedBy,
      this.category,
      this.type_,
      this.specialty,
      this.location,
      this.name,
      this.comment,
      this.extraDetails,
      this.photo,
      this.telecom,
      this.coverageArea,
      this.serviceProvisionCode,
      this.eligibility,
      this.program,
      this.characteristic,
      this.communication,
      this.referralMethod,
      this.appointmentRequired,
      this.availableTime,
      this.notAvailable,
      this.availabilityExceptions,
      this.endpoint,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): HealthcareService {
    const dest = new HealthcareService();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: HealthcareService): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.active = this.active?.copy();
    dest.providedBy = this.providedBy?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const specialtyList = copyListValues<CodeableConcept>(this.specialty);
    dest.specialty = specialtyList.length === 0 ? undefined : specialtyList;
    const locationList = copyListValues<Reference>(this.location);
    dest.location = locationList.length === 0 ? undefined : locationList;
    dest.name = this.name?.copy();
    dest.comment = this.comment?.copy();
    dest.extraDetails = this.extraDetails?.copy();
    dest.photo = this.photo?.copy();
    const telecomList = copyListValues<ContactPoint>(this.telecom);
    dest.telecom = telecomList.length === 0 ? undefined : telecomList;
    const coverageAreaList = copyListValues<Reference>(this.coverageArea);
    dest.coverageArea = coverageAreaList.length === 0 ? undefined : coverageAreaList;
    const serviceProvisionCodeList = copyListValues<CodeableConcept>(this.serviceProvisionCode);
    dest.serviceProvisionCode = serviceProvisionCodeList.length === 0 ? undefined : serviceProvisionCodeList;
    const eligibilityList = copyListValues<HealthcareServiceEligibilityComponent>(this.eligibility);
    dest.eligibility = eligibilityList.length === 0 ? undefined : eligibilityList;
    const programList = copyListValues<CodeableConcept>(this.program);
    dest.program = programList.length === 0 ? undefined : programList;
    const characteristicList = copyListValues<CodeableConcept>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? undefined : characteristicList;
    const communicationList = copyListValues<CodeableConcept>(this.communication);
    dest.communication = communicationList.length === 0 ? undefined : communicationList;
    const referralMethodList = copyListValues<CodeableConcept>(this.referralMethod);
    dest.referralMethod = referralMethodList.length === 0 ? undefined : referralMethodList;
    dest.appointmentRequired = this.appointmentRequired?.copy();
    const availableTimeList = copyListValues<HealthcareServiceAvailableTimeComponent>(this.availableTime);
    dest.availableTime = availableTimeList.length === 0 ? undefined : availableTimeList;
    const notAvailableList = copyListValues<HealthcareServiceNotAvailableComponent>(this.notAvailable);
    dest.notAvailable = notAvailableList.length === 0 ? undefined : notAvailableList;
    dest.availabilityExceptions = this.availabilityExceptions?.copy();
    const endpointList = copyListValues<Reference>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
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

    if (this.hasActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActiveElement(), 'active', jsonObj);
    }

    if (this.hasProvidedBy()) {
      setFhirComplexJson(this.getProvidedBy(), 'providedBy', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSpecialty()) {
      setFhirComplexListJson(this.getSpecialty(), 'specialty', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexListJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasExtraDetailsElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getExtraDetailsElement(), 'extraDetails', jsonObj);
    }

    if (this.hasPhoto()) {
      setFhirComplexJson(this.getPhoto(), 'photo', jsonObj);
    }

    if (this.hasTelecom()) {
      setFhirComplexListJson(this.getTelecom(), 'telecom', jsonObj);
    }

    if (this.hasCoverageArea()) {
      setFhirComplexListJson(this.getCoverageArea(), 'coverageArea', jsonObj);
    }

    if (this.hasServiceProvisionCode()) {
      setFhirComplexListJson(this.getServiceProvisionCode(), 'serviceProvisionCode', jsonObj);
    }

    if (this.hasEligibility()) {
      setFhirBackboneElementListJson(this.getEligibility(), 'eligibility', jsonObj);
    }

    if (this.hasProgram()) {
      setFhirComplexListJson(this.getProgram(), 'program', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirComplexListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    if (this.hasCommunication()) {
      setFhirComplexListJson(this.getCommunication(), 'communication', jsonObj);
    }

    if (this.hasReferralMethod()) {
      setFhirComplexListJson(this.getReferralMethod(), 'referralMethod', jsonObj);
    }

    if (this.hasAppointmentRequiredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAppointmentRequiredElement(), 'appointmentRequired', jsonObj);
    }

    if (this.hasAvailableTime()) {
      setFhirBackboneElementListJson(this.getAvailableTime(), 'availableTime', jsonObj);
    }

    if (this.hasNotAvailable()) {
      setFhirBackboneElementListJson(this.getNotAvailable(), 'notAvailable', jsonObj);
    }

    if (this.hasAvailabilityExceptionsElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAvailabilityExceptionsElement(), 'availabilityExceptions', jsonObj);
    }

    if (this.hasEndpoint()) {
      setFhirComplexListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * HealthcareServiceEligibilityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specific eligibility requirements required to use the service
 * - **Definition:** Does this service have specific eligibility requirements that need to be met in order to use the service?
 *
 * @category Data Models: Resource
 * @see [FHIR HealthcareService](http://hl7.org/fhir/StructureDefinition/HealthcareService)
 */
export class HealthcareServiceEligibilityComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `HealthcareServiceEligibilityComponent` JSON to instantiate the HealthcareServiceEligibilityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `HealthcareServiceEligibilityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to HealthcareServiceEligibilityComponent
   * @returns HealthcareServiceEligibilityComponent data model or undefined for `HealthcareServiceEligibilityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): HealthcareServiceEligibilityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'HealthcareServiceEligibilityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new HealthcareServiceEligibilityComponent();

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

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    return instance;
  }

  /**
   * HealthcareService.eligibility.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded value for the eligibility
   * - **Definition:** Coded value for the eligibility.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * HealthcareService.eligibility.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the eligibility conditions for the service
   * - **Definition:** Describes the eligibility conditions for the service.
   * - **Comment:** The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: MarkdownType | undefined;

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
      const optErrMsg = `Invalid HealthcareService.eligibility.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `comment` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getCommentElement(): MarkdownType {
    return this.comment ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid HealthcareService.eligibility.comment; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirMarkdown if defined; else undefined
   */
  public getComment(): fhirMarkdown | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid HealthcareService.eligibility.comment (${String(value)})`;
      this.comment = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'HealthcareService.eligibility';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.comment,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): HealthcareServiceEligibilityComponent {
    const dest = new HealthcareServiceEligibilityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: HealthcareServiceEligibilityComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.comment = this.comment?.copy();
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

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCommentElement(), 'comment', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * HealthcareServiceAvailableTimeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Times the Service Site is available
 * - **Definition:** A collection of times that the Service Site is available.
 * - **Comment:** More detailed availability information may be provided in associated Schedule/Slot resources.
 *
 * @category Data Models: Resource
 * @see [FHIR HealthcareService](http://hl7.org/fhir/StructureDefinition/HealthcareService)
 */
export class HealthcareServiceAvailableTimeComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.daysOfWeekEnum = new DaysOfWeekEnum();
  }

  /**
   * Parse the provided `HealthcareServiceAvailableTimeComponent` JSON to instantiate the HealthcareServiceAvailableTimeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `HealthcareServiceAvailableTimeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to HealthcareServiceAvailableTimeComponent
   * @returns HealthcareServiceAvailableTimeComponent data model or undefined for `HealthcareServiceAvailableTimeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): HealthcareServiceAvailableTimeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'HealthcareServiceAvailableTimeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new HealthcareServiceAvailableTimeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'daysOfWeek';
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
          const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addDaysOfWeekElement(datatype);
          }
        });
      }
    }

    fieldName = 'allDay';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAllDayElement(datatype);
    }

    fieldName = 'availableStartTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: TimeType | undefined = fhirParser.parseTimeType(dtJson, dtSiblingJson);
      instance.setAvailableStartTimeElement(datatype);
    }

    fieldName = 'availableEndTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: TimeType | undefined = fhirParser.parseTimeType(dtJson, dtSiblingJson);
      instance.setAvailableEndTimeElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: DaysOfWeek
   *
   * @see {@link DaysOfWeekEnum }
   */
  private readonly daysOfWeekEnum: DaysOfWeekEnum;

  /**
   * HealthcareService.availableTime.daysOfWeek Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** mon | tue | wed | thu | fri | sat | sun
   * - **Definition:** Indicates which days of the week are available between the start and end Times.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  private daysOfWeek?: EnumCodeType[] | undefined;

  /**
   * HealthcareService.availableTime.allDay Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Always available? e.g. 24 hour service
   * - **Definition:** Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private allDay?: BooleanType | undefined;

  /**
   * HealthcareService.availableTime.availableStartTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Opening time of day (ignored if allDay = true)
   * - **Definition:** The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
   * - **Comment:** The time zone is expected to be for where this HealthcareService is provided at.
   * - **FHIR Type:** `time`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private availableStartTime?: TimeType | undefined;

  /**
   * HealthcareService.availableTime.availableEndTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Closing time of day (ignored if allDay = true)
   * - **Definition:** The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
   * - **Comment:** The time zone is expected to be for where this HealthcareService is provided at.
   * - **FHIR Type:** `time`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private availableEndTime?: TimeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `daysOfWeek` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public getDaysOfWeekEnumType(): EnumCodeType[] {
    return this.daysOfWeek ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `daysOfWeek` property.
   *
   * @param enumType - the `daysOfWeek` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public setDaysOfWeekEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid HealthcareService.availableTime.daysOfWeek`;
      assertEnumCodeTypeList<DaysOfWeekEnum>(enumType, DaysOfWeekEnum, errMsgPrefix);
      this.daysOfWeek = enumType;
    } else {
      this.daysOfWeek = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `daysOfWeek` array property.
   *
   * @param enumType - the `daysOfWeek` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public addDaysOfWeekEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid HealthcareService.availableTime.daysOfWeek`;
      assertEnumCodeType<DaysOfWeekEnum>(enumType, DaysOfWeekEnum, errMsgPrefix);
      this.initDaysOfWeek();
      this.daysOfWeek?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `daysOfWeek` property exists and has a value; `false` otherwise
   */
  public hasDaysOfWeekEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.daysOfWeek) && this.daysOfWeek.some((item: EnumCodeType) => !item.isEmpty()) && this.daysOfWeek.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `daysOfWeek` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public getDaysOfWeekElement(): CodeType[] {
    if (this.daysOfWeek === undefined) {
      return [] as CodeType[];
    }
    return this.daysOfWeek as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `daysOfWeek` property.
   *
   * @param element - the `daysOfWeek` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public setDaysOfWeekElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.daysOfWeek; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.daysOfWeekEnum));
      });
      this.daysOfWeek = enumCodeTypes;
    } else {
      this.daysOfWeek = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `daysOfWeek` array property.
   *
   * @param element - the `daysOfWeek` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public addDaysOfWeekElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.daysOfWeek; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initDaysOfWeek();
      this.daysOfWeek?.push(new EnumCodeType(element, this.daysOfWeekEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `daysOfWeek` property exists and has a value; `false` otherwise
   */
  public hasDaysOfWeekElement(): boolean {
    return this.hasDaysOfWeekEnumType();
  }

  /**
   * @returns the `daysOfWeek` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public getDaysOfWeek(): fhirCode[] {
    if (this.daysOfWeek === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.daysOfWeek) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `daysOfWeek` property.
   *
   * @param value - the `daysOfWeek` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public setDaysOfWeek(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid HealthcareService.availableTime.daysOfWeek; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.daysOfWeekEnum));
      });
      this.daysOfWeek = enumCodeTypes;
    } else {
      this.daysOfWeek = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `daysOfWeek` array property.
   *
   * @param value - the `daysOfWeek` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DaysOfWeekEnum }
   */
  public addDaysOfWeek(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initDaysOfWeek();
      const optErrMsg = `Invalid HealthcareService.availableTime.daysOfWeek; Provided value is not an instance of fhirCode.`;
      this.daysOfWeek?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.daysOfWeekEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `daysOfWeek` property exists and has a value; `false` otherwise
   */
  public hasDaysOfWeek(): boolean {
    return this.hasDaysOfWeekEnumType();
  }

  /**
   * Initialize the daysOfWeek property
   */
  private initDaysOfWeek(): void {
    if(!this.hasDaysOfWeekEnumType()) {
      this.daysOfWeek = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `allDay` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAllDayElement(): BooleanType {
    return this.allDay ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `allDay` property.
   *
   * @param element - the `allDay` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllDayElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.allDay; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.allDay = element;
    } else {
      this.allDay = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allDay` property exists and has a value; `false` otherwise
   */
  public hasAllDayElement(): boolean {
    return isDefined<BooleanType>(this.allDay) && !this.allDay.isEmpty();
  }

  /**
   * @returns the `allDay` property value as a fhirBoolean if defined; else undefined
   */
  public getAllDay(): fhirBoolean | undefined {
    return this.allDay?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `allDay` property.
   *
   * @param value - the `allDay` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAllDay(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.allDay (${String(value)})`;
      this.allDay = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.allDay = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `allDay` property exists and has a value; `false` otherwise
   */
  public hasAllDay(): boolean {
    return this.hasAllDayElement();
  }

  /**
   * @returns the `availableStartTime` property value as a TimeType object if defined; else an empty TimeType object
   */
  public getAvailableStartTimeElement(): TimeType {
    return this.availableStartTime ?? new TimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `availableStartTime` property.
   *
   * @param element - the `availableStartTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailableStartTimeElement(element: TimeType | undefined): this {
    if (isDefined<TimeType>(element)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.availableStartTime; Provided element is not an instance of TimeType.`;
      assertFhirType<TimeType>(element, TimeType, optErrMsg);
      this.availableStartTime = element;
    } else {
      this.availableStartTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availableStartTime` property exists and has a value; `false` otherwise
   */
  public hasAvailableStartTimeElement(): boolean {
    return isDefined<TimeType>(this.availableStartTime) && !this.availableStartTime.isEmpty();
  }

  /**
   * @returns the `availableStartTime` property value as a fhirTime if defined; else undefined
   */
  public getAvailableStartTime(): fhirTime | undefined {
    return this.availableStartTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `availableStartTime` property.
   *
   * @param value - the `availableStartTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailableStartTime(value: fhirTime | undefined): this {
    if (isDefined<fhirTime>(value)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.availableStartTime (${String(value)})`;
      this.availableStartTime = new TimeType(parseFhirPrimitiveData(value, fhirTimeSchema, optErrMsg));
    } else {
      this.availableStartTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availableStartTime` property exists and has a value; `false` otherwise
   */
  public hasAvailableStartTime(): boolean {
    return this.hasAvailableStartTimeElement();
  }

  /**
   * @returns the `availableEndTime` property value as a TimeType object if defined; else an empty TimeType object
   */
  public getAvailableEndTimeElement(): TimeType {
    return this.availableEndTime ?? new TimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `availableEndTime` property.
   *
   * @param element - the `availableEndTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailableEndTimeElement(element: TimeType | undefined): this {
    if (isDefined<TimeType>(element)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.availableEndTime; Provided element is not an instance of TimeType.`;
      assertFhirType<TimeType>(element, TimeType, optErrMsg);
      this.availableEndTime = element;
    } else {
      this.availableEndTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availableEndTime` property exists and has a value; `false` otherwise
   */
  public hasAvailableEndTimeElement(): boolean {
    return isDefined<TimeType>(this.availableEndTime) && !this.availableEndTime.isEmpty();
  }

  /**
   * @returns the `availableEndTime` property value as a fhirTime if defined; else undefined
   */
  public getAvailableEndTime(): fhirTime | undefined {
    return this.availableEndTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `availableEndTime` property.
   *
   * @param value - the `availableEndTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAvailableEndTime(value: fhirTime | undefined): this {
    if (isDefined<fhirTime>(value)) {
      const optErrMsg = `Invalid HealthcareService.availableTime.availableEndTime (${String(value)})`;
      this.availableEndTime = new TimeType(parseFhirPrimitiveData(value, fhirTimeSchema, optErrMsg));
    } else {
      this.availableEndTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `availableEndTime` property exists and has a value; `false` otherwise
   */
  public hasAvailableEndTime(): boolean {
    return this.hasAvailableEndTimeElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'HealthcareService.availableTime';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.daysOfWeek,
      this.allDay,
      this.availableStartTime,
      this.availableEndTime,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): HealthcareServiceAvailableTimeComponent {
    const dest = new HealthcareServiceAvailableTimeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: HealthcareServiceAvailableTimeComponent): void {
    super.copyValues(dest);
    const daysOfWeekList = copyListValues<EnumCodeType>(this.daysOfWeek);
    dest.daysOfWeek = daysOfWeekList.length === 0 ? undefined : daysOfWeekList;
    dest.allDay = this.allDay?.copy();
    dest.availableStartTime = this.availableStartTime?.copy();
    dest.availableEndTime = this.availableEndTime?.copy();
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

    if (this.hasDaysOfWeekElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getDaysOfWeekElement(), 'daysOfWeek', jsonObj);
    }

    if (this.hasAllDayElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAllDayElement(), 'allDay', jsonObj);
    }

    if (this.hasAvailableStartTimeElement()) {
      setFhirPrimitiveJson<fhirTime>(this.getAvailableStartTimeElement(), 'availableStartTime', jsonObj);
    }

    if (this.hasAvailableEndTimeElement()) {
      setFhirPrimitiveJson<fhirTime>(this.getAvailableEndTimeElement(), 'availableEndTime', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * HealthcareServiceNotAvailableComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Not available during this time due to provided reason
 * - **Definition:** The HealthcareService is not available during this period of time due to the provided reason.
 *
 * @category Data Models: Resource
 * @see [FHIR HealthcareService](http://hl7.org/fhir/StructureDefinition/HealthcareService)
 */
export class HealthcareServiceNotAvailableComponent extends BackboneElement implements IBackboneElement {
  constructor(description: StringType | fhirString | null = null) {
    super();

    this.description = null;
    if (isDefined<StringType | fhirString>(description)) {
      if (description instanceof PrimitiveType) {
        this.setDescriptionElement(description);
      } else {
        this.setDescription(description);
      }
    }
  }

  /**
   * Parse the provided `HealthcareServiceNotAvailableComponent` JSON to instantiate the HealthcareServiceNotAvailableComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `HealthcareServiceNotAvailableComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to HealthcareServiceNotAvailableComponent
   * @returns HealthcareServiceNotAvailableComponent data model or undefined for `HealthcareServiceNotAvailableComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): HealthcareServiceNotAvailableComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'HealthcareServiceNotAvailableComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new HealthcareServiceNotAvailableComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDescription(null);
      } else {
        instance.setDescriptionElement(datatype);
      }
    } else {
      instance.setDescription(null);
    }

    fieldName = 'during';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDuring(datatype);
    }

    return instance;
  }

  /**
   * HealthcareService.notAvailable.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason presented to the user explaining why time not available
   * - **Definition:** The reason that can be presented to the user as to why this time is not available.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description: StringType | null;

  /**
   * HealthcareService.notAvailable.during Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Service not available from this date
   * - **Definition:** Service is not available (seasonally or for a public holiday) from this date.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private during?: Period | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
  public setDescriptionElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid HealthcareService.notAvailable.description; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.description = element;
    } else {
      this.description = null;
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
   * @returns the `description` property value as a fhirString if defined; else null
   */
  public getDescription(): fhirString | null {
    if (this.description?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.description.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid HealthcareService.notAvailable.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.description = null;
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
   * @returns the `during` property value as a Period object if defined; else an empty Period object
   */
  public getDuring(): Period {
    return this.during ?? new Period();
  }

  /**
   * Assigns the provided During object value to the `during` property.
   *
   * @param value - the `during` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDuring(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid HealthcareService.notAvailable.during; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.during = value;
    } else {
      this.during = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `during` property exists and has a value; `false` otherwise
   */
  public hasDuring(): boolean {
    return isDefined<Period>(this.during) && !this.during.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'HealthcareService.notAvailable';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.during,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.description, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): HealthcareServiceNotAvailableComponent {
    const dest = new HealthcareServiceNotAvailableComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: HealthcareServiceNotAvailableComponent): void {
    super.copyValues(dest);
    dest.description = this.description ? this.description.copy() : null;
    dest.during = this.during?.copy();
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
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasDuring()) {
      setFhirComplexJson(this.getDuring(), 'during', jsonObj);
    }

    return jsonObj;
  }
}
