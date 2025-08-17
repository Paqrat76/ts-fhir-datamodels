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
import { IDomainResource, IExtension, IResource } from './library-interfaces';
import { Extension, setFhirComplexJson, setFhirExtensionJson } from './core-fhir-models';
import { assertFhirResourceType, Resource, setFhirResourceListJson } from './Resource';
import { Narrative } from '../data-types/complex/Narrative';
import { fhirUri } from '../data-types/primitive/primitive-types';
import { copyListValues, isElementEmpty, validateUrl } from '../utility/fhir-util';
import * as JSON from '../utility/json-helpers';
import { assertFhirType, assertFhirTypeList, isDefined, isDefinedList } from '../utility/type-guards';

/**
 * Abstract DomainResource Class
 *
 * @remarks
 * A resource that includes narrative, extensions, and contained resources.
 *
 * **FHIR Specification**
 * - **Short:** A resource with narrative, extensions, and contained resources.
 * - **Definition:** A resource that includes narrative, extensions, and contained resources.
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @privateRemarks
 * Loosely based on HAPI FHIR org.hl7.fhir-core.r4.model.DomainResource
 *
 * @category Base Models
 * @see [FHIR DomainResource](http://hl7.org/fhir/StructureDefinition/DomainResource)
 */
export abstract class DomainResource extends Resource implements IDomainResource {
  protected constructor() {
    super();
  }

  /**
   * DomainResource.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text summary of the resource, for human interpretation
   * - **Definition:** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   * - **Comment:** Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
   * - **FHIR Type:** `Narrative`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: Narrative | undefined;

  /**
   * DomainResource.contained Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contained, inline Resources
   * - **Definition:** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   * - **Comment:** This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
   * - **FHIR Type:** `Resource`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contained?: IResource[] | undefined;

  /**
   * DomainResource.extension Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional content defined by implementations
   * - **Definition:** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   * - **Comment:** There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   * - **FHIR Type:** `Extension`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private extension?: IExtension[] | undefined;

  /**
   * DomainResource.modifierExtension Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Extensions that cannot be ignored
   * - **Definition:** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
   * - **Comment:** There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   * - **Requirements:** Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](https://hl7.org/fhir/R4/extensibility.html#modifierExtension).
   * - **FHIR Type:** `Extension`
   * - **Cardinality:** 0..*
   * - **isModifier:** true
   * - **isModifierReason:** Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](https://hl7.org/fhir/R4/extensibility.html#modifierExtension).
   * - **isSummary:** false
   */
  private modifierExtension?: IExtension[] | undefined;

  /**
   * @returns the `text` property value as a Narrative
   */
  public getText(): Narrative {
    return this.text ?? new Narrative(null, null);
  }

  /**
   * Assigns the provided value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   */
  public setText(value: Narrative | undefined): this {
    const optErrMsg = `Invalid DomainResource.text; Provided value is not an instance of Narrative.`;
    assertFhirType<Narrative>(value, Narrative, optErrMsg);
    this.text = value;
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return isDefined<Narrative>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `contained` property value as a Resource array
   */
  public getContained(): IResource[] {
    return this.contained ?? ([] as IResource[]);
  }

  /**
   * Assigns the provided Resource array value to the `contained` property.
   *
   * @param value - the `contained` array value
   * @returns this
   */
  public setContained(value: IResource[] | undefined): this {
    const optErrMsg = `DomainResource.contained; Provided value array has an element that is not a valid instance of Resource.`;
    value?.forEach((containedResource) => {
      assertFhirResourceType(containedResource, optErrMsg);
    });
    this.contained = value;
    return this;
  }

  /**
   * Add the provided Resource value to the `contained` array property.
   *
   * @param value - the `contained` value
   * @returns this
   */
  public addContained(value: IResource | undefined): this {
    if (isDefined<IResource>(value)) {
      const optErrMsg = `Invalid DomainResource.contained; Provided value is not a valid instance of Resource.`;
      assertFhirResourceType(value, optErrMsg);
      this.initContained();
      this.contained?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `contained` property exists and has a value; `false` otherwise
   */
  public hasContained(): boolean {
    return isDefinedList<IResource>(this.contained) && this.contained.some((item: IResource) => !item.isEmpty());
  }

  /**
   * Initialize the `contained` property
   */
  private initContained(): void {
    if (!this.hasContained()) {
      this.contained = [] as IResource[];
    }
  }

  /**
   * @returns the array of `extension` values
   */
  public getExtension(): IExtension[] {
    return this.extension ?? ([] as IExtension[]);
  }

  /**
   * Assigns the provided array of Extension values to the `extension` property.
   *
   * @param extension - array of Extensions
   * @returns this
   */
  public setExtension(extension: IExtension[] | undefined): this {
    const optErrMsg = `Invalid DomainResource.extension; Provided extension array has an element that is not an instance of Extension.`;
    assertFhirTypeList<Extension>(extension, Extension, optErrMsg);
    this.extension = extension;
    return this;
  }

  /**
   * Determines if the `extension` property exists.
   *
   * @remarks If the url is provided, determines if an Extension having
   * the provided url exists. If the url is not provided, determines
   * if the `extension` property exists and has any values.
   *
   * @param url - the url that identifies a specific Extension
   * @returns `true` if an Extension has the provided url; false otherwise
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  public hasExtension(url?: fhirUri): boolean {
    if (url) {
      validateUrl(url);
      return this.getExtension().some((ext) => ext.getUrl() && ext.getUrl() === url);
    }
    return this.existsExtension();
  }

  /**
   * Returns the Extension having the provided url.
   *
   * @param url - the url that identifies a specific Extension
   * @returns the Extension having the provided url
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  public getExtensionByUrl(url: fhirUri): IExtension | undefined {
    validateUrl(url);
    if (this.hasExtension()) {
      const results = this.getExtension().filter((ext) => ext.getUrl() && ext.getUrl() === url);
      if (results.length === 0) {
        return undefined;
      }
      assert(results.length === 1, `The url (${url}) must have only one match`);
      return results[0];
    }
    return undefined;
  }

  /**
   * Adds the provided Extension to the `extension` property array.
   *
   * @param extension - the Extension value to add to the `extension` property array
   * @returns this
   */
  public addExtension(extension: IExtension | undefined): this {
    if (isDefined<IExtension>(extension)) {
      const optErrMsg = `Invalid DomainResource.extension; Provided extension is not an instance of Extension.`;
      assertFhirType<Extension>(extension, Extension, optErrMsg);
      this.initExtension();
      // @ts-expect-error: initExtension() ensures this.extension exists
      this.extension.push(extension);
    }
    return this;
  }

  /**
   * Removes the Extension having the provided url from the `extension` property array.
   *
   * @param url - the url that identifies a specific Extension to remove
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  public removeExtension(url: fhirUri): void {
    validateUrl(url);
    if (this.hasExtension()) {
      const results = this.getExtension().filter((ext) => !ext.getUrl() || ext.getUrl() !== url);
      this.setExtension(results);
    }
  }

  /**
   * Ensures the `extension` property exists and if not initializes it to an empty array.
   */
  private initExtension(): void {
    if (!this.hasExtension()) {
      this.extension = [] as IExtension[];
    }
  }

  /**
   * Determines if `extension` property exists, and if so, determines if the `extension` array is empty.
   *
   * @returns `true` if the `extension` property array exists and has at least one element; false otherwise
   */
  private existsExtension(): boolean {
    return isDefinedList<IExtension>(this.extension) && this.extension.some((item: IExtension) => !item.isEmpty());
  }

  /**
   * @returns the array of `modifierExtension` values
   */
  public getModifierExtension(): IExtension[] {
    return this.modifierExtension ?? ([] as IExtension[]);
  }

  /**
   * Assigns the provided array of Extension values to the `modifierExtension` property.
   *
   * @param extension - array of Extensions
   * @returns this
   */
  public setModifierExtension(extension: IExtension[] | undefined): this {
    const optErrMsg = `Invalid DomainResource.modifierExtension; Provided extension array has an element that is not an instance of Extension.`;
    assertFhirTypeList<Extension>(extension, Extension, optErrMsg);
    this.modifierExtension = extension;
    return this;
  }

  /**
   * Determines if the `modifierExtension` property exists.
   *
   * @remarks If the url is provided, determines if an Extension having
   * the provided url exists. If the url is not provided, determines
   * if the `modifierExtension` property exists and has any values.
   *
   * @param url - the url that identifies a specific Extension
   * @returns `true` if an Extension has the provided url
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  public hasModifierExtension(url?: fhirUri): boolean {
    if (url) {
      validateUrl(url);
      return this.getModifierExtension().some((ext) => ext.getUrl() && ext.getUrl() === url);
    }
    return this.existsModifierExtension();
  }

  /**
   * Returns the Extension having the provided url.
   *
   * @param url - the url that identifies a specific Extension
   * @returns the Extension having the provided url
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  public getModifierExtensionByUrl(url: fhirUri): IExtension | undefined {
    validateUrl(url);
    if (this.hasModifierExtension()) {
      const results = this.getModifierExtension().filter((ext) => ext.getUrl() && ext.getUrl() === url);
      if (results.length === 0) {
        return undefined;
      }
      assert(results.length === 1, `The url (${url}) must have only one match`);
      return results[0];
    }
    return undefined;
  }

  /**
   * Adds the provided Extension to the `modifierExtension` property array.
   *
   * @param extension - the Extension value to add to the `modifierExtension` property array
   * @returns this
   */
  public addModifierExtension(extension: IExtension | undefined): this {
    if (isDefined<IExtension>(extension)) {
      const optErrMsg = `Invalid DomainResource.modifierExtension; Provided extension is not an instance of Extension.`;
      assertFhirType<Extension>(extension, Extension, optErrMsg);
      this.initModifierExtension();
      // @ts-expect-error: initExtension() ensures this.modifierExtension exists
      this.modifierExtension.push(extension);
    }
    return this;
  }

  /**
   * Removes the Extension having the provided url from the `modifierExtension` property array.
   *
   * @param url - the url that identifies a specific Extension to remove
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  public removeModifierExtension(url: fhirUri): void {
    validateUrl(url);
    if (this.hasModifierExtension()) {
      const results = this.getModifierExtension().filter((ext) => !ext.getUrl() || ext.getUrl() !== url);
      this.setModifierExtension(results);
    }
  }

  /**
   * Ensures the `modifierExtension` property exists and if not initializes it to an empty array.
   *
   */
  private initModifierExtension(): void {
    if (!this.hasModifierExtension()) {
      this.modifierExtension = [] as IExtension[];
    }
  }

  /**
   * Determines if `modifierExtension` property exists, and if so, determines if the `modifierExtension`
   * array is empty.
   *
   * @returns `true` if the `modifierExtension` property array exists and has at least one element;
   * false otherwise
   */
  private existsModifierExtension(): boolean {
    return (
      isDefinedList<IExtension>(this.modifierExtension) &&
      this.modifierExtension.some((item: IExtension) => !item.isEmpty())
    );
  }

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public abstract override fhirType(): string;

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(this.text, this.contained, this.extension, this.modifierExtension);
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public abstract override copy(): DomainResource;

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DomainResource): void {
    super.copyValues(dest);
    dest.text = this.text ? this.text.copy() : undefined;
    const containedList = copyListValues<IResource>(this.contained);
    dest.contained = containedList.length === 0 ? undefined : containedList;
    const extensionList = copyListValues<IExtension>(this.extension);
    dest.extension = extensionList.length === 0 ? undefined : extensionList;
    const modifierExtensionList = copyListValues<IExtension>(this.modifierExtension);
    dest.modifierExtension = modifierExtensionList.length === 0 ? undefined : modifierExtensionList;
  }

  /**
   * @returns the JSON value
   */
  public override toJSON(): JSON.Value | undefined {
    // super.toJson() will always be defined if only to contain the resourceType property
    const jsonObj = super.toJSON() as JSON.Object;

    if (this.hasText()) {
      setFhirComplexJson(this.getText(), 'text', jsonObj);
    }

    if (this.hasContained()) {
      setFhirResourceListJson(this.getContained(), 'contained', jsonObj);
    }

    if (this.hasExtension()) {
      setFhirExtensionJson(this.getExtension(), jsonObj);
    }

    if (this.hasModifierExtension()) {
      setFhirExtensionJson(this.getModifierExtension(), jsonObj, true);
    }

    return jsonObj;
  }
}
