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
  Address,
  AddressTypeEnum,
  AddressUseEnum,
  AdministrativeGenderEnum,
  CodeableConcept,
  CodeType,
  Coding,
  DateType,
  EnumCodeType,
  Extension,
  HumanName,
  Identifier,
  IdentifierUseEnum,
  Meta,
  NameUseEnum,
  Patient,
  PatientCommunicationComponent,
  Period,
  Reference,
  StringType,
} from '../src';

describe('Documentation Examples', () => {
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

    patient.setMaritalStatus(
      new CodeableConcept().addCoding(
        new Coding().setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus').setCode('M'),
      ),
    );

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
    expect(patientBirthDateElement.getExtension()[0].getUrl()).toStrictEqual('http://example.com/extensions/birthDate');
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
    expect(patientRaceExtension.getUrl()).toStrictEqual('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
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
