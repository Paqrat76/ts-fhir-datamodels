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

import { AssertionError } from 'node:assert';
import { Identifier, Reference } from '../../data-types/complex/Reference-Identifier';
import { InvalidTypeError } from '../../errors/InvalidTypeError';
import { MockTask } from '../test-utils';
import { ReferenceTargets } from '../../utility/decorators';

describe('ReferenceTargets', () => {
  it('should throw AssertionError with duplicate ReferenceTargets', () => {
    const testRelativeRef = 'Organization/1234';
    let testReference = new Reference().setReference(testRelativeRef);
    const testMockTaskR1 = new MockTaskR1();
    let t = () => {
      testMockTaskR1.setMyReferenceProperty3(testReference);
    };
    expect(t).toThrow(AssertionError);
    expect(t).toThrow(
      `ReferenceTargets decorator on setMyReferenceProperty3 (MockTaskR1.myReferenceProperty3) contains duplicate referenceTargets`,
    );

    const testAbsoluteRef = 'https://somedomain.com/path/Organization/1234';
    testReference = new Reference().setReference(testAbsoluteRef);
    t = () => {
      testMockTaskR1.setMyReferenceProperty3(testReference);
    };
    expect(t).toThrow(AssertionError);
    expect(t).toThrow(
      `ReferenceTargets decorator on setMyReferenceProperty3 (MockTaskR1.myReferenceProperty3) contains duplicate referenceTargets`,
    );
  });

  it('should throw AssertionError with invalid method argument type', () => {
    const testRelativeRef = 'Identifier/1234';
    const testIdentifier = new Identifier().setValue(testRelativeRef);
    const testMockTaskR1 = new MockTaskR1();
    const t = () => {
      testMockTaskR1.setMyReferenceProperty5(testIdentifier);
    };
    expect(t).toThrow(AssertionError);
    expect(t).toThrow(
      `ReferenceTargets decorator on setMyReferenceProperty5 (MockTaskR1.myReferenceProperty5) expects a single argument to be type of 'Reference | undefined | null'`,
    );
  });

  it('should succeed with "any" reference', () => {
    const testRelativeRef = 'Location/1234';
    let testReference = new Reference().setReference(testRelativeRef);
    const testMockTaskR1 = new MockTaskR1();
    testMockTaskR1.setMyReferenceProperty2(testReference);
    expect(testMockTaskR1.getMyReferenceProperty2().hasReference()).toBe(true);
    expect(testMockTaskR1.getMyReferenceProperty2().getReference()).toBeDefined();
    expect(testMockTaskR1.getMyReferenceProperty2().getReference()).toStrictEqual(testRelativeRef);

    const testAbsoluteRef = 'https://somedomain.com/path/Location/1234';
    testReference = new Reference().setReference(testAbsoluteRef);
    testMockTaskR1.setMyReferenceProperty2(testReference);
    expect(testMockTaskR1.getMyReferenceProperty2().hasReference()).toBe(true);
    expect(testMockTaskR1.getMyReferenceProperty2().getReference()).toBeDefined();
    expect(testMockTaskR1.getMyReferenceProperty2().getReference()).toStrictEqual(testAbsoluteRef);
  });

  it('should succeed with method not starting with "set"', () => {
    const testRelativeRef = 'Organization/1234';
    const testReference = new Reference().setReference(testRelativeRef);
    const testMockTaskR1 = new MockTaskR1();
    testMockTaskR1.xxxMyReferenceProperty6(testReference);
    expect(testMockTaskR1.getMyReferenceProperty6().hasReference()).toBe(true);
    expect(testMockTaskR1.getMyReferenceProperty6().getReference()).toBeDefined();
    expect(testMockTaskR1.getMyReferenceProperty6().getReference()).toStrictEqual(testRelativeRef);
  });

  it('should succeed with undefined reference', () => {
    const testMockTaskR1 = new MockTaskR1();
    testMockTaskR1.setMyReferenceProperty1(undefined);
    expect(testMockTaskR1.getMyReferenceProperty1().hasReference()).toBe(false);
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toBeUndefined();
  });

  it('should succeed with null reference', () => {
    const testMockTaskR1 = new MockTaskR1();
    // @ts-expect-error: allow for testing
    testMockTaskR1.setMyReferenceProperty7(null);
    expect(testMockTaskR1.getMyReferenceProperty7()).toBeNull();
  });

  it('should succeed with Reference.reference not set', () => {
    const testRelativeRef = 'Organization/1234';
    const testReference = new Reference().setDisplay(testRelativeRef);
    const testMockTaskR1 = new MockTaskR1();
    testMockTaskR1.setMyReferenceProperty1(testReference);
    expect(testMockTaskR1.getMyReferenceProperty1().hasReference()).toBe(false);
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toBeUndefined();
    expect(testMockTaskR1.getMyReferenceProperty1().hasDisplay()).toBe(true);
    expect(testMockTaskR1.getMyReferenceProperty1().getDisplay()).toBeDefined();
  });

  it('should succeed with Reference.reference set to internal reference', () => {
    const testInternalRef = '#1234';
    const testReference = new Reference().setReference(testInternalRef);
    const testMockTaskR1 = new MockTaskR1();
    testMockTaskR1.setMyReferenceProperty1(testReference);
    expect(testMockTaskR1.getMyReferenceProperty1().hasReference()).toBe(true);
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toBeDefined();
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toStrictEqual(testInternalRef);
  });

  it('should throw InvalidTypeError with invalid (not Organization) reference', () => {
    const testRelativeRef = 'Location/1234';
    let testReference = new Reference().setReference(testRelativeRef);
    const testMockTaskR1 = new MockTaskR1();
    let t = () => {
      testMockTaskR1.setMyReferenceProperty1(testReference);
    };
    expect(t).toThrow(InvalidTypeError);
    expect(t).toThrow(
      `ReferenceTargets decorator on setMyReferenceProperty1 (MockTaskR1.myReferenceProperty1) expects argument (Location/1234) to be a valid 'Reference' type`,
    );

    const testAbsoluteRef = 'https://somedomain.com/path/Location/1234';
    testReference = new Reference().setReference(testAbsoluteRef);
    t = () => {
      testMockTaskR1.setMyReferenceProperty1(testReference);
    };
    expect(t).toThrow(InvalidTypeError);
    expect(t).toThrow(
      `ReferenceTargets decorator on setMyReferenceProperty1 (MockTaskR1.myReferenceProperty1) expects argument (${testAbsoluteRef}) to be a valid 'Reference' type`,
    );
  });

  it('should succeed with valid Organization reference', () => {
    const testRelativeRef = 'Organization/1234';
    let testReference = new Reference().setReference(testRelativeRef);
    const testMockTaskR1 = new MockTaskR1();
    testMockTaskR1.setMyReferenceProperty1(testReference);
    expect(testMockTaskR1.getMyReferenceProperty1().hasReference()).toBe(true);
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toBeDefined();
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toStrictEqual(testRelativeRef);

    const testAbsoluteRef = 'https://somedomain.com/path/Organization/1234';
    testReference = new Reference().setReference(testAbsoluteRef);
    testMockTaskR1.setMyReferenceProperty1(testReference);
    expect(testMockTaskR1.getMyReferenceProperty1().hasReference()).toBe(true);
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toBeDefined();
    expect(testMockTaskR1.getMyReferenceProperty1().getReference()).toStrictEqual(testAbsoluteRef);
  });

  it('should succeed with valid Organization references in Reference array', () => {
    const testMockTaskR1 = new MockTaskR1();
    const testArr: Reference[] = [];

    const testRelativeRef = 'Organization/1234';
    const testReference1 = new Reference().setReference(testRelativeRef);
    testArr.push(testReference1);

    const testAbsoluteRef = 'https://somedomain.com/path/Organization/5678';
    const testReference2 = new Reference().setReference(testAbsoluteRef);
    testArr.push(testReference2);

    expect(Array.isArray(testArr)).toBe(true);
    const t = () => {
      testMockTaskR1.setMyReferenceProperty8(testArr);
    };
    expect(t).not.toThrow();
    expect(testMockTaskR1.getMyReferenceProperty8()).toBeDefined();
    expect(testMockTaskR1.getMyReferenceProperty8()).toStrictEqual(testArr);
  });

  it('should throw InvalidTypeError with an invalid reference in Reference array', () => {
    const testMockTaskR1 = new MockTaskR1();
    const testArr: Reference[] = [];
    expect(Array.isArray(testArr)).toBe(true);

    const testRelativeRef = 'Organization/1234';
    const testReference1 = new Reference().setReference(testRelativeRef);
    testArr.push(testReference1);

    let t = () => {
      testMockTaskR1.addMyReferenceProperty8(testReference1);
    };
    expect(t).not.toThrow(AssertionError);

    const testAbsoluteRef = 'https://somedomain.com/path/Location/5678';
    const testReference2 = new Reference().setReference(testAbsoluteRef);
    testArr.push(testReference2);

    t = () => {
      testMockTaskR1.setMyReferenceProperty8(testArr);
    };
    expect(t).toThrow(InvalidTypeError);
    expect(t).toThrow(
      `ReferenceTargets decorator on setMyReferenceProperty8 (MockTaskR1.myReferenceProperty8) expects argument[1] (https://somedomain.com/path/Location/5678) to be a valid 'Reference' type`,
    );
  });
});

export class MockTaskR1 extends MockTask {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  protected myReferenceProperty1?: Reference | undefined;

  public getMyReferenceProperty1(): Reference {
    return this.myReferenceProperty1 ?? new Reference();
  }

  @ReferenceTargets('MockTaskR1.myReferenceProperty1', ['Organization'])
  public setMyReferenceProperty1(value: Reference | undefined): this {
    this.myReferenceProperty1 = value;
    return this;
  }

  protected myReferenceProperty2?: Reference | undefined;

  public getMyReferenceProperty2(): Reference {
    return this.myReferenceProperty2 ?? new Reference();
  }

  @ReferenceTargets('MockTaskR1.myReferenceProperty2', [])
  public setMyReferenceProperty2(value: Reference | undefined): this {
    this.myReferenceProperty2 = value;
    return this;
  }

  protected myReferenceProperty3?: Reference | undefined;

  @ReferenceTargets('MockTaskR1.myReferenceProperty3', ['Organization', 'Organization', 'Location'])
  public setMyReferenceProperty3(value: Reference | undefined): this {
    this.myReferenceProperty3 = value;
    return this;
  }

  protected myReferenceProperty4?: Reference | undefined;

  // @ts-expect-error: allow for testing
  @ReferenceTargets('MockTaskR1.myReferenceProperty4', ['InvalidResource'])
  public setMyReferenceProperty4(value: Reference | undefined): this {
    this.myReferenceProperty4 = value;
    return this;
  }

  protected myReferenceProperty5?: Identifier | undefined;

  @ReferenceTargets('MockTaskR1.myReferenceProperty5', ['Organization'])
  public setMyReferenceProperty5(value: Identifier | undefined): this {
    this.myReferenceProperty5 = value;
    return this;
  }

  protected myReferenceProperty6?: Reference | undefined;

  public getMyReferenceProperty6(): Reference {
    return this.myReferenceProperty6 ?? new Reference();
  }

  @ReferenceTargets('MockTaskR1.myReferenceProperty6', ['Organization'])
  public xxxMyReferenceProperty6(value: Reference | undefined): this {
    this.myReferenceProperty6 = value;
    return this;
  }

  protected myReferenceProperty7: Reference | null = null;

  public getMyReferenceProperty7(): Reference {
    // @ts-expect-error: allow for testing
    return this.myReferenceProperty7;
  }

  @ReferenceTargets('MockTaskR1.myReferenceProperty7', ['Organization'])
  public setMyReferenceProperty7(value: Reference): this {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (value !== null) {
      this.myReferenceProperty7 = value;
    }
    return this;
  }

  protected myReferenceProperty8?: Reference[] | undefined = [];

  public getMyReferenceProperty8(): Reference[] {
    return this.myReferenceProperty8 ?? ([] as Reference[]);
  }

  @ReferenceTargets('MockTaskR1.myReferenceProperty8', ['Organization'])
  public setMyReferenceProperty8(value: Reference[] | undefined): this {
    this.myReferenceProperty8 = value;
    return this;
  }

  @ReferenceTargets('MockTaskR1.myReferenceProperty8', ['Organization'])
  public addMyReferenceProperty8(value: Reference | undefined): this {
    if (value !== undefined) {
      this.myReferenceProperty8 ??= [] as Reference[];
      this.myReferenceProperty8.push(value);
    }
    return this;
  }

  public override fhirType(): string {
    return 'MockTaskR1';
  }

  public override copy(): MockTaskR1 {
    const dest = new MockTaskR1();
    this.copyValues(dest);
    return dest;
  }
}
