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
 * TestReport Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/TestReport
 * StructureDefinition.name: TestReport
 * StructureDefinition.description: A summary of information based on the results of executing a TestScript.
 * StructureDefinition.fhirVersion: 5.0.0
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
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Identifier, PARSABLE_DATATYPE_MAP } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { ReportActionResultCodesEnum } from '../code-systems/ReportActionResultCodesEnum';
import { ReportParticipantTypeEnum } from '../code-systems/ReportParticipantTypeEnum';
import { ReportResultCodesEnum } from '../code-systems/ReportResultCodesEnum';
import { ReportStatusCodesEnum } from '../code-systems/ReportStatusCodesEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * TestReport Class
 *
 * @remarks
 * A summary of information based on the results of executing a TestScript.
 *
 * **FHIR Specification**
 * - **Short:** Describes the results of a TestScript execution
 * - **Definition:** A summary of information based on the results of executing a TestScript.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReport extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, testScript: CanonicalType | fhirCanonical | null = null, result: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.reportStatusCodesEnum = new ReportStatusCodesEnum();
    this.reportResultCodesEnum = new ReportResultCodesEnum();

    this.status = constructorCodeValueAsEnumCodeType<ReportStatusCodesEnum>(
      status,
      ReportStatusCodesEnum,
      this.reportStatusCodesEnum,
      'TestReport.status',
    );

    this.testScript = null;
    if (isDefined<CanonicalType | fhirCanonical>(testScript)) {
      if (testScript instanceof PrimitiveType) {
        this.setTestScriptElement(testScript);
      } else {
        this.setTestScript(testScript);
      }
    }

    this.result = constructorCodeValueAsEnumCodeType<ReportResultCodesEnum>(
      result,
      ReportResultCodesEnum,
      this.reportResultCodesEnum,
      'TestReport.result',
    );
  }

  /**
   * Parse the provided `TestReport` JSON to instantiate the TestReport data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReport`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReport
   * @returns TestReport data model or undefined for `TestReport`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): TestReport | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReport';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReport();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'TestReport');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
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

    fieldName = 'testScript';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setTestScript(null);
      } else {
        instance.setTestScriptElement(datatype);
      }
    } else {
      instance.setTestScript(null);
    }

    fieldName = 'result';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setResult(null);
      } else {
        instance.setResultElement(datatype);
      }
    } else {
      instance.setResult(null);
    }

    fieldName = 'score';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setScoreElement(datatype);
    }

    fieldName = 'tester';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTesterElement(datatype);
    }

    fieldName = 'issued';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setIssuedElement(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestReportParticipantComponent | undefined = TestReportParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParticipant(component);
        }
      });
    }

    fieldName = 'setup';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestReportSetupComponent | undefined = TestReportSetupComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSetup(component);
    }

    fieldName = 'test';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestReportTestComponent | undefined = TestReportTestComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTest(component);
        }
      });
    }

    fieldName = 'teardown';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestReportTeardownComponent | undefined = TestReportTeardownComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTeardown(component);
    }

    return instance;
  }

  /**
   * TestReport.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External identifier
   * - **Definition:** Identifier for the TestReport assigned for external purposes outside the context of FHIR.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * TestReport.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Informal name of the executed TestReport
   * - **Definition:** A free text natural language name identifying the executed TestReport.
   * - **Comment:** Not expected to be globally unique.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * FHIR CodeSystem: ReportStatusCodes
   *
   * @see {@link ReportStatusCodesEnum }
   */
  private readonly reportStatusCodesEnum: ReportStatusCodesEnum;

  /**
   * TestReport.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** completed | in-progress | waiting | stopped | entered-in-error
   * - **Definition:** The current state of this test report.
   * - **Comment:** The status represents where the execution is currently within the test script execution life cycle. This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ReportStatusCodesEnum }
   */
  private status: EnumCodeType | null;

  /**
   * TestReport.testScript Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical URL to the  version-specific TestScript that was executed to produce this TestReport
   * - **Definition:** Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/TestScript',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private testScript: CanonicalType | null;

  /**
   * FHIR CodeSystem: ReportResultCodes
   *
   * @see {@link ReportResultCodesEnum }
   */
  private readonly reportResultCodesEnum: ReportResultCodesEnum;

  /**
   * TestReport.result Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** pass | fail | pending
   * - **Definition:** The overall result from the execution of the TestScript.
   * - **Comment:** The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ReportResultCodesEnum }
   */
  private result: EnumCodeType | null;

  /**
   * TestReport.score Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The final score (percentage of tests passed) resulting from the execution of the TestScript
   * - **Definition:** The final score (percentage of tests passed) resulting from the execution of the TestScript.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private score?: DecimalType | undefined;

  /**
   * TestReport.tester Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the tester producing this report (Organization or individual)
   * - **Definition:** Name of the tester producing this report (Organization or individual).
   * - **Comment:** Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the TestReport.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private tester?: StringType | undefined;

  /**
   * TestReport.issued Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the TestScript was executed and this TestReport was generated
   * - **Definition:** When the TestScript was executed and this TestReport was generated.
   * - **Comment:** Additional specific dates may be added as extensions.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issued?: DateTimeType | undefined;

  /**
   * TestReport.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A participant in the test execution, either the execution engine, a client, or a server
   * - **Definition:** A participant in the test execution, either the execution engine, a client, or a server.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participant?: TestReportParticipantComponent[] | undefined;

  /**
   * TestReport.setup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The results of the series of required setup operations before the tests were executed
   * - **Definition:** The results of the series of required setup operations before the tests were executed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private setup?: TestReportSetupComponent | undefined;

  /**
   * TestReport.test Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A test executed from the test script
   * - **Definition:** A test executed from the test script.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private test?: TestReportTestComponent[] | undefined;

  /**
   * TestReport.teardown Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The results of running the series of required clean up steps
   * - **Definition:** The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private teardown?: TestReportTeardownComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid TestReport.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
  }

  /**
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestReport.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestReport.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportStatusCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ReportStatusCodesEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid TestReport.status`;
      assertEnumCodeType<ReportStatusCodesEnum>(enumType, ReportStatusCodesEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ReportStatusCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ReportStatusCodesEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestReport.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.reportStatusCodesEnum);
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
   * @see CodeSystem Enumeration: {@link ReportStatusCodesEnum }
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
   * @see CodeSystem Enumeration: {@link ReportStatusCodesEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestReport.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.reportStatusCodesEnum);
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
   * @returns the `testScript` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getTestScriptElement(): CanonicalType {
    return this.testScript ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `testScript` property.
   *
   * @param element - the `testScript` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTestScriptElement(element: CanonicalType | undefined | null): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid TestReport.testScript; Provided value is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.testScript = element;
    } else {
      this.testScript = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `testScript` property exists and has a value; `false` otherwise
   */
  public hasTestScriptElement(): boolean {
    return isDefined<CanonicalType>(this.testScript) && !this.testScript.isEmpty();
  }

  /**
   * @returns the `testScript` property value as a fhirCanonical if defined; else null
   */
  public getTestScript(): fhirCanonical | null {
    if (this.testScript?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.testScript.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `testScript` property.
   *
   * @param value - the `testScript` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTestScript(value: fhirCanonical | undefined | null): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid TestReport.testScript (${String(value)})`;
      this.testScript = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.testScript = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `testScript` property exists and has a value; `false` otherwise
   */
  public hasTestScript(): boolean {
    return this.hasTestScriptElement();
  }

  /**
   * @returns the `result` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportResultCodesEnum }
   */
  public getResultEnumType(): EnumCodeType | null {
    return this.result;
  }

  /**
   * Assigns the provided EnumCodeType value to the `result` property.
   *
   * @param enumType - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportResultCodesEnum }
   */
  public setResultEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid TestReport.result`;
      assertEnumCodeType<ReportResultCodesEnum>(enumType, ReportResultCodesEnum, errMsgPrefix);
      this.result = enumType;
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResultEnumType(): boolean {
    return isDefined<EnumCodeType>(this.result) && !this.result.isEmpty() && this.result.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `result` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportResultCodesEnum }
   */
  public getResultElement(): CodeType | null {
    if (this.result === null) {
      return null;
    }
    return this.result as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `result` property.
   *
   * @param element - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportResultCodesEnum }
   */
  public setResultElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestReport.result; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.result = new EnumCodeType(element, this.reportResultCodesEnum);
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResultElement(): boolean {
    return this.hasResultEnumType();
  }

  /**
   * @returns the `result` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportResultCodesEnum }
   */
  public getResult(): fhirCode | null {
    if (this.result === null) {
      return null;
    }
    return this.result.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `result` property.
   *
   * @param value - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ReportResultCodesEnum }
   */
  public setResult(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestReport.result (${String(value)})`;
      this.result = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.reportResultCodesEnum);
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResult(): boolean {
    return this.hasResultEnumType();
  }

  /**
   * @returns the `score` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getScoreElement(): DecimalType {
    return this.score ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `score` property.
   *
   * @param element - the `score` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScoreElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid TestReport.score; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.score = element;
    } else {
      this.score = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `score` property exists and has a value; `false` otherwise
   */
  public hasScoreElement(): boolean {
    return isDefined<DecimalType>(this.score) && !this.score.isEmpty();
  }

  /**
   * @returns the `score` property value as a fhirDecimal if defined; else undefined
   */
  public getScore(): fhirDecimal | undefined {
    return this.score?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `score` property.
   *
   * @param value - the `score` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScore(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid TestReport.score (${String(value)})`;
      this.score = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.score = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `score` property exists and has a value; `false` otherwise
   */
  public hasScore(): boolean {
    return this.hasScoreElement();
  }

  /**
   * @returns the `tester` property value as a StringType object if defined; else an empty StringType object
   */
  public getTesterElement(): StringType {
    return this.tester ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `tester` property.
   *
   * @param element - the `tester` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTesterElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestReport.tester; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.tester = element;
    } else {
      this.tester = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tester` property exists and has a value; `false` otherwise
   */
  public hasTesterElement(): boolean {
    return isDefined<StringType>(this.tester) && !this.tester.isEmpty();
  }

  /**
   * @returns the `tester` property value as a fhirString if defined; else undefined
   */
  public getTester(): fhirString | undefined {
    return this.tester?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `tester` property.
   *
   * @param value - the `tester` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTester(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestReport.tester (${String(value)})`;
      this.tester = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.tester = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `tester` property exists and has a value; `false` otherwise
   */
  public hasTester(): boolean {
    return this.hasTesterElement();
  }

  /**
   * @returns the `issued` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getIssuedElement(): DateTimeType {
    return this.issued ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `issued` property.
   *
   * @param element - the `issued` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssuedElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid TestReport.issued; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.issued = element;
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssuedElement(): boolean {
    return isDefined<DateTimeType>(this.issued) && !this.issued.isEmpty();
  }

  /**
   * @returns the `issued` property value as a fhirDateTime if defined; else undefined
   */
  public getIssued(): fhirDateTime | undefined {
    return this.issued?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `issued` property.
   *
   * @param value - the `issued` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIssued(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid TestReport.issued (${String(value)})`;
      this.issued = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.issued = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `issued` property exists and has a value; `false` otherwise
   */
  public hasIssued(): boolean {
    return this.hasIssuedElement();
  }

  /**
   * @returns the `participant` property value as a TestReportParticipantComponent array
   */
  public getParticipant(): TestReportParticipantComponent[] {
    return this.participant ?? ([] as TestReportParticipantComponent[]);
  }

  /**
   * Assigns the provided TestReportParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: TestReportParticipantComponent[] | undefined): this {
    if (isDefinedList<TestReportParticipantComponent>(value)) {
      const optErrMsg = `Invalid TestReport.participant; Provided value array has an element that is not an instance of TestReportParticipantComponent.`;
      assertFhirTypeList<TestReportParticipantComponent>(value, TestReportParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestReportParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: TestReportParticipantComponent | undefined): this {
    if (isDefined<TestReportParticipantComponent>(value)) {
      const optErrMsg = `Invalid TestReport.participant; Provided element is not an instance of TestReportParticipantComponent.`;
      assertFhirType<TestReportParticipantComponent>(value, TestReportParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<TestReportParticipantComponent>(this.participant) && this.participant.some((item: TestReportParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as TestReportParticipantComponent[];
    }
  }

  /**
   * @returns the `setup` property value as a TestReportSetupComponent object if defined; else an empty TestReportSetupComponent object
   */
  public getSetup(): TestReportSetupComponent {
    return this.setup ?? new TestReportSetupComponent();
  }

  /**
   * Assigns the provided Setup object value to the `setup` property.
   *
   * @param value - the `setup` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSetup(value: TestReportSetupComponent | undefined): this {
    if (isDefined<TestReportSetupComponent>(value)) {
      const optErrMsg = `Invalid TestReport.setup; Provided element is not an instance of TestReportSetupComponent.`;
      assertFhirType<TestReportSetupComponent>(value, TestReportSetupComponent, optErrMsg);
      this.setup = value;
    } else {
      this.setup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `setup` property exists and has a value; `false` otherwise
   */
  public hasSetup(): boolean {
    return isDefined<TestReportSetupComponent>(this.setup) && !this.setup.isEmpty();
  }

  /**
   * @returns the `test` property value as a TestReportTestComponent array
   */
  public getTest(): TestReportTestComponent[] {
    return this.test ?? ([] as TestReportTestComponent[]);
  }

  /**
   * Assigns the provided TestReportTestComponent array value to the `test` property.
   *
   * @param value - the `test` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTest(value: TestReportTestComponent[] | undefined): this {
    if (isDefinedList<TestReportTestComponent>(value)) {
      const optErrMsg = `Invalid TestReport.test; Provided value array has an element that is not an instance of TestReportTestComponent.`;
      assertFhirTypeList<TestReportTestComponent>(value, TestReportTestComponent, optErrMsg);
      this.test = value;
    } else {
      this.test = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestReportTestComponent value to the `test` array property.
   *
   * @param value - the `test` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTest(value: TestReportTestComponent | undefined): this {
    if (isDefined<TestReportTestComponent>(value)) {
      const optErrMsg = `Invalid TestReport.test; Provided element is not an instance of TestReportTestComponent.`;
      assertFhirType<TestReportTestComponent>(value, TestReportTestComponent, optErrMsg);
      this.initTest();
      this.test?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `test` property exists and has a value; `false` otherwise
   */
  public hasTest(): boolean {
    return isDefinedList<TestReportTestComponent>(this.test) && this.test.some((item: TestReportTestComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `test` property
   */
  private initTest(): void {
    if(!this.hasTest()) {
      this.test = [] as TestReportTestComponent[];
    }
  }

  /**
   * @returns the `teardown` property value as a TestReportTeardownComponent object if defined; else an empty TestReportTeardownComponent object
   */
  public getTeardown(): TestReportTeardownComponent {
    return this.teardown ?? new TestReportTeardownComponent();
  }

  /**
   * Assigns the provided Teardown object value to the `teardown` property.
   *
   * @param value - the `teardown` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTeardown(value: TestReportTeardownComponent | undefined): this {
    if (isDefined<TestReportTeardownComponent>(value)) {
      const optErrMsg = `Invalid TestReport.teardown; Provided element is not an instance of TestReportTeardownComponent.`;
      assertFhirType<TestReportTeardownComponent>(value, TestReportTeardownComponent, optErrMsg);
      this.teardown = value;
    } else {
      this.teardown = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `teardown` property exists and has a value; `false` otherwise
   */
  public hasTeardown(): boolean {
    return isDefined<TestReportTeardownComponent>(this.teardown) && !this.teardown.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.name,
      this.status,
      this.testScript,
      this.result,
      this.score,
      this.tester,
      this.issued,
      this.participant,
      this.setup,
      this.test,
      this.teardown,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.testScript, this.result, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReport {
    const dest = new TestReport();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReport): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    dest.name = this.name?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.testScript = this.testScript ? this.testScript.copy() : null;
    dest.result = this.result ? this.result.copy() : null;
    dest.score = this.score?.copy();
    dest.tester = this.tester?.copy();
    dest.issued = this.issued?.copy();
    const participantList = copyListValues<TestReportParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.setup = this.setup?.copy();
    const testList = copyListValues<TestReportTestComponent>(this.test);
    dest.test = testList.length === 0 ? undefined : testList;
    dest.teardown = this.teardown?.copy();
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasTestScriptElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getTestScriptElement(), 'testScript', jsonObj);
    } else {
      jsonObj['testScript'] = null;
    }

    if (this.hasResultElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getResultElement()!, 'result', jsonObj);
    } else {
      jsonObj['result'] = null;
    }

    if (this.hasScoreElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getScoreElement(), 'score', jsonObj);
    }

    if (this.hasTesterElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTesterElement(), 'tester', jsonObj);
    }

    if (this.hasIssuedElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getIssuedElement(), 'issued', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasSetup()) {
      setFhirBackboneElementJson(this.getSetup(), 'setup', jsonObj);
    }

    if (this.hasTest()) {
      setFhirBackboneElementListJson(this.getTest(), 'test', jsonObj);
    }

    if (this.hasTeardown()) {
      setFhirBackboneElementJson(this.getTeardown(), 'teardown', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * TestReportParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A participant in the test execution, either the execution engine, a client, or a server
 * - **Definition:** A participant in the test execution, either the execution engine, a client, or a server.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, uri: UriType | fhirUri | null = null) {
    super();

    this.reportParticipantTypeEnum = new ReportParticipantTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ReportParticipantTypeEnum>(
      type_,
      ReportParticipantTypeEnum,
      this.reportParticipantTypeEnum,
      'TestReport.participant.type',
    );

    this.uri = null;
    if (isDefined<UriType | fhirUri>(uri)) {
      if (uri instanceof PrimitiveType) {
        this.setUriElement(uri);
      } else {
        this.setUri(uri);
      }
    }
  }

  /**
   * Parse the provided `TestReportParticipantComponent` JSON to instantiate the TestReportParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportParticipantComponent
   * @returns TestReportParticipantComponent data model or undefined for `TestReportParticipantComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'uri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setUri(null);
      } else {
        instance.setUriElement(datatype);
      }
    } else {
      instance.setUri(null);
    }

    fieldName = 'display';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDisplayElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ReportParticipantType
   *
   * @see {@link ReportParticipantTypeEnum }
   */
  private readonly reportParticipantTypeEnum: ReportParticipantTypeEnum;

  /**
   * TestReport.participant.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** test-engine | client | server
   * - **Definition:** The type of participant.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ReportParticipantTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * TestReport.participant.uri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The uri of the participant. An absolute URL is preferred
   * - **Definition:** The uri of the participant. An absolute URL is preferred.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private uri: UriType | null;

  /**
   * TestReport.participant.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The display name of the participant
   * - **Definition:** The display name of the participant.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportParticipantTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | null {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportParticipantTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid TestReport.participant.type`;
      assertEnumCodeType<ReportParticipantTypeEnum>(enumType, ReportParticipantTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.type_) && !this.type_.isEmpty() && this.type_.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `type_` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportParticipantTypeEnum }
   */
  public getTypeElement(): CodeType | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_ as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportParticipantTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestReport.participant.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.reportParticipantTypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `type_` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportParticipantTypeEnum }
   */
  public getType(): fhirCode | null {
    if (this.type_ === null) {
      return null;
    }
    return this.type_.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ReportParticipantTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestReport.participant.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.reportParticipantTypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `uri` property value as a UriType object if defined; else an empty UriType object
   */
  public getUriElement(): UriType {
    return this.uri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `uri` property.
   *
   * @param element - the `uri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUriElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid TestReport.participant.uri; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.uri = element;
    } else {
      this.uri = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUriElement(): boolean {
    return isDefined<UriType>(this.uri) && !this.uri.isEmpty();
  }

  /**
   * @returns the `uri` property value as a fhirUri if defined; else null
   */
  public getUri(): fhirUri | null {
    if (this.uri?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.uri.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `uri` property.
   *
   * @param value - the `uri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUri(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid TestReport.participant.uri (${String(value)})`;
      this.uri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.uri = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUri(): boolean {
    return this.hasUriElement();
  }

  /**
   * @returns the `display` property value as a StringType object if defined; else an empty StringType object
   */
  public getDisplayElement(): StringType {
    return this.display ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `display` property.
   *
   * @param element - the `display` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplayElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestReport.participant.display; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.display = element;
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplayElement(): boolean {
    return isDefined<StringType>(this.display) && !this.display.isEmpty();
  }

  /**
   * @returns the `display` property value as a fhirString if defined; else undefined
   */
  public getDisplay(): fhirString | undefined {
    return this.display?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `display` property.
   *
   * @param value - the `display` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplay(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestReport.participant.display (${String(value)})`;
      this.display = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplay(): boolean {
    return this.hasDisplayElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.uri,
      this.display,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.uri, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReportParticipantComponent {
    const dest = new TestReportParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportParticipantComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.uri = this.uri ? this.uri.copy() : null;
    dest.display = this.display?.copy();
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUriElement(), 'uri', jsonObj);
    } else {
      jsonObj['uri'] = null;
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestReportSetupComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The results of the series of required setup operations before the tests were executed
 * - **Definition:** The results of the series of required setup operations before the tests were executed.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportSetupComponent extends BackboneElement implements IBackboneElement {
  constructor(action: TestReportSetupActionComponent[] | null = null) {
    super();

    this.action = null;
    if (isDefinedList<TestReportSetupActionComponent>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `TestReportSetupComponent` JSON to instantiate the TestReportSetupComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportSetupComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportSetupComponent
   * @returns TestReportSetupComponent data model or undefined for `TestReportSetupComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportSetupComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportSetupComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportSetupComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestReportSetupActionComponent | undefined = TestReportSetupActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setAction(null);
        } else {
          instance.addAction(component);
        }
      });
    } else {
      instance.setAction(null);
    }

    return instance;
  }

  /**
   * TestReport.setup.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A setup operation or assert that was executed
   * - **Definition:** Action would contain either an operation or an assertion.
   * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: TestReportSetupActionComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `action` property value as a TestReportSetupActionComponent array
   */
  public getAction(): TestReportSetupActionComponent[] {
    return this.action ?? ([] as TestReportSetupActionComponent[]);
  }

  /**
   * Assigns the provided TestReportSetupActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: TestReportSetupActionComponent[] | undefined | null): this {
    if (isDefinedList<TestReportSetupActionComponent>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action; Provided value array has an element that is not an instance of TestReportSetupActionComponent.`;
      assertFhirTypeList<TestReportSetupActionComponent>(value, TestReportSetupActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = null;
    }
    return this;
  }

  /**
   * Add the provided TestReportSetupActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: TestReportSetupActionComponent | undefined): this {
    if (isDefined<TestReportSetupActionComponent>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action; Provided element is not an instance of TestReportSetupActionComponent.`;
      assertFhirType<TestReportSetupActionComponent>(value, TestReportSetupActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<TestReportSetupActionComponent>(this.action) && this.action.some((item: TestReportSetupActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as TestReportSetupActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.setup';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.action,
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
  public override copy(): TestReportSetupComponent {
    const dest = new TestReportSetupComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportSetupComponent): void {
    super.copyValues(dest);
    const actionList = copyListValues<TestReportSetupActionComponent>(this.action);
    dest.action = actionList.length === 0 ? null : actionList;
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
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    } else {
      jsonObj['action'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestReportSetupActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A setup operation or assert that was executed
 * - **Definition:** Action would contain either an operation or an assertion.
 * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportSetupActionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestReportSetupActionComponent` JSON to instantiate the TestReportSetupActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportSetupActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportSetupActionComponent
   * @returns TestReportSetupActionComponent data model or undefined for `TestReportSetupActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportSetupActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportSetupActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportSetupActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestReportSetupActionOperationComponent | undefined = TestReportSetupActionOperationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperation(component);
    }

    fieldName = 'assert';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestReportSetupActionAssertComponent | undefined = TestReportSetupActionAssertComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssert(component);
    }

    return instance;
  }

  /**
   * TestReport.setup.action.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The operation to perform
   * - **Definition:** The operation performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private operation?: TestReportSetupActionOperationComponent | undefined;

  /**
   * TestReport.setup.action.assert Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The assertion to perform
   * - **Definition:** The results of the assertion performed on the previous operations.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assert?: TestReportSetupActionAssertComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `operation` property value as a TestReportSetupActionOperationComponent object if defined; else an empty TestReportSetupActionOperationComponent object
   */
  public getOperation(): TestReportSetupActionOperationComponent {
    return this.operation ?? new TestReportSetupActionOperationComponent();
  }

  /**
   * Assigns the provided Operation object value to the `operation` property.
   *
   * @param value - the `operation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: TestReportSetupActionOperationComponent | undefined): this {
    if (isDefined<TestReportSetupActionOperationComponent>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.operation; Provided element is not an instance of TestReportSetupActionOperationComponent.`;
      assertFhirType<TestReportSetupActionOperationComponent>(value, TestReportSetupActionOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefined<TestReportSetupActionOperationComponent>(this.operation) && !this.operation.isEmpty();
  }

  /**
   * @returns the `assert` property value as a TestReportSetupActionAssertComponent object if defined; else an empty TestReportSetupActionAssertComponent object
   */
  public getAssert(): TestReportSetupActionAssertComponent {
    return this.assert ?? new TestReportSetupActionAssertComponent();
  }

  /**
   * Assigns the provided Assert object value to the `assert` property.
   *
   * @param value - the `assert` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssert(value: TestReportSetupActionAssertComponent | undefined): this {
    if (isDefined<TestReportSetupActionAssertComponent>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert; Provided element is not an instance of TestReportSetupActionAssertComponent.`;
      assertFhirType<TestReportSetupActionAssertComponent>(value, TestReportSetupActionAssertComponent, optErrMsg);
      this.assert = value;
    } else {
      this.assert = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assert` property exists and has a value; `false` otherwise
   */
  public hasAssert(): boolean {
    return isDefined<TestReportSetupActionAssertComponent>(this.assert) && !this.assert.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.setup.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.operation,
      this.assert,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReportSetupActionComponent {
    const dest = new TestReportSetupActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportSetupActionComponent): void {
    super.copyValues(dest);
    dest.operation = this.operation?.copy();
    dest.assert = this.assert?.copy();
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

    if (this.hasOperation()) {
      setFhirBackboneElementJson(this.getOperation(), 'operation', jsonObj);
    }

    if (this.hasAssert()) {
      setFhirBackboneElementJson(this.getAssert(), 'assert', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestReportSetupActionOperationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The operation to perform
 * - **Definition:** The operation performed.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportSetupActionOperationComponent extends BackboneElement implements IBackboneElement {
  constructor(result: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.reportActionResultCodesEnum = new ReportActionResultCodesEnum();

    this.result = constructorCodeValueAsEnumCodeType<ReportActionResultCodesEnum>(
      result,
      ReportActionResultCodesEnum,
      this.reportActionResultCodesEnum,
      'TestReport.setup.action.operation.result',
    );
  }

  /**
   * Parse the provided `TestReportSetupActionOperationComponent` JSON to instantiate the TestReportSetupActionOperationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportSetupActionOperationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportSetupActionOperationComponent
   * @returns TestReportSetupActionOperationComponent data model or undefined for `TestReportSetupActionOperationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportSetupActionOperationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportSetupActionOperationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportSetupActionOperationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'result';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setResult(null);
      } else {
        instance.setResultElement(datatype);
      }
    } else {
      instance.setResult(null);
    }

    fieldName = 'message';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setMessageElement(datatype);
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setDetailElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ReportActionResultCodes
   *
   * @see {@link ReportActionResultCodesEnum }
   */
  private readonly reportActionResultCodesEnum: ReportActionResultCodesEnum;

  /**
   * TestReport.setup.action.operation.result Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** pass | skip | fail | warning | error
   * - **Definition:** The result of this operation.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  private result: EnumCodeType | null;

  /**
   * TestReport.setup.action.operation.message Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A message associated with the result
   * - **Definition:** An explanatory message associated with the result.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private message?: MarkdownType | undefined;

  /**
   * TestReport.setup.action.operation.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A link to further details on the result
   * - **Definition:** A link to further details on the result.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: UriType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `result` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public getResultEnumType(): EnumCodeType | null {
    return this.result;
  }

  /**
   * Assigns the provided EnumCodeType value to the `result` property.
   *
   * @param enumType - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public setResultEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid TestReport.setup.action.operation.result`;
      assertEnumCodeType<ReportActionResultCodesEnum>(enumType, ReportActionResultCodesEnum, errMsgPrefix);
      this.result = enumType;
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResultEnumType(): boolean {
    return isDefined<EnumCodeType>(this.result) && !this.result.isEmpty() && this.result.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `result` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public getResultElement(): CodeType | null {
    if (this.result === null) {
      return null;
    }
    return this.result as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `result` property.
   *
   * @param element - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public setResultElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestReport.setup.action.operation.result; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.result = new EnumCodeType(element, this.reportActionResultCodesEnum);
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResultElement(): boolean {
    return this.hasResultEnumType();
  }

  /**
   * @returns the `result` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public getResult(): fhirCode | null {
    if (this.result === null) {
      return null;
    }
    return this.result.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `result` property.
   *
   * @param value - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public setResult(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.operation.result (${String(value)})`;
      this.result = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.reportActionResultCodesEnum);
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResult(): boolean {
    return this.hasResultEnumType();
  }

  /**
   * @returns the `message` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getMessageElement(): MarkdownType {
    return this.message ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `message` property.
   *
   * @param element - the `message` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMessageElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid TestReport.setup.action.operation.message; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.message = element;
    } else {
      this.message = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `message` property exists and has a value; `false` otherwise
   */
  public hasMessageElement(): boolean {
    return isDefined<MarkdownType>(this.message) && !this.message.isEmpty();
  }

  /**
   * @returns the `message` property value as a fhirMarkdown if defined; else undefined
   */
  public getMessage(): fhirMarkdown | undefined {
    return this.message?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `message` property.
   *
   * @param value - the `message` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMessage(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.operation.message (${String(value)})`;
      this.message = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.message = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `message` property exists and has a value; `false` otherwise
   */
  public hasMessage(): boolean {
    return this.hasMessageElement();
  }

  /**
   * @returns the `detail` property value as a UriType object if defined; else an empty UriType object
   */
  public getDetailElement(): UriType {
    return this.detail ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `detail` property.
   *
   * @param element - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid TestReport.setup.action.operation.detail; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.detail = element;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetailElement(): boolean {
    return isDefined<UriType>(this.detail) && !this.detail.isEmpty();
  }

  /**
   * @returns the `detail` property value as a fhirUri if defined; else undefined
   */
  public getDetail(): fhirUri | undefined {
    return this.detail?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `detail` property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetail(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.operation.detail (${String(value)})`;
      this.detail = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return this.hasDetailElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.setup.action.operation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.result,
      this.message,
      this.detail,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.result, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReportSetupActionOperationComponent {
    const dest = new TestReportSetupActionOperationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportSetupActionOperationComponent): void {
    super.copyValues(dest);
    dest.result = this.result ? this.result.copy() : null;
    dest.message = this.message?.copy();
    dest.detail = this.detail?.copy();
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

    if (this.hasResultElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getResultElement()!, 'result', jsonObj);
    } else {
      jsonObj['result'] = null;
    }

    if (this.hasMessageElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getMessageElement(), 'message', jsonObj);
    }

    if (this.hasDetailElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getDetailElement(), 'detail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestReportSetupActionAssertComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The assertion to perform
 * - **Definition:** The results of the assertion performed on the previous operations.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportSetupActionAssertComponent extends BackboneElement implements IBackboneElement {
  constructor(result: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.reportActionResultCodesEnum = new ReportActionResultCodesEnum();

    this.result = constructorCodeValueAsEnumCodeType<ReportActionResultCodesEnum>(
      result,
      ReportActionResultCodesEnum,
      this.reportActionResultCodesEnum,
      'TestReport.setup.action.assert.result',
    );
  }

  /**
   * Parse the provided `TestReportSetupActionAssertComponent` JSON to instantiate the TestReportSetupActionAssertComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportSetupActionAssertComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportSetupActionAssertComponent
   * @returns TestReportSetupActionAssertComponent data model or undefined for `TestReportSetupActionAssertComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportSetupActionAssertComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportSetupActionAssertComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportSetupActionAssertComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'result';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setResult(null);
      } else {
        instance.setResultElement(datatype);
      }
    } else {
      instance.setResult(null);
    }

    fieldName = 'message';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setMessageElement(datatype);
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDetailElement(datatype);
    }

    fieldName = 'requirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestReportSetupActionAssertRequirementComponent | undefined = TestReportSetupActionAssertRequirementComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRequirement(component);
        }
      });
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ReportActionResultCodes
   *
   * @see {@link ReportActionResultCodesEnum }
   */
  private readonly reportActionResultCodesEnum: ReportActionResultCodesEnum;

  /**
   * TestReport.setup.action.assert.result Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** pass | skip | fail | warning | error
   * - **Definition:** The result of this assertion.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  private result: EnumCodeType | null;

  /**
   * TestReport.setup.action.assert.message Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A message associated with the result
   * - **Definition:** An explanatory message associated with the result.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private message?: MarkdownType | undefined;

  /**
   * TestReport.setup.action.assert.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A link to further details on the result
   * - **Definition:** A link to further details on the result.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: StringType | undefined;

  /**
   * TestReport.setup.action.assert.requirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Links or references to the testing requirements
   * - **Definition:** Links or references providing traceability to the testing requirements for this assert.
   * - **Comment:** TestScript and TestReport instances are typically (and expected to be) based on known, defined test requirements and documentation. These links provide traceability from the executable/executed TestScript and TestReport tests to these requirements.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requirement?: TestReportSetupActionAssertRequirementComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `result` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public getResultEnumType(): EnumCodeType | null {
    return this.result;
  }

  /**
   * Assigns the provided EnumCodeType value to the `result` property.
   *
   * @param enumType - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public setResultEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid TestReport.setup.action.assert.result`;
      assertEnumCodeType<ReportActionResultCodesEnum>(enumType, ReportActionResultCodesEnum, errMsgPrefix);
      this.result = enumType;
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResultEnumType(): boolean {
    return isDefined<EnumCodeType>(this.result) && !this.result.isEmpty() && this.result.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `result` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public getResultElement(): CodeType | null {
    if (this.result === null) {
      return null;
    }
    return this.result as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `result` property.
   *
   * @param element - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public setResultElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.result; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.result = new EnumCodeType(element, this.reportActionResultCodesEnum);
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResultElement(): boolean {
    return this.hasResultEnumType();
  }

  /**
   * @returns the `result` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public getResult(): fhirCode | null {
    if (this.result === null) {
      return null;
    }
    return this.result.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `result` property.
   *
   * @param value - the `result` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ReportActionResultCodesEnum }
   */
  public setResult(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.result (${String(value)})`;
      this.result = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.reportActionResultCodesEnum);
    } else {
      this.result = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResult(): boolean {
    return this.hasResultEnumType();
  }

  /**
   * @returns the `message` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getMessageElement(): MarkdownType {
    return this.message ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `message` property.
   *
   * @param element - the `message` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMessageElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.message; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.message = element;
    } else {
      this.message = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `message` property exists and has a value; `false` otherwise
   */
  public hasMessageElement(): boolean {
    return isDefined<MarkdownType>(this.message) && !this.message.isEmpty();
  }

  /**
   * @returns the `message` property value as a fhirMarkdown if defined; else undefined
   */
  public getMessage(): fhirMarkdown | undefined {
    return this.message?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `message` property.
   *
   * @param value - the `message` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMessage(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.message (${String(value)})`;
      this.message = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.message = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `message` property exists and has a value; `false` otherwise
   */
  public hasMessage(): boolean {
    return this.hasMessageElement();
  }

  /**
   * @returns the `detail` property value as a StringType object if defined; else an empty StringType object
   */
  public getDetailElement(): StringType {
    return this.detail ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `detail` property.
   *
   * @param element - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.detail; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.detail = element;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetailElement(): boolean {
    return isDefined<StringType>(this.detail) && !this.detail.isEmpty();
  }

  /**
   * @returns the `detail` property value as a fhirString if defined; else undefined
   */
  public getDetail(): fhirString | undefined {
    return this.detail?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `detail` property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetail(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.detail (${String(value)})`;
      this.detail = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return this.hasDetailElement();
  }

  /**
   * @returns the `requirement` property value as a TestReportSetupActionAssertRequirementComponent array
   */
  public getRequirement(): TestReportSetupActionAssertRequirementComponent[] {
    return this.requirement ?? ([] as TestReportSetupActionAssertRequirementComponent[]);
  }

  /**
   * Assigns the provided TestReportSetupActionAssertRequirementComponent array value to the `requirement` property.
   *
   * @param value - the `requirement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequirement(value: TestReportSetupActionAssertRequirementComponent[] | undefined): this {
    if (isDefinedList<TestReportSetupActionAssertRequirementComponent>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.requirement; Provided value array has an element that is not an instance of TestReportSetupActionAssertRequirementComponent.`;
      assertFhirTypeList<TestReportSetupActionAssertRequirementComponent>(value, TestReportSetupActionAssertRequirementComponent, optErrMsg);
      this.requirement = value;
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestReportSetupActionAssertRequirementComponent value to the `requirement` array property.
   *
   * @param value - the `requirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRequirement(value: TestReportSetupActionAssertRequirementComponent | undefined): this {
    if (isDefined<TestReportSetupActionAssertRequirementComponent>(value)) {
      const optErrMsg = `Invalid TestReport.setup.action.assert.requirement; Provided element is not an instance of TestReportSetupActionAssertRequirementComponent.`;
      assertFhirType<TestReportSetupActionAssertRequirementComponent>(value, TestReportSetupActionAssertRequirementComponent, optErrMsg);
      this.initRequirement();
      this.requirement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirement(): boolean {
    return isDefinedList<TestReportSetupActionAssertRequirementComponent>(this.requirement) && this.requirement.some((item: TestReportSetupActionAssertRequirementComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `requirement` property
   */
  private initRequirement(): void {
    if(!this.hasRequirement()) {
      this.requirement = [] as TestReportSetupActionAssertRequirementComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.setup.action.assert';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.result,
      this.message,
      this.detail,
      this.requirement,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.result, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReportSetupActionAssertComponent {
    const dest = new TestReportSetupActionAssertComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportSetupActionAssertComponent): void {
    super.copyValues(dest);
    dest.result = this.result ? this.result.copy() : null;
    dest.message = this.message?.copy();
    dest.detail = this.detail?.copy();
    const requirementList = copyListValues<TestReportSetupActionAssertRequirementComponent>(this.requirement);
    dest.requirement = requirementList.length === 0 ? undefined : requirementList;
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

    if (this.hasResultElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getResultElement()!, 'result', jsonObj);
    } else {
      jsonObj['result'] = null;
    }

    if (this.hasMessageElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getMessageElement(), 'message', jsonObj);
    }

    if (this.hasDetailElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDetailElement(), 'detail', jsonObj);
    }

    if (this.hasRequirement()) {
      setFhirBackboneElementListJson(this.getRequirement(), 'requirement', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestReportSetupActionAssertRequirementComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Links or references to the testing requirements
 * - **Definition:** Links or references providing traceability to the testing requirements for this assert.
 * - **Comment:** TestScript and TestReport instances are typically (and expected to be) based on known, defined test requirements and documentation. These links provide traceability from the executable/executed TestScript and TestReport tests to these requirements.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportSetupActionAssertRequirementComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestReportSetupActionAssertRequirementComponent` JSON to instantiate the TestReportSetupActionAssertRequirementComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportSetupActionAssertRequirementComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportSetupActionAssertRequirementComponent
   * @returns TestReportSetupActionAssertRequirementComponent data model or undefined for `TestReportSetupActionAssertRequirementComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportSetupActionAssertRequirementComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportSetupActionAssertRequirementComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportSetupActionAssertRequirementComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = TestReportSetupActionAssertRequirementComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TestReportSetupActionAssertRequirementComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'link[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const link: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setLink(link);

    return instance;
  }

  /**
   * TestReport.setup.action.assert.requirement.link[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('TestReport.setup.action.assert.requirement.link[x]', ['uri','canonical',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link or reference to the testing requirement
   * - **Definition:** Link or reference providing traceability to the testing requirement for this test.
   * - **FHIR Types:**
   *     'uri',
   *     'canonical',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('TestReport.setup.action.assert.requirement.link[x]',[
    'uri',
    'canonical',
  ])
  private link?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `link` property value as a DataType object if defined; else undefined
   */
  public getLink(): IDataType | undefined {
    return this.link;
  }

  /**
   * Assigns the provided DataType object value to the `link` property.
   *
   * @decorator `@ChoiceDataTypes('TestReport.setup.action.assert.requirement.link[x]')`
   *
   * @param value - the `link` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('TestReport.setup.action.assert.requirement.link[x]')
  public setLink(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefined<IDataType>(this.link) && !this.link.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `link` property value as a UriType object if defined; else undefined
   */
  public getLinkUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.link)) {
      return undefined;
    }
    if (!(this.link instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for TestReport.setup.action.assert.requirement.link[x]: Expected UriType but encountered ${this.link.fhirType()}`,
      );
    }
    return this.link;
  }

  /**
   * @returns `true` if the `link` property exists as a UriType and has a value; `false` otherwise
   */
  public hasLinkUriType(): boolean {
    return this.hasLink() && this.link instanceof UriType;
  }

  /**
   * @returns the `link` property value as a CanonicalType object if defined; else undefined
   */
  public getLinkCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.link)) {
      return undefined;
    }
    if (!(this.link instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for TestReport.setup.action.assert.requirement.link[x]: Expected CanonicalType but encountered ${this.link.fhirType()}`,
      );
    }
    return this.link;
  }

  /**
   * @returns `true` if the `link` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasLinkCanonicalType(): boolean {
    return this.hasLink() && this.link instanceof CanonicalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.setup.action.assert.requirement';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.link,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReportSetupActionAssertRequirementComponent {
    const dest = new TestReportSetupActionAssertRequirementComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportSetupActionAssertRequirementComponent): void {
    super.copyValues(dest);
    dest.link = this.link?.copy() as IDataType;
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

    if (this.hasLink()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getLink()!, 'link', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestReportTestComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A test executed from the test script
 * - **Definition:** A test executed from the test script.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportTestComponent extends BackboneElement implements IBackboneElement {
  constructor(action: TestReportTestActionComponent[] | null = null) {
    super();

    this.action = null;
    if (isDefinedList<TestReportTestActionComponent>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `TestReportTestComponent` JSON to instantiate the TestReportTestComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportTestComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportTestComponent
   * @returns TestReportTestComponent data model or undefined for `TestReportTestComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportTestComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportTestComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportTestComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestReportTestActionComponent | undefined = TestReportTestActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setAction(null);
        } else {
          instance.addAction(component);
        }
      });
    } else {
      instance.setAction(null);
    }

    return instance;
  }

  /**
   * TestReport.test.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/logging name of this test
   * - **Definition:** The name of this test used for tracking/logging purposes by test engines.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * TestReport.test.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/reporting short description of the test
   * - **Definition:** A short description of the test used by test engines for tracking and reporting purposes.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * TestReport.test.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A test operation or assert that was performed
   * - **Definition:** Action would contain either an operation or an assertion.
   * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: TestReportTestActionComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a StringType object if defined; else an empty StringType object
   */
  public getNameElement(): StringType {
    return this.name ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `name` property.
   *
   * @param element - the `name` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestReport.test.name; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<StringType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirString if defined; else undefined
   */
  public getName(): fhirString | undefined {
    return this.name?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `name` property.
   *
   * @param value - the `name` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestReport.test.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
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
      const optErrMsg = `Invalid TestReport.test.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestReport.test.description (${String(value)})`;
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
   * @returns the `action` property value as a TestReportTestActionComponent array
   */
  public getAction(): TestReportTestActionComponent[] {
    return this.action ?? ([] as TestReportTestActionComponent[]);
  }

  /**
   * Assigns the provided TestReportTestActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: TestReportTestActionComponent[] | undefined | null): this {
    if (isDefinedList<TestReportTestActionComponent>(value)) {
      const optErrMsg = `Invalid TestReport.test.action; Provided value array has an element that is not an instance of TestReportTestActionComponent.`;
      assertFhirTypeList<TestReportTestActionComponent>(value, TestReportTestActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = null;
    }
    return this;
  }

  /**
   * Add the provided TestReportTestActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: TestReportTestActionComponent | undefined): this {
    if (isDefined<TestReportTestActionComponent>(value)) {
      const optErrMsg = `Invalid TestReport.test.action; Provided element is not an instance of TestReportTestActionComponent.`;
      assertFhirType<TestReportTestActionComponent>(value, TestReportTestActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<TestReportTestActionComponent>(this.action) && this.action.some((item: TestReportTestActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as TestReportTestActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.test';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.description,
      this.action,
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
  public override copy(): TestReportTestComponent {
    const dest = new TestReportTestComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportTestComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
    dest.description = this.description?.copy();
    const actionList = copyListValues<TestReportTestActionComponent>(this.action);
    dest.action = actionList.length === 0 ? null : actionList;
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    } else {
      jsonObj['action'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestReportTestActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A test operation or assert that was performed
 * - **Definition:** Action would contain either an operation or an assertion.
 * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportTestActionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestReportTestActionComponent` JSON to instantiate the TestReportTestActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportTestActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportTestActionComponent
   * @returns TestReportTestActionComponent data model or undefined for `TestReportTestActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportTestActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportTestActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportTestActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestReportSetupActionOperationComponent | undefined = TestReportSetupActionOperationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperation(component);
    }

    fieldName = 'assert';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestReportSetupActionAssertComponent | undefined = TestReportSetupActionAssertComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssert(component);
    }

    return instance;
  }

  /**
   * TestReport.test.action.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The operation performed
   * - **Definition:** An operation would involve a REST request to a server.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private operation?: TestReportSetupActionOperationComponent | undefined;

  /**
   * TestReport.test.action.assert Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The assertion performed
   * - **Definition:** The results of the assertion performed on the previous operations.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assert?: TestReportSetupActionAssertComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `operation` property value as a TestReportSetupActionOperationComponent object if defined; else an empty TestReportSetupActionOperationComponent object
   */
  public getOperation(): TestReportSetupActionOperationComponent {
    return this.operation ?? new TestReportSetupActionOperationComponent();
  }

  /**
   * Assigns the provided Operation object value to the `operation` property.
   *
   * @param value - the `operation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: TestReportSetupActionOperationComponent | undefined): this {
    if (isDefined<TestReportSetupActionOperationComponent>(value)) {
      const optErrMsg = `Invalid TestReport.test.action.operation; Provided element is not an instance of TestReportSetupActionOperationComponent.`;
      assertFhirType<TestReportSetupActionOperationComponent>(value, TestReportSetupActionOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefined<TestReportSetupActionOperationComponent>(this.operation) && !this.operation.isEmpty();
  }

  /**
   * @returns the `assert` property value as a TestReportSetupActionAssertComponent object if defined; else an empty TestReportSetupActionAssertComponent object
   */
  public getAssert(): TestReportSetupActionAssertComponent {
    return this.assert ?? new TestReportSetupActionAssertComponent();
  }

  /**
   * Assigns the provided Assert object value to the `assert` property.
   *
   * @param value - the `assert` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssert(value: TestReportSetupActionAssertComponent | undefined): this {
    if (isDefined<TestReportSetupActionAssertComponent>(value)) {
      const optErrMsg = `Invalid TestReport.test.action.assert; Provided element is not an instance of TestReportSetupActionAssertComponent.`;
      assertFhirType<TestReportSetupActionAssertComponent>(value, TestReportSetupActionAssertComponent, optErrMsg);
      this.assert = value;
    } else {
      this.assert = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assert` property exists and has a value; `false` otherwise
   */
  public hasAssert(): boolean {
    return isDefined<TestReportSetupActionAssertComponent>(this.assert) && !this.assert.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.test.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.operation,
      this.assert,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReportTestActionComponent {
    const dest = new TestReportTestActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportTestActionComponent): void {
    super.copyValues(dest);
    dest.operation = this.operation?.copy();
    dest.assert = this.assert?.copy();
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

    if (this.hasOperation()) {
      setFhirBackboneElementJson(this.getOperation(), 'operation', jsonObj);
    }

    if (this.hasAssert()) {
      setFhirBackboneElementJson(this.getAssert(), 'assert', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestReportTeardownComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The results of running the series of required clean up steps
 * - **Definition:** The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportTeardownComponent extends BackboneElement implements IBackboneElement {
  constructor(action: TestReportTeardownActionComponent[] | null = null) {
    super();

    this.action = null;
    if (isDefinedList<TestReportTeardownActionComponent>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `TestReportTeardownComponent` JSON to instantiate the TestReportTeardownComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportTeardownComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportTeardownComponent
   * @returns TestReportTeardownComponent data model or undefined for `TestReportTeardownComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportTeardownComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportTeardownComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportTeardownComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestReportTeardownActionComponent | undefined = TestReportTeardownActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setAction(null);
        } else {
          instance.addAction(component);
        }
      });
    } else {
      instance.setAction(null);
    }

    return instance;
  }

  /**
   * TestReport.teardown.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** One or more teardown operations performed
   * - **Definition:** The teardown action will only contain an operation.
   * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: TestReportTeardownActionComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `action` property value as a TestReportTeardownActionComponent array
   */
  public getAction(): TestReportTeardownActionComponent[] {
    return this.action ?? ([] as TestReportTeardownActionComponent[]);
  }

  /**
   * Assigns the provided TestReportTeardownActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: TestReportTeardownActionComponent[] | undefined | null): this {
    if (isDefinedList<TestReportTeardownActionComponent>(value)) {
      const optErrMsg = `Invalid TestReport.teardown.action; Provided value array has an element that is not an instance of TestReportTeardownActionComponent.`;
      assertFhirTypeList<TestReportTeardownActionComponent>(value, TestReportTeardownActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = null;
    }
    return this;
  }

  /**
   * Add the provided TestReportTeardownActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: TestReportTeardownActionComponent | undefined): this {
    if (isDefined<TestReportTeardownActionComponent>(value)) {
      const optErrMsg = `Invalid TestReport.teardown.action; Provided element is not an instance of TestReportTeardownActionComponent.`;
      assertFhirType<TestReportTeardownActionComponent>(value, TestReportTeardownActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<TestReportTeardownActionComponent>(this.action) && this.action.some((item: TestReportTeardownActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as TestReportTeardownActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.teardown';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.action,
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
  public override copy(): TestReportTeardownComponent {
    const dest = new TestReportTeardownComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportTeardownComponent): void {
    super.copyValues(dest);
    const actionList = copyListValues<TestReportTeardownActionComponent>(this.action);
    dest.action = actionList.length === 0 ? null : actionList;
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
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    } else {
      jsonObj['action'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestReportTeardownActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** One or more teardown operations performed
 * - **Definition:** The teardown action will only contain an operation.
 * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 *
 * @category Data Models: Resource
 * @see [FHIR TestReport](http://hl7.org/fhir/StructureDefinition/TestReport)
 */
export class TestReportTeardownActionComponent extends BackboneElement implements IBackboneElement {
  constructor(operation: TestReportSetupActionOperationComponent | null = null) {
    super();

    this.operation = null;
    if (isDefined<TestReportSetupActionOperationComponent>(operation)) {
      this.setOperation(operation);
    }
  }

  /**
   * Parse the provided `TestReportTeardownActionComponent` JSON to instantiate the TestReportTeardownActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestReportTeardownActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestReportTeardownActionComponent
   * @returns TestReportTeardownActionComponent data model or undefined for `TestReportTeardownActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestReportTeardownActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestReportTeardownActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestReportTeardownActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestReportSetupActionOperationComponent | undefined = TestReportSetupActionOperationComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setOperation(null);
      } else {
        instance.setOperation(component);
      }
    } else {
      instance.setOperation(null);
    }

    return instance;
  }

  /**
   * TestReport.teardown.action.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The teardown operation performed
   * - **Definition:** An operation would involve a REST request to a server.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private operation: TestReportSetupActionOperationComponent | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `operation` property value as a TestReportSetupActionOperationComponent object if defined; else an empty TestReportSetupActionOperationComponent object
   */
  public getOperation(): TestReportSetupActionOperationComponent {
    return this.operation ?? new TestReportSetupActionOperationComponent();
  }

  /**
   * Assigns the provided TestReportSetupActionOperationComponent object value to the `operation` property.
   *
   * @param value - the `operation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: TestReportSetupActionOperationComponent | undefined | null): this {
    if (isDefined<TestReportSetupActionOperationComponent>(value)) {
      const optErrMsg = `Invalid TestReport.teardown.action.operation; Provided element is not an instance of TestReportSetupActionOperationComponent.`;
      assertFhirType<TestReportSetupActionOperationComponent>(value, TestReportSetupActionOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefined<TestReportSetupActionOperationComponent>(this.operation) && !this.operation.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestReport.teardown.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.operation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.operation, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestReportTeardownActionComponent {
    const dest = new TestReportTeardownActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestReportTeardownActionComponent): void {
    super.copyValues(dest);
    dest.operation = this.operation ? this.operation.copy() : null;
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

    if (this.hasOperation()) {
      setFhirBackboneElementJson(this.getOperation(), 'operation', jsonObj);
    } else {
      jsonObj['operation'] = null;
    }

    return jsonObj;
  }
}
