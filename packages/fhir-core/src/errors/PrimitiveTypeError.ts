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

import z, { ZodError } from 'zod';

/**
 * Error thrown when instances of primitive types fail validation.
 *
 * @remarks
 * Validation is based on parsing the primitive value using a [Zod](https://zod.dev/?id=safeparse)
 * schema definition that was used to define the primitive `type`.
 *
 * @category Errors
 * @see [ZodError](https://zod.dev/ERROR_HANDLING?id=zoderror)
 * @see [ZodIssue](https://zod.dev/ERROR_HANDLING?id=zodissue)
 */
export class PrimitiveTypeError extends Error {
  private zodIssues: z.core.$ZodIssue[];
  private errorDetails: string[];

  constructor(message: string, cause: ZodError) {
    super(message);
    this.name = 'PrimitiveTypeError';
    this.zodIssues = cause.issues;
    this.errorDetails = cause.issues.map((issue: z.core.$ZodIssue) => issue.message);
  }

  /**
   * Provides the detailed validation issues as an array of [ZodIssue](https://zod.dev/ERROR_HANDLING?id=zodissue)
   *
   * @returns the validation issues
   */
  public getIssues(): z.core.$ZodIssue[] {
    return this.zodIssues;
  }

  /**
   * Provides an array of validation issues messages
   *
   * @returns the validation issue messages
   */
  public getDetails(): string[] {
    return this.errorDetails;
  }
}
