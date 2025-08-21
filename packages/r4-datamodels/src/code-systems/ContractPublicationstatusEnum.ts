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
 * ContractPublicationstatusEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/contract-publicationstatus
 * CodeSystem.name: ContractPublicationstatus
 * CodeSystem.description: This value set contract specific codes for status.
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
 * FHIR CodeSystem: ContractPublicationstatusEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ContractPublicationstatus](http://hl7.org/fhir/contract-publicationstatus)
 */
export class ContractPublicationstatusEnum implements IFhirCodeEnum {
  public static readonly AMENDED = new FhirCodeDefinition(
    'AMENDED',
    'amended',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Amended',
    'Contract is augmented with additional information to correct errors in a predecessor or to updated values in a predecessor. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: revised; replaced.',
  );
  public static readonly APPENDED = new FhirCodeDefinition(
    'APPENDED',
    'appended',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Appended',
    'Contract is augmented with additional information that was missing from a predecessor Contract. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: updated, replaced.',
  );
  public static readonly CANCELLED = new FhirCodeDefinition(
    'CANCELLED',
    'cancelled',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Cancelled',
    'Contract is terminated due to failure of the Grantor and/or the Grantee to fulfil one or more contract provisions. Usage: Abnormal contract termination. Precedence Order = 10. Comparable FHIR and v.3 status codes: stopped; failed; aborted.',
  );
  public static readonly DISPUTED = new FhirCodeDefinition(
    'DISPUTED',
    'disputed',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Disputed',
    'Contract is pended to rectify failure of the Grantor or the Grantee to fulfil contract provision(s). E.g., Grantee complaint about Grantor\'s failure to comply with contract provisions. Usage: Contract pended. Precedence Order = 7. Comparable FHIR and v.3 status codes: on hold; pended; suspended.',
  );
  public static readonly ENTERED_IN_ERROR = new FhirCodeDefinition(
    'ENTERED_IN_ERROR',
    'entered-in-error',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Entered in Error',
    'Contract was created in error. No Precedence Order.  Status may be applied to a Contract with any status.',
  );
  public static readonly EXECUTABLE = new FhirCodeDefinition(
    'EXECUTABLE',
    'executable',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Executable',
    'Contract execution pending; may be executed when either the Grantor or the Grantee accepts the contract provisions by signing. I.e., where either the Grantor or the Grantee has signed, but not both. E.g., when an insurance applicant signs the insurers application, which references the policy. Usage: Optional first step of contract execution activity.  May be skipped and contracting activity moves directly to executed state. Precedence Order = 3. Comparable FHIR and v.3 status codes: draft; preliminary; planned; intended; active.',
  );
  public static readonly EXECUTED = new FhirCodeDefinition(
    'EXECUTED',
    'executed',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Executed',
    'Contract is activated for period stipulated when both the Grantor and Grantee have signed it. Usage: Required state for normal completion of contracting activity.  Precedence Order = 6. Comparable FHIR and v.3 status codes: accepted; completed.',
  );
  public static readonly NEGOTIABLE = new FhirCodeDefinition(
    'NEGOTIABLE',
    'negotiable',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Negotiable',
    'Contract execution is suspended while either or both the Grantor and Grantee propose and consider new or revised contract provisions. I.e., where the party which has not signed proposes changes to the terms.  E .g., a life insurer declines to agree to the signed application because the life insurer has evidence that the applicant, who asserted to being younger or a non-smoker to get a lower premium rate - but offers instead to agree to a higher premium based on the applicants actual age or smoking status. Usage: Optional contract activity between executable and executed state. Precedence Order = 4. Comparable FHIR and v.3 status codes: in progress; review; held.',
  );
  public static readonly OFFERED = new FhirCodeDefinition(
    'OFFERED',
    'offered',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Offered',
    'Contract is a proposal by either the Grantor or the Grantee. Aka - A Contract hard copy or electronic \'template\', \'form\' or \'application\'. E.g., health insurance application; consent directive form. Usage: Beginning of contract negotiation, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 2. Comparable FHIR and v.3 status codes: requested; new.',
  );
  public static readonly POLICY = new FhirCodeDefinition(
    'POLICY',
    'policy',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Policy',
    'Contract template is available as the basis for an application or offer by the Grantor or Grantee. E.g., health insurance policy; consent directive policy.  Usage: Required initial contract activity, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 1. Comparable FHIR and v.3 status codes: proposed; intended.',
  );
  public static readonly REJECTED = new FhirCodeDefinition(
    'REJECTED',
    'rejected',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Rejected',
    ' Execution of the Contract is not completed because either or both the Grantor and Grantee decline to accept some or all of the contract provisions. Usage: Optional contract activity between executable and abnormal termination. Precedence Order = 5. Comparable FHIR and v.3 status codes:  stopped; cancelled.',
  );
  public static readonly RENEWED = new FhirCodeDefinition(
    'RENEWED',
    'renewed',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Renewed',
    'Beginning of a successor Contract at the termination of predecessor Contract lifecycle. Usage: Follows termination of a preceding Contract that has reached its expiry date. Precedence Order = 13. Comparable FHIR and v.3 status codes: superseded.',
  );
  public static readonly REVOKED = new FhirCodeDefinition(
    'REVOKED',
    'revoked',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Revoked',
    'A Contract that is rescinded.  May be required prior to replacing with an updated Contract. Comparable FHIR and v.3 status codes: nullified.',
  );
  public static readonly RESOLVED = new FhirCodeDefinition(
    'RESOLVED',
    'resolved',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Resolved',
    'Contract is reactivated after being pended because of faulty execution. *E.g., competency of the signer(s), or where the policy is substantially different from and did not accompany the application/form so that the applicant could not compare them. Aka - \'\'reactivated\'\'. Usage: Optional stage where a pended contract is reactivated. Precedence Order = 8. Comparable FHIR and v.3 status codes: reactivated.',
  );
  public static readonly TERMINATED = new FhirCodeDefinition(
    'TERMINATED',
    'terminated',
    'http://hl7.org/fhir/contract-publicationstatus',
    'Terminated',
    'Contract reaches its expiry date. It might or might not be renewed or renegotiated. Usage: Normal end of contract period. Precedence Order = 12. Comparable FHIR and v.3 status codes: Obsoleted.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ContractPublicationstatusEnum.AMENDED,
      ContractPublicationstatusEnum.APPENDED,
      ContractPublicationstatusEnum.CANCELLED,
      ContractPublicationstatusEnum.DISPUTED,
      ContractPublicationstatusEnum.ENTERED_IN_ERROR,
      ContractPublicationstatusEnum.EXECUTABLE,
      ContractPublicationstatusEnum.EXECUTED,
      ContractPublicationstatusEnum.NEGOTIABLE,
      ContractPublicationstatusEnum.OFFERED,
      ContractPublicationstatusEnum.POLICY,
      ContractPublicationstatusEnum.REJECTED,
      ContractPublicationstatusEnum.RENEWED,
      ContractPublicationstatusEnum.REVOKED,
      ContractPublicationstatusEnum.RESOLVED,
      ContractPublicationstatusEnum.TERMINATED,
      ContractPublicationstatusEnum.NULL
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
    } else if (ContractPublicationstatusEnum.AMENDED.code === code) {
      return ContractPublicationstatusEnum.AMENDED;
    } else if (ContractPublicationstatusEnum.APPENDED.code === code) {
      return ContractPublicationstatusEnum.APPENDED;
    } else if (ContractPublicationstatusEnum.CANCELLED.code === code) {
      return ContractPublicationstatusEnum.CANCELLED;
    } else if (ContractPublicationstatusEnum.DISPUTED.code === code) {
      return ContractPublicationstatusEnum.DISPUTED;
    } else if (ContractPublicationstatusEnum.ENTERED_IN_ERROR.code === code) {
      return ContractPublicationstatusEnum.ENTERED_IN_ERROR;
    } else if (ContractPublicationstatusEnum.EXECUTABLE.code === code) {
      return ContractPublicationstatusEnum.EXECUTABLE;
    } else if (ContractPublicationstatusEnum.EXECUTED.code === code) {
      return ContractPublicationstatusEnum.EXECUTED;
    } else if (ContractPublicationstatusEnum.NEGOTIABLE.code === code) {
      return ContractPublicationstatusEnum.NEGOTIABLE;
    } else if (ContractPublicationstatusEnum.OFFERED.code === code) {
      return ContractPublicationstatusEnum.OFFERED;
    } else if (ContractPublicationstatusEnum.POLICY.code === code) {
      return ContractPublicationstatusEnum.POLICY;
    } else if (ContractPublicationstatusEnum.REJECTED.code === code) {
      return ContractPublicationstatusEnum.REJECTED;
    } else if (ContractPublicationstatusEnum.RENEWED.code === code) {
      return ContractPublicationstatusEnum.RENEWED;
    } else if (ContractPublicationstatusEnum.REVOKED.code === code) {
      return ContractPublicationstatusEnum.REVOKED;
    } else if (ContractPublicationstatusEnum.RESOLVED.code === code) {
      return ContractPublicationstatusEnum.RESOLVED;
    } else if (ContractPublicationstatusEnum.TERMINATED.code === code) {
      return ContractPublicationstatusEnum.TERMINATED;
    } else if (ContractPublicationstatusEnum.NULL.code === code) {
      return ContractPublicationstatusEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ContractPublicationstatusEnum 'code' value '${code}'`);
    }
  }
}
