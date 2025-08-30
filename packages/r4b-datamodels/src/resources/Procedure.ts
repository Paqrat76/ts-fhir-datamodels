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
 * Procedure Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Procedure
 * StructureDefinition.name: Procedure
 * StructureDefinition.description: An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 * StructureDefinition.fhirVersion: 4.3.0
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
  StringType,
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
import { Age, Annotation, CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference } from '../complex-types/complex-datatypes';
import { EventStatusEnum } from '../code-systems/EventStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Procedure Class
 *
 * @remarks
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 *
 * **FHIR Specification**
 * - **Short:** An action that is being or was performed on a patient
 * - **Definition:** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Procedure](http://hl7.org/fhir/StructureDefinition/Procedure)
 */
export class Procedure extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.eventStatusEnum = new EventStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<EventStatusEnum>(
      status,
      EventStatusEnum,
      this.eventStatusEnum,
      'Procedure.status',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `Procedure` JSON to instantiate the Procedure data model.
   *
   * @param sourceJson - JSON representing FHIR `Procedure`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Procedure
   * @returns Procedure data model or undefined for `Procedure`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Procedure | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Procedure';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Procedure();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Procedure');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Procedure[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Procedure`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'instantiatesCanonical';
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
        const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addInstantiatesCanonicalElement(datatype);
        }
      });
    }

    fieldName = 'instantiatesUri';
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
        const datatype: UriType | undefined = fhirParser.parseUriType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addInstantiatesUriElement(datatype);
        }
      });
    }

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBasedOn(datatype);
        }
      });
  }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPartOf(datatype);
        }
      });
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

    fieldName = 'statusReason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatusReason(datatype);
    }

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

    fieldName = 'performed[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const performed: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setPerformed(performed);

    fieldName = 'recorder';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRecorder(datatype);
    }

    fieldName = 'asserter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAsserter(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ProcedurePerformerComponent | undefined = ProcedurePerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPerformer(component);
        }
      });
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'reasonCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonCode(datatype);
        }
      });
    }

    fieldName = 'reasonReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonReference(datatype);
        }
      });
  }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBodySite(datatype);
        }
      });
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOutcome(datatype);
    }

    fieldName = 'report';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReport(datatype);
        }
      });
  }

    fieldName = 'complication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addComplication(datatype);
        }
      });
    }

    fieldName = 'complicationDetail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addComplicationDetail(datatype);
        }
      });
  }

    fieldName = 'followUp';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFollowUp(datatype);
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

    fieldName = 'focalDevice';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ProcedureFocalDeviceComponent | undefined = ProcedureFocalDeviceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFocalDevice(component);
        }
      });
    }

    fieldName = 'usedReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUsedReference(datatype);
        }
      });
  }

    fieldName = 'usedCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addUsedCode(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * Procedure.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Identifiers for this procedure
   * - **Definition:** Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and is propagated from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
   * - **Requirements:** Allows identification of the procedure as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Procedure.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates FHIR protocol or definition
   * - **Definition:** The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Measure',
   *       'http://hl7.org/fhir/StructureDefinition/OperationDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesCanonical?: CanonicalType[] | undefined;

  /**
   * Procedure.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates external protocol or definition
   * - **Definition:** The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   * - **Comment:** This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiatesUri?: UriType[] | undefined;

  /**
   * Procedure.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A request for this procedure
   * - **Definition:** A reference to a resource that contains details of the request for this procedure.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * Procedure.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of referenced event
   * - **Definition:** A larger event of which this particular procedure is a component or step.
   * - **Comment:** The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/MedicationAdministration',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * FHIR CodeSystem: EventStatus
   *
   * @see {@link EventStatusEnum }
   */
  private readonly eventStatusEnum: EventStatusEnum;

  /**
   * Procedure.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   * - **Definition:** A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.
   * - **Comment:** The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn\'t know the current state of the procedure. This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * Procedure.statusReason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason for current status
   * - **Definition:** Captures the reason for the current state of the procedure.
   * - **Comment:** This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private statusReason?: CodeableConcept | undefined;

  /**
   * Procedure.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification of the procedure
   * - **Definition:** A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept | undefined;

  /**
   * Procedure.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identification of the procedure
   * - **Definition:** The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   * - **Requirements:** 0..1 to account for primarily narrative only resources.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * Procedure.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the procedure was performed on
   * - **Definition:** The person, animal or group on which the procedure was performed.
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
   * Procedure.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter created as part of
   * - **Definition:** The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
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
   * Procedure.performed[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Procedure.performed[x]', ['dateTime','Period','string','Age','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the procedure was performed
   * - **Definition:** Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   * - **Comment:** Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'string',
   *     'Age',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Procedure.performed[x]',[
    'dateTime',
    'Period',
    'string',
    'Age',
    'Range',
  ])
  private performed?: IDataType | undefined;

  /**
   * Procedure.recorder Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who recorded the procedure
   * - **Definition:** Individual who recorded the record and takes responsibility for its content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recorder?: Reference | undefined;

  /**
   * Procedure.asserter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person who asserts this procedure
   * - **Definition:** Individual who is making the procedure statement.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private asserter?: Reference | undefined;

  /**
   * Procedure.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The people who performed the procedure
   * - **Definition:** Limited to "real" people rather than equipment.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performer?: ProcedurePerformerComponent[] | undefined;

  /**
   * Procedure.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the procedure happened
   * - **Definition:** The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
   * - **Requirements:** Ties a procedure to where the records are likely kept.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: Reference | undefined;

  /**
   * Procedure.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded reason procedure performed
   * - **Definition:** The coded reason why the procedure was performed. This may be a coded entity of some type, or may simply be present as text.
   * - **Comment:** Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * Procedure.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The justification that the procedure was performed
   * - **Definition:** The justification of why the procedure was performed.
   * - **Comment:** It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).  Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * Procedure.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target body sites
   * - **Definition:** Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
   * - **Comment:** If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](https://hl7.org/fhir/extension-procedure-targetbodystructure.html).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodySite?: CodeableConcept[] | undefined;

  /**
   * Procedure.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The result of procedure
   * - **Definition:** The outcome of the procedure - did it resolve the reasons for the procedure being performed?
   * - **Comment:** If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outcome?: CodeableConcept | undefined;

  /**
   * Procedure.report Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any report resulting from the procedure
   * - **Definition:** This could be a histology result, pathology report, surgical report, etc.
   * - **Comment:** There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Composition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private report?: Reference[] | undefined;

  /**
   * Procedure.complication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Complication following the procedure
   * - **Definition:** Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any \'post procedure\' issues.
   * - **Comment:** If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private complication?: CodeableConcept[] | undefined;

  /**
   * Procedure.complicationDetail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A condition that is a result of the procedure
   * - **Definition:** Any complications that occurred during the procedure, or in the immediate post-performance period.
   * - **Requirements:** This is used to document a condition that is a result of the procedure, not the condition that was the reason for the procedure.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private complicationDetail?: Reference[] | undefined;

  /**
   * Procedure.followUp Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instructions for follow up
   * - **Definition:** If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private followUp?: CodeableConcept[] | undefined;

  /**
   * Procedure.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information about the procedure
   * - **Definition:** Any other notes and comments about the procedure.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Procedure.focalDevice Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manipulated, implanted, or removed device
   * - **Definition:** A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private focalDevice?: ProcedureFocalDeviceComponent[] | undefined;

  /**
   * Procedure.usedReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Items used during procedure
   * - **Definition:** Identifies medications, devices and any other substance used as part of the procedure.
   * - **Comment:** For devices actually implanted or removed, use Procedure.device.
   * - **Requirements:** Used for tracking contamination, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usedReference?: Reference[] | undefined;

  /**
   * Procedure.usedCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Coded items used during the procedure
   * - **Definition:** Identifies coded items that were used as part of the procedure.
   * - **Comment:** For devices actually implanted or removed, use Procedure.device.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usedCode?: CodeableConcept[] | undefined;

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
      const optErrMsg = `Invalid Procedure.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Procedure.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `instantiatesCanonical` property value as a CanonicalType array
   */
  public getInstantiatesCanonicalElement(): CanonicalType[] {
    return this.instantiatesCanonical ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid Procedure.instantiatesCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `instantiatesCanonical` array property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid Procedure.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initInstantiatesCanonical();
      this.instantiatesCanonical?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefinedList<CanonicalType>(this.instantiatesCanonical) && this.instantiatesCanonical.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical array
   */
  public getInstantiatesCanonical(): fhirCanonical[] {
    this.initInstantiatesCanonical();
    const instantiatesCanonicalValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesCanonical!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesCanonicalValues.push(value);
      }
    }
    return instantiatesCanonicalValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const instantiatesCanonicalElements = [] as CanonicalType[];
      for (const instantiatesCanonicalValue of value) {
        const optErrMsg = `Invalid Procedure.instantiatesCanonical array item (${String(instantiatesCanonicalValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(instantiatesCanonicalValue, fhirCanonicalSchema, optErrMsg));
        instantiatesCanonicalElements.push(element);
      }
      this.instantiatesCanonical = instantiatesCanonicalElements;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesCanonical` array property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid Procedure.instantiatesCanonical array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initInstantiatesCanonical();
      this.addInstantiatesCanonicalElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonical(): boolean {
    return this.hasInstantiatesCanonicalElement();
  }

  /**
   * Initialize the `instantiatesCanonical` property
   */
  private initInstantiatesCanonical(): void {
    if (!this.hasInstantiatesCanonical()) {
      this.instantiatesCanonical = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType array
   */
  public getInstantiatesUriElement(): UriType[] {
    return this.instantiatesUri ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid Procedure.instantiatesUri; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `instantiatesUri` array property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Procedure.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initInstantiatesUri();
      this.instantiatesUri?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefinedList<UriType>(this.instantiatesUri) && this.instantiatesUri.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri array
   */
  public getInstantiatesUri(): fhirUri[] {
    this.initInstantiatesUri();
    const instantiatesUriValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiatesUri!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesUriValues.push(value);
      }
    }
    return instantiatesUriValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const instantiatesUriElements = [] as UriType[];
      for (const instantiatesUriValue of value) {
        const optErrMsg = `Invalid Procedure.instantiatesUri array item (${String(instantiatesUriValue)})`;
        const element = new UriType(parseFhirPrimitiveData(instantiatesUriValue, fhirUriSchema, optErrMsg));
        instantiatesUriElements.push(element);
      }
      this.instantiatesUri = instantiatesUriElements;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiatesUri` array property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Procedure.instantiatesUri array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initInstantiatesUri();
      this.addInstantiatesUriElement(element);
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
   * Initialize the `instantiatesUri` property
   */
  private initInstantiatesUri(): void {
    if (!this.hasInstantiatesUri()) {
      this.instantiatesUri = [] as UriType[];
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
   * @decorator `@ReferenceTargets('Procedure.basedOn', ['CarePlan','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
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
   * @decorator `@ReferenceTargets('Procedure.basedOn', ['CarePlan','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
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
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('Procedure.partOf', ['Procedure','Observation','MedicationAdministration',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.partOf', [
    'Procedure',
  
    'Observation',
  
    'MedicationAdministration',
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
   * @decorator `@ReferenceTargets('Procedure.partOf', ['Procedure','Observation','MedicationAdministration',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.partOf', [
    'Procedure',
  
    'Observation',
  
    'MedicationAdministration',
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Procedure.status`;
      assertEnumCodeType<EventStatusEnum>(enumType, EventStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Procedure.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.eventStatusEnum);
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
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
   * @see CodeSystem Enumeration: {@link EventStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Procedure.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.eventStatusEnum);
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
   * @returns the `statusReason` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatusReason(): CodeableConcept {
    return this.statusReason ?? new CodeableConcept();
  }

  /**
   * Assigns the provided StatusReason object value to the `statusReason` property.
   *
   * @param value - the `statusReason` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatusReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.statusReason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statusReason = value;
    } else {
      this.statusReason = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statusReason` property exists and has a value; `false` otherwise
   */
  public hasStatusReason(): boolean {
    return isDefined<CodeableConcept>(this.statusReason) && !this.statusReason.isEmpty();
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
      const optErrMsg = `Invalid Procedure.category; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Procedure.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Procedure.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.subject', [
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
   * @decorator `@ReferenceTargets('Procedure.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.encounter', [
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
   * @returns the `performed` property value as a DataType object if defined; else undefined
   */
  public getPerformed(): IDataType | undefined {
    return this.performed;
  }

  /**
   * Assigns the provided DataType object value to the `performed` property.
   *
   * @decorator `@ChoiceDataTypes('Procedure.performed[x]')`
   *
   * @param value - the `performed` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Procedure.performed[x]')
  public setPerformed(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.performed = value;
    } else {
      this.performed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performed` property exists and has a value; `false` otherwise
   */
  public hasPerformed(): boolean {
    return isDefined<IDataType>(this.performed) && !this.performed.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `performed` property value as a DateTimeType object if defined; else undefined
   */
  public getPerformedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Procedure.performed[x]: Expected DateTimeType but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasPerformedDateTimeType(): boolean {
    return this.hasPerformed() && this.performed instanceof DateTimeType;
  }

  /**
   * @returns the `performed` property value as a Period object if defined; else undefined
   */
  public getPerformedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Procedure.performed[x]: Expected Period but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a Period and has a value; `false` otherwise
   */
  public hasPerformedPeriod(): boolean {
    return this.hasPerformed() && this.performed instanceof Period;
  }

  /**
   * @returns the `performed` property value as a StringType object if defined; else undefined
   */
  public getPerformedStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Procedure.performed[x]: Expected StringType but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a StringType and has a value; `false` otherwise
   */
  public hasPerformedStringType(): boolean {
    return this.hasPerformed() && this.performed instanceof StringType;
  }

  /**
   * @returns the `performed` property value as a Age object if defined; else undefined
   */
  public getPerformedAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Procedure.performed[x]: Expected Age but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a Age and has a value; `false` otherwise
   */
  public hasPerformedAge(): boolean {
    return this.hasPerformed() && this.performed instanceof Age;
  }

  /**
   * @returns the `performed` property value as a Range object if defined; else undefined
   */
  public getPerformedRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.performed)) {
      return undefined;
    }
    if (!(this.performed instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Procedure.performed[x]: Expected Range but encountered ${this.performed.fhirType()}`,
      );
    }
    return this.performed;
  }

  /**
   * @returns `true` if the `performed` property exists as a Range and has a value; `false` otherwise
   */
  public hasPerformedRange(): boolean {
    return this.hasPerformed() && this.performed instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `recorder` property value as a Reference object; else an empty Reference object
   */
  public getRecorder(): Reference {
    return this.recorder ?? new Reference();
  }

  /**
   * Assigns the provided Recorder object value to the `recorder` property.
   *
   * @decorator `@ReferenceTargets('Procedure.recorder', ['Patient','RelatedPerson','Practitioner','PractitionerRole',])`
   *
   * @param value - the `recorder` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.recorder', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setRecorder(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.recorder = value;
    } else {
      this.recorder = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recorder` property exists and has a value; `false` otherwise
   */
  public hasRecorder(): boolean {
    return isDefined<Reference>(this.recorder) && !this.recorder.isEmpty();
  }

  /**
   * @returns the `asserter` property value as a Reference object; else an empty Reference object
   */
  public getAsserter(): Reference {
    return this.asserter ?? new Reference();
  }

  /**
   * Assigns the provided Asserter object value to the `asserter` property.
   *
   * @decorator `@ReferenceTargets('Procedure.asserter', ['Patient','RelatedPerson','Practitioner','PractitionerRole',])`
   *
   * @param value - the `asserter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.asserter', [
    'Patient',
  
    'RelatedPerson',
  
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setAsserter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.asserter = value;
    } else {
      this.asserter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `asserter` property exists and has a value; `false` otherwise
   */
  public hasAsserter(): boolean {
    return isDefined<Reference>(this.asserter) && !this.asserter.isEmpty();
  }

  /**
   * @returns the `performer` property value as a ProcedurePerformerComponent array
   */
  public getPerformer(): ProcedurePerformerComponent[] {
    return this.performer ?? ([] as ProcedurePerformerComponent[]);
  }

  /**
   * Assigns the provided ProcedurePerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: ProcedurePerformerComponent[] | undefined): this {
    if (isDefinedList<ProcedurePerformerComponent>(value)) {
      const optErrMsg = `Invalid Procedure.performer; Provided value array has an element that is not an instance of ProcedurePerformerComponent.`;
      assertFhirTypeList<ProcedurePerformerComponent>(value, ProcedurePerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ProcedurePerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: ProcedurePerformerComponent | undefined): this {
    if (isDefined<ProcedurePerformerComponent>(value)) {
      const optErrMsg = `Invalid Procedure.performer; Provided element is not an instance of ProcedurePerformerComponent.`;
      assertFhirType<ProcedurePerformerComponent>(value, ProcedurePerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<ProcedurePerformerComponent>(this.performer) && this.performer.some((item: ProcedurePerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as ProcedurePerformerComponent[];
    }
  }

  /**
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('Procedure.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefined<Reference>(this.location) && !this.location.isEmpty();
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
      const optErrMsg = `Invalid Procedure.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Procedure.reasonCode; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('Procedure.reasonReference', ['Condition','Observation','Procedure','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.reasonReference', [
    'Condition',
  
    'Observation',
  
    'Procedure',
  
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
   * @decorator `@ReferenceTargets('Procedure.reasonReference', ['Condition','Observation','Procedure','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.reasonReference', [
    'Condition',
  
    'Observation',
  
    'Procedure',
  
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
   * @returns the `bodySite` property value as a CodeableConcept array
   */
  public getBodySite(): CodeableConcept[] {
    return this.bodySite ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `bodySite` property.
   *
   * @param value - the `bodySite` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.bodySite; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `bodySite` array property.
   *
   * @param value - the `bodySite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBodySite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.bodySite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initBodySite();
      this.bodySite?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefinedList<CodeableConcept>(this.bodySite) && this.bodySite.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `bodySite` property
   */
  private initBodySite(): void {
    if(!this.hasBodySite()) {
      this.bodySite = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `outcome` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getOutcome(): CodeableConcept {
    return this.outcome ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Outcome object value to the `outcome` property.
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcome(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.outcome; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.outcome = value;
    } else {
      this.outcome = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefined<CodeableConcept>(this.outcome) && !this.outcome.isEmpty();
  }

  /**
   * @returns the `report` property value as a Reference array
   */
  public getReport(): Reference[] {
    return this.report ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `report` property.
   *
   * @decorator `@ReferenceTargets('Procedure.report', ['DiagnosticReport','DocumentReference','Composition',])`
   *
   * @param value - the `report` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.report', [
    'DiagnosticReport',
  
    'DocumentReference',
  
    'Composition',
  ])
  public setReport(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.report = value;
    } else {
      this.report = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `report` array property.
   *
   * @decorator `@ReferenceTargets('Procedure.report', ['DiagnosticReport','DocumentReference','Composition',])`
   *
   * @param value - the `report` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.report', [
    'DiagnosticReport',
  
    'DocumentReference',
  
    'Composition',
  ])
  public addReport(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReport();
      this.report?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `report` property exists and has a value; `false` otherwise
   */
  public hasReport(): boolean {
    return isDefinedList<Reference>(this.report) && this.report.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `report` property
   */
  private initReport(): void {
    if (!this.hasReport()) {
      this.report = [] as Reference[];
    }
  }

  /**
   * @returns the `complication` property value as a CodeableConcept array
   */
  public getComplication(): CodeableConcept[] {
    return this.complication ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `complication` property.
   *
   * @param value - the `complication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComplication(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.complication; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.complication = value;
    } else {
      this.complication = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `complication` array property.
   *
   * @param value - the `complication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComplication(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.complication; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initComplication();
      this.complication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `complication` property exists and has a value; `false` otherwise
   */
  public hasComplication(): boolean {
    return isDefinedList<CodeableConcept>(this.complication) && this.complication.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `complication` property
   */
  private initComplication(): void {
    if(!this.hasComplication()) {
      this.complication = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `complicationDetail` property value as a Reference array
   */
  public getComplicationDetail(): Reference[] {
    return this.complicationDetail ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `complicationDetail` property.
   *
   * @decorator `@ReferenceTargets('Procedure.complicationDetail', ['Condition',])`
   *
   * @param value - the `complicationDetail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.complicationDetail', [
    'Condition',
  ])
  public setComplicationDetail(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.complicationDetail = value;
    } else {
      this.complicationDetail = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `complicationDetail` array property.
   *
   * @decorator `@ReferenceTargets('Procedure.complicationDetail', ['Condition',])`
   *
   * @param value - the `complicationDetail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.complicationDetail', [
    'Condition',
  ])
  public addComplicationDetail(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initComplicationDetail();
      this.complicationDetail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `complicationDetail` property exists and has a value; `false` otherwise
   */
  public hasComplicationDetail(): boolean {
    return isDefinedList<Reference>(this.complicationDetail) && this.complicationDetail.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `complicationDetail` property
   */
  private initComplicationDetail(): void {
    if (!this.hasComplicationDetail()) {
      this.complicationDetail = [] as Reference[];
    }
  }

  /**
   * @returns the `followUp` property value as a CodeableConcept array
   */
  public getFollowUp(): CodeableConcept[] {
    return this.followUp ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `followUp` property.
   *
   * @param value - the `followUp` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFollowUp(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.followUp; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.followUp = value;
    } else {
      this.followUp = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `followUp` array property.
   *
   * @param value - the `followUp` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFollowUp(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.followUp; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initFollowUp();
      this.followUp?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `followUp` property exists and has a value; `false` otherwise
   */
  public hasFollowUp(): boolean {
    return isDefinedList<CodeableConcept>(this.followUp) && this.followUp.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `followUp` property
   */
  private initFollowUp(): void {
    if(!this.hasFollowUp()) {
      this.followUp = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid Procedure.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Procedure.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `focalDevice` property value as a ProcedureFocalDeviceComponent array
   */
  public getFocalDevice(): ProcedureFocalDeviceComponent[] {
    return this.focalDevice ?? ([] as ProcedureFocalDeviceComponent[]);
  }

  /**
   * Assigns the provided ProcedureFocalDeviceComponent array value to the `focalDevice` property.
   *
   * @param value - the `focalDevice` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFocalDevice(value: ProcedureFocalDeviceComponent[] | undefined): this {
    if (isDefinedList<ProcedureFocalDeviceComponent>(value)) {
      const optErrMsg = `Invalid Procedure.focalDevice; Provided value array has an element that is not an instance of ProcedureFocalDeviceComponent.`;
      assertFhirTypeList<ProcedureFocalDeviceComponent>(value, ProcedureFocalDeviceComponent, optErrMsg);
      this.focalDevice = value;
    } else {
      this.focalDevice = undefined;
    }
    return this;
  }

  /**
   * Add the provided ProcedureFocalDeviceComponent value to the `focalDevice` array property.
   *
   * @param value - the `focalDevice` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFocalDevice(value: ProcedureFocalDeviceComponent | undefined): this {
    if (isDefined<ProcedureFocalDeviceComponent>(value)) {
      const optErrMsg = `Invalid Procedure.focalDevice; Provided element is not an instance of ProcedureFocalDeviceComponent.`;
      assertFhirType<ProcedureFocalDeviceComponent>(value, ProcedureFocalDeviceComponent, optErrMsg);
      this.initFocalDevice();
      this.focalDevice?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `focalDevice` property exists and has a value; `false` otherwise
   */
  public hasFocalDevice(): boolean {
    return isDefinedList<ProcedureFocalDeviceComponent>(this.focalDevice) && this.focalDevice.some((item: ProcedureFocalDeviceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `focalDevice` property
   */
  private initFocalDevice(): void {
    if(!this.hasFocalDevice()) {
      this.focalDevice = [] as ProcedureFocalDeviceComponent[];
    }
  }

  /**
   * @returns the `usedReference` property value as a Reference array
   */
  public getUsedReference(): Reference[] {
    return this.usedReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `usedReference` property.
   *
   * @decorator `@ReferenceTargets('Procedure.usedReference', ['Device','Medication','Substance',])`
   *
   * @param value - the `usedReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.usedReference', [
    'Device',
  
    'Medication',
  
    'Substance',
  ])
  public setUsedReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.usedReference = value;
    } else {
      this.usedReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `usedReference` array property.
   *
   * @decorator `@ReferenceTargets('Procedure.usedReference', ['Device','Medication','Substance',])`
   *
   * @param value - the `usedReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.usedReference', [
    'Device',
  
    'Medication',
  
    'Substance',
  ])
  public addUsedReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initUsedReference();
      this.usedReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `usedReference` property exists and has a value; `false` otherwise
   */
  public hasUsedReference(): boolean {
    return isDefinedList<Reference>(this.usedReference) && this.usedReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `usedReference` property
   */
  private initUsedReference(): void {
    if (!this.hasUsedReference()) {
      this.usedReference = [] as Reference[];
    }
  }

  /**
   * @returns the `usedCode` property value as a CodeableConcept array
   */
  public getUsedCode(): CodeableConcept[] {
    return this.usedCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `usedCode` property.
   *
   * @param value - the `usedCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUsedCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.usedCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.usedCode = value;
    } else {
      this.usedCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `usedCode` array property.
   *
   * @param value - the `usedCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUsedCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.usedCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initUsedCode();
      this.usedCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `usedCode` property exists and has a value; `false` otherwise
   */
  public hasUsedCode(): boolean {
    return isDefinedList<CodeableConcept>(this.usedCode) && this.usedCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `usedCode` property
   */
  private initUsedCode(): void {
    if(!this.hasUsedCode()) {
      this.usedCode = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Procedure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.basedOn,
      this.partOf,
      this.status,
      this.statusReason,
      this.category,
      this.code,
      this.subject,
      this.encounter,
      this.performed,
      this.recorder,
      this.asserter,
      this.performer,
      this.location,
      this.reasonCode,
      this.reasonReference,
      this.bodySite,
      this.outcome,
      this.report,
      this.complication,
      this.complicationDetail,
      this.followUp,
      this.note,
      this.focalDevice,
      this.usedReference,
      this.usedCode,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Procedure {
    const dest = new Procedure();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Procedure): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const instantiatesCanonicalList = copyListValues<CanonicalType>(this.instantiatesCanonical);
    dest.instantiatesCanonical = instantiatesCanonicalList.length === 0 ? undefined : instantiatesCanonicalList;
    const instantiatesUriList = copyListValues<UriType>(this.instantiatesUri);
    dest.instantiatesUri = instantiatesUriList.length === 0 ? undefined : instantiatesUriList;
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.status = this.status ? this.status.copy() : null;
    dest.statusReason = this.statusReason?.copy();
    dest.category = this.category?.copy();
    dest.code = this.code?.copy();
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.performed = this.performed?.copy() as IDataType;
    dest.recorder = this.recorder?.copy();
    dest.asserter = this.asserter?.copy();
    const performerList = copyListValues<ProcedurePerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    dest.location = this.location?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const bodySiteList = copyListValues<CodeableConcept>(this.bodySite);
    dest.bodySite = bodySiteList.length === 0 ? undefined : bodySiteList;
    dest.outcome = this.outcome?.copy();
    const reportList = copyListValues<Reference>(this.report);
    dest.report = reportList.length === 0 ? undefined : reportList;
    const complicationList = copyListValues<CodeableConcept>(this.complication);
    dest.complication = complicationList.length === 0 ? undefined : complicationList;
    const complicationDetailList = copyListValues<Reference>(this.complicationDetail);
    dest.complicationDetail = complicationDetailList.length === 0 ? undefined : complicationDetailList;
    const followUpList = copyListValues<CodeableConcept>(this.followUp);
    dest.followUp = followUpList.length === 0 ? undefined : followUpList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const focalDeviceList = copyListValues<ProcedureFocalDeviceComponent>(this.focalDevice);
    dest.focalDevice = focalDeviceList.length === 0 ? undefined : focalDeviceList;
    const usedReferenceList = copyListValues<Reference>(this.usedReference);
    dest.usedReference = usedReferenceList.length === 0 ? undefined : usedReferenceList;
    const usedCodeList = copyListValues<CodeableConcept>(this.usedCode);
    dest.usedCode = usedCodeList.length === 0 ? undefined : usedCodeList;
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

    if (this.hasInstantiatesCanonical()) {
      setFhirPrimitiveListJson(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUri()) {
      setFhirPrimitiveListJson(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasStatusReason()) {
      setFhirComplexJson(this.getStatusReason(), 'statusReason', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasPerformed()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getPerformed()!, 'performed', jsonObj);
    }

    if (this.hasRecorder()) {
      setFhirComplexJson(this.getRecorder(), 'recorder', jsonObj);
    }

    if (this.hasAsserter()) {
      setFhirComplexJson(this.getAsserter(), 'asserter', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexListJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasOutcome()) {
      setFhirComplexJson(this.getOutcome(), 'outcome', jsonObj);
    }

    if (this.hasReport()) {
      setFhirComplexListJson(this.getReport(), 'report', jsonObj);
    }

    if (this.hasComplication()) {
      setFhirComplexListJson(this.getComplication(), 'complication', jsonObj);
    }

    if (this.hasComplicationDetail()) {
      setFhirComplexListJson(this.getComplicationDetail(), 'complicationDetail', jsonObj);
    }

    if (this.hasFollowUp()) {
      setFhirComplexListJson(this.getFollowUp(), 'followUp', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasFocalDevice()) {
      setFhirBackboneElementListJson(this.getFocalDevice(), 'focalDevice', jsonObj);
    }

    if (this.hasUsedReference()) {
      setFhirComplexListJson(this.getUsedReference(), 'usedReference', jsonObj);
    }

    if (this.hasUsedCode()) {
      setFhirComplexListJson(this.getUsedCode(), 'usedCode', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ProcedurePerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The people who performed the procedure
 * - **Definition:** Limited to "real" people rather than equipment.
 *
 * @category Data Models: Resource
 * @see [FHIR Procedure](http://hl7.org/fhir/StructureDefinition/Procedure)
 */
export class ProcedurePerformerComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `ProcedurePerformerComponent` JSON to instantiate the ProcedurePerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ProcedurePerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ProcedurePerformerComponent
   * @returns ProcedurePerformerComponent data model or undefined for `ProcedurePerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ProcedurePerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ProcedurePerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ProcedurePerformerComponent();

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

    fieldName = 'onBehalfOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOnBehalfOf(datatype);
    }

    return instance;
  }

  /**
   * Procedure.performer.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of performance
   * - **Definition:** Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
   * - **Requirements:** Allows disambiguation of the types of involvement of different performers.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * Procedure.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The reference to the practitioner
   * - **Definition:** The practitioner who was involved in the procedure.
   * - **Requirements:** A reference to Device supports use cases, such as pacemakers.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actor: Reference | null;

  /**
   * Procedure.performer.onBehalfOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization the device or practitioner was acting for
   * - **Definition:** The organization the device or practitioner was acting on behalf of.
   * - **Requirements:** Practitioners and Devices can be associated with multiple organizations.  This element indicates which organization they were acting on behalf of when performing the action.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private onBehalfOf?: Reference | undefined;

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
      const optErrMsg = `Invalid Procedure.performer.function; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('Procedure.performer.actor', ['Practitioner','PractitionerRole','Organization','Patient','RelatedPerson','Device',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
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

  /**
   * @returns the `onBehalfOf` property value as a Reference object; else an empty Reference object
   */
  public getOnBehalfOf(): Reference {
    return this.onBehalfOf ?? new Reference();
  }

  /**
   * Assigns the provided OnBehalfOf object value to the `onBehalfOf` property.
   *
   * @decorator `@ReferenceTargets('Procedure.performer.onBehalfOf', ['Organization',])`
   *
   * @param value - the `onBehalfOf` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.performer.onBehalfOf', [
    'Organization',
  ])
  public setOnBehalfOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.onBehalfOf = value;
    } else {
      this.onBehalfOf = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onBehalfOf` property exists and has a value; `false` otherwise
   */
  public hasOnBehalfOf(): boolean {
    return isDefined<Reference>(this.onBehalfOf) && !this.onBehalfOf.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Procedure.performer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.function_,
      this.actor,
      this.onBehalfOf,
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
  public override copy(): ProcedurePerformerComponent {
    const dest = new ProcedurePerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ProcedurePerformerComponent): void {
    super.copyValues(dest);
    dest.function_ = this.function_?.copy();
    dest.actor = this.actor ? this.actor.copy() : null;
    dest.onBehalfOf = this.onBehalfOf?.copy();
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
    } else {
      jsonObj['actor'] = null;
    }

    if (this.hasOnBehalfOf()) {
      setFhirComplexJson(this.getOnBehalfOf(), 'onBehalfOf', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ProcedureFocalDeviceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Manipulated, implanted, or removed device
 * - **Definition:** A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 *
 * @category Data Models: Resource
 * @see [FHIR Procedure](http://hl7.org/fhir/StructureDefinition/Procedure)
 */
export class ProcedureFocalDeviceComponent extends BackboneElement implements IBackboneElement {
  constructor(manipulated: Reference | null = null) {
    super();

    this.manipulated = null;
    if (isDefined<Reference>(manipulated)) {
      this.setManipulated(manipulated);
    }
  }

  /**
   * Parse the provided `ProcedureFocalDeviceComponent` JSON to instantiate the ProcedureFocalDeviceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ProcedureFocalDeviceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ProcedureFocalDeviceComponent
   * @returns ProcedureFocalDeviceComponent data model or undefined for `ProcedureFocalDeviceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ProcedureFocalDeviceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ProcedureFocalDeviceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ProcedureFocalDeviceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAction(datatype);
    }

    fieldName = 'manipulated';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setManipulated(null);
      } else {
        instance.setManipulated(datatype);
      }
    } else {
      instance.setManipulated(null);
    }

    return instance;
  }

  /**
   * Procedure.focalDevice.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of change to device
   * - **Definition:** The kind of change that happened to the device during the procedure.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action?: CodeableConcept | undefined;

  /**
   * Procedure.focalDevice.manipulated Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device that was changed
   * - **Definition:** The device that was manipulated (changed) during the procedure.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manipulated: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `action` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAction(): CodeableConcept {
    return this.action ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Action object value to the `action` property.
   *
   * @param value - the `action` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Procedure.focalDevice.action; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefined<CodeableConcept>(this.action) && !this.action.isEmpty();
  }

  /**
   * @returns the `manipulated` property value as a Reference object if defined; else an empty Reference object
   */
  public getManipulated(): Reference {
    return this.manipulated ?? new Reference();
  }

  /**
   * Assigns the provided Manipulated object value to the `manipulated` property.
   *
   * @decorator `@ReferenceTargets('Procedure.focalDevice.manipulated', ['Device',])`
   *
   * @param value - the `manipulated` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Procedure.focalDevice.manipulated', [
    'Device',
  ])
  public setManipulated(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.manipulated = value;
    } else {
      this.manipulated = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `manipulated` property exists and has a value; `false` otherwise
   */
  public hasManipulated(): boolean {
    return isDefined<Reference>(this.manipulated) && !this.manipulated.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Procedure.focalDevice';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.action,
      this.manipulated,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.manipulated, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ProcedureFocalDeviceComponent {
    const dest = new ProcedureFocalDeviceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ProcedureFocalDeviceComponent): void {
    super.copyValues(dest);
    dest.action = this.action?.copy();
    dest.manipulated = this.manipulated ? this.manipulated.copy() : null;
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

    if (this.hasAction()) {
      setFhirComplexJson(this.getAction(), 'action', jsonObj);
    }

    if (this.hasManipulated()) {
      setFhirComplexJson(this.getManipulated(), 'manipulated', jsonObj);
    } else {
      jsonObj['manipulated'] = null;
    }

    return jsonObj;
  }
}
