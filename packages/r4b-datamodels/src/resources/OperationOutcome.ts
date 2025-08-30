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
 * OperationOutcome Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/OperationOutcome
 * StructureDefinition.name: OperationOutcome
 * StructureDefinition.description: A collection of error, warning, or information messages that result from a system action.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  PrimitiveTypeJson,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
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
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, PARSABLE_DATATYPE_MAP } from '../complex-types/complex-datatypes';
import { IssueSeverityEnum } from '../code-systems/IssueSeverityEnum';
import { IssueTypeEnum } from '../code-systems/IssueTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * OperationOutcome Class
 *
 * @remarks
 * A collection of error, warning, or information messages that result from a system action.
 *
 * **FHIR Specification**
 * - **Short:** Information about the success/failure of an action
 * - **Definition:** A collection of error, warning, or information messages that result from a system action.
 * - **Comment:** Can result from the failure of a REST call or be part of the response message returned from a request message.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR OperationOutcome](http://hl7.org/fhir/StructureDefinition/OperationOutcome)
 */
export class OperationOutcome extends DomainResource implements IDomainResource {
  constructor(issue: OperationOutcomeIssueComponent[] | null = null) {
    super();

    this.issue = null;
    if (isDefinedList<OperationOutcomeIssueComponent>(issue)) {
      this.setIssue(issue);
    }
  }

  /**
   * Parse the provided `OperationOutcome` JSON to instantiate the OperationOutcome data model.
   *
   * @param sourceJson - JSON representing FHIR `OperationOutcome`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OperationOutcome
   * @returns OperationOutcome data model or undefined for `OperationOutcome`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): OperationOutcome | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OperationOutcome';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OperationOutcome();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'OperationOutcome');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'issue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: OperationOutcomeIssueComponent | undefined = OperationOutcomeIssueComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setIssue(null);
        } else {
          instance.addIssue(component);
        }
      });
    } else {
      instance.setIssue(null);
    }

    return instance;
  }

  /**
   * OperationOutcome.issue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A single issue associated with the action
   * - **Definition:** An error, warning, or information message that results from a system action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private issue: OperationOutcomeIssueComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `issue` property value as a OperationOutcomeIssueComponent array
   */
  public getIssue(): OperationOutcomeIssueComponent[] {
    return this.issue ?? ([] as OperationOutcomeIssueComponent[]);
  }

  /**
   * Assigns the provided OperationOutcomeIssueComponent array value to the `issue` property.
   *
   * @param value - the `issue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIssue(value: OperationOutcomeIssueComponent[] | undefined | null): this {
    if (isDefinedList<OperationOutcomeIssueComponent>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue; Provided value array has an element that is not an instance of OperationOutcomeIssueComponent.`;
      assertFhirTypeList<OperationOutcomeIssueComponent>(value, OperationOutcomeIssueComponent, optErrMsg);
      this.issue = value;
    } else {
      this.issue = null;
    }
    return this;
  }

  /**
   * Add the provided OperationOutcomeIssueComponent value to the `issue` array property.
   *
   * @param value - the `issue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addIssue(value: OperationOutcomeIssueComponent | undefined): this {
    if (isDefined<OperationOutcomeIssueComponent>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue; Provided element is not an instance of OperationOutcomeIssueComponent.`;
      assertFhirType<OperationOutcomeIssueComponent>(value, OperationOutcomeIssueComponent, optErrMsg);
      this.initIssue();
      this.issue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `issue` property exists and has a value; `false` otherwise
   */
  public hasIssue(): boolean {
    return isDefinedList<OperationOutcomeIssueComponent>(this.issue) && this.issue.some((item: OperationOutcomeIssueComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `issue` property
   */
  private initIssue(): void {
    if(!this.hasIssue()) {
      this.issue = [] as OperationOutcomeIssueComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'OperationOutcome';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.issue,
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
  public override copy(): OperationOutcome {
    const dest = new OperationOutcome();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OperationOutcome): void {
    super.copyValues(dest);
    const issueList = copyListValues<OperationOutcomeIssueComponent>(this.issue);
    dest.issue = issueList.length === 0 ? null : issueList;
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

    if (this.hasIssue()) {
      setFhirBackboneElementListJson(this.getIssue(), 'issue', jsonObj);
    } else {
      jsonObj['issue'] = null;
    }

    return jsonObj;
  }
}

/**
 * OperationOutcomeIssueComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A single issue associated with the action
 * - **Definition:** An error, warning, or information message that results from a system action.
 *
 * @category Data Models: Resource
 * @see [FHIR OperationOutcome](http://hl7.org/fhir/StructureDefinition/OperationOutcome)
 */
export class OperationOutcomeIssueComponent extends BackboneElement implements IBackboneElement {
  constructor(severity: EnumCodeType | CodeType | fhirCode | null = null, code: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.issueSeverityEnum = new IssueSeverityEnum();
    this.issueTypeEnum = new IssueTypeEnum();

    this.severity = constructorCodeValueAsEnumCodeType<IssueSeverityEnum>(
      severity,
      IssueSeverityEnum,
      this.issueSeverityEnum,
      'OperationOutcome.issue.severity',
    );

    this.code = constructorCodeValueAsEnumCodeType<IssueTypeEnum>(
      code,
      IssueTypeEnum,
      this.issueTypeEnum,
      'OperationOutcome.issue.code',
    );
  }

  /**
   * Parse the provided `OperationOutcomeIssueComponent` JSON to instantiate the OperationOutcomeIssueComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `OperationOutcomeIssueComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OperationOutcomeIssueComponent
   * @returns OperationOutcomeIssueComponent data model or undefined for `OperationOutcomeIssueComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): OperationOutcomeIssueComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OperationOutcomeIssueComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OperationOutcomeIssueComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setSeverity(null);
      } else {
        instance.setSeverityElement(datatype);
      }
    } else {
      instance.setSeverity(null);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCodeElement(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'details';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDetails(datatype);
    }

    fieldName = 'diagnostics';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDiagnosticsElement(datatype);
    }

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addLocationElement(datatype);
        }
      });
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addExpressionElement(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: IssueSeverity
   *
   * @see {@link IssueSeverityEnum }
   */
  private readonly issueSeverityEnum: IssueSeverityEnum;

  /**
   * OperationOutcome.issue.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** fatal | error | warning | information
   * - **Definition:** Indicates whether the issue indicates a variation from successful processing.
   * - **Comment:** This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
   * - **Requirements:** Indicates how relevant the issue is to the overall success of the action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link IssueSeverityEnum }
   */
  private severity: EnumCodeType | null;

  /**
   * FHIR CodeSystem: IssueType
   *
   * @see {@link IssueTypeEnum }
   */
  private readonly issueTypeEnum: IssueTypeEnum;

  /**
   * OperationOutcome.issue.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Error or warning code
   * - **Definition:** Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
   * - **Requirements:** Expresses the issue in a human and computer-friendly way, allowing the requesting system to behave differently based on the type of issue. The required element provides a base level of computable interoperability across all systems for processing an outcome, allowing systems to respond appropriately regardless of the internal system error codes returned.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link IssueTypeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * OperationOutcome.issue.details Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional details about the error
   * - **Definition:** Additional details about the error. This may be a text description of the error or a system code that identifies the error.
   * - **Comment:** A human readable description of the error issue SHOULD be placed in details.text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private details?: CodeableConcept | undefined;

  /**
   * OperationOutcome.issue.diagnostics Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional diagnostic information about the issue
   * - **Definition:** Additional diagnostic information about the issue.
   * - **Comment:** This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private diagnostics?: StringType | undefined;

  /**
   * OperationOutcome.issue.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Deprecated: Path of element(s) related to issue
   * - **Definition:** This element is deprecated because it is XML specific. It is replaced by issue.expression, which is format independent, and simpler to parse.  For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be "http." + the parameter name.
   * - **Comment:** The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
   * - **Requirements:** Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private location?: StringType[] | undefined;

  /**
   * OperationOutcome.issue.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIRPath of element(s) related to issue
   * - **Definition:** A [simple subset of FHIRPath](https://hl7.org/fhir/fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.
   * - **Comment:** The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
   * - **Requirements:** Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private expression?: StringType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `severity` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link IssueSeverityEnum }
   */
  public getSeverityEnumType(): EnumCodeType | null {
    return this.severity;
  }

  /**
   * Assigns the provided EnumCodeType value to the `severity` property.
   *
   * @param enumType - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link IssueSeverityEnum }
   */
  public setSeverityEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid OperationOutcome.issue.severity`;
      assertEnumCodeType<IssueSeverityEnum>(enumType, IssueSeverityEnum, errMsgPrefix);
      this.severity = enumType;
    } else {
      this.severity = null;
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
   * @returns the `severity` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link IssueSeverityEnum }
   */
  public getSeverityElement(): CodeType | null {
    if (this.severity === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link IssueSeverityEnum }
   */
  public setSeverityElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid OperationOutcome.issue.severity; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.severity = new EnumCodeType(element, this.issueSeverityEnum);
    } else {
      this.severity = null;
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
   * @returns the `severity` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link IssueSeverityEnum }
   */
  public getSeverity(): fhirCode | null {
    if (this.severity === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link IssueSeverityEnum }
   */
  public setSeverity(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue.severity (${String(value)})`;
      this.severity = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.issueSeverityEnum);
    } else {
      this.severity = null;
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
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link IssueTypeEnum }
   */
  public getCodeEnumType(): EnumCodeType | null {
    return this.code;
  }

  /**
   * Assigns the provided EnumCodeType value to the `code` property.
   *
   * @param enumType - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link IssueTypeEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid OperationOutcome.issue.code`;
      assertEnumCodeType<IssueTypeEnum>(enumType, IssueTypeEnum, errMsgPrefix);
      this.code = enumType;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.code) && !this.code.isEmpty() && this.code.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `code` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link IssueTypeEnum }
   */
  public getCodeElement(): CodeType | null {
    if (this.code === null) {
      return null;
    }
    return this.code as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link IssueTypeEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid OperationOutcome.issue.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.issueTypeEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `code` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link IssueTypeEnum }
   */
  public getCode(): fhirCode | null {
    if (this.code === null) {
      return null;
    }
    return this.code.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link IssueTypeEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.issueTypeEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `details` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDetails(): CodeableConcept {
    return this.details ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Details object value to the `details` property.
   *
   * @param value - the `details` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDetails(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue.details; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.details = value;
    } else {
      this.details = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `details` property exists and has a value; `false` otherwise
   */
  public hasDetails(): boolean {
    return isDefined<CodeableConcept>(this.details) && !this.details.isEmpty();
  }

  /**
   * @returns the `diagnostics` property value as a StringType object if defined; else an empty StringType object
   */
  public getDiagnosticsElement(): StringType {
    return this.diagnostics ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `diagnostics` property.
   *
   * @param element - the `diagnostics` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDiagnosticsElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid OperationOutcome.issue.diagnostics; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.diagnostics = element;
    } else {
      this.diagnostics = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnostics` property exists and has a value; `false` otherwise
   */
  public hasDiagnosticsElement(): boolean {
    return isDefined<StringType>(this.diagnostics) && !this.diagnostics.isEmpty();
  }

  /**
   * @returns the `diagnostics` property value as a fhirString if defined; else undefined
   */
  public getDiagnostics(): fhirString | undefined {
    return this.diagnostics?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `diagnostics` property.
   *
   * @param value - the `diagnostics` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDiagnostics(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue.diagnostics (${String(value)})`;
      this.diagnostics = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.diagnostics = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `diagnostics` property exists and has a value; `false` otherwise
   */
  public hasDiagnostics(): boolean {
    return this.hasDiagnosticsElement();
  }

  /**
   * @returns the `location` property value as a StringType array
   */
  public getLocationElement(): StringType[] {
    return this.location ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `location` property.
   *
   * @param element - the `location` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLocationElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid OperationOutcome.issue.location; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.location = element;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `location` array property.
   *
   * @param element - the `location` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLocationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid OperationOutcome.issue.location; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initLocation();
      this.location?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocationElement(): boolean {
    return isDefinedList<StringType>(this.location) && this.location.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `location` property value as a fhirString array
   */
  public getLocation(): fhirString[] {
    this.initLocation();
    const locationValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.location!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        locationValues.push(value);
      }
    }
    return locationValues;
  }

  /**
   * Assigns the provided primitive value array to the `location` property.
   *
   * @param value - the `location` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLocation(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const locationElements = [] as StringType[];
      for (const locationValue of value) {
        const optErrMsg = `Invalid OperationOutcome.issue.location array item (${String(locationValue)})`;
        const element = new StringType(parseFhirPrimitiveData(locationValue, fhirStringSchema, optErrMsg));
        locationElements.push(element);
      }
      this.location = locationElements;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `location` array property.
   *
   * @param value - the `location` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLocation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue.location array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initLocation();
      this.addLocationElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return this.hasLocationElement();
  }

  /**
   * Initialize the `location` property
   */
  private initLocation(): void {
    if (!this.hasLocation()) {
      this.location = [] as StringType[];
    }
  }

  /**
   * @returns the `expression` property value as a StringType array
   */
  public getExpressionElement(): StringType[] {
    return this.expression ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `expression` property.
   *
   * @param element - the `expression` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpressionElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid OperationOutcome.issue.expression; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.expression = element;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `expression` array property.
   *
   * @param element - the `expression` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExpressionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid OperationOutcome.issue.expression; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initExpression();
      this.expression?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpressionElement(): boolean {
    return isDefinedList<StringType>(this.expression) && this.expression.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `expression` property value as a fhirString array
   */
  public getExpression(): fhirString[] {
    this.initExpression();
    const expressionValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.expression!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        expressionValues.push(value);
      }
    }
    return expressionValues;
  }

  /**
   * Assigns the provided primitive value array to the `expression` property.
   *
   * @param value - the `expression` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpression(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const expressionElements = [] as StringType[];
      for (const expressionValue of value) {
        const optErrMsg = `Invalid OperationOutcome.issue.expression array item (${String(expressionValue)})`;
        const element = new StringType(parseFhirPrimitiveData(expressionValue, fhirStringSchema, optErrMsg));
        expressionElements.push(element);
      }
      this.expression = expressionElements;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `expression` array property.
   *
   * @param value - the `expression` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addExpression(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid OperationOutcome.issue.expression array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initExpression();
      this.addExpressionElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return this.hasExpressionElement();
  }

  /**
   * Initialize the `expression` property
   */
  private initExpression(): void {
    if (!this.hasExpression()) {
      this.expression = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'OperationOutcome.issue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.severity,
      this.code,
      this.details,
      this.diagnostics,
      this.location,
      this.expression,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.severity, this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): OperationOutcomeIssueComponent {
    const dest = new OperationOutcomeIssueComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OperationOutcomeIssueComponent): void {
    super.copyValues(dest);
    dest.severity = this.severity ? this.severity.copy() : null;
    dest.code = this.code ? this.code.copy() : null;
    dest.details = this.details?.copy();
    dest.diagnostics = this.diagnostics?.copy();
    const locationList = copyListValues<StringType>(this.location);
    dest.location = locationList.length === 0 ? undefined : locationList;
    const expressionList = copyListValues<StringType>(this.expression);
    dest.expression = expressionList.length === 0 ? undefined : expressionList;
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

    if (this.hasSeverityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSeverityElement()!, 'severity', jsonObj);
    } else {
      jsonObj['severity'] = null;
    }

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasDetails()) {
      setFhirComplexJson(this.getDetails(), 'details', jsonObj);
    }

    if (this.hasDiagnosticsElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDiagnosticsElement(), 'diagnostics', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirPrimitiveListJson(this.getLocationElement(), 'location', jsonObj);
    }

    if (this.hasExpression()) {
      setFhirPrimitiveListJson(this.getExpressionElement(), 'expression', jsonObj);
    }

    return jsonObj;
  }
}
