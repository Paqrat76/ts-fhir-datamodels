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

import { strict as assert } from 'node:assert';
import { assertIsDefined, FhirTypeGuard, InvalidTypeError, isEmpty as _isEmpty, JSON } from '@paq-ts-fhir/fhir-core';
import { FhirResourceType } from './FhirResourceType';
import { Resource } from './Resource';
import { RESOURCE_TYPES } from '../resources';
import { Reference } from '../complex-types';

/**
 * Asserts that a given class instance is a valid FHIR Resource.
 * Checks if the provided instance is an instance of `Resource` and verifies its resource type.
 * Throws an error if the assertions fail.
 *
 * @param {unknown} classInstance - The instance to validate as a FHIR Resource.
 * @param {string} [errorMessage] - Optional custom error message for the exception.
 * @returns {asserts classInstance is Resource} Ensures the provided `classInstance` is a valid Resource.
 * @throws InvalidTypeError when ResourceType assertion is false
 *
 * @category Type Guards/Assertions
 */
export function assertFhirResourceType(
  classInstance: unknown,
  errorMessage?: string,
): asserts classInstance is Resource {
  if (!(classInstance instanceof Resource)) {
    const errMsg = errorMessage ?? `Provided instance is not an instance of Resource.`;
    throw new InvalidTypeError(errMsg);
  }
  if (!RESOURCE_TYPES.includes(classInstance.resourceType())) {
    const errMsg = errorMessage ?? `Provided instance (${classInstance.resourceType()}) is not a valid resource type.`;
    throw new InvalidTypeError(errMsg);
  }
}

/**
 * Converts a list of FHIR resources into their JSON representations and assigns them to a property in a given JSON object.
 *
 * @param {Resource[]} resources - The list of FHIR resources to convert to JSON. Must not be null or undefined.
 * @param {string} propName - The name of the property in the JSON object to which the list of FHIR resources will be assigned. Must not be null, undefined, or empty.
 * @param {JSON.Object} jsonObj - The target JSON object where the list of FHIR resources will be stored. Must not be null or undefined.
 * @throws AssertionError for invalid parameters
 *
 * @category Utilities: JSON
 */
export function setFhirResourceListJson(resources: Resource[], propName: string, jsonObj: JSON.Object): void {
  assertIsDefined<Resource[]>(resources, 'Provided resources is undefined/null');
  assertIsDefined<string>(propName, 'Provided propName is undefined/null');
  assert(!_isEmpty(propName), 'Provided propName is empty');
  assertIsDefined<JSON.Object>(jsonObj, 'Provided jsonObj is undefined/null');

  const jsonArray: JSON.Array = [];
  for (const resource of resources) {
    assertFhirResourceType(resource, 'Provided resource is not an instance of Resource');
    const resourceValue: JSON.Value | undefined = resource.toJSON();
    if (!_isEmpty(resourceValue)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      jsonArray.push(resourceValue!);
    }
  }
  if (jsonArray.length > 0) {
    jsonObj[propName] = jsonArray;
  }
}

/**
 * Sets the JSON value of a specified property in a JSON object, derived from a FHIR Resource.
 *
 * @param {Resource} resource - The FHIR Resource instance whose serialized JSON needs to be set as a property.
 * @param {string} propName - The name of the property in the JSON object where the resource's JSON will be assigned.
 * @param {JSON.Object} jsonObj - The target JSON object where the resource's JSON will be set.
 * @throws AssertionError for invalid parameters
 *
 * @category Utilities: JSON
 */
export function setFhirResourceJson(resource: Resource, propName: string, jsonObj: JSON.Object): void {
  assertIsDefined<Resource>(resource, 'Provided resource is undefined/null');
  assertIsDefined<string>(propName, 'Provided propName is undefined/null');
  assert(!_isEmpty(propName), 'Provided propName is empty');
  assertIsDefined<JSON.Object>(jsonObj, 'Provided jsonObj is undefined/null');
  assertFhirResourceType(resource, 'Provided resource is not an instance of Resource');

  const resourceValue: JSON.Value | undefined = resource.toJSON();
  if (_isEmpty(resourceValue)) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  jsonObj[propName] = resourceValue!;
}

/**
 * A decorator function used to validate and enforce that the method argument(s) conform to specified reference targets.
 * This function is commonly used in the context of FHIR resources to ensure arguments match specified resource types.
 *
 * @param {string} sourceField - The name of the field that this decorator is validating. Used in error messages for clarity.
 * @param {FhirResourceType[]} referenceTargets - FhirResourceType array of target references. If empty, all resource types are considered valid.
 * @returns A function that acts as a method decorator, applying validation logic to the method's arguments.
 * @throws AssertionError for invalid uses
 * @throws InvalidTypeError for actual reference type does not agree with the specified ReferenceTargets
 *
 * @category Decorators
 */
export function ReferenceTargets(sourceField: string, referenceTargets: FhirResourceType[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    return function (this: This, ...args: Args): Return {
      const methodName = String(context.name);
      assert(args.length === 1, `ReferenceTargets decorator on ${methodName} (${sourceField}) expects one argument`);

      // If nothing is provided to the originalMethod, there is nothing to check
      if (args[0] === undefined || args[0] === null) {
        return originalMethod.call(this, ...args);
      }

      const isAnyResource = referenceTargets.length === 0;
      if (!isAnyResource) {
        // Verify referenceTargets contain valid, non-duplicate values
        const referenceTargetSet = new Set(referenceTargets);
        assert(
          referenceTargets.length === referenceTargetSet.size,
          `ReferenceTargets decorator on ${methodName} (${sourceField}) contains duplicate referenceTargets`,
        );
        assert(
          referenceTargets.every((refTarget) => RESOURCE_TYPES.includes(refTarget)),
          `ReferenceTargets decorator on ${methodName} (${sourceField}) contains invalid referenceTargets`,
        );
      }

      if (Array.isArray(args[0])) {
        args[0].forEach((argItem, idx) => {
          assert(
            FhirTypeGuard(argItem, Reference),
            `ReferenceTargets decorator on ${methodName} (${sourceField}) expects argument[${String(idx)}] to be type of 'Reference'`,
          );
          validateReferenceArg(referenceTargets, argItem, isAnyResource, sourceField, methodName, idx);
        });
      } else {
        assert(
          FhirTypeGuard(args[0], Reference),
          `ReferenceTargets decorator on ${methodName} (${sourceField}) expects a single argument to be type of 'Reference | undefined | null'`,
        );
        validateReferenceArg(referenceTargets, args[0], isAnyResource, sourceField, methodName);
      }

      // Since the calls to validateArg(...) above did not throw an error, allow the originalMethod to be executed.
      return originalMethod.call(this, ...args);
    };
  };
}

/**
 * Validates the given Reference argument against specified reference targets.
 * Ensures that the argument meets predefined conditions, including the presence of a valid reference structure,
 * and that it matches one of the allowed FhirResourceType targets.
 *
 * @param {FhirResourceType[]} referenceTargets - FhirResourceType array of target references. If empty, all resource types are considered valid.
 * @param {Reference} argValue - Argument value from original decorated function
 * @param {boolean} isAnyResource - Flag indicating whether any resource type is allowed, bypassing validation.
 * @param {string} sourceField - The name of the field from which the Reference is being validated.
 * @param {string} methodName - The name of the method making this validation call.
 * @param {number} [arrayIndex] - Optional index indicating the position in an array when validating multiple references.
 *
 * @category Decorators
 */
function validateReferenceArg(
  referenceTargets: FhirResourceType[],
  argValue: Reference,
  isAnyResource: boolean,
  sourceField: string,
  methodName: string,
  arrayIndex?: number,
) {
  // Return the original function if there is nothing for this decorator to do:
  // - referenceTargets array is empty (isAnyResource) - implies "Any" resource
  // - Decorator should only be used on a methods defined as:
  //   `public set[PropertyName](value: Reference | undefined): this`
  //   `public set[PropertyName](value: Reference[] | undefined): this`
  //   `public add[PropertyName](value: Reference | undefined): this`
  // - The value of type Reference should have the Reference.reference property set
  // - The referenceTargets array should have at least one valid FhirResourceType value
  // - Reference is to a "contained" resource - reference value begins with "#"

  const argValueReference = argValue.getReference();
  const isReferenceNotApplicable = argValueReference === undefined ? true : argValueReference.startsWith('#');
  if (isAnyResource || !(methodName.startsWith('set') || methodName.startsWith('add')) || isReferenceNotApplicable) {
    return;
  }

  // NOTE: If isAnyResource is true, this function already returned above; therefore, referenceTargets used below
  //       has values to validate against.

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const referenceValue = argValue.getReference()!;
  // referenceValue (Reference.reference) valid examples:
  // - Organization/1234
  // - https://somedomain.com/path/Organization/1234
  const isValidReference = referenceTargets.some((refTarget) => referenceValue.includes(`${refTarget}/`));

  if (!isValidReference) {
    const arrayIndexStr = arrayIndex === undefined ? '' : `[${String(arrayIndex)}]`;
    throw new InvalidTypeError(
      `ReferenceTargets decorator on ${methodName} (${sourceField}) expects argument${arrayIndexStr} (${referenceValue}) to be a valid 'Reference' type`,
    );
  }
}
