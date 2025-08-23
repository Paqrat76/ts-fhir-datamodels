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
 * Binary Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Binary
 * StructureDefinition.name: Binary
 * StructureDefinition.description: A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  Base64BinaryType,
  CodeType,
  FhirError,
  FhirParser,
  INSTANCE_EMPTY_ERROR_MSG,
  IResource,
  JSON,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  Resource,
  assertFhirType,
  assertIsDefined,
  fhirBase64Binary,
  fhirBase64BinarySchema,
  fhirCode,
  fhirCodeSchema,
  getPrimitiveTypeJson,
  isDefined,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * Binary Class
 *
 * @remarks
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 *
 * There are situations where it is useful or required to handle pure binary content using the same framework as other resources.
 *
 * **FHIR Specification**
 * - **Short:** Pure binary content defined by a format other than FHIR
 * - **Definition:** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 * - **Comment:** Typically, Binary resources are used for handling content such as:   * CDA Documents (i.e. with XDS)  * PDF Documents  * Images (the Media resource is preferred for handling images, but not possible when the content is already binary - e.g. XDS).
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Binary](http://hl7.org/fhir/StructureDefinition/Binary)
 */
export class Binary extends Resource implements IResource {
  constructor(contentType: CodeType | fhirCode | null = null) {
    super();

    this.contentType = null;
    if (isDefined<CodeType | fhirCode>(contentType)) {
      if (contentType instanceof PrimitiveType) {
        this.setContentTypeElement(contentType);
      } else {
        this.setContentType(contentType);
      }
    }
  }

  /**
   * Parse the provided `Binary` JSON to instantiate the Binary data model.
   *
   * @param sourceJson - JSON representing FHIR `Binary`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Binary
   * @returns Binary data model or undefined for `Binary`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Binary | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Binary';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Binary();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Binary');
    fhirParser.processResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'contentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setContentTypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'securityContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSecurityContext(datatype);
    }

    fieldName = 'data';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: Base64BinaryType | undefined = fhirParser.parseBase64BinaryType(dtJson, dtSiblingJson);
      instance.setDataElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Binary.contentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** MimeType of the binary content
   * - **Definition:** MimeType of the binary content represented as a standard MimeType (BCP 13).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contentType: CodeType | null;

  /**
   * Binary.securityContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies another resource to use as proxy when enforcing access control
   * - **Definition:** This element identifies another resource that can be used as a proxy of the security sensitivity to use when deciding and enforcing access control rules for the Binary resource. Given that the Binary resource contains very few elements that can be used to determine the sensitivity of the data and relationships to individuals, the referenced resource stands in as a proxy equivalent for this purpose. This referenced resource may be related to the Binary (e.g. Media, DocumentReference), or may be some non-related Resource purely as a security proxy. E.g. to identify that the binary resource relates to a patient, and access should only be granted to applications that have access to the patient.
   * - **Comment:** Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private securityContext?: Reference | undefined;

  /**
   * Binary.data Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual content
   * - **Definition:** The actual content, base64 encoded.
   * - **Comment:** If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
   * - **FHIR Type:** `base64Binary`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private data?: Base64BinaryType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `contentType` property value as a CodeType object if defined; else null
   */
  public getContentTypeElement(): CodeType | null {
    return this.contentType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `contentType` property.
   *
   * @param element - the `contentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `Binary.contentType is required`);
    const optErrMsg = `Invalid Binary.contentType; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.contentType = element;
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentTypeElement(): boolean {
    return isDefined<CodeType>(this.contentType) && !this.contentType.isEmpty();
  }

  /**
   * @returns the `contentType` property value as a fhirCode if defined; else null
   */
  public getContentType(): fhirCode | null {
    if (this.contentType?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.contentType.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `contentType` property.
   *
   * @param value - the `contentType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `Binary.contentType is required`);
    const optErrMsg = `Invalid Binary.contentType (${String(value)})`;
    this.contentType = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentType(): boolean {
    return this.hasContentTypeElement();
  }

  /**
   * @returns the `securityContext` property value as a Reference object; else an empty Reference object
   */
  public getSecurityContext(): Reference {
    return this.securityContext ?? new Reference();
  }

  /**
   * Assigns the provided SecurityContext object value to the `securityContext` property.
   *
   * @decorator `@ReferenceTargets('Binary.securityContext', ['Resource',])`
   *
   * @param value - the `securityContext` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Binary.securityContext', [
    'Resource',
  ])
  public setSecurityContext(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.securityContext = value;
    } else {
      this.securityContext = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `securityContext` property exists and has a value; `false` otherwise
   */
  public hasSecurityContext(): boolean {
    return isDefined<Reference>(this.securityContext) && !this.securityContext.isEmpty();
  }

  /**
   * @returns the `data` property value as a Base64BinaryType object if defined; else an empty Base64BinaryType object
   */
  public getDataElement(): Base64BinaryType {
    return this.data ?? new Base64BinaryType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `data` property.
   *
   * @param element - the `data` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDataElement(element: Base64BinaryType | undefined): this {
    if (isDefined<Base64BinaryType>(element)) {
      const optErrMsg = `Invalid Binary.data; Provided element is not an instance of Base64BinaryType.`;
      assertFhirType<Base64BinaryType>(element, Base64BinaryType, optErrMsg);
      this.data = element;
    } else {
      this.data = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `data` property exists and has a value; `false` otherwise
   */
  public hasDataElement(): boolean {
    return isDefined<Base64BinaryType>(this.data) && !this.data.isEmpty();
  }

  /**
   * @returns the `data` property value as a fhirBase64Binary if defined; else undefined
   */
  public getData(): fhirBase64Binary | undefined {
    return this.data?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `data` property.
   *
   * @param value - the `data` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setData(value: fhirBase64Binary | undefined): this {
    if (isDefined<fhirBase64Binary>(value)) {
      const optErrMsg = `Invalid Binary.data (${String(value)})`;
      this.data = new Base64BinaryType(parseFhirPrimitiveData(value, fhirBase64BinarySchema, optErrMsg));
    } else {
      this.data = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `data` property exists and has a value; `false` otherwise
   */
  public hasData(): boolean {
    return this.hasDataElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Binary';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.contentType,
      this.securityContext,
      this.data,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Binary {
    const dest = new Binary();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Binary): void {
    super.copyValues(dest);
    dest.contentType = this.contentType ? this.contentType.copy() : null;
    dest.securityContext = this.securityContext?.copy();
    dest.data = this.data?.copy();
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   * @throws {@link FhirError} if the instance is missing required properties
   */
  public override toJSON(): JSON.Value | undefined {
    // Required class properties exist (have a min cardinality > 0); therefore, do not check for this.isEmpty()!

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    const missingReqdProperties: string[] = [];

    if (this.hasContentTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getContentTypeElement()!, 'contentType', jsonObj);
    } else {
      missingReqdProperties.push(`Binary.contentType`);
    }

    if (this.hasSecurityContext()) {
      setFhirComplexJson(this.getSecurityContext(), 'securityContext', jsonObj);
    }

    if (this.hasDataElement()) {
      setFhirPrimitiveJson<fhirBase64Binary>(this.getDataElement(), 'data', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

