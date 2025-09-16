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
 * AllergyIntolerance Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/AllergyIntolerance
 * StructureDefinition.name: AllergyIntolerance
 * StructureDefinition.description: Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
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
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
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
import { Age, Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference } from '../complex-types/complex-datatypes';
import { AllergyIntoleranceCategoryEnum } from '../code-systems/AllergyIntoleranceCategoryEnum';
import { AllergyIntoleranceCriticalityEnum } from '../code-systems/AllergyIntoleranceCriticalityEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ReactionEventSeverityEnum } from '../code-systems/ReactionEventSeverityEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * AllergyIntolerance Class
 *
 * @remarks
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 *
 * To record a clinical assessment of a propensity, or potential risk to an individual, of an adverse reaction upon future exposure to the specified substance, or class of substance.
 *
 * **FHIR Specification**
 * - **Short:** Allergy or Intolerance (generally: Risk of adverse reaction to a substance)
 * - **Definition:** Risk of harmful or undesirable physiological response which is specific to an individual and associated with exposure to a substance.
 * - **Comment:** Substances include, but are not limited to: a therapeutic substance administered correctly at an appropriate dosage for the individual; food; material derived from plants or animals; or venom from insect stings.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR AllergyIntolerance](http://hl7.org/fhir/StructureDefinition/AllergyIntolerance)
 */
export class AllergyIntolerance extends DomainResource implements IDomainResource {
  constructor(patient: Reference | null = null) {
    super();

    this.allergyIntoleranceCategoryEnum = new AllergyIntoleranceCategoryEnum();
    this.allergyIntoleranceCriticalityEnum = new AllergyIntoleranceCriticalityEnum();

    this.patient = null;
    if (isDefined<Reference>(patient)) {
      this.setPatient(patient);
    }
  }

  /**
   * Parse the provided `AllergyIntolerance` JSON to instantiate the AllergyIntolerance data model.
   *
   * @param sourceJson - JSON representing FHIR `AllergyIntolerance`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AllergyIntolerance
   * @returns AllergyIntolerance data model or undefined for `AllergyIntolerance`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): AllergyIntolerance | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AllergyIntolerance';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AllergyIntolerance();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'AllergyIntolerance');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = AllergyIntolerance[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for AllergyIntolerance`;
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

    fieldName = 'clinicalStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClinicalStatus(datatype);
    }

    fieldName = 'verificationStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setVerificationStatus(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'category';
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
            instance.addCategoryElement(datatype);
          }
        });
      }
    }

    fieldName = 'criticality';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setCriticalityElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setPatient(null);
      } else {
        instance.setPatient(datatype);
      }
    } else {
      instance.setPatient(null);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'onset[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const onset: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOnset(onset);

    fieldName = 'recordedDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setRecordedDateElement(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AllergyIntoleranceParticipantComponent | undefined = AllergyIntoleranceParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addParticipant(component);
          }
        });
      }
    }

    fieldName = 'lastOccurrence';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setLastOccurrenceElement(datatype);
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

    fieldName = 'reaction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: AllergyIntoleranceReactionComponent | undefined = AllergyIntoleranceReactionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addReaction(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * AllergyIntolerance.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External ids for this item
   * - **Definition:** Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the AllergyIntolerance as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * AllergyIntolerance.clinicalStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** active | inactive | resolved
   * - **Definition:** The clinical status of the allergy or intolerance.
   * - **Comment:** AllergyIntolerance.clinicalStatus should be present if verificationStatus is not entered-in-error and the AllergyIntolerance.code isn\'t negated (No Known Allergy, No Drug Allergy, No Food Allergy, No Latex Allergy). Refer to [discussion](https://hl7.org/fhir/extensibility.html#Special-Case) if clinicalStatus is missing data. The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because the status contains the codes inactive and resolved that mark the AllergyIntolerance as no longer active.
   * - **isSummary:** true
   */
  private clinicalStatus?: CodeableConcept | undefined;

  /**
   * AllergyIntolerance.verificationStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** unconfirmed | presumed | confirmed | refuted | entered-in-error
   * - **Definition:** Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).  The verification status pertains to the allergy or intolerance, itself, not to any specific AllergyIntolerance attribute.
   * - **Comment:** The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because the status contains the codes refuted and entered-in-error that mark the AllergyIntolerance as not currently valid.
   * - **isSummary:** true
   */
  private verificationStatus?: CodeableConcept | undefined;

  /**
   * AllergyIntolerance.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** allergy | intolerance - Underlying mechanism (if known)
   * - **Definition:** Identification of the underlying physiological mechanism for the reaction risk.
   * - **Comment:** Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: AllergyIntoleranceCategory
   *
   * @see {@link AllergyIntoleranceCategoryEnum }
   */
  private readonly allergyIntoleranceCategoryEnum: AllergyIntoleranceCategoryEnum;

  /**
   * AllergyIntolerance.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** food | medication | environment | biologic
   * - **Definition:** Category of the identified substance.
   * - **Comment:** This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don\'t have a category valued will not be returned.  Refer to [search](https://hl7.org/fhir/search.html) for more information on how to search category with a :missing modifier to get allergies that don\'t have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  private category?: EnumCodeType[] | undefined;

  /**
   * FHIR CodeSystem: AllergyIntoleranceCriticality
   *
   * @see {@link AllergyIntoleranceCriticalityEnum }
   */
  private readonly allergyIntoleranceCriticalityEnum: AllergyIntoleranceCriticalityEnum;

  /**
   * AllergyIntolerance.criticality Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** low | high | unable-to-assess
   * - **Definition:** Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
   * - **Comment:** The default criticality value for any propensity to an adverse reaction should be \'Low Risk\', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. \'High Risk\' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCriticalityEnum }
   */
  private criticality?: EnumCodeType | undefined;

  /**
   * AllergyIntolerance.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that identifies the allergy or intolerance
   * - **Definition:** Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific substance or class (e.g., "No latex allergy") or a general or categorical negated statement (e.g.,  "No known allergy", "No known drug allergies").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the \'code\' and ignore the \'reaction.substance\'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
   * - **Comment:** It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNII, and ATC. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text. When a substance or product code is specified for the \'code\' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the \'type\' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship. The \'substanceExposureRisk\' extension is available as a structured and more flexible alternative to the \'code\' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the \'substanceExposureRisk\' extension is present, the AllergyIntolerance.code element SHALL be omitted.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * AllergyIntolerance.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who the allergy or intolerance is for
   * - **Definition:** The patient who has the allergy or intolerance.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient: Reference | null;

  /**
   * AllergyIntolerance.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter when the allergy or intolerance was asserted
   * - **Definition:** The encounter when the allergy or intolerance was asserted.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encounter?: Reference | undefined;

  /**
   * AllergyIntolerance.onset[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('AllergyIntolerance.onset[x]', ['dateTime','Age','Period','Range','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When allergy or intolerance was identified
   * - **Definition:** Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   * - **Comment:** Age is generally used when the patient reports an age at which the AllergyIntolerance was noted. Period is generally used to convey an imprecise onset that occurred within the time period.  Range is generally used to convey an imprecise age range (e.g. 4 to 6 years old).
   * - **FHIR Types:**
   *     'dateTime',
   *     'Age',
   *     'Period',
   *     'Range',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('AllergyIntolerance.onset[x]',[
    'dateTime',
    'Age',
    'Period',
    'Range',
    'string',
  ])
  private onset?: IDataType | undefined;

  /**
   * AllergyIntolerance.recordedDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date allergy or intolerance was first recorded
   * - **Definition:** The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   * - **Comment:** When onset date is unknown, recordedDate can be used to establish if the allergy or intolerance was present on or before a given date.  If the recordedDate is known and provided by a sending system, it is preferred that the receiving system preserve that recordedDate value. If the recordedDate is not provided by the sending system, the receipt timestamp is sometimes used as the recordedDate.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private recordedDate?: DateTimeType | undefined;

  /**
   * AllergyIntolerance.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what participated in the activities related to the allergy or intolerance and how they were involved
   * - **Definition:** Indicates who or what participated in the activities related to the allergy or intolerance and how they were involved.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private participant?: AllergyIntoleranceParticipantComponent[] | undefined;

  /**
   * AllergyIntolerance.lastOccurrence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date(/time) of last known occurrence of a reaction
   * - **Definition:** Represents the date and/or time of the last known occurrence of a reaction event.
   * - **Comment:** This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. \'In Childhood, \'10 years ago\' the AllergyIntolerance.note element should be used.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastOccurrence?: DateTimeType | undefined;

  /**
   * AllergyIntolerance.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional text not captured in other fields
   * - **Definition:** Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
   * - **Comment:** For example: including reason for flagging a seriousness of \'High Risk\'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * AllergyIntolerance.reaction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adverse Reaction Events linked to exposure to substance
   * - **Definition:** Details about each adverse reaction event linked to exposure to the identified substance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reaction?: AllergyIntoleranceReactionComponent[] | undefined;

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
      const optErrMsg = `Invalid AllergyIntolerance.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid AllergyIntolerance.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `clinicalStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getClinicalStatus(): CodeableConcept {
    return this.clinicalStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ClinicalStatus object value to the `clinicalStatus` property.
   *
   * @param value - the `clinicalStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClinicalStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.clinicalStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.clinicalStatus = value;
    } else {
      this.clinicalStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `clinicalStatus` property exists and has a value; `false` otherwise
   */
  public hasClinicalStatus(): boolean {
    return isDefined<CodeableConcept>(this.clinicalStatus) && !this.clinicalStatus.isEmpty();
  }

  /**
   * @returns the `verificationStatus` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getVerificationStatus(): CodeableConcept {
    return this.verificationStatus ?? new CodeableConcept();
  }

  /**
   * Assigns the provided VerificationStatus object value to the `verificationStatus` property.
   *
   * @param value - the `verificationStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVerificationStatus(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.verificationStatus; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.verificationStatus = value;
    } else {
      this.verificationStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `verificationStatus` property exists and has a value; `false` otherwise
   */
  public hasVerificationStatus(): boolean {
    return isDefined<CodeableConcept>(this.verificationStatus) && !this.verificationStatus.isEmpty();
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
      const optErrMsg = `Invalid AllergyIntolerance.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `category` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public getCategoryEnumType(): EnumCodeType[] {
    return this.category ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `category` property.
   *
   * @param enumType - the `category` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public setCategoryEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid AllergyIntolerance.category`;
      assertEnumCodeTypeList<AllergyIntoleranceCategoryEnum>(enumType, AllergyIntoleranceCategoryEnum, errMsgPrefix);
      this.category = enumType;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `category` array property.
   *
   * @param enumType - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public addCategoryEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid AllergyIntolerance.category`;
      assertEnumCodeType<AllergyIntoleranceCategoryEnum>(enumType, AllergyIntoleranceCategoryEnum, errMsgPrefix);
      this.initCategory();
      this.category?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategoryEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.category) && this.category.some((item: EnumCodeType) => !item.isEmpty()) && this.category.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `category` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public getCategoryElement(): CodeType[] {
    if (this.category === undefined) {
      return [] as CodeType[];
    }
    return this.category as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `category` property.
   *
   * @param element - the `category` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public setCategoryElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid AllergyIntolerance.category; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.allergyIntoleranceCategoryEnum));
      });
      this.category = enumCodeTypes;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `category` array property.
   *
   * @param element - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public addCategoryElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AllergyIntolerance.category; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initCategory();
      this.category?.push(new EnumCodeType(element, this.allergyIntoleranceCategoryEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategoryElement(): boolean {
    return this.hasCategoryEnumType();
  }

  /**
   * @returns the `category` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public getCategory(): fhirCode[] {
    if (this.category === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.category) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `category` property.
   *
   * @param value - the `category` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public setCategory(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid AllergyIntolerance.category; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.allergyIntoleranceCategoryEnum));
      });
      this.category = enumCodeTypes;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCategoryEnum }
   */
  public addCategory(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initCategory();
      const optErrMsg = `Invalid AllergyIntolerance.category; Provided value is not an instance of fhirCode.`;
      this.category?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.allergyIntoleranceCategoryEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return this.hasCategoryEnumType();
  }

  /**
   * Initialize the category property
   */
  private initCategory(): void {
    if(!this.hasCategoryEnumType()) {
      this.category = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `criticality` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCriticalityEnum }
   */
  public getCriticalityEnumType(): EnumCodeType | undefined {
    return this.criticality;
  }

  /**
   * Assigns the provided EnumCodeType value to the `criticality` property.
   *
   * @param enumType - the `criticality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCriticalityEnum }
   */
  public setCriticalityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid AllergyIntolerance.criticality';
      assertEnumCodeType<AllergyIntoleranceCriticalityEnum>(enumType, AllergyIntoleranceCriticalityEnum, errMsgPrefix);
      this.criticality = enumType;
    } else {
      this.criticality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `criticality` property exists and has a value; `false` otherwise
   */
  public hasCriticalityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.criticality) && !this.criticality.isEmpty() && this.criticality.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `criticality` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCriticalityEnum }
   */
  public getCriticalityElement(): CodeType | undefined {
    if (this.criticality === undefined) {
      return undefined;
    }
    return this.criticality as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `criticality` property.
   *
   * @param element - the `criticality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCriticalityEnum }
   */
  public setCriticalityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AllergyIntolerance.criticality; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.criticality = new EnumCodeType(element, this.allergyIntoleranceCriticalityEnum);
    } else {
      this.criticality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `criticality` property exists and has a value; `false` otherwise
   */
  public hasCriticalityElement(): boolean {
    return this.hasCriticalityEnumType();
  }

  /**
   * @returns the `criticality` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCriticalityEnum }
   */
  public getCriticality(): fhirCode | undefined {
    if (this.criticality === undefined) {
      return undefined;
    }
    return this.criticality.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `criticality` property.
   *
   * @param value - the `criticality` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AllergyIntoleranceCriticalityEnum }
   */
  public setCriticality(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.criticality; Provided value is not an instance of fhirCode.`;
      this.criticality = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.allergyIntoleranceCriticalityEnum);
    } else {
      this.criticality = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `criticality` property exists and has a value; `false` otherwise
   */
  public hasCriticality(): boolean {
    return this.hasCriticalityEnumType();
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
      const optErrMsg = `Invalid AllergyIntolerance.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `patient` property value as a Reference object if defined; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('AllergyIntolerance.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AllergyIntolerance.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
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
   * @decorator `@ReferenceTargets('AllergyIntolerance.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AllergyIntolerance.encounter', [
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
   * @returns the `onset` property value as a DataType object if defined; else undefined
   */
  public getOnset(): IDataType | undefined {
    return this.onset;
  }

  /**
   * Assigns the provided DataType object value to the `onset` property.
   *
   * @decorator `@ChoiceDataTypes('AllergyIntolerance.onset[x]')`
   *
   * @param value - the `onset` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('AllergyIntolerance.onset[x]')
  public setOnset(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.onset = value;
    } else {
      this.onset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onset` property exists and has a value; `false` otherwise
   */
  public hasOnset(): boolean {
    return isDefined<IDataType>(this.onset) && !this.onset.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `onset` property value as a DateTimeType object if defined; else undefined
   */
  public getOnsetDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AllergyIntolerance.onset[x]: Expected DateTimeType but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasOnsetDateTimeType(): boolean {
    return this.hasOnset() && this.onset instanceof DateTimeType;
  }

  /**
   * @returns the `onset` property value as a Age object if defined; else undefined
   */
  public getOnsetAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for AllergyIntolerance.onset[x]: Expected Age but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Age and has a value; `false` otherwise
   */
  public hasOnsetAge(): boolean {
    return this.hasOnset() && this.onset instanceof Age;
  }

  /**
   * @returns the `onset` property value as a Period object if defined; else undefined
   */
  public getOnsetPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for AllergyIntolerance.onset[x]: Expected Period but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Period and has a value; `false` otherwise
   */
  public hasOnsetPeriod(): boolean {
    return this.hasOnset() && this.onset instanceof Period;
  }

  /**
   * @returns the `onset` property value as a Range object if defined; else undefined
   */
  public getOnsetRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for AllergyIntolerance.onset[x]: Expected Range but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a Range and has a value; `false` otherwise
   */
  public hasOnsetRange(): boolean {
    return this.hasOnset() && this.onset instanceof Range;
  }

  /**
   * @returns the `onset` property value as a StringType object if defined; else undefined
   */
  public getOnsetStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.onset)) {
      return undefined;
    }
    if (!(this.onset instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for AllergyIntolerance.onset[x]: Expected StringType but encountered ${this.onset.fhirType()}`,
      );
    }
    return this.onset;
  }

  /**
   * @returns `true` if the `onset` property exists as a StringType and has a value; `false` otherwise
   */
  public hasOnsetStringType(): boolean {
    return this.hasOnset() && this.onset instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `recordedDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getRecordedDateElement(): DateTimeType {
    return this.recordedDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `recordedDate` property.
   *
   * @param element - the `recordedDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid AllergyIntolerance.recordedDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.recordedDate = element;
    } else {
      this.recordedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recordedDate` property exists and has a value; `false` otherwise
   */
  public hasRecordedDateElement(): boolean {
    return isDefined<DateTimeType>(this.recordedDate) && !this.recordedDate.isEmpty();
  }

  /**
   * @returns the `recordedDate` property value as a fhirDateTime if defined; else undefined
   */
  public getRecordedDate(): fhirDateTime | undefined {
    return this.recordedDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `recordedDate` property.
   *
   * @param value - the `recordedDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRecordedDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.recordedDate (${String(value)})`;
      this.recordedDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.recordedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recordedDate` property exists and has a value; `false` otherwise
   */
  public hasRecordedDate(): boolean {
    return this.hasRecordedDateElement();
  }

  /**
   * @returns the `participant` property value as a AllergyIntoleranceParticipantComponent array
   */
  public getParticipant(): AllergyIntoleranceParticipantComponent[] {
    return this.participant ?? ([] as AllergyIntoleranceParticipantComponent[]);
  }

  /**
   * Assigns the provided AllergyIntoleranceParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: AllergyIntoleranceParticipantComponent[] | undefined): this {
    if (isDefinedList<AllergyIntoleranceParticipantComponent>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.participant; Provided value array has an element that is not an instance of AllergyIntoleranceParticipantComponent.`;
      assertFhirTypeList<AllergyIntoleranceParticipantComponent>(value, AllergyIntoleranceParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided AllergyIntoleranceParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: AllergyIntoleranceParticipantComponent | undefined): this {
    if (isDefined<AllergyIntoleranceParticipantComponent>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.participant; Provided element is not an instance of AllergyIntoleranceParticipantComponent.`;
      assertFhirType<AllergyIntoleranceParticipantComponent>(value, AllergyIntoleranceParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<AllergyIntoleranceParticipantComponent>(this.participant) && this.participant.some((item: AllergyIntoleranceParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as AllergyIntoleranceParticipantComponent[];
    }
  }

  /**
   * @returns the `lastOccurrence` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getLastOccurrenceElement(): DateTimeType {
    return this.lastOccurrence ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastOccurrence` property.
   *
   * @param element - the `lastOccurrence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastOccurrenceElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid AllergyIntolerance.lastOccurrence; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.lastOccurrence = element;
    } else {
      this.lastOccurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastOccurrence` property exists and has a value; `false` otherwise
   */
  public hasLastOccurrenceElement(): boolean {
    return isDefined<DateTimeType>(this.lastOccurrence) && !this.lastOccurrence.isEmpty();
  }

  /**
   * @returns the `lastOccurrence` property value as a fhirDateTime if defined; else undefined
   */
  public getLastOccurrence(): fhirDateTime | undefined {
    return this.lastOccurrence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastOccurrence` property.
   *
   * @param value - the `lastOccurrence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastOccurrence(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.lastOccurrence (${String(value)})`;
      this.lastOccurrence = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.lastOccurrence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastOccurrence` property exists and has a value; `false` otherwise
   */
  public hasLastOccurrence(): boolean {
    return this.hasLastOccurrenceElement();
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
      const optErrMsg = `Invalid AllergyIntolerance.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid AllergyIntolerance.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `reaction` property value as a AllergyIntoleranceReactionComponent array
   */
  public getReaction(): AllergyIntoleranceReactionComponent[] {
    return this.reaction ?? ([] as AllergyIntoleranceReactionComponent[]);
  }

  /**
   * Assigns the provided AllergyIntoleranceReactionComponent array value to the `reaction` property.
   *
   * @param value - the `reaction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReaction(value: AllergyIntoleranceReactionComponent[] | undefined): this {
    if (isDefinedList<AllergyIntoleranceReactionComponent>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction; Provided value array has an element that is not an instance of AllergyIntoleranceReactionComponent.`;
      assertFhirTypeList<AllergyIntoleranceReactionComponent>(value, AllergyIntoleranceReactionComponent, optErrMsg);
      this.reaction = value;
    } else {
      this.reaction = undefined;
    }
    return this;
  }

  /**
   * Add the provided AllergyIntoleranceReactionComponent value to the `reaction` array property.
   *
   * @param value - the `reaction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReaction(value: AllergyIntoleranceReactionComponent | undefined): this {
    if (isDefined<AllergyIntoleranceReactionComponent>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction; Provided element is not an instance of AllergyIntoleranceReactionComponent.`;
      assertFhirType<AllergyIntoleranceReactionComponent>(value, AllergyIntoleranceReactionComponent, optErrMsg);
      this.initReaction();
      this.reaction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reaction` property exists and has a value; `false` otherwise
   */
  public hasReaction(): boolean {
    return isDefinedList<AllergyIntoleranceReactionComponent>(this.reaction) && this.reaction.some((item: AllergyIntoleranceReactionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `reaction` property
   */
  private initReaction(): void {
    if(!this.hasReaction()) {
      this.reaction = [] as AllergyIntoleranceReactionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AllergyIntolerance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.clinicalStatus,
      this.verificationStatus,
      this.type_,
      this.category,
      this.criticality,
      this.code,
      this.patient,
      this.encounter,
      this.onset,
      this.recordedDate,
      this.participant,
      this.lastOccurrence,
      this.note,
      this.reaction,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.patient, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): AllergyIntolerance {
    const dest = new AllergyIntolerance();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AllergyIntolerance): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.clinicalStatus = this.clinicalStatus?.copy();
    dest.verificationStatus = this.verificationStatus?.copy();
    dest.type_ = this.type_?.copy();
    const categoryList = copyListValues<EnumCodeType>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.criticality = this.criticality?.copy();
    dest.code = this.code?.copy();
    dest.patient = this.patient ? this.patient.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.onset = this.onset?.copy() as IDataType;
    dest.recordedDate = this.recordedDate?.copy();
    const participantList = copyListValues<AllergyIntoleranceParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.lastOccurrence = this.lastOccurrence?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const reactionList = copyListValues<AllergyIntoleranceReactionComponent>(this.reaction);
    dest.reaction = reactionList.length === 0 ? undefined : reactionList;
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

    if (this.hasClinicalStatus()) {
      setFhirComplexJson(this.getClinicalStatus(), 'clinicalStatus', jsonObj);
    }

    if (this.hasVerificationStatus()) {
      setFhirComplexJson(this.getVerificationStatus(), 'verificationStatus', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasCategoryElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getCategoryElement(), 'category', jsonObj);
    }

    if (this.hasCriticalityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCriticalityElement()!, 'criticality', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOnset()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOnset()!, 'onset', jsonObj);
    }

    if (this.hasRecordedDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getRecordedDateElement(), 'recordedDate', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasLastOccurrenceElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getLastOccurrenceElement(), 'lastOccurrence', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasReaction()) {
      setFhirBackboneElementListJson(this.getReaction(), 'reaction', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * AllergyIntoleranceParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who or what participated in the activities related to the allergy or intolerance and how they were involved
 * - **Definition:** Indicates who or what participated in the activities related to the allergy or intolerance and how they were involved.
 *
 * @category Data Models: Resource
 * @see [FHIR AllergyIntolerance](http://hl7.org/fhir/StructureDefinition/AllergyIntolerance)
 */
export class AllergyIntoleranceParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(actor: Reference | null = null) {
    super();

    this.actor = null;
    if (isDefined<Reference>(actor)) {
      this.setActor(actor);
    }
  }

  /**
   * Parse the provided `AllergyIntoleranceParticipantComponent` JSON to instantiate the AllergyIntoleranceParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AllergyIntoleranceParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AllergyIntoleranceParticipantComponent
   * @returns AllergyIntoleranceParticipantComponent data model or undefined for `AllergyIntoleranceParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AllergyIntoleranceParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AllergyIntoleranceParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AllergyIntoleranceParticipantComponent();

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
   * AllergyIntolerance.participant.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of involvement
   * - **Definition:** Distinguishes the type of involvement of the actor in the activities related to the allergy or intolerance.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private function_?: CodeableConcept | undefined;

  /**
   * AllergyIntolerance.participant.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who or what participated in the activities related to the allergy or intolerance
   * - **Definition:** Indicates who or what participated in the activities related to the allergy or intolerance.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
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
      const optErrMsg = `Invalid AllergyIntolerance.participant.function; Provided element is not an instance of CodeableConcept.`;
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
   * @decorator `@ReferenceTargets('AllergyIntolerance.participant.actor', ['Practitioner','PractitionerRole','Patient','RelatedPerson','Device','Organization','CareTeam',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('AllergyIntolerance.participant.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Patient',
  
    'RelatedPerson',
  
    'Device',
  
    'Organization',
  
    'CareTeam',
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
    return 'AllergyIntolerance.participant';
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
  public override copy(): AllergyIntoleranceParticipantComponent {
    const dest = new AllergyIntoleranceParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AllergyIntoleranceParticipantComponent): void {
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
/**
 * AllergyIntoleranceReactionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Adverse Reaction Events linked to exposure to substance
 * - **Definition:** Details about each adverse reaction event linked to exposure to the identified substance.
 *
 * @category Data Models: Resource
 * @see [FHIR AllergyIntolerance](http://hl7.org/fhir/StructureDefinition/AllergyIntolerance)
 */
export class AllergyIntoleranceReactionComponent extends BackboneElement implements IBackboneElement {
  constructor(manifestation: CodeableReference[] | null = null) {
    super();

    this.reactionEventSeverityEnum = new ReactionEventSeverityEnum();

    this.manifestation = null;
    if (isDefinedList<CodeableReference>(manifestation)) {
      this.setManifestation(manifestation);
    }
  }

  /**
   * Parse the provided `AllergyIntoleranceReactionComponent` JSON to instantiate the AllergyIntoleranceReactionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `AllergyIntoleranceReactionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to AllergyIntoleranceReactionComponent
   * @returns AllergyIntoleranceReactionComponent data model or undefined for `AllergyIntoleranceReactionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): AllergyIntoleranceReactionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'AllergyIntoleranceReactionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new AllergyIntoleranceReactionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'substance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubstance(datatype);
    }

    fieldName = 'manifestation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setManifestation(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setManifestation(null);
          } else {
            instance.addManifestation(datatype);
          }
        });
      }
    } else {
      instance.setManifestation(null);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'onset';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setOnsetElement(datatype);
    }

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setSeverityElement(datatype);
    }

    fieldName = 'exposureRoute';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExposureRoute(datatype);
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

    return instance;
  }

  /**
   * AllergyIntolerance.reaction.substance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific substance or pharmaceutical product considered to be responsible for event
   * - **Definition:** Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the \'code\' and ignore the \'reaction.substance\'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
   * - **Comment:** Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The \'code\' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the \'reaction.substance\' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the \'code\' and \'reaction.substance\' elements is acceptable when a specific substance has been recorded in \'code\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private substance?: CodeableConcept | undefined;

  /**
   * AllergyIntolerance.reaction.manifestation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Clinical symptoms/signs associated with the Event
   * - **Definition:** Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
   * - **Comment:** Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manifestation: CodeableReference[] | null;

  /**
   * AllergyIntolerance.reaction.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the event as a whole
   * - **Definition:** Text description about the reaction as a whole, including details of the manifestation if required.
   * - **Comment:** Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the note field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * AllergyIntolerance.reaction.onset Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date(/time) when manifestations showed
   * - **Definition:** Record of the date and/or time of the onset of the Reaction.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private onset?: DateTimeType | undefined;

  /**
   * FHIR CodeSystem: ReactionEventSeverity
   *
   * @see {@link ReactionEventSeverityEnum }
   */
  private readonly reactionEventSeverityEnum: ReactionEventSeverityEnum;

  /**
   * AllergyIntolerance.reaction.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** mild | moderate | severe (of event as a whole)
   * - **Definition:** Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
   * - **Comment:** It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ReactionEventSeverityEnum }
   */
  private severity?: EnumCodeType | undefined;

  /**
   * AllergyIntolerance.reaction.exposureRoute Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How the subject was exposed to the substance
   * - **Definition:** Identification of the route by which the subject was exposed to the substance.
   * - **Comment:** Coding of the route of exposure with a terminology should be used wherever possible.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exposureRoute?: CodeableConcept | undefined;

  /**
   * AllergyIntolerance.reaction.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text about event not captured in other fields
   * - **Definition:** Additional text about the adverse reaction event not captured in other fields.
   * - **Comment:** Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `substance` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSubstance(): CodeableConcept {
    return this.substance ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Substance object value to the `substance` property.
   *
   * @param value - the `substance` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubstance(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.substance; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.substance) && !this.substance.isEmpty();
  }

  /**
   * @returns the `manifestation` property value as a CodeableReference array
   */
  public getManifestation(): CodeableReference[] {
    return this.manifestation ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `manifestation` property.
   *
   * @param value - the `manifestation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManifestation(value: CodeableReference[] | undefined | null): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.manifestation; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.manifestation = value;
    } else {
      this.manifestation = null;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `manifestation` array property.
   *
   * @param value - the `manifestation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addManifestation(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.manifestation; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initManifestation();
      this.manifestation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `manifestation` property exists and has a value; `false` otherwise
   */
  public hasManifestation(): boolean {
    return isDefinedList<CodeableReference>(this.manifestation) && this.manifestation.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `manifestation` property
   */
  private initManifestation(): void {
    if(!this.hasManifestation()) {
      this.manifestation = [] as CodeableReference[];
    }
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
      const optErrMsg = `Invalid AllergyIntolerance.reaction.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid AllergyIntolerance.reaction.description (${String(value)})`;
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
   * @returns the `onset` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getOnsetElement(): DateTimeType {
    return this.onset ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `onset` property.
   *
   * @param element - the `onset` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnsetElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.onset; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.onset = element;
    } else {
      this.onset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onset` property exists and has a value; `false` otherwise
   */
  public hasOnsetElement(): boolean {
    return isDefined<DateTimeType>(this.onset) && !this.onset.isEmpty();
  }

  /**
   * @returns the `onset` property value as a fhirDateTime if defined; else undefined
   */
  public getOnset(): fhirDateTime | undefined {
    return this.onset?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `onset` property.
   *
   * @param value - the `onset` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOnset(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.onset (${String(value)})`;
      this.onset = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.onset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `onset` property exists and has a value; `false` otherwise
   */
  public hasOnset(): boolean {
    return this.hasOnsetElement();
  }

  /**
   * @returns the `severity` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ReactionEventSeverityEnum }
   */
  public getSeverityEnumType(): EnumCodeType | undefined {
    return this.severity;
  }

  /**
   * Assigns the provided EnumCodeType value to the `severity` property.
   *
   * @param enumType - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReactionEventSeverityEnum }
   */
  public setSeverityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid AllergyIntolerance.reaction.severity';
      assertEnumCodeType<ReactionEventSeverityEnum>(enumType, ReactionEventSeverityEnum, errMsgPrefix);
      this.severity = enumType;
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.severity) && !this.severity.isEmpty() && this.severity.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `severity` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ReactionEventSeverityEnum }
   */
  public getSeverityElement(): CodeType | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `severity` property.
   *
   * @param element - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReactionEventSeverityEnum }
   */
  public setSeverityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.severity; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.severity = new EnumCodeType(element, this.reactionEventSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityElement(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `severity` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ReactionEventSeverityEnum }
   */
  public getSeverity(): fhirCode | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `severity` property.
   *
   * @param value - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ReactionEventSeverityEnum }
   */
  public setSeverity(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.severity; Provided value is not an instance of fhirCode.`;
      this.severity = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.reactionEventSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverity(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `exposureRoute` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getExposureRoute(): CodeableConcept {
    return this.exposureRoute ?? new CodeableConcept();
  }

  /**
   * Assigns the provided ExposureRoute object value to the `exposureRoute` property.
   *
   * @param value - the `exposureRoute` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExposureRoute(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid AllergyIntolerance.reaction.exposureRoute; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.exposureRoute = value;
    } else {
      this.exposureRoute = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exposureRoute` property exists and has a value; `false` otherwise
   */
  public hasExposureRoute(): boolean {
    return isDefined<CodeableConcept>(this.exposureRoute) && !this.exposureRoute.isEmpty();
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
      const optErrMsg = `Invalid AllergyIntolerance.reaction.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid AllergyIntolerance.reaction.note; Provided element is not an instance of Annotation.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'AllergyIntolerance.reaction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.substance,
      this.manifestation,
      this.description,
      this.onset,
      this.severity,
      this.exposureRoute,
      this.note,
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
  public override copy(): AllergyIntoleranceReactionComponent {
    const dest = new AllergyIntoleranceReactionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: AllergyIntoleranceReactionComponent): void {
    super.copyValues(dest);
    dest.substance = this.substance?.copy();
    const manifestationList = copyListValues<CodeableReference>(this.manifestation);
    dest.manifestation = manifestationList.length === 0 ? null : manifestationList;
    dest.description = this.description?.copy();
    dest.onset = this.onset?.copy();
    dest.severity = this.severity?.copy();
    dest.exposureRoute = this.exposureRoute?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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
      setFhirComplexJson(this.getSubstance(), 'substance', jsonObj);
    }

    if (this.hasManifestation()) {
      setFhirComplexListJson(this.getManifestation(), 'manifestation', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasOnsetElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getOnsetElement(), 'onset', jsonObj);
    }

    if (this.hasSeverityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSeverityElement()!, 'severity', jsonObj);
    }

    if (this.hasExposureRoute()) {
      setFhirComplexJson(this.getExposureRoute(), 'exposureRoute', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}
