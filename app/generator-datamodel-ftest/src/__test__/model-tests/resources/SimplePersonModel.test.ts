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
  Base,
  CodeType,
  DomainResource,
  IdType,
  InvalidTypeError,
  PrimitiveTypeError,
  Resource,
  StringType,
  UriType,
} from '@paq-ts-fhir/fhir-core';
import { Address, Extension, HumanName, Identifier, Meta, Narrative } from 'gensrc/complex-types/complex-datatypes';
import { SimplePersonModel } from 'gensrc/resources/SimplePersonModel';
import { TestData } from '../../ftest-data';

describe('SimplePersonModel', () => {
  const VALID_META = new Meta();
  VALID_META.setLastUpdated(TestData.VALID_DATETIME);
  const VALID_META_2 = new Meta();
  VALID_META_2.setLastUpdated(TestData.VALID_DATETIME_2);

  const VALID_NARRATIVE = new Narrative(TestData.VALID_CODE_GENERATED, TestData.VALID_XHTML);
  const VALID_NARRATIVE_2 = new Narrative(TestData.VALID_CODE_ADDITIONAL, TestData.VALID_XHTML_2);

  const VALID_EXTENSION = new Extension('extUrl');
  VALID_EXTENSION.setValue(new StringType('Extension string value'));
  const VALID_EXTENSION_2 = new Extension('extUrl2');
  VALID_EXTENSION_2.setValue(new StringType('Extension string value two'));

  const VALID_MODIFIER_EXTENSION = new Extension('modExtUrl');
  VALID_MODIFIER_EXTENSION.setValue(new StringType('Modifier Extension string value'));
  const VALID_MODIFIER_EXTENSION_2 = new Extension('modExtUrl2');
  VALID_MODIFIER_EXTENSION_2.setValue(new StringType('Modifier Extension string value two'));

  const VALID_IDENTIFIER = new Identifier();
  VALID_IDENTIFIER.setSystem(TestData.VALID_SYSTEM);
  VALID_IDENTIFIER.setValue(TestData.VALID_STRING);
  const VALID_IDENTIFIER_2 = new Identifier();
  VALID_IDENTIFIER_2.setSystem(TestData.VALID_SYSTEM_2);
  VALID_IDENTIFIER_2.setValue(TestData.VALID_STRING_2);

  const VALID_HUMAN_NAME = new HumanName();
  VALID_HUMAN_NAME.setFamily(TestData.VALID_FAMILY);
  VALID_HUMAN_NAME.setGiven([TestData.VALID_FIRST_NAME, TestData.VALID_MIDDLE_NAME]);
  VALID_HUMAN_NAME.addPrefix(TestData.VALID_PREFIX);
  VALID_HUMAN_NAME.addSuffix(TestData.VALID_SUFFIX);
  const VALID_HUMAN_NAME_2 = new HumanName();
  VALID_HUMAN_NAME_2.setFamily(TestData.VALID_FAMILY_2);
  VALID_HUMAN_NAME_2.setGiven([TestData.VALID_FIRST_NAME_2, TestData.VALID_MIDDLE_NAME_2]);
  VALID_HUMAN_NAME_2.addPrefix(TestData.VALID_PREFIX_2);
  VALID_HUMAN_NAME_2.addSuffix(TestData.VALID_SUFFIX_2);

  const VALID_ADDRESS = new Address();
  VALID_ADDRESS.setUse(TestData.VALID_USE_HOME);
  VALID_ADDRESS.setType(TestData.VALID_TYPE_POSTAL);
  VALID_ADDRESS.setLine([TestData.VALID_LINE_A, TestData.VALID_LINE_B]);
  VALID_ADDRESS.setCity(TestData.VALID_CITY);
  VALID_ADDRESS.setState(TestData.VALID_STATE);
  VALID_ADDRESS.setPostalCode(TestData.VALID_POSTAL);
  VALID_ADDRESS.setCountry(TestData.VALID_COUNTRY);
  const VALID_ADDRESS_2 = new Address();
  VALID_ADDRESS_2.setUse(TestData.VALID_USE_WORK);
  VALID_ADDRESS_2.setType(TestData.VALID_TYPE_PHYSICAL);
  VALID_ADDRESS_2.setLine([TestData.VALID_LINE_A_2, TestData.VALID_LINE_B_2]);
  VALID_ADDRESS_2.setCity(TestData.VALID_CITY_2);
  VALID_ADDRESS_2.setState(TestData.VALID_STATE_2);
  VALID_ADDRESS_2.setPostalCode(TestData.VALID_POSTAL_2);
  VALID_ADDRESS_2.setCountry(TestData.VALID_COUNTRY);

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testSimplePersonModel = new SimplePersonModel();

      expect(testSimplePersonModel).toBeDefined();
      expect(testSimplePersonModel).toBeInstanceOf(SimplePersonModel);
      expect(testSimplePersonModel).toBeInstanceOf(DomainResource);
      expect(testSimplePersonModel).toBeInstanceOf(Resource);
      expect(testSimplePersonModel).toBeInstanceOf(Base);
      expect(testSimplePersonModel.constructor.name).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.resourceType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.fhirType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.isEmpty()).toBe(true);
      expect(testSimplePersonModel.toJSON()).toBeUndefined();

      // inherited properties from Resource/DomainResource
      expect(testSimplePersonModel.hasIdElement()).toBe(false);
      expect(testSimplePersonModel.getIdElement()).toEqual(new IdType());
      expect(testSimplePersonModel.hasId()).toBe(false);
      expect(testSimplePersonModel.getId()).toBeUndefined();
      expect(testSimplePersonModel.hasMeta()).toBe(false);
      expect(testSimplePersonModel.getMeta()).toEqual(new Meta());
      expect(testSimplePersonModel.hasImplicitRulesElement()).toBe(false);
      expect(testSimplePersonModel.getImplicitRulesElement()).toEqual(new UriType());
      expect(testSimplePersonModel.hasImplicitRules()).toBe(false);
      expect(testSimplePersonModel.getImplicitRules()).toBeUndefined();
      expect(testSimplePersonModel.hasLanguageElement()).toBe(false);
      expect(testSimplePersonModel.getLanguageElement()).toEqual(new CodeType());
      expect(testSimplePersonModel.hasLanguage()).toBe(false);
      expect(testSimplePersonModel.getLanguage()).toBeUndefined();
      expect(testSimplePersonModel.hasText()).toBe(false);
      expect(testSimplePersonModel.getText()).toEqual(new Narrative(null, null));
      expect(testSimplePersonModel.hasContained()).toBe(false);
      expect(testSimplePersonModel.getContained()).toEqual([] as Resource[]);
      expect(testSimplePersonModel.hasExtension()).toBe(false);
      expect(testSimplePersonModel.getExtension()).toEqual([] as Extension[]);
      expect(testSimplePersonModel.hasModifierExtension()).toBe(false);
      expect(testSimplePersonModel.getModifierExtension()).toEqual([] as Extension[]);

      // SimplePersonModel properties
      expect(testSimplePersonModel.hasIdentifier()).toBe(false);
      expect(testSimplePersonModel.getIdentifier()).toEqual(new Identifier());
      expect(testSimplePersonModel.hasName()).toBe(false);
      expect(testSimplePersonModel.getName()).toEqual(new HumanName());
      expect(testSimplePersonModel.hasAddress()).toBe(false);
      expect(testSimplePersonModel.getAddress()).toEqual([] as Address[]);
      expect(testSimplePersonModel.hasPhoneElement()).toBe(false);
      expect(testSimplePersonModel.getPhoneElement()).toEqual(new StringType());
      expect(testSimplePersonModel.hasPhone()).toBe(false);
      expect(testSimplePersonModel.getPhone()).toBeUndefined();
    });

    it('should properly copy()', () => {
      const simplePersonModel = new SimplePersonModel();

      simplePersonModel.setId(TestData.VALID_ID);
      simplePersonModel.setMeta(VALID_META);
      simplePersonModel.setImplicitRules(TestData.IMPLICIT_RULES_VALUE);
      simplePersonModel.setLanguage(TestData.LANGUAGE_VALUE);
      simplePersonModel.setText(VALID_NARRATIVE);
      simplePersonModel.setContained(TestData.UNDEFINED_VALUE);
      simplePersonModel.setExtension([VALID_EXTENSION]);
      simplePersonModel.setModifierExtension([VALID_MODIFIER_EXTENSION]);

      simplePersonModel.setIdentifier(VALID_IDENTIFIER);
      simplePersonModel.setName(VALID_HUMAN_NAME);
      simplePersonModel.setAddress([VALID_ADDRESS]);
      simplePersonModel.setPhoneElement(new StringType(TestData.VALID_PHONE));

      let testSimplePersonModel = simplePersonModel.copy();

      expect(testSimplePersonModel).toBeDefined();
      expect(testSimplePersonModel).toBeInstanceOf(SimplePersonModel);
      expect(testSimplePersonModel).toBeInstanceOf(DomainResource);
      expect(testSimplePersonModel).toBeInstanceOf(Resource);
      expect(testSimplePersonModel).toBeInstanceOf(Base);
      expect(testSimplePersonModel.constructor.name).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.resourceType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.fhirType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.isEmpty()).toBe(false);
      expect(testSimplePersonModel.toJSON()).toBeDefined();

      // inherited properties from Resource/DomainResource
      expect(testSimplePersonModel.hasIdElement()).toBe(true);
      expect(testSimplePersonModel.getIdElement()).toEqual(TestData.VALID_ID_TYPE);
      expect(testSimplePersonModel.hasId()).toBe(true);
      expect(testSimplePersonModel.getId()).toStrictEqual(TestData.VALID_ID);
      expect(testSimplePersonModel.hasMeta()).toBe(true);
      expect(testSimplePersonModel.getMeta()).toEqual(VALID_META);
      expect(testSimplePersonModel.hasImplicitRulesElement()).toBe(true);
      expect(testSimplePersonModel.getImplicitRulesElement()).toEqual(new UriType(TestData.IMPLICIT_RULES_VALUE));
      expect(testSimplePersonModel.hasImplicitRules()).toBe(true);
      expect(testSimplePersonModel.getImplicitRules()).toStrictEqual(TestData.IMPLICIT_RULES_VALUE);
      expect(testSimplePersonModel.hasLanguageElement()).toBe(true);
      expect(testSimplePersonModel.getLanguageElement()).toEqual(new CodeType(TestData.LANGUAGE_VALUE));
      expect(testSimplePersonModel.hasLanguage()).toBe(true);
      expect(testSimplePersonModel.getLanguage()).toStrictEqual(TestData.LANGUAGE_VALUE);
      expect(testSimplePersonModel.hasText()).toBe(true);
      expect(testSimplePersonModel.getText()).toEqual(VALID_NARRATIVE);
      expect(testSimplePersonModel.hasContained()).toBe(false);
      expect(testSimplePersonModel.getContained()).toEqual([] as Resource[]);
      expect(testSimplePersonModel.hasExtension()).toBe(true);
      expect(testSimplePersonModel.getExtension()).toEqual([VALID_EXTENSION]);
      expect(testSimplePersonModel.hasModifierExtension()).toBe(true);
      expect(testSimplePersonModel.getModifierExtension()).toEqual([VALID_MODIFIER_EXTENSION]);

      // SimplePersonModel properties
      expect(testSimplePersonModel.hasIdentifier()).toBe(true);
      expect(testSimplePersonModel.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testSimplePersonModel.hasName()).toBe(true);
      expect(testSimplePersonModel.getName()).toEqual(VALID_HUMAN_NAME);
      expect(testSimplePersonModel.hasAddress()).toBe(true);
      expect(testSimplePersonModel.getAddress()).toEqual([VALID_ADDRESS]);
      expect(testSimplePersonModel.hasPhoneElement()).toBe(true);
      expect(testSimplePersonModel.getPhoneElement()).toEqual(TestData.VALID_PHONE_TYPE);
      expect(testSimplePersonModel.hasPhone()).toBe(true);
      expect(testSimplePersonModel.getPhone()).toStrictEqual(TestData.VALID_PHONE);

      // Reset to undefined

      simplePersonModel.setId(TestData.UNDEFINED_VALUE);
      simplePersonModel.setMeta(TestData.UNDEFINED_VALUE);
      simplePersonModel.setImplicitRules(TestData.UNDEFINED_VALUE);
      simplePersonModel.setLanguage(TestData.UNDEFINED_VALUE);
      simplePersonModel.setText(TestData.UNDEFINED_VALUE);
      simplePersonModel.setContained(TestData.UNDEFINED_VALUE);
      simplePersonModel.setExtension(TestData.UNDEFINED_VALUE);
      simplePersonModel.setModifierExtension(TestData.UNDEFINED_VALUE);

      simplePersonModel.setIdentifier(TestData.UNDEFINED_VALUE);
      simplePersonModel.setName(TestData.UNDEFINED_VALUE);
      simplePersonModel.setAddress(TestData.UNDEFINED_VALUE);
      simplePersonModel.setPhoneElement(TestData.UNDEFINED_VALUE);

      testSimplePersonModel = simplePersonModel.copy();

      expect(testSimplePersonModel).toBeDefined();
      expect(testSimplePersonModel).toBeInstanceOf(SimplePersonModel);
      expect(testSimplePersonModel).toBeInstanceOf(DomainResource);
      expect(testSimplePersonModel).toBeInstanceOf(Resource);
      expect(testSimplePersonModel).toBeInstanceOf(Base);
      expect(testSimplePersonModel.constructor.name).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.resourceType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.fhirType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.isEmpty()).toBe(true);
      expect(testSimplePersonModel.toJSON()).toBeUndefined();

      // inherited properties from Resource/DomainResource
      expect(testSimplePersonModel.hasIdElement()).toBe(false);
      expect(testSimplePersonModel.getIdElement()).toEqual(new IdType());
      expect(testSimplePersonModel.hasId()).toBe(false);
      expect(testSimplePersonModel.getId()).toBeUndefined();
      expect(testSimplePersonModel.hasMeta()).toBe(false);
      expect(testSimplePersonModel.getMeta()).toEqual(new Meta());
      expect(testSimplePersonModel.hasImplicitRulesElement()).toBe(false);
      expect(testSimplePersonModel.getImplicitRulesElement()).toEqual(new UriType());
      expect(testSimplePersonModel.hasImplicitRules()).toBe(false);
      expect(testSimplePersonModel.getImplicitRules()).toBeUndefined();
      expect(testSimplePersonModel.hasLanguageElement()).toBe(false);
      expect(testSimplePersonModel.getLanguageElement()).toEqual(new CodeType());
      expect(testSimplePersonModel.hasLanguage()).toBe(false);
      expect(testSimplePersonModel.getLanguage()).toBeUndefined();
      expect(testSimplePersonModel.hasText()).toBe(false);
      expect(testSimplePersonModel.getText()).toEqual(new Narrative(null, null));
      expect(testSimplePersonModel.hasContained()).toBe(false);
      expect(testSimplePersonModel.getContained()).toEqual([] as Resource[]);
      expect(testSimplePersonModel.hasExtension()).toBe(false);
      expect(testSimplePersonModel.getExtension()).toEqual([] as Extension[]);
      expect(testSimplePersonModel.hasModifierExtension()).toBe(false);
      expect(testSimplePersonModel.getModifierExtension()).toEqual([] as Extension[]);

      // SimplePersonModel properties
      expect(testSimplePersonModel.hasIdentifier()).toBe(false);
      expect(testSimplePersonModel.getIdentifier()).toEqual(new Identifier());
      expect(testSimplePersonModel.hasName()).toBe(false);
      expect(testSimplePersonModel.getName()).toEqual(new HumanName());
      expect(testSimplePersonModel.hasAddress()).toBe(false);
      expect(testSimplePersonModel.getAddress()).toEqual([] as Address[]);
      expect(testSimplePersonModel.hasPhoneElement()).toBe(false);
      expect(testSimplePersonModel.getPhoneElement()).toEqual(new StringType());
      expect(testSimplePersonModel.hasPhone()).toBe(false);
      expect(testSimplePersonModel.getPhone()).toBeUndefined();
    });

    it('should be properly reset by modifying all properties', () => {
      const testSimplePersonModel = new SimplePersonModel();

      testSimplePersonModel.setId(TestData.VALID_ID);
      testSimplePersonModel.setMeta(VALID_META);
      testSimplePersonModel.setImplicitRules(TestData.IMPLICIT_RULES_VALUE);
      testSimplePersonModel.setLanguage(TestData.LANGUAGE_VALUE);
      testSimplePersonModel.setText(VALID_NARRATIVE);
      // ignore for SimplePersonModel: testSimplePersonModel.setContained([???]);
      testSimplePersonModel.setExtension([VALID_EXTENSION]);
      testSimplePersonModel.setModifierExtension([VALID_MODIFIER_EXTENSION]);

      testSimplePersonModel.setIdentifier(VALID_IDENTIFIER);
      testSimplePersonModel.setName(VALID_HUMAN_NAME);
      testSimplePersonModel.setAddress([VALID_ADDRESS]);
      testSimplePersonModel.setPhoneElement(TestData.VALID_PHONE_TYPE);

      expect(testSimplePersonModel).toBeDefined();
      expect(testSimplePersonModel).toBeInstanceOf(SimplePersonModel);
      expect(testSimplePersonModel).toBeInstanceOf(DomainResource);
      expect(testSimplePersonModel).toBeInstanceOf(Resource);
      expect(testSimplePersonModel).toBeInstanceOf(Base);
      expect(testSimplePersonModel.constructor.name).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.resourceType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.fhirType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.isEmpty()).toBe(false);
      expect(testSimplePersonModel.toJSON()).toBeDefined();

      // inherited properties from Resource/DomainResource
      expect(testSimplePersonModel.hasIdElement()).toBe(true);
      expect(testSimplePersonModel.getIdElement()).toEqual(TestData.VALID_ID_TYPE);
      expect(testSimplePersonModel.hasId()).toBe(true);
      expect(testSimplePersonModel.getId()).toStrictEqual(TestData.VALID_ID);
      expect(testSimplePersonModel.hasMeta()).toBe(true);
      expect(testSimplePersonModel.getMeta()).toEqual(VALID_META);
      expect(testSimplePersonModel.hasImplicitRulesElement()).toBe(true);
      expect(testSimplePersonModel.getImplicitRulesElement()).toEqual(new UriType(TestData.IMPLICIT_RULES_VALUE));
      expect(testSimplePersonModel.hasImplicitRules()).toBe(true);
      expect(testSimplePersonModel.getImplicitRules()).toStrictEqual(TestData.IMPLICIT_RULES_VALUE);
      expect(testSimplePersonModel.hasLanguageElement()).toBe(true);
      expect(testSimplePersonModel.getLanguageElement()).toEqual(new CodeType(TestData.LANGUAGE_VALUE));
      expect(testSimplePersonModel.hasLanguage()).toBe(true);
      expect(testSimplePersonModel.getLanguage()).toStrictEqual(TestData.LANGUAGE_VALUE);
      expect(testSimplePersonModel.hasText()).toBe(true);
      expect(testSimplePersonModel.getText()).toEqual(VALID_NARRATIVE);
      expect(testSimplePersonModel.hasContained()).toBe(false);
      expect(testSimplePersonModel.getContained()).toEqual([] as Resource[]);
      expect(testSimplePersonModel.hasExtension()).toBe(true);
      expect(testSimplePersonModel.getExtension()).toEqual([VALID_EXTENSION]);
      expect(testSimplePersonModel.hasModifierExtension()).toBe(true);
      expect(testSimplePersonModel.getModifierExtension()).toEqual([VALID_MODIFIER_EXTENSION]);

      // SimplePersonModel properties
      expect(testSimplePersonModel.hasIdentifier()).toBe(true);
      expect(testSimplePersonModel.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testSimplePersonModel.hasName()).toBe(true);
      expect(testSimplePersonModel.getName()).toEqual(VALID_HUMAN_NAME);
      expect(testSimplePersonModel.hasAddress()).toBe(true);
      expect(testSimplePersonModel.getAddress()).toEqual([VALID_ADDRESS]);
      expect(testSimplePersonModel.hasPhoneElement()).toBe(true);
      expect(testSimplePersonModel.getPhoneElement()).toEqual(TestData.VALID_PHONE_TYPE);
      expect(testSimplePersonModel.hasPhone()).toBe(true);
      expect(testSimplePersonModel.getPhone()).toStrictEqual(TestData.VALID_PHONE);

      // Reset

      testSimplePersonModel.setId(TestData.VALID_ID_2);
      testSimplePersonModel.setMeta(VALID_META_2);
      testSimplePersonModel.setImplicitRules(TestData.IMPLICIT_RULES_VALUE_2);
      testSimplePersonModel.setLanguage(TestData.LANGUAGE_VALUE_2);
      testSimplePersonModel.setText(VALID_NARRATIVE_2);
      // ignore for SimplePersonModel: testSimplePersonModel.setContained([???]);
      testSimplePersonModel.setExtension([VALID_EXTENSION_2]);
      testSimplePersonModel.setModifierExtension([VALID_MODIFIER_EXTENSION_2]);

      testSimplePersonModel.setIdentifier(VALID_IDENTIFIER_2);
      testSimplePersonModel.setName(VALID_HUMAN_NAME_2);
      testSimplePersonModel.setAddress([VALID_ADDRESS_2]);
      testSimplePersonModel.setPhone(TestData.VALID_PHONE_2);

      expect(testSimplePersonModel).toBeDefined();
      expect(testSimplePersonModel).toBeInstanceOf(SimplePersonModel);
      expect(testSimplePersonModel).toBeInstanceOf(DomainResource);
      expect(testSimplePersonModel).toBeInstanceOf(Resource);
      expect(testSimplePersonModel).toBeInstanceOf(Base);
      expect(testSimplePersonModel.constructor.name).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.resourceType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.fhirType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.isEmpty()).toBe(false);
      expect(testSimplePersonModel.toJSON()).toBeDefined();

      // inherited properties from Resource/DomainResource
      expect(testSimplePersonModel.hasIdElement()).toBe(true);
      expect(testSimplePersonModel.getIdElement()).toEqual(TestData.VALID_ID_TYPE_2);
      expect(testSimplePersonModel.hasId()).toBe(true);
      expect(testSimplePersonModel.getId()).toStrictEqual(TestData.VALID_ID_2);
      expect(testSimplePersonModel.hasMeta()).toBe(true);
      expect(testSimplePersonModel.getMeta()).toEqual(VALID_META_2);
      expect(testSimplePersonModel.hasImplicitRulesElement()).toBe(true);
      expect(testSimplePersonModel.getImplicitRulesElement()).toEqual(new UriType(TestData.IMPLICIT_RULES_VALUE_2));
      expect(testSimplePersonModel.hasImplicitRules()).toBe(true);
      expect(testSimplePersonModel.getImplicitRules()).toStrictEqual(TestData.IMPLICIT_RULES_VALUE_2);
      expect(testSimplePersonModel.hasLanguageElement()).toBe(true);
      expect(testSimplePersonModel.getLanguageElement()).toEqual(new CodeType(TestData.LANGUAGE_VALUE_2));
      expect(testSimplePersonModel.hasLanguage()).toBe(true);
      expect(testSimplePersonModel.getLanguage()).toStrictEqual(TestData.LANGUAGE_VALUE_2);
      expect(testSimplePersonModel.hasText()).toBe(true);
      expect(testSimplePersonModel.getText()).toEqual(VALID_NARRATIVE_2);
      expect(testSimplePersonModel.hasContained()).toBe(false);
      expect(testSimplePersonModel.getContained()).toEqual([] as Resource[]);
      expect(testSimplePersonModel.hasExtension()).toBe(true);
      expect(testSimplePersonModel.getExtension()).toEqual([VALID_EXTENSION_2]);
      expect(testSimplePersonModel.hasModifierExtension()).toBe(true);
      expect(testSimplePersonModel.getModifierExtension()).toEqual([VALID_MODIFIER_EXTENSION_2]);

      // SimplePersonModel properties
      expect(testSimplePersonModel.hasIdentifier()).toBe(true);
      expect(testSimplePersonModel.getIdentifier()).toEqual(VALID_IDENTIFIER_2);
      expect(testSimplePersonModel.hasName()).toBe(true);
      expect(testSimplePersonModel.getName()).toEqual(VALID_HUMAN_NAME_2);
      expect(testSimplePersonModel.hasAddress()).toBe(true);
      expect(testSimplePersonModel.getAddress()).toEqual([VALID_ADDRESS_2]);
      expect(testSimplePersonModel.hasPhoneElement()).toBe(true);
      expect(testSimplePersonModel.getPhoneElement()).toEqual(TestData.VALID_PHONE_TYPE_2);
      expect(testSimplePersonModel.hasPhone()).toBe(true);
      expect(testSimplePersonModel.getPhone()).toStrictEqual(TestData.VALID_PHONE_2);

      // Reset to undefined

      testSimplePersonModel.setIdentifier(TestData.UNDEFINED_VALUE);
      testSimplePersonModel.setName(TestData.UNDEFINED_VALUE);
      testSimplePersonModel.setAddress(TestData.UNDEFINED_VALUE);
      testSimplePersonModel.setPhone(TestData.UNDEFINED_VALUE);

      // SimplePersonModel properties
      expect(testSimplePersonModel.hasIdentifier()).toBe(false);
      expect(testSimplePersonModel.getIdentifier()).toEqual(new Identifier());
      expect(testSimplePersonModel.hasName()).toBe(false);
      expect(testSimplePersonModel.getName()).toEqual(new HumanName());
      expect(testSimplePersonModel.hasAddress()).toBe(false);
      expect(testSimplePersonModel.getAddress()).toEqual([] as Address[]);
      expect(testSimplePersonModel.hasPhoneElement()).toBe(false);
      expect(testSimplePersonModel.getPhoneElement()).toEqual(new StringType());
      expect(testSimplePersonModel.hasPhone()).toBe(false);
      expect(testSimplePersonModel.getPhone()).toBeUndefined();
    });
  });

  describe('Serialization/Deserialization', () => {
    const VALID_JSON = {
      resourceType: 'SimplePersonModel',
      id: 'id12345',
      meta: {
        lastUpdated: '2024-01-28T14:30:00.000Z',
      },
      implicitRules: 'implicitRules',
      language: 'en-US',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">text</div>',
      },
      extension: [
        {
          url: 'extUrl',
          valueString: 'Extension string value',
        },
      ],
      modifierExtension: [
        {
          url: 'modExtUrl',
          valueString: 'Modifier Extension string value',
        },
      ],
      identifier: {
        system: 'http://sample/system/one',
        value: 'This is a valid string.',
      },
      name: {
        family: 'Surname',
        given: ['First', 'Middle'],
        prefix: ['Mr.'],
        suffix: ['Sr.'],
      },
      address: [
        {
          use: 'home',
          type: 'postal',
          line: ['1234 Main ST', 'APT 15A'],
          city: 'Nashua',
          state: 'NH',
          postalCode: '03064',
          country: 'US',
        },
      ],
      phone: '888-555-1234',
      _phone: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
    };
    const DATATYPE_EXTENSION = new Extension('datatypeExtUrl');
    DATATYPE_EXTENSION.setValue(new StringType('Datatype Extension string value'));

    it('should return undefined when deserialize with no json', () => {
      let testSimplePersonModel: SimplePersonModel | undefined = undefined;
      testSimplePersonModel = SimplePersonModel.parse({});
      expect(testSimplePersonModel).toBeUndefined();

      testSimplePersonModel = SimplePersonModel.parse(null);
      expect(testSimplePersonModel).toBeUndefined();

      testSimplePersonModel = SimplePersonModel.parse(undefined);
      expect(testSimplePersonModel).toBeUndefined();
    });

    it('should properly create serialized content', () => {
      const altPhone = TestData.VALID_PHONE_TYPE.copy();
      altPhone.setId(TestData.DATATYPE_ID);
      altPhone.addExtension(DATATYPE_EXTENSION);

      const testSimplePersonModel = new SimplePersonModel();

      testSimplePersonModel.setId(TestData.VALID_ID);
      testSimplePersonModel.setMeta(VALID_META);
      testSimplePersonModel.setImplicitRules(TestData.IMPLICIT_RULES_VALUE);
      testSimplePersonModel.setLanguage(TestData.LANGUAGE_VALUE);
      testSimplePersonModel.setText(VALID_NARRATIVE);
      // ignore for SimplePersonModel: testSimplePersonModel.setContained([???]);
      testSimplePersonModel.setExtension([VALID_EXTENSION]);
      testSimplePersonModel.setModifierExtension([VALID_MODIFIER_EXTENSION]);

      testSimplePersonModel.setIdentifier(VALID_IDENTIFIER);
      testSimplePersonModel.setName(VALID_HUMAN_NAME);
      testSimplePersonModel.setAddress([VALID_ADDRESS]);
      testSimplePersonModel.setPhoneElement(altPhone);

      expect(testSimplePersonModel).toBeDefined();
      expect(testSimplePersonModel).toBeInstanceOf(SimplePersonModel);
      expect(testSimplePersonModel).toBeInstanceOf(DomainResource);
      expect(testSimplePersonModel).toBeInstanceOf(Resource);
      expect(testSimplePersonModel).toBeInstanceOf(Base);
      expect(testSimplePersonModel.constructor.name).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.resourceType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.fhirType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel.isEmpty()).toBe(false);

      // inherited properties from Resource/DomainResource
      expect(testSimplePersonModel.hasIdElement()).toBe(true);
      expect(testSimplePersonModel.getIdElement()).toEqual(TestData.VALID_ID_TYPE);
      expect(testSimplePersonModel.hasId()).toBe(true);
      expect(testSimplePersonModel.getId()).toStrictEqual(TestData.VALID_ID);
      expect(testSimplePersonModel.hasMeta()).toBe(true);
      expect(testSimplePersonModel.getMeta()).toEqual(VALID_META);
      expect(testSimplePersonModel.hasImplicitRulesElement()).toBe(true);
      expect(testSimplePersonModel.getImplicitRulesElement()).toEqual(new UriType(TestData.IMPLICIT_RULES_VALUE));
      expect(testSimplePersonModel.hasImplicitRules()).toBe(true);
      expect(testSimplePersonModel.getImplicitRules()).toStrictEqual(TestData.IMPLICIT_RULES_VALUE);
      expect(testSimplePersonModel.hasLanguageElement()).toBe(true);
      expect(testSimplePersonModel.getLanguageElement()).toEqual(new CodeType(TestData.LANGUAGE_VALUE));
      expect(testSimplePersonModel.hasLanguage()).toBe(true);
      expect(testSimplePersonModel.getLanguage()).toStrictEqual(TestData.LANGUAGE_VALUE);
      expect(testSimplePersonModel.hasText()).toBe(true);
      expect(testSimplePersonModel.getText()).toEqual(VALID_NARRATIVE);
      expect(testSimplePersonModel.hasContained()).toBe(false);
      expect(testSimplePersonModel.getContained()).toEqual([] as Resource[]);
      expect(testSimplePersonModel.hasExtension()).toBe(true);
      expect(testSimplePersonModel.getExtension()).toEqual([VALID_EXTENSION]);
      expect(testSimplePersonModel.hasModifierExtension()).toBe(true);
      expect(testSimplePersonModel.getModifierExtension()).toEqual([VALID_MODIFIER_EXTENSION]);

      // SimplePersonModel properties
      expect(testSimplePersonModel.hasIdentifier()).toBe(true);
      expect(testSimplePersonModel.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testSimplePersonModel.hasName()).toBe(true);
      expect(testSimplePersonModel.getName()).toEqual(VALID_HUMAN_NAME);
      expect(testSimplePersonModel.hasAddress()).toBe(true);
      expect(testSimplePersonModel.getAddress()).toEqual([VALID_ADDRESS]);
      expect(testSimplePersonModel.hasPhoneElement()).toBe(true);
      expect(testSimplePersonModel.getPhoneElement()).toEqual(altPhone);
      expect(testSimplePersonModel.hasPhone()).toBe(true);
      expect(testSimplePersonModel.getPhone()).toStrictEqual(TestData.VALID_PHONE);

      expect(testSimplePersonModel.toJSON()).toEqual(VALID_JSON);
    });

    it('should return SimplePersonModel for valid json', () => {
      const testSimplePersonModel: SimplePersonModel | undefined = SimplePersonModel.parse(VALID_JSON);

      expect(testSimplePersonModel).toBeDefined();
      expect(testSimplePersonModel).toBeInstanceOf(SimplePersonModel);
      expect(testSimplePersonModel).toBeInstanceOf(DomainResource);
      expect(testSimplePersonModel).toBeInstanceOf(Resource);
      expect(testSimplePersonModel).toBeInstanceOf(Base);
      expect(testSimplePersonModel?.constructor.name).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel?.resourceType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel?.fhirType()).toStrictEqual('SimplePersonModel');
      expect(testSimplePersonModel?.isEmpty()).toBe(false);
      expect(testSimplePersonModel?.toJSON()).toEqual(VALID_JSON);
    });
  });

  describe('Type Assertion Tests', () => {
    it('should throw InvalidTypeError for setIdentifier()', () => {
      const testSimplePersonModel = new SimplePersonModel();
      const t = () => {
        testSimplePersonModel.setIdentifier(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.identifier; Provided element is not an instance of Identifier.`);
    });

    it('should throw InvalidTypeError for setName()', () => {
      const testSimplePersonModel = new SimplePersonModel();
      const t = () => {
        testSimplePersonModel.setName(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.name; Provided element is not an instance of HumanName.`);
    });

    it('should throw InvalidTypeError for setAddress()', () => {
      const testSimplePersonModel = new SimplePersonModel();
      const t = () => {
        testSimplePersonModel.setAddress([TestData.INVALID_NON_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid SimplePersonModel.address; Provided value array has an element that is not an instance of Address.`,
      );
    });

    it('should throw InvalidTypeError for setPhoneElement()', () => {
      const testSimplePersonModel = new SimplePersonModel();
      const t = () => {
        testSimplePersonModel.setPhoneElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.phone; Provided element is not an instance of StringType.`);
    });

    it('should throw PrimitiveTypeError for setPhone()', () => {
      const testSimplePersonModel = new SimplePersonModel();
      const t = () => {
        testSimplePersonModel.setPhone(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.phone (12345)`);
    });
  });
});
