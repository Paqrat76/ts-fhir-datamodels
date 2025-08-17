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

import {
  BackboneElement,
  BackboneType,
  Base,
  CodeType,
  DomainResource,
  Element,
  IBackboneElement,
  IBackboneType,
  IDataType,
  IDomainResource,
  IdType,
  IElement,
  IResource,
  Resource,
  UriType,
} from '@paq-ts-fhir/fhir-core';
import { Extension, Meta, Narrative } from '../src/complex-types/complex-datatypes';
import { TestData } from './ftest-data';
import {
  VALID_EXTENSION,
  VALID_EXTENSION_2,
  VALID_META,
  VALID_META_2,
  VALID_MODIFIER_EXTENSION,
  VALID_MODIFIER_EXTENSION_2,
  VALID_NARRATIVE,
  VALID_NARRATIVE_2,
} from './ftest-mocks';

/* eslint-disable jsdoc/require-jsdoc */

export function expectResourceBase(testModel: IResource, testInstance: IResource, modelName: string): void {
  expect(testInstance).toBeDefined();
  expect(testInstance).toBeInstanceOf(testModel);
  expect(testInstance).toBeInstanceOf(Resource);
  expect(testInstance).toBeInstanceOf(Base);
  expect(testInstance.constructor.name).toStrictEqual(modelName);
  expect(testInstance.resourceType()).toStrictEqual(modelName);
  expect(testInstance.fhirType()).toStrictEqual(modelName);
}

export function expectDomainResourceBase(
  testModel: IDomainResource,
  testInstance: IDomainResource,
  modelName: string,
): void {
  expect(testInstance).toBeDefined();
  expect(testInstance).toBeInstanceOf(testModel);
  expect(testInstance).toBeInstanceOf(DomainResource);
  expect(testInstance).toBeInstanceOf(Resource);
  expect(testInstance).toBeInstanceOf(Base);
  expect(testInstance.constructor.name).toStrictEqual(modelName);
  expect(testInstance.resourceType()).toStrictEqual(modelName);
  expect(testInstance.fhirType()).toStrictEqual(modelName);
}

export function expectBackboneElementBase(
  testModel: IBackboneElement,
  testInstance: IBackboneElement,
  modelName: string,
  fhirType: string,
): void {
  expect(testInstance).toBeDefined();
  expect(testInstance).toBeInstanceOf(testModel);
  expect(testInstance).toBeInstanceOf(BackboneElement);
  expect(testInstance).toBeInstanceOf(Element);
  expect(testInstance).toBeInstanceOf(Base);
  expect(testInstance.constructor.name).toStrictEqual(modelName);
  expect(testInstance.fhirType()).toStrictEqual(fhirType);
}

export function expectBackboneTypeBase(
  testModel: IBackboneType,
  testInstance: IBackboneType,
  modelName: string,
  fhirType: string,
): void {
  expect(testInstance).toBeDefined();
  expect(testInstance).toBeInstanceOf(testModel);
  expect(testInstance).toBeInstanceOf(BackboneType);
  expect(testInstance).toBeInstanceOf(Element);
  expect(testInstance).toBeInstanceOf(Base);
  expect(testInstance.constructor.name).toStrictEqual(modelName);
  expect(testInstance.fhirType()).toStrictEqual(fhirType);
}

export function expectElementBase(
  testModel: IElement,
  testInstance: IDataType,
  modelName: string,
  fhirType: string,
): void {
  expect(testInstance).toBeDefined();
  expect(testInstance).toBeInstanceOf(testModel);
  expect(testInstance).toBeInstanceOf(Element);
  expect(testInstance).toBeInstanceOf(Base);
  expect(testInstance.constructor.name).toStrictEqual(modelName);
  expect(testInstance.fhirType()).toStrictEqual(fhirType);
}

export function expectUndefinedResourceProperties(testInstance: IResource): void {
  expect(testInstance.hasIdElement()).toBe(false);
  expect(testInstance.getIdElement()).toEqual(new IdType());
  expect(testInstance.hasId()).toBe(false);
  expect(testInstance.getId()).toBeUndefined();
  expect(testInstance.hasMeta()).toBe(false);
  expect(testInstance.getMeta()).toEqual(new Meta());
  expect(testInstance.hasImplicitRulesElement()).toBe(false);
  expect(testInstance.getImplicitRulesElement()).toEqual(new UriType());
  expect(testInstance.hasImplicitRules()).toBe(false);
  expect(testInstance.getImplicitRules()).toBeUndefined();
  expect(testInstance.hasLanguageElement()).toBe(false);
  expect(testInstance.getLanguageElement()).toEqual(new CodeType());
  expect(testInstance.hasLanguage()).toBe(false);
  expect(testInstance.getLanguage()).toBeUndefined();
}

export function expectUndefinedDomainResourceProperties(testInstance: IDomainResource): void {
  expectUndefinedResourceProperties(testInstance);
  expect(testInstance.hasText()).toBe(false);
  expect(testInstance.getText()).toEqual(new Narrative(null, null));
  expect(testInstance.hasContained()).toBe(false);
  expect(testInstance.getContained()).toEqual([] as Resource[]);
  expect(testInstance.hasExtension()).toBe(false);
  expect(testInstance.getExtension()).toEqual([] as Extension[]);
  expect(testInstance.hasModifierExtension()).toBe(false);
  expect(testInstance.getModifierExtension()).toEqual([] as Extension[]);
}

export function expectUndefinedElementProperties(testInstance: IElement): void {
  expect(testInstance.hasId()).toBe(false);
  expect(testInstance.getId()).toBeUndefined();
  expect(testInstance.hasExtension()).toBe(false);
  expect(testInstance.getExtension()).toEqual([] as Extension[]);
}

export function expectUndefinedBackboneElementProperties(testInstance: IBackboneElement): void {
  expectUndefinedElementProperties(testInstance);
  // expect(testInstance.hasId()).toBe(false);
  // expect(testInstance.getId()).toBeUndefined();
  // expect(testInstance.hasExtension()).toBe(false);
  // expect(testInstance.getExtension()).toEqual([] as Extension[]);
  expect(testInstance.hasModifierExtension()).toBe(false);
  expect(testInstance.getModifierExtension()).toEqual([] as Extension[]);
}

export function expectUndefinedBackboneTypeProperties(testInstance: IBackboneType): void {
  expectUndefinedElementProperties(testInstance);
  // expect(testInstance.hasId()).toBe(false);
  // expect(testInstance.getId()).toBeUndefined();
  // expect(testInstance.hasExtension()).toBe(false);
  // expect(testInstance.getExtension()).toEqual([] as Extension[]);
  expect(testInstance.hasModifierExtension()).toBe(false);
  expect(testInstance.getModifierExtension()).toEqual([] as Extension[]);
}

export function initializeResourceProperties(testInstance: IResource): void {
  testInstance.setId(TestData.VALID_ID);
  testInstance.setMeta(VALID_META);
  testInstance.setImplicitRules(TestData.IMPLICIT_RULES_VALUE);
  testInstance.setLanguage(TestData.LANGUAGE_VALUE);
}

export function initializeDomainResourceProperties(
  testInstance: IDomainResource,
  numExt: 1 | 2,
  containedModel?: IResource,
): void {
  testInstance.setId(TestData.VALID_ID);
  testInstance.setMeta(VALID_META);
  testInstance.setImplicitRules(TestData.IMPLICIT_RULES_VALUE);
  testInstance.setLanguage(TestData.LANGUAGE_VALUE);
  testInstance.setText(VALID_NARRATIVE);
  testInstance.setContained(TestData.UNDEFINED_VALUE);
  if (containedModel) {
    testInstance.addContained(containedModel);
  }
  const extensions: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  testInstance.setExtension(extensions);
  const modExtensions: Extension[] =
    numExt === 1 ? [VALID_MODIFIER_EXTENSION] : [VALID_MODIFIER_EXTENSION, VALID_MODIFIER_EXTENSION_2];
  testInstance.setModifierExtension(modExtensions);
}

export function initializeElementProperties(testInstance: IElement, numExt: 1 | 2): void {
  testInstance.setId(TestData.VALID_ID);
  const extensions: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  testInstance.setExtension(extensions);
}

export function initializeBackboneElementProperties(testInstance: IBackboneElement, numExt: 1 | 2): void {
  initializeElementProperties(testInstance, numExt);
  // testInstance.setId(TestData.VALID_ID);
  // const extensions: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  // testInstance.setExtension(extensions);
  const modExtensions: Extension[] =
    numExt === 1 ? [VALID_MODIFIER_EXTENSION] : [VALID_MODIFIER_EXTENSION, VALID_MODIFIER_EXTENSION_2];
  testInstance.setModifierExtension(modExtensions);
}

export function initializeBackboneTypeProperties(testInstance: IBackboneType, numExt: 1 | 2): void {
  initializeElementProperties(testInstance, numExt);
  // testInstance.setId(TestData.VALID_ID);
  // const extensions: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  // testInstance.setExtension(extensions);
  const modExtensions: Extension[] =
    numExt === 1 ? [VALID_MODIFIER_EXTENSION] : [VALID_MODIFIER_EXTENSION, VALID_MODIFIER_EXTENSION_2];
  testInstance.setModifierExtension(modExtensions);
}

export function resetResourceProperties(testInstance: IResource): void {
  testInstance.setId(TestData.VALID_ID_2);
  testInstance.setMeta(VALID_META_2);
  testInstance.setImplicitRules(TestData.IMPLICIT_RULES_VALUE_2);
  testInstance.setLanguage(TestData.LANGUAGE_VALUE_2);
}

export function resetDomainResourceProperties(testInstance: IDomainResource): void {
  testInstance.setId(TestData.VALID_ID_2);
  testInstance.setMeta(VALID_META_2);
  testInstance.setImplicitRules(TestData.IMPLICIT_RULES_VALUE_2);
  testInstance.setLanguage(TestData.LANGUAGE_VALUE_2);
  testInstance.setText(VALID_NARRATIVE_2);
  testInstance.setContained(TestData.UNDEFINED_VALUE);
  testInstance.setExtension([VALID_EXTENSION_2]);
  testInstance.setModifierExtension([VALID_MODIFIER_EXTENSION_2]);
}

export function resetElementProperties(testInstance: IElement): void {
  testInstance.setId(TestData.VALID_ID_2);
  testInstance.setExtension([VALID_EXTENSION_2]);
}

export function resetBackboneElementProperties(testInstance: IBackboneElement): void {
  resetElementProperties(testInstance);
  // testInstance.setId(TestData.VALID_ID_2);
  // testInstance.setExtension([VALID_EXTENSION_2]);
  testInstance.setModifierExtension([VALID_MODIFIER_EXTENSION_2]);
}

export function resetBackboneTypeProperties(testInstance: IBackboneType): void {
  resetElementProperties(testInstance);
  // testInstance.setId(TestData.VALID_ID_2);
  // testInstance.setExtension([VALID_EXTENSION_2]);
  testInstance.setModifierExtension([VALID_MODIFIER_EXTENSION_2]);
}

export function undefineResourceProperties(testInstance: IResource): void {
  testInstance.setId(TestData.UNDEFINED_VALUE);
  testInstance.setMeta(TestData.UNDEFINED_VALUE);
  testInstance.setImplicitRules(TestData.UNDEFINED_VALUE);
  testInstance.setLanguage(TestData.UNDEFINED_VALUE);
}

export function undefineDomainResourceProperties(testInstance: IDomainResource): void {
  testInstance.setId(TestData.UNDEFINED_VALUE);
  testInstance.setMeta(TestData.UNDEFINED_VALUE);
  testInstance.setImplicitRules(TestData.UNDEFINED_VALUE);
  testInstance.setLanguage(TestData.UNDEFINED_VALUE);
  testInstance.setText(TestData.UNDEFINED_VALUE);
  testInstance.setContained(TestData.UNDEFINED_VALUE);
  testInstance.setExtension(TestData.UNDEFINED_VALUE);
  testInstance.setModifierExtension(TestData.UNDEFINED_VALUE);
}

export function undefineElementProperties(testInstance: IElement): void {
  testInstance.setId(TestData.UNDEFINED_VALUE);
  testInstance.setExtension(TestData.UNDEFINED_VALUE);
}

export function undefineBackboneElementProperties(testInstance: IBackboneElement): void {
  undefineElementProperties(testInstance);
  // testInstance.setId(TestData.UNDEFINED_VALUE);
  // testInstance.setExtension(TestData.UNDEFINED_VALUE);
  testInstance.setModifierExtension(TestData.UNDEFINED_VALUE);
}

export function undefineBackboneTypeProperties(testInstance: IBackboneType): void {
  undefineElementProperties(testInstance);
  // testInstance.setId(TestData.UNDEFINED_VALUE);
  // testInstance.setExtension(TestData.UNDEFINED_VALUE);
  testInstance.setModifierExtension(TestData.UNDEFINED_VALUE);
}

export function expectInitializedResourceProperties(testInstance: IResource): void {
  expect(testInstance.hasIdElement()).toBe(true);
  expect(testInstance.getIdElement()).toEqual(TestData.VALID_ID_TYPE);
  expect(testInstance.hasId()).toBe(true);
  expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID);
  expect(testInstance.hasMeta()).toBe(true);
  expect(testInstance.getMeta()).toEqual(VALID_META);
  expect(testInstance.hasImplicitRulesElement()).toBe(true);
  expect(testInstance.getImplicitRulesElement()).toEqual(new UriType(TestData.IMPLICIT_RULES_VALUE));
  expect(testInstance.hasImplicitRules()).toBe(true);
  expect(testInstance.getImplicitRules()).toStrictEqual(TestData.IMPLICIT_RULES_VALUE);
  expect(testInstance.hasLanguageElement()).toBe(true);
  expect(testInstance.getLanguageElement()).toEqual(new CodeType(TestData.LANGUAGE_VALUE));
  expect(testInstance.hasLanguage()).toBe(true);
  expect(testInstance.getLanguage()).toStrictEqual(TestData.LANGUAGE_VALUE);
}

export function expectInitializedDomainResourceProperties(
  testInstance: IDomainResource,
  numExt: 1 | 2,
  containedModel?: IResource,
): void {
  expectInitializedResourceProperties(testInstance);
  expect(testInstance.hasText()).toBe(true);
  expect(testInstance.getText()).toEqual(VALID_NARRATIVE);
  if (containedModel) {
    expect(testInstance.hasContained()).toBe(true);
    expect(testInstance.getContained()).toEqual([containedModel]);
  } else {
    expect(testInstance.hasContained()).toBe(false);
    expect(testInstance.getContained()).toEqual([] as Resource[]);
  }
  expect(testInstance.hasExtension()).toBe(true);
  const expectedExt: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  expect(testInstance.getExtension()).toEqual(expectedExt);
  expect(testInstance.hasModifierExtension()).toBe(true);
  const expectedModExt: Extension[] =
    numExt === 1 ? [VALID_MODIFIER_EXTENSION] : [VALID_MODIFIER_EXTENSION, VALID_MODIFIER_EXTENSION_2];
  expect(testInstance.getModifierExtension()).toEqual(expectedModExt);
}

export function expectInitializedElementProperties(testInstance: IElement, numExt: 1 | 2): void {
  expect(testInstance.hasId()).toBe(true);
  expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID);
  expect(testInstance.hasExtension()).toBe(true);
  const expectedExt: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  expect(testInstance.getExtension()).toEqual(expectedExt);
}

export function expectInitializedBackboneElementProperties(testInstance: IBackboneElement, numExt: 1 | 2): void {
  expectInitializedElementProperties(testInstance, numExt);
  // expect(testInstance.hasId()).toBe(true);
  // expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID);
  // expect(testInstance.hasExtension()).toBe(true);
  // const expectedExt: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  // expect(testInstance.getExtension()).toEqual(expectedExt);
  expect(testInstance.hasModifierExtension()).toBe(true);
  const expectedModExt: Extension[] =
    numExt === 1 ? [VALID_MODIFIER_EXTENSION] : [VALID_MODIFIER_EXTENSION, VALID_MODIFIER_EXTENSION_2];
  expect(testInstance.getModifierExtension()).toEqual(expectedModExt);
}

export function expectInitializedBackboneTypeProperties(testInstance: IBackboneType, numExt: 1 | 2): void {
  expectInitializedElementProperties(testInstance, numExt);
  // expect(testInstance.hasId()).toBe(true);
  // expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID);
  // expect(testInstance.hasExtension()).toBe(true);
  // const expectedExt: Extension[] = numExt === 1 ? [VALID_EXTENSION] : [VALID_EXTENSION, VALID_EXTENSION_2];
  // expect(testInstance.getExtension()).toEqual(expectedExt);
  expect(testInstance.hasModifierExtension()).toBe(true);
  const expectedModExt: Extension[] =
    numExt === 1 ? [VALID_MODIFIER_EXTENSION] : [VALID_MODIFIER_EXTENSION, VALID_MODIFIER_EXTENSION_2];
  expect(testInstance.getModifierExtension()).toEqual(expectedModExt);
}

export function expectResetResourceProperties(testInstance: IResource): void {
  expect(testInstance.hasIdElement()).toBe(true);
  expect(testInstance.getIdElement()).toEqual(TestData.VALID_ID_TYPE_2);
  expect(testInstance.hasId()).toBe(true);
  expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID_2);
  expect(testInstance.hasMeta()).toBe(true);
  expect(testInstance.getMeta()).toEqual(VALID_META_2);
  expect(testInstance.hasImplicitRulesElement()).toBe(true);
  expect(testInstance.getImplicitRulesElement()).toEqual(new UriType(TestData.IMPLICIT_RULES_VALUE_2));
  expect(testInstance.hasImplicitRules()).toBe(true);
  expect(testInstance.getImplicitRules()).toStrictEqual(TestData.IMPLICIT_RULES_VALUE_2);
  expect(testInstance.hasLanguageElement()).toBe(true);
  expect(testInstance.getLanguageElement()).toEqual(new CodeType(TestData.LANGUAGE_VALUE_2));
  expect(testInstance.hasLanguage()).toBe(true);
  expect(testInstance.getLanguage()).toStrictEqual(TestData.LANGUAGE_VALUE_2);
}

export function expectResetDomainResourceProperties(testInstance: IDomainResource): void {
  expectResetResourceProperties(testInstance);
  expect(testInstance.hasText()).toBe(true);
  expect(testInstance.getText()).toEqual(VALID_NARRATIVE_2);
  expect(testInstance.hasContained()).toBe(false);
  expect(testInstance.getContained()).toEqual([] as Resource[]);
  expect(testInstance.hasExtension()).toBe(true);
  expect(testInstance.getExtension()).toEqual([VALID_EXTENSION_2]);
  expect(testInstance.hasModifierExtension()).toBe(true);
  expect(testInstance.getModifierExtension()).toEqual([VALID_MODIFIER_EXTENSION_2]);
}

export function expectResetElementProperties(testInstance: IElement): void {
  expect(testInstance.hasId()).toBe(true);
  expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID_2);
  expect(testInstance.hasExtension()).toBe(true);
  expect(testInstance.getExtension()).toEqual([VALID_EXTENSION_2]);
}

export function expectResetBackboneElementProperties(testInstance: IBackboneElement): void {
  expectResetElementProperties(testInstance);
  // expect(testInstance.hasId()).toBe(true);
  // expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID_2);
  // expect(testInstance.hasExtension()).toBe(true);
  // expect(testInstance.getExtension()).toEqual([VALID_EXTENSION_2]);
  expect(testInstance.hasModifierExtension()).toBe(true);
  expect(testInstance.getModifierExtension()).toEqual([VALID_MODIFIER_EXTENSION_2]);
}

export function expectResetBackboneTypeProperties(testInstance: IBackboneType): void {
  expectResetElementProperties(testInstance);
  // expect(testInstance.hasId()).toBe(true);
  // expect(testInstance.getId()).toStrictEqual(TestData.VALID_ID_2);
  // expect(testInstance.hasExtension()).toBe(true);
  // expect(testInstance.getExtension()).toEqual([VALID_EXTENSION_2]);
  expect(testInstance.hasModifierExtension()).toBe(true);
  expect(testInstance.getModifierExtension()).toEqual([VALID_MODIFIER_EXTENSION_2]);
}

/* eslint-enable jsdoc/require-jsdoc */
