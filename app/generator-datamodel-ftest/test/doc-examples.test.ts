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

import { FhirError, InvalidCodeError, InvalidTypeError, JsonError, PrimitiveTypeError } from '@paq-ts-fhir/fhir-core';
import {
  Address,
  AddressTypeEnum,
  AddressUseEnum,
  AdministrativeGenderEnum,
  BooleanType,
  CanonicalType,
  CodeableConcept,
  CodeType,
  Coding,
  DateType,
  Device,
  Endpoint,
  EnumCodeType,
  Extension,
  fhirCanonical,
  HumanName,
  Identifier,
  IdentifierUseEnum,
  IntegerType,
  Meta,
  NameUseEnum,
  Patient,
  PatientCommunicationComponent,
  Period,
  Reference,
  SimplePersonModel,
  StringType,
} from '../src';
import { VALID_MOCK_COMPLEX_DATATYPE } from './ftest-mocks';
import { TestData } from './ftest-data';

describe('Documentation Examples', () => {
  describe('Datatype/Accessors Examples', () => {
    const PATIENT_JSON = {
      resourceType: 'Patient',
      id: '54321-0013',
      meta: {
        profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'],
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
          extension: [
            {
              url: 'ombCategory',
              valueCoding: {
                system: 'urn:oid:2.16.840.1.113883.6.238',
                code: '2054-5',
              },
            },
            {
              url: 'detailed',
              valueCoding: {
                system: 'urn:oid:2.16.840.1.113883.6.238',
                code: '2056-0',
              },
            },
            {
              url: 'text',
              valueString: 'Black American',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
          extension: [
            {
              url: 'ombCategory',
              valueCoding: {
                system: 'urn:oid:2.16.840.1.113883.6.238',
                code: '2186-5',
              },
            },
            {
              url: 'text',
              valueString: 'Not Hispanic or Latino',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
          valueCode: 'F',
        },
      ],
      identifier: [
        {
          use: 'official',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR',
              },
            ],
          },
          system: 'http://www.acme.com/identifiers/patient',
          value: 'MRN-02468',
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Jones',
          given: ['Jennifer', 'Marie'],
          prefix: ['Ms.'],
        },
        {
          use: 'maiden',
          family: 'Smith',
          given: ['Jennifer', 'Marie'],
          prefix: ['Ms.'],
        },
      ],
      gender: 'female',
      birthDate: '1978-01-28',
      address: [
        {
          use: 'home',
          type: 'both',
          line: ['1234 Main ST', 'APT 13'],
          city: 'South Bend',
          state: 'IN',
          postalCode: '46601',
        },
      ],
      maritalStatus: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
            code: 'M',
          },
        ],
      },
      multipleBirthBoolean: true,
      communication: [
        {
          language: {
            coding: [
              {
                system: 'urn:ietf:bcp:47',
                code: 'en-US',
              },
            ],
            text: 'English (United States)',
          },
          preferred: true,
        },
      ],
      generalPractitioner: [
        {
          reference: 'Practitioner/DR-13579',
          identifier: {
            use: 'official',
            system: 'http://hl7.org/fhir/sid/us-npi',
            value: '1234567890',
          },
          display: 'Dr. Perkins',
        },
      ],
      managingOrganization: {
        reference: 'Organization/ORG-24680',
        display: 'Acme Healthcare',
      },
    };

    it('should properly use standard accessors for documentation examples - Patient', () => {
      const patient: Patient = new Patient();
      // Set "id" assuming this data came from a data source
      patient.setId('54321-0013');

      // US Core v4.0 Meta.profile example
      const meta = new Meta();
      meta.addProfile('http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient');
      patient.setMeta(meta);

      // US Core v4.0 Patient profile extensions
      const raceExtension: Extension = new Extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
      const raceOmbCoding = new Coding();
      raceOmbCoding.setSystem('urn:oid:2.16.840.1.113883.6.238');
      raceOmbCoding.setCode('2054-5');
      const raceOmbExtension = new Extension('ombCategory', raceOmbCoding);
      const raceDetailedCoding = new Coding();
      raceDetailedCoding.setSystem('urn:oid:2.16.840.1.113883.6.238');
      raceDetailedCoding.setCode('2056-0');
      const raceDetailedExtension = new Extension('detailed', raceDetailedCoding);
      const raceTextValue = new StringType('Black American');
      const raceTextExtension = new Extension('text', raceTextValue);
      raceExtension.addExtension(raceOmbExtension);
      raceExtension.addExtension(raceDetailedExtension);
      raceExtension.addExtension(raceTextExtension);
      patient.addExtension(raceExtension);

      const ethnicityExtension: Extension = new Extension(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
      );
      const ethnicityOmbCoding = new Coding();
      ethnicityOmbCoding.setSystem('urn:oid:2.16.840.1.113883.6.238');
      ethnicityOmbCoding.setCode('2186-5');
      const ethnicityOmbExtension = new Extension('ombCategory', ethnicityOmbCoding);
      const ethnicityTextValue = new StringType('Not Hispanic or Latino');
      const ethnicityTextExtension = new Extension('text', ethnicityTextValue);
      ethnicityExtension.addExtension(ethnicityOmbExtension);
      ethnicityExtension.addExtension(ethnicityTextExtension);
      patient.addExtension(ethnicityExtension);

      const birthSexCode = new CodeType('F');
      const birthSexExtension: Extension = new Extension(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
        birthSexCode,
      );
      patient.addExtension(birthSexExtension);

      const identifierType = new CodeableConcept();
      const identifierCoding = new Coding();
      identifierCoding.setSystem('http://terminology.hl7.org/CodeSystem/v2-0203');
      identifierCoding.setCode('MR');
      identifierType.setCoding([identifierCoding]);
      const mrnIdentifier = new Identifier();
      mrnIdentifier.setUse(IdentifierUseEnum.OFFICIAL.code);
      mrnIdentifier.setType(identifierType);
      mrnIdentifier.setSystem('http://www.acme.com/identifiers/patient');
      mrnIdentifier.setValue('MRN-02468');
      patient.addIdentifier(mrnIdentifier);

      const patientName = new HumanName();
      patientName.setFamily('Jones');
      patientName.addGiven('Jennifer');
      patientName.addGiven('Marie');
      patientName.addPrefix('Ms.');
      // Use available EnumCodeType code value
      patientName.setUse(NameUseEnum.OFFICIAL.code);
      const maidenName = new HumanName();
      maidenName.setFamily('Smith');
      maidenName.addGiven('Jennifer');
      maidenName.addGiven('Marie');
      maidenName.addPrefix('Ms.');
      // Use available EnumCodeType code value
      maidenName.setUse(NameUseEnum.MAIDEN.code);
      // Use the "set" method to set an array of HumanName
      patient.setName([patientName, maidenName]);

      patient.setActive(true);
      // Use valid code value instead of available EnumCodeType code
      patient.setGender('female');
      patient.setBirthDate('1978-01-28');

      const patientAddress = new Address();
      patientAddress.setLine(['1234 Main ST', 'APT 13']);
      patientAddress.setCity('South Bend');
      patientAddress.setState('IN');
      patientAddress.setPostalCode('46601');
      patientAddress.setUse(AddressUseEnum.HOME.code);
      patientAddress.setType(AddressTypeEnum.BOTH.code);
      // Use the "add" method to add a single Address to the array of Addresses
      patient.addAddress(patientAddress);

      const maritalStatus = new CodeableConcept();
      const maritalCoding = new Coding();
      maritalCoding.setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus');
      maritalCoding.setCode('M');
      // Use the "set" method to set an array of Coding
      maritalStatus.setCoding([maritalCoding]);
      patient.setMaritalStatus(maritalStatus);

      patient.setMultipleBirth(new BooleanType(true));

      // Add a BackboneElement "component"
      const languagePref = new CodeableConcept();
      const languageCoding = new Coding();
      languageCoding.setSystem('urn:ietf:bcp:47');
      languageCoding.setCode('en-US');
      // Use the "set" method to set an array of Coding
      languagePref.setCoding([languageCoding]);
      languagePref.setText('English (United States)');
      const patientCommunication = new PatientCommunicationComponent();
      patientCommunication.setLanguage(languagePref);
      patientCommunication.setPreferred(true);
      // Use the "add" method to add a single PatientCommunicationComponent to the array of PatientCommunicationComponent
      patient.addCommunication(patientCommunication);

      const generalPractitioner = new Reference();
      generalPractitioner.setReference('Practitioner/DR-13579');
      generalPractitioner.setDisplay('Dr. Perkins');
      const generalPractitionerIdentifier = new Identifier();
      generalPractitionerIdentifier.setSystem('http://hl7.org/fhir/sid/us-npi');
      generalPractitionerIdentifier.setValue('1234567890');
      generalPractitionerIdentifier.setUse(IdentifierUseEnum.OFFICIAL.code);
      generalPractitioner.setIdentifier(generalPractitionerIdentifier);
      // Use the "set" method to set an array of Reference
      patient.setGeneralPractitioner([generalPractitioner]);

      const managingOrganization = new Reference();
      managingOrganization.setReference('Organization/ORG-24680');
      managingOrganization.setDisplay('Acme Healthcare');
      patient.setManagingOrganization(managingOrganization);

      // Ensure the above code functions as expected
      const patientJson = patient.toJSON();
      expect(patientJson).toEqual(PATIENT_JSON);
    });

    it('should properly use fluent style accessors for documentation examples - Patient', () => {
      const patient: Patient = new Patient();
      // Set "id" assuming this data came from a data source
      patient.setId('54321-0013');

      // US Core v4.0 Meta.profile example
      patient.setMeta(new Meta().addProfile('http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'));

      // US Core v4.0 Patient profile extensions
      const raceExtension: Extension = new Extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
      raceExtension
        .addExtension(
          new Extension('ombCategory', new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2054-5')),
        )
        .addExtension(
          new Extension('detailed', new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2056-0')),
        )
        .addExtension(new Extension('text', new StringType('Black American')));
      const ethnicityExtension: Extension = new Extension(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
      );
      ethnicityExtension
        .addExtension(
          new Extension('ombCategory', new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2186-5')),
        )
        .addExtension(new Extension('text', new StringType('Not Hispanic or Latino')));
      const birthSexExtension: Extension = new Extension(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
        new CodeType('F'),
      );
      patient.addExtension(raceExtension).addExtension(ethnicityExtension).addExtension(birthSexExtension);

      patient.addIdentifier(
        new Identifier()
          .setUse(IdentifierUseEnum.OFFICIAL.code)
          .setType(
            new CodeableConcept().addCoding(
              new Coding().setSystem('http://terminology.hl7.org/CodeSystem/v2-0203').setCode('MR'),
            ),
          )
          .setSystem('http://www.acme.com/identifiers/patient')
          .setValue('MRN-02468'),
      );

      patient
        .addName(
          new HumanName()
            .setFamily('Jones')
            .addGiven('Jennifer')
            .addGiven('Marie')
            .addPrefix('Ms.')
            // Use available EnumCodeType code value
            .setUse(NameUseEnum.OFFICIAL.code),
        )
        .addName(
          new HumanName()
            .setFamily('Smith')
            .addGiven('Jennifer')
            .addGiven('Marie')
            .addPrefix('Ms.')
            // Use available EnumCodeType code value
            .setUse(NameUseEnum.MAIDEN.code),
        );

      // Chain setting multiple primitive data types
      patient
        .setActive(true)
        // Use valid code value instead of available EnumCodeType code
        .setGender('female')
        .setBirthDate('1978-01-28');

      patient.addAddress(
        new Address()
          .addLine('1234 Main ST')
          .addLine('APT 13')
          .setCity('South Bend')
          .setState('IN')
          .setPostalCode('46601')
          // Use available EnumCodeType code value
          .setUse(AddressUseEnum.HOME.code)
          // Use available EnumCodeType code value
          .setType(AddressTypeEnum.BOTH.code),
      );

      patient
        .setMaritalStatus(
          new CodeableConcept().addCoding(
            new Coding().setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus').setCode('M'),
          ),
        )
        .setMultipleBirth(new BooleanType(true));

      // Chain setting BackboneElement "component" data types
      patient.addCommunication(
        new PatientCommunicationComponent()
          .setLanguage(
            new CodeableConcept()
              .addCoding(new Coding().setSystem('urn:ietf:bcp:47').setCode('en-US'))
              .setText('English (United States)'),
          )
          .setPreferred(true),
      );

      // Chain setting multiple complex data types
      patient
        .addGeneralPractitioner(
          new Reference()
            .setReference('Practitioner/DR-13579')
            .setDisplay('Dr. Perkins')
            .setIdentifier(
              new Identifier()
                .setSystem('http://hl7.org/fhir/sid/us-npi')
                .setValue('1234567890')
                .setUse(IdentifierUseEnum.OFFICIAL.code),
            ),
        )
        .setManagingOrganization(new Reference().setReference('Organization/ORG-24680').setDisplay('Acme Healthcare'));

      // Ensure the above code functions as expected
      const patientJson = patient.toJSON();
      expect(patientJson).toEqual(PATIENT_JSON);
    });

    it('should properly use PrimitiveType data types for documentation examples - Patient', () => {
      const patient: Patient = new Patient();
      patient.setBirthDate('1978-01-28');

      const patientBirthDate = patient.getBirthDate();
      expect(patientBirthDate).toEqual('1978-01-28');

      const patientBirthDateElement = patient.getBirthDateElement();
      expect(patientBirthDateElement).toBeInstanceOf(DateType);
      expect(patientBirthDateElement.getValue()).toEqual('1978-01-28');
      expect(patientBirthDateElement.getId()).toBeUndefined();
      expect(patientBirthDateElement.getExtension()).toEqual([] as Extension[]);
    });

    it('should properly use PrimitiveType data types with id and extension for documentation examples - Patient', () => {
      const patientBirthDateType = new DateType('1978-01-28');
      patientBirthDateType.setId('birthDate');
      const birthDateExtension = new Extension(
        'http://example.com/extensions/birthDate',
        new StringType('January 28, 1978'),
      );
      patientBirthDateType.setExtension([birthDateExtension]);

      const patient: Patient = new Patient();
      patient.setBirthDateElement(patientBirthDateType);

      const patientBirthDate = patient.getBirthDate();
      expect(patientBirthDate).toEqual('1978-01-28');

      const patientBirthDateElement = patient.getBirthDateElement();
      expect(patientBirthDateElement).toBeInstanceOf(DateType);
      expect(patientBirthDateElement.getValue()).toEqual('1978-01-28');
      expect(patientBirthDateElement.getId()).toStrictEqual('birthDate');
      expect(patientBirthDateElement.getExtension()).toHaveLength(1);
      expect(patientBirthDateElement.getExtension()[0].getUrl()).toStrictEqual(
        'http://example.com/extensions/birthDate',
      );
      expect(patientBirthDateElement.getExtension()[0].getValue()).toEqual(new StringType('January 28, 1978'));
    });

    it('should properly use EnumCodeType data types for documentation examples - Patient', () => {
      const genderEnumCodeType = new EnumCodeType(AdministrativeGenderEnum.FEMALE.code, new AdministrativeGenderEnum());

      const patient: Patient = new Patient();
      patient.setGenderEnumType(genderEnumCodeType);

      const patientGenderEnumType = patient.getGenderEnumType();
      expect(patientGenderEnumType.getValue()).toStrictEqual('female');
      const patientGenderElement = patient.getGenderElement();
      expect(patientGenderElement.getValue()).toStrictEqual('female');
      const patientGender = patient.getGender();
      expect(patientGender).toStrictEqual('female');

      expect(patientGenderEnumType.getId()).toBeUndefined();
      expect(patientGenderEnumType.getExtension()).toEqual([] as Extension[]);
    });

    it('should properly use complex data types for documentation examples - Patient', () => {
      const namePeriod = new Period().setStart('1978-01-28').setEnd('2000-08-06');
      const patientNameType = new HumanName();
      patientNameType.setFamily('Jones');
      patientNameType.addGiven('Jennifer');
      patientNameType.addGiven('Marie');
      patientNameType.setPrefix(['Ms.']);
      patientNameType.setUse('official');
      patientNameType.setPeriod(namePeriod);

      const patient: Patient = new Patient();
      patient.setName([patientNameType]);

      const patientNameArray = patient.getName();
      expect(patientNameArray).toHaveLength(1);
      const patientName = patientNameArray[0];
      expect(patientName).toBeInstanceOf(HumanName);
      expect(patientName.getFamily()).toStrictEqual('Jones');
      expect(patientName.getGiven()).toEqual(['Jennifer', 'Marie']);
      expect(patientName.getPrefix()).toEqual(['Ms.']);
      expect(patientName.getUse()).toStrictEqual('official');
      expect(patientName.getPeriod().getStart()).toEqual('1978-01-28');
      expect(patientName.getPeriod().getEnd()).toEqual('2000-08-06');
      expect(patientName.getId()).toBeUndefined();
      expect(patientName.getExtension()).toEqual([] as Extension[]);
    });

    it('should properly use complex data types with id and extension for documentation examples - Patient', () => {
      const namePeriod = new Period().setStart('1978-01-28').setEnd('2000-08-06');
      const patientNameType = new HumanName();
      patientNameType.setFamily('Jones');
      patientNameType.addGiven('Jennifer');
      patientNameType.addGiven('Marie');
      patientNameType.setPrefix(['Ms.']);
      patientNameType.setUse('official');
      patientNameType.setPeriod(namePeriod);

      patientNameType.setId('HumanName');
      const patientNameExtension = new Extension(
        'http://hl7.org/fhir/StructureDefinition/language',
        new CodeType('en-US'),
      );
      patientNameType.addExtension(patientNameExtension);

      const patient: Patient = new Patient();
      patient.setName([patientNameType]);

      const patientNameArray = patient.getName();
      expect(patientNameArray).toHaveLength(1);
      const patientName = patientNameArray[0];
      expect(patientName).toBeInstanceOf(HumanName);
      expect(patientName.getFamily()).toStrictEqual('Jones');
      expect(patientName.getGiven()).toEqual(['Jennifer', 'Marie']);
      expect(patientName.getPrefix()).toEqual(['Ms.']);
      expect(patientName.getUse()).toStrictEqual('official');
      expect(patientName.getPeriod().getStart()).toEqual('1978-01-28');
      expect(patientName.getPeriod().getEnd()).toEqual('2000-08-06');
      expect(patientName.getId()).toStrictEqual('HumanName');
      expect(patientName.getExtension()).toHaveLength(1);
      expect(patientName.getExtension()[0].getUrl()).toStrictEqual('http://hl7.org/fhir/StructureDefinition/language');
      expect(patientName.getExtension()[0].getValue()).toEqual(new CodeType('en-US'));
    });

    it('should properly use choice data types for documentation examples - Patient', () => {
      const patient: Patient = new Patient();

      patient.setMultipleBirth(new BooleanType(true));
      expect(patient.getMultipleBirth()).toEqual(new BooleanType(true));
      expect(patient.getMultipleBirthBooleanType()).toEqual(new BooleanType(true));
      let t = () => {
        patient.getMultipleBirthIntegerType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Patient.multipleBirth[x]: Expected IntegerType but encountered boolean`);

      patient.setMultipleBirth(new IntegerType(2));
      expect(patient.getMultipleBirth()).toEqual(new IntegerType(2));
      expect(patient.getMultipleBirthIntegerType()).toEqual(new IntegerType(2));
      t = () => {
        patient.getMultipleBirthBooleanType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Patient.multipleBirth[x]: Expected BooleanType but encountered integer`);
    });

    it('should properly use reference data types for documentation examples - Patient', () => {
      const patient: Patient = new Patient();

      const managingOrganization = new Reference();
      managingOrganization.setReference('Organization/ORG-24680');
      managingOrganization.setDisplay('Acme Healthcare');
      patient.setManagingOrganization(managingOrganization);
      expect(patient.getManagingOrganization()).toEqual(managingOrganization);

      managingOrganization.setReference('Location/LOC-13579');
      const t = () => {
        patient.setManagingOrganization(managingOrganization);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on setManagingOrganization (Patient.managingOrganization) expects argument (Location/LOC-13579) to be a valid 'Reference' type`,
      );
    });

    it('should properly use simple extension for documentation examples - Patient', () => {
      const birthSexExtension: Extension = new Extension(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
        new CodeType('F'),
      );

      const patient: Patient = new Patient();
      patient.addExtension(birthSexExtension);

      expect(patient.getExtension()).toHaveLength(1);
      expect(patient.getExtension()[0].getUrl()).toStrictEqual(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
      );
      expect(patient.getExtension()[0].getValue()).toEqual(new CodeType('F'));
      // Use the "getValueCodeType()" method to get the value as a CodeType;
      // Must cast to this package's `Extension` to access the "getValueCodeType()" method
      expect((patient.getExtension()[0] as Extension).getValueCodeType()).toEqual(new CodeType('F'));
      expect(patient.getExtension()[0].getId()).toBeUndefined();
      expect(patient.getExtension()[0].getExtension()).toEqual([] as Extension[]);
    });

    it('should properly use complex extension for documentation examples - Patient', () => {
      const ombCoding = new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2054-5');
      const detailedCoding = new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2056-0');
      const textStringType = new StringType('Black American');

      const raceExtension: Extension = new Extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
      raceExtension
        .addExtension(new Extension('ombCategory', ombCoding))
        .addExtension(new Extension('detailed', detailedCoding))
        .addExtension(new Extension('text', textStringType));

      const patient: Patient = new Patient();
      patient.setExtension([raceExtension]);

      const patientRaceExtension = patient.getExtensionByUrl(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
      );
      expect(patientRaceExtension.getUrl()).toStrictEqual(
        'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
      );
      expect(patientRaceExtension.getValue()).toBeUndefined();
      expect(patientRaceExtension.getId()).toBeUndefined();
      expect(patientRaceExtension.getExtension()).toHaveLength(3);

      const obmExtension = patientRaceExtension.getExtensionByUrl('ombCategory');
      expect(obmExtension.getUrl()).toStrictEqual('ombCategory');
      expect(obmExtension.getValue()).toEqual(ombCoding);
      expect(obmExtension.getId()).toBeUndefined();
      expect(obmExtension.getExtension()).toEqual([] as Extension[]);

      const detailedExtension = patientRaceExtension.getExtensionByUrl('detailed');
      expect(detailedExtension.getUrl()).toStrictEqual('detailed');
      expect(detailedExtension.getValue()).toEqual(detailedCoding);
      expect(detailedExtension.getId()).toBeUndefined();
      expect(detailedExtension.getExtension()).toEqual([] as Extension[]);

      const textExtension = patientRaceExtension.getExtensionByUrl('text');
      expect(textExtension.getUrl()).toStrictEqual('text');
      expect(textExtension.getValue()).toEqual(textStringType);
      expect(textExtension.getId()).toBeUndefined();
      expect(textExtension.getExtension()).toEqual([] as Extension[]);
    });
  });

  describe('Error Examples', () => {
    describe('Primitive Type Errors', () => {
      const INVALID_CANONICAL = ' invalid Url ' as fhirCanonical;
      const INVALID_CANONICAL_TYPE = 12345;

      it('should throw PrimitiveTypeError when initialized with invalid value', () => {
        let t = () => {
          new CanonicalType(INVALID_CANONICAL);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for CanonicalType (${INVALID_CANONICAL})`);

        t = () => {
          // @ts-expect-error: Allow for testing
          new CanonicalType(INVALID_CANONICAL_TYPE);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for CanonicalType (${String(INVALID_CANONICAL_TYPE)})`);
      });

      it('should throw PrimitiveTypeError when setValue() with invalid value', () => {
        const testCanonicalType = new CanonicalType();
        let t = () => {
          testCanonicalType.setValue(INVALID_CANONICAL);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for CanonicalType (${INVALID_CANONICAL})`);

        t = () => {
          // @ts-expect-error: Allow for testing
          testCanonicalType.setValue(INVALID_CANONICAL_TYPE);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for CanonicalType (${String(INVALID_CANONICAL_TYPE)})`);
      });
    });

    describe('Accessor Type Errors', () => {
      it('SimplePersonModel.name: should throw InvalidTypeError for an invalid complex datatype', () => {
        const testInstance = new SimplePersonModel();
        const t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.setName(VALID_MOCK_COMPLEX_DATATYPE);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(`Invalid SimplePersonModel.name; Provided element is not an instance of HumanName.`);
      });

      it('SimplePersonModel.address: should throw InvalidTypeError for an invalid complex array datatype', () => {
        const testInstance = new SimplePersonModel();
        let t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.setAddress([VALID_MOCK_COMPLEX_DATATYPE]);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(
          `Invalid SimplePersonModel.address; Provided value array has an element that is not an instance of Address.`,
        );

        t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.addAddress(VALID_MOCK_COMPLEX_DATATYPE);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(`Invalid SimplePersonModel.address; Provided element is not an instance of Address.`);
      });

      it('SimplePersonModel.phone: should throw appropriate errors for a primitive invalid datatype', () => {
        const testInstance = new SimplePersonModel();
        let t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.setPhoneElement(TestData.INVALID_STRING_TYPE);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(`Invalid SimplePersonModel.phone; Provided element is not an instance of StringType.`);

        t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.setPhone(TestData.INVALID_STRING_TYPE_VALUE);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid SimplePersonModel.phone (12345)`);
      });

      it('Patient.gender (EnumCodeType): should throw appropriate errors for a primitive invalid datatype values', () => {
        const testInstance = new Patient();
        let t = () => {
          testInstance.setGender('invalidCode');
        };
        expect(t).toThrow(InvalidCodeError);
        expect(t).toThrow(`Unknown AdministrativeGenderEnum 'code' value 'invalidCode'`);

        t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.setGender(TestData.INVALID_STRING_TYPE_VALUE);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid Patient.gender; Provided value is not an instance of fhirCode.`);

        t = () => {
          testInstance.setGenderElement(new CodeType('invalidCode'));
        };
        expect(t).toThrow(InvalidCodeError);
        expect(t).toThrow(`Unknown AdministrativeGenderEnum 'code' value 'invalidCode'`);

        t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.setGenderElement(TestData.INVALID_NON_STRING_TYPE);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(`Invalid Patient.gender; Provided element is not an instance of CodeType.`);

        t = () => {
          const invalidEnumType = new EnumCodeType(AddressUseEnum.TEMP.code, new AddressUseEnum());
          testInstance.setGenderEnumType(invalidEnumType);
        };
        expect(t).toThrow(InvalidCodeError);
        expect(t).toThrow(
          `Invalid Patient.gender; Invalid type parameter (AddressUseEnum); Should be AdministrativeGenderEnum.`,
        );

        t = () => {
          // @ts-expect-error: Allow for testing
          testInstance.setGenderEnumType(TestData.INVALID_NON_STRING_TYPE);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(`Invalid Patient.gender; Provided type is not an instance of AdministrativeGenderEnum.`);
      });

      it('Patient.deceases[x]: should throw appropriate errors for a primitive invalid datatype values', () => {
        const testInstance = new Patient();
        const t = () => {
          testInstance.setDeceased(TestData.INVALID_NON_STRING_TYPE);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(
          `ChoiceDataTypes decorator on setDeceased (Patient.deceased[x]) expects the 'value' argument type (string) to be a supported DataType`,
        );
      });

      it('Patient.birthDate: should throw appropriate errors for a primitive invalid datatype values', () => {
        const testInstance = new Patient();
        const t = () => {
          testInstance.setBirthDate('1978-02-30');
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid Patient.birthDate (1978-02-30)`);
      });

      it('Patient.managingOrganization: should throw appropriate errors for a primitive invalid datatype values', () => {
        const patient: Patient = new Patient();
        let t = () => {
          // @ts-expect-error: Allow for testing
          patient.setManagingOrganization(TestData.INVALID_NON_STRING_TYPE);
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(
          `ReferenceTargets decorator on setManagingOrganization (Patient.managingOrganization) expects a single argument to be type of 'Reference | undefined | null'`,
        );

        t = () => {
          patient.setManagingOrganization(new Reference().setReference('Location/LOC-13579'));
        };
        expect(t).toThrow(InvalidTypeError);
        expect(t).toThrow(
          `ReferenceTargets decorator on setManagingOrganization (Patient.managingOrganization) expects argument (Location/LOC-13579) to be a valid 'Reference' type`,
        );
      });

      it('Device.expirationDate: should throw appropriate errors for a primitive invalid datatype values', () => {
        const testInstance = new Device();
        const t = () => {
          testInstance.setExpirationDate('1978-02-30T12:34:56Z');
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid Device.expirationDate (1978-02-30T12:34:56Z)`);
      });
    });

    describe('Serialization/Deserialization Errors', () => {
      const INVALID_JSON = 'invalid JSON object';
      const MISSING_RESOURCETYPE_JSON = {
        id: TestData.VALID_ID,
      };
      const INVALID_EVENT_JSON = {
        resourceType: 'InvalidResource',
        id: TestData.VALID_ID,
      };

      it('should throw appropriate Errors for deserialization', () => {
        let t = () => {
          Endpoint.parse(INVALID_JSON);
        };
        expect(t).toThrow(JsonError);
        expect(t).toThrow(`Endpoint JSON is not a JSON object.`);

        t = () => {
          Endpoint.parse(MISSING_RESOURCETYPE_JSON);
        };
        expect(t).toThrow(FhirError);
        expect(t).toThrow(`Invalid FHIR JSON: Provided JSON is missing the required 'resourceType' field`);

        t = () => {
          Endpoint.parse(INVALID_EVENT_JSON);
        };
        expect(t).toThrow(FhirError);
        expect(t).toThrow(
          `Invalid FHIR JSON: Provided JSON 'resourceType' value ('InvalidResource') must be 'Endpoint'`,
        );
      });
    });
  });
});
