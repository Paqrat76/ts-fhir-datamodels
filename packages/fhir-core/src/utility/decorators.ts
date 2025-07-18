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
 * TypeScript decorators
 *
 * @privateRemarks
 * All TypeScript decorators should be included in this module.
 * However, due to TypeScript circular references, the following have been moved to the
 * indicated module:
 * - ReferenceTargets() placed in Reference-Identifier.ts
 * - OpenDataTypes() placed in core-fhir-models.ts
 *
 * @module
 */

import { strict as assert } from 'node:assert';
import { DataType } from '../base-models/core-fhir-models';
import { IDataType } from '../base-models/library-interfaces';
import { DATA_TYPES, FhirDataType } from '../base-models/fhir-data-types';
import { InvalidTypeError } from '../errors/InvalidTypeError';
import { lowerFirst } from './common-util';
import { assertIsDefined, assertIsString, FhirTypeGuard } from './type-guards';
import { Reference } from '../data-types/complex/Reference-Identifier';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * @category Utilities: Decorators
 * @hidden
 */
export const CHOICE_DATA_TYPES = 'ChoiceDatatypes';
/**
 * @category Utilities: Decorators
 * @hidden
 */
export const OPEN_DATA_TYPE_FIELDS = 'OpenDatatypeFields';

/**
 * Data elements captured in decorator metadata property `ChoiceDatatypes` by ChoiceDataTypesMeta decorator
 *
 * @category Utilities: Decorators
 * @interface
 */
export interface ChoiceDatatypeDef {
  fieldName: string;
  fieldTypes: FhirDataType[];
}
/**
 * Decorator metadata captured by ChoiceDataTypesMeta decorator
 *
 * @category Utilities: Decorators
 * @interface
 */
export interface ChoiceDatatypeMetaObj {
  ChoiceDatatypes: ChoiceDatatypeDef[];
}
/**
 * Decorator metadata captured by OpenDataTypesMeta decorator
 *
 * @category Utilities: Decorators
 * @interface
 */
export interface OpenDatatypeMetaObj {
  OpenDatatypeFields: string[];
}

/**
 * Helper that returns the metadata data elements captured by ChoiceDataTypesMeta decorator
 *
 * @param metadata - ChoiceDataTypesMeta decorator metadata
 * @returns the metadata data elements captured by ChoiceDataTypesMeta decorator
 *
 * @category Utilities: Decorators
 */
export function getChoiceDatatypeDefs(metadata: DecoratorMetadataObject | null): ChoiceDatatypeDef[] {
  assertIsDefined<DecoratorMetadataObject>(metadata, `Provided metadata is undefined/null`);
  // JSON.parse(JSON.stringify(metadata))) removes "[Object: null prototype]" from the Decorator metadata object
  const choiceDatatypeMetaObj = JSON.parse(JSON.stringify(metadata)) as ChoiceDatatypeMetaObj;
  assert(choiceDatatypeMetaObj.ChoiceDatatypes, 'metadata.ChoiceDatatypes does not exist');
  return choiceDatatypeMetaObj.ChoiceDatatypes;
}

/**
 * Helper that returns the metadata data elements captured by OpenDataTypesMeta decorator
 *
 * @param metadata - OpenDataTypesMeta decorator metadata
 * @returns the metadata data elements captured by OpenDataTypesMeta decorator
 *
 * @category Utilities: Decorators
 */
export function getOpenDatatypeFields(metadata: DecoratorMetadataObject | null): string[] {
  assertIsDefined<DecoratorMetadataObject>(metadata, `Provided metadata is undefined/null`);
  // JSON.parse(JSON.stringify(metadata))) removes "[Object: null prototype]" from the Decorator metadata object
  const openDatatypeMetaObj = JSON.parse(JSON.stringify(metadata)) as OpenDatatypeMetaObj;
  assert(openDatatypeMetaObj.OpenDatatypeFields, 'metadata.OpenDatatypeFields does not exist');
  return openDatatypeMetaObj.OpenDatatypeFields;
}

/**
 * Helper that returns the metadata data elements for the provided `fieldName` captured by ChoiceDataTypesMeta decorator
 *
 * @param metadata - ChoiceDataTypesMeta decorator metadata
 * @param fieldName - field name for which to retrieve the metadata data elements
 * @returns the metadata data elements for the provided fieldName captured by ChoiceDataTypesMeta decorator
 *
 * @category Utilities: Decorators
 */
export function getChoiceDatatypeDefsForField(
  metadata: DecoratorMetadataObject | null,
  fieldName: string,
): FhirDataType[] {
  assertIsDefined<DecoratorMetadataObject>(metadata, `Provided metadata is undefined/null`);
  assertIsDefined<string>(fieldName, `Provided fieldName is undefined/null`);
  assertIsString(fieldName, `Provided fieldName is not a string`);

  const choiceDatatypeDefs: ChoiceDatatypeDef[] = getChoiceDatatypeDefs(metadata);
  const fieldChoiceDataTypeDef = choiceDatatypeDefs.find((def) => def.fieldName === fieldName);
  assert(fieldChoiceDataTypeDef, `choiceDataTypeDef must exist for ${fieldName}`);
  return fieldChoiceDataTypeDef.fieldTypes;
}

/**
 * Factory function for ChoiceDataTypesMeta decorator for polymorphic (i.e., value[x]) data type fields
 *
 * @remarks
 * This decorator collects the polymorphic data type field names and stores it in the decorator 'metadata' object
 * in the `ChoiceDatatypes` property. This property is an array of `ChoiceDatatypeDef` ({ fieldName; fieldNames })
 * objects having one array item for each polymorphic data type field capturing the specified data types.
 *
 * NOTE: The @ChoiceDataTypes() decorator depends on this metadata!
 *
 * @param sourceField - source field name
 * @param choiceDataTypes - array of FhirDataType values for supported polymorphic data types
 * @returns ChoiceDataTypesMeta decorator
 * @throws AssertionError for invalid uses (Decorator)
 *
 * @see {@link ChoiceDataTypes}
 * @see {@link ChoiceDatatypeDef}
 * @category Decorators
 */
export function ChoiceDataTypesMeta(sourceField: string, choiceDataTypes: FhirDataType[]) {
  return function (_target: unknown, context: ClassFieldDecoratorContext) {
    const fieldName = String(context.name);
    if (choiceDataTypes.length > 0) {
      // Verify choiceDataTypes contain valid, non-duplicate values
      const choiceDataTypeSet = new Set(choiceDataTypes);
      assert(
        choiceDataTypes.length === choiceDataTypeSet.size,
        `ChoiceDataTypesMeta decorator on ${fieldName} (${sourceField}) contains duplicate choiceDataTypes`,
      );
      assert(
        choiceDataTypes.every((choiceDt) => DATA_TYPES.includes(choiceDt)),
        `ChoiceDataTypesMeta decorator on ${fieldName} (${sourceField}) contains invalid choiceDataTypes`,
      );
    }

    const choiceTypes = ((context.metadata[CHOICE_DATA_TYPES] as ChoiceDatatypeDef[] | undefined) ??=
      [] as ChoiceDatatypeDef[]);

    const choiceType: ChoiceDatatypeDef = {
      fieldName: String(context.name),
      fieldTypes: choiceDataTypes,
    };
    choiceTypes.push(choiceType);
  };
}

/**
 * Factory function for ChoiceDataTypes decorator for polymorphic (i.e., value[x]) data type "set"/"add" methods
 *
 * @remarks
 * This decorator validates the data type of the provided "set"/"add" method argument against the list
 * of the provided choiceDataTypes. The choiceDataTypes are expressed as FHIR primitive and/or
 * complex data type names. These values are available in each data type class as `instance.fhirType()`.
 *
 * NOTE: This decorator depends on the ChoiceDataTypesMeta decorator(...) decorator!
 *
 * @param sourceField - source field name
 * @returns ChoiceDataTypes decorator
 * @throws AssertionError for invalid uses (Decorator)
 * @throws InvalidTypeError for actual choice data type does not agree with the specified choiceDataTypes (Decorator)
 *
 * @see {@link ChoiceDataTypesMeta}
 * @category Decorators
 */
export function ChoiceDataTypes(sourceField: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    return function (this: This, ...args: Args): Return {
      const methodName = String(context.name);

      assert(
        args.length === 1 && (args[0] === undefined || args[0] === null || args[0] instanceof DataType),
        `ChoiceDataTypes decorator on ${methodName} (${sourceField}) expects a single argument to be type of 'DataType | undefined | null'`,
      );
      // undefined supports optional argument while null supports required argument
      const value = args[0] as IDataType | undefined | null;

      // Return the original function if there is nothing for this decorator to do:
      // - Decorator should only be used on a method defined as:
      //   `public set[PropertyName](value: DataType | undefined): this`
      //   `public add[PropertyName](value: DataType | undefined): this`
      // - value is undefined or null
      if (!(methodName.startsWith('set') || methodName.startsWith('add')) || value === undefined || value === null) {
        return originalMethod.call(this, ...args);
      }

      assert(
        context.metadata[CHOICE_DATA_TYPES],
        `ChoiceDataTypes decorator on ${methodName} (${sourceField}) expects 'context.metadata[CHOICE_DATA_TYPES]' to be defined`,
      );
      const fieldName = lowerFirst(methodName.substring(3));
      const choiceDataTypes: FhirDataType[] = getChoiceDatatypeDefsForField(context.metadata, fieldName);

      // No choiceDataTypes indicates "any" Datatype is acceptable (nothing for this decorator to validate),
      // so return the original function
      if (choiceDataTypes.length === 0) {
        return originalMethod.call(this, ...args);
      }

      const isValidChoiceDataType = choiceDataTypes.some((choiceDt) => value.fhirType() === choiceDt);
      if (!isValidChoiceDataType) {
        throw new InvalidTypeError(
          `ChoiceDataTypes decorator on ${methodName} (${sourceField}) expects the 'value' argument type (${value.fhirType()}) to be a supported DataType`,
        );
      }

      return originalMethod.call(this, ...args);
    };
  };
}

/**
 * Factory function for OpenDataTypesMeta decorator for open data type fields
 *
 * @remarks
 * This decorator collects the open data type field names and stores it in the decorator 'metadata' object
 * in the `OpenDatatypeFields` property. This property is an array of `string` ({ fieldName; fieldNames })
 * values having one array item for each open data type field.
 *
 * @param sourceField - source field name
 * @returns OpenDataTypesMeta decorator
 *
 * @category Decorators
 */
export function OpenDataTypesMeta(sourceField: string) {
  return function (_target: unknown, context: ClassFieldDecoratorContext) {
    const openDatatypeFields = ((context.metadata[OPEN_DATA_TYPE_FIELDS] as string[] | undefined) ??= [] as string[]);

    openDatatypeFields.push(sourceField);
  };
}

/**
 * Factory function for ReferenceTargets decorator.
 *
 * @remarks
 * This decorator validates the provided Reference.reference value for relative or absolute
 * references are only for the defined ElementDefinition's 'targetProfile' value(s).
 *
 * @param sourceField - source field name
 * @param referenceTargets - string array of target references.
 *                           An empty array is allowed and represents "Any" resource.
 * @returns ReferenceTargets decorator
 * @throws AssertionError for invalid uses
 * @throws InvalidTypeError for an actual reference type do not agree with the specified ReferenceTargets
 *
 * @category Decorators
 */
export function ReferenceTargets(sourceField: string, referenceTargets: string[]) {
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
 * Validate the Reference value throwing an InvalidTypeError if it is not valid. Only used by the
 * ReferenceTargets decorator function.
 *
 * @param referenceTargets - string array of target references.
 * @param argValue - Argument value from original decorated function
 * @param isAnyResource - true if referenceTargets array is empty
 * @param sourceField - source field name
 * @param methodName - Decorated method's name
 * @param arrayIndex - Argument for Reference[] index value; undefined for non-array
 * @throws InvalidTypeError if Reference.reference exists with an invalid value
 */
function validateReferenceArg(
  referenceTargets: string[],
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
  // - The referenceTargets array should have at least one valid FHIR reference type value
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
