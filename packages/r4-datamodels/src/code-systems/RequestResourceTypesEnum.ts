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
 * This file is generated from a FHIR CodeSystem definition.
 * DO NOT make any modifications!
 *
 * RequestResourceTypesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/request-resource-types
 * CodeSystem.name: RequestResourceTypes
 * CodeSystem.description: A list of all the request resource types defined in this version of the FHIR specification.
 * CodeSystem.version: 4.0.1
 * CodeSystem.caseSensitive: true
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  fhirCode,
  FhirCodeDefinition,
  IFhirCodeDefinition,
  IFhirCodeEnum,
  InvalidCodeError,
} from '@paq-ts-fhir/fhir-core';

/**
 * FHIR CodeSystem: RequestResourceTypesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem RequestResourceTypes](http://hl7.org/fhir/request-resource-types)
 */
export class RequestResourceTypesEnum implements IFhirCodeEnum {
  public static readonly APPOINTMENT = new FhirCodeDefinition(
    'APPOINTMENT',
    'Appointment',
    'http://hl7.org/fhir/request-resource-types',
    'Appointment',
    'A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).',
  );
  public static readonly APPOINTMENT_RESPONSE = new FhirCodeDefinition(
    'APPOINTMENT_RESPONSE',
    'AppointmentResponse',
    'http://hl7.org/fhir/request-resource-types',
    'AppointmentResponse',
    'A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.',
  );
  public static readonly CARE_PLAN = new FhirCodeDefinition(
    'CARE_PLAN',
    'CarePlan',
    'http://hl7.org/fhir/request-resource-types',
    'CarePlan',
    'Healthcare plan for patient or group.',
  );
  public static readonly CLAIM = new FhirCodeDefinition(
    'CLAIM',
    'Claim',
    'http://hl7.org/fhir/request-resource-types',
    'Claim',
    'Claim, Pre-determination or Pre-authorization.',
  );
  public static readonly COMMUNICATION_REQUEST = new FhirCodeDefinition(
    'COMMUNICATION_REQUEST',
    'CommunicationRequest',
    'http://hl7.org/fhir/request-resource-types',
    'CommunicationRequest',
    'A request for information to be sent to a receiver.',
  );
  public static readonly CONTRACT = new FhirCodeDefinition(
    'CONTRACT',
    'Contract',
    'http://hl7.org/fhir/request-resource-types',
    'Contract',
    'Legal Agreement.',
  );
  public static readonly DEVICE_REQUEST = new FhirCodeDefinition(
    'DEVICE_REQUEST',
    'DeviceRequest',
    'http://hl7.org/fhir/request-resource-types',
    'DeviceRequest',
    'Medical device request.',
  );
  public static readonly ENROLLMENT_REQUEST = new FhirCodeDefinition(
    'ENROLLMENT_REQUEST',
    'EnrollmentRequest',
    'http://hl7.org/fhir/request-resource-types',
    'EnrollmentRequest',
    'Enrollment request.',
  );
  public static readonly IMMUNIZATION_RECOMMENDATION = new FhirCodeDefinition(
    'IMMUNIZATION_RECOMMENDATION',
    'ImmunizationRecommendation',
    'http://hl7.org/fhir/request-resource-types',
    'ImmunizationRecommendation',
    'Guidance or advice relating to an immunization.',
  );
  public static readonly MEDICATION_REQUEST = new FhirCodeDefinition(
    'MEDICATION_REQUEST',
    'MedicationRequest',
    'http://hl7.org/fhir/request-resource-types',
    'MedicationRequest',
    'Ordering of medication for patient or group.',
  );
  public static readonly NUTRITION_ORDER = new FhirCodeDefinition(
    'NUTRITION_ORDER',
    'NutritionOrder',
    'http://hl7.org/fhir/request-resource-types',
    'NutritionOrder',
    'Diet, formula or nutritional supplement request.',
  );
  public static readonly SERVICE_REQUEST = new FhirCodeDefinition(
    'SERVICE_REQUEST',
    'ServiceRequest',
    'http://hl7.org/fhir/request-resource-types',
    'ServiceRequest',
    'A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.',
  );
  public static readonly SUPPLY_REQUEST = new FhirCodeDefinition(
    'SUPPLY_REQUEST',
    'SupplyRequest',
    'http://hl7.org/fhir/request-resource-types',
    'SupplyRequest',
    'Request for a medication, substance or device.',
  );
  public static readonly TASK = new FhirCodeDefinition(
    'TASK',
    'Task',
    'http://hl7.org/fhir/request-resource-types',
    'Task',
    'A task to be performed.',
  );
  public static readonly VISION_PRESCRIPTION = new FhirCodeDefinition(
    'VISION_PRESCRIPTION',
    'VisionPrescription',
    'http://hl7.org/fhir/request-resource-types',
    'VisionPrescription',
    'Prescription for vision correction products for a patient.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      RequestResourceTypesEnum.APPOINTMENT,
      RequestResourceTypesEnum.APPOINTMENT_RESPONSE,
      RequestResourceTypesEnum.CARE_PLAN,
      RequestResourceTypesEnum.CLAIM,
      RequestResourceTypesEnum.COMMUNICATION_REQUEST,
      RequestResourceTypesEnum.CONTRACT,
      RequestResourceTypesEnum.DEVICE_REQUEST,
      RequestResourceTypesEnum.ENROLLMENT_REQUEST,
      RequestResourceTypesEnum.IMMUNIZATION_RECOMMENDATION,
      RequestResourceTypesEnum.MEDICATION_REQUEST,
      RequestResourceTypesEnum.NUTRITION_ORDER,
      RequestResourceTypesEnum.SERVICE_REQUEST,
      RequestResourceTypesEnum.SUPPLY_REQUEST,
      RequestResourceTypesEnum.TASK,
      RequestResourceTypesEnum.VISION_PRESCRIPTION,
      RequestResourceTypesEnum.NULL
    ];
  }

  /**
   * Converts a given FHIR code into its corresponding FHIR code definition.
   *
   * @param {fhirCode | undefined} code - The FHIR code to be converted. If undefined, an error will be thrown.
   * @returns {IFhirCodeDefinition} The FHIR code definition corresponding to the provided code.
   * @throws {@link InvalidCodeError} for undefined or invalid code value
   */
  fromCode(code: fhirCode | undefined): IFhirCodeDefinition {
    if (code === undefined) {
      throw new InvalidCodeError(`The provided 'code' value is undefined`);
    } else if (RequestResourceTypesEnum.APPOINTMENT.code === code) {
      return RequestResourceTypesEnum.APPOINTMENT;
    } else if (RequestResourceTypesEnum.APPOINTMENT_RESPONSE.code === code) {
      return RequestResourceTypesEnum.APPOINTMENT_RESPONSE;
    } else if (RequestResourceTypesEnum.CARE_PLAN.code === code) {
      return RequestResourceTypesEnum.CARE_PLAN;
    } else if (RequestResourceTypesEnum.CLAIM.code === code) {
      return RequestResourceTypesEnum.CLAIM;
    } else if (RequestResourceTypesEnum.COMMUNICATION_REQUEST.code === code) {
      return RequestResourceTypesEnum.COMMUNICATION_REQUEST;
    } else if (RequestResourceTypesEnum.CONTRACT.code === code) {
      return RequestResourceTypesEnum.CONTRACT;
    } else if (RequestResourceTypesEnum.DEVICE_REQUEST.code === code) {
      return RequestResourceTypesEnum.DEVICE_REQUEST;
    } else if (RequestResourceTypesEnum.ENROLLMENT_REQUEST.code === code) {
      return RequestResourceTypesEnum.ENROLLMENT_REQUEST;
    } else if (RequestResourceTypesEnum.IMMUNIZATION_RECOMMENDATION.code === code) {
      return RequestResourceTypesEnum.IMMUNIZATION_RECOMMENDATION;
    } else if (RequestResourceTypesEnum.MEDICATION_REQUEST.code === code) {
      return RequestResourceTypesEnum.MEDICATION_REQUEST;
    } else if (RequestResourceTypesEnum.NUTRITION_ORDER.code === code) {
      return RequestResourceTypesEnum.NUTRITION_ORDER;
    } else if (RequestResourceTypesEnum.SERVICE_REQUEST.code === code) {
      return RequestResourceTypesEnum.SERVICE_REQUEST;
    } else if (RequestResourceTypesEnum.SUPPLY_REQUEST.code === code) {
      return RequestResourceTypesEnum.SUPPLY_REQUEST;
    } else if (RequestResourceTypesEnum.TASK.code === code) {
      return RequestResourceTypesEnum.TASK;
    } else if (RequestResourceTypesEnum.VISION_PRESCRIPTION.code === code) {
      return RequestResourceTypesEnum.VISION_PRESCRIPTION;
    } else if (RequestResourceTypesEnum.NULL.code === code) {
      return RequestResourceTypesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RequestResourceTypesEnum 'code' value '${code}'`);
    }
  }
}
