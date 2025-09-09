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

import { FhirPackageManager } from '../FhirPackageManager';
import {
  ElementDefinitionConstraint,
  StructureDefinition,
} from '../../../generator/src/generator-lib/fhir-artifact-interfaces';
import { FhirPackage, getFhirPackage } from '../../../generator/src/generator-lib/ts-datamodel-generator-helpers';

describe('FhirPackageManager using full FHIR cache for experimentation', () => {
  it('dummy test', () => {
    expect(true).toBeTruthy();
  });

  it.skip('should be defined and properly initialized for DEBUGGING', async () => {
    const fhirPackage: FhirPackage = getFhirPackage('R4');
    const fhirPackageManager = new FhirPackageManager(fhirPackage);
    expect(fhirPackageManager).toBeDefined();
    await fhirPackageManager.initialize();

    const structDefns = fhirPackageManager.getFhirArtifacts('*', {
      type: ['Resource', 'Type'],
    }) as StructureDefinition[];
    expect(structDefns).toBeDefined();

    // Example filtering for returned StructureDefinitions
    const filteredStructDefns = structDefns.filter((sd) => {
      return sd.snapshot.element.some((ed) => {
        if (ed.max && ed.max !== '1' && ed.type && ed.type.length > 0) {
          return ed.type.some((t) => t.code === 'code');
        }
      });
    });
    expect(filteredStructDefns).toBeDefined();
  });

  it.skip('should be defined and properly initialized for research/experimentation', async () => {
    const fhirPackage: FhirPackage = getFhirPackage('R4');
    //const fhirPackage: FhirPackage = getFhirPackage('R4B');
    //const fhirPackage: FhirPackage = getFhirPackage('R5');
    const fhirPackageManager = new FhirPackageManager(fhirPackage);
    expect(fhirPackageManager).toBeDefined();
    await fhirPackageManager.initialize();
    const constraints = new Map<string, object>();

    const structDefns = fhirPackageManager.getFhirArtifacts('*', {
      type: ['Resource', 'Type'],
    }) as StructureDefinition[];
    expect(structDefns).toBeDefined();

    structDefns.forEach((sd) => {
      sd.snapshot.element.forEach((ed) => {
        if (ed.min && ed.min > 0) {
          const edConstraint = {
            key: 'custom-min-1',
            severity: 'error',
            human: `Required element; min cardinality is ${String(ed.min)}`,
            expression: 'exists()',
          } as ElementDefinitionConstraint;
          const newConstraint = Object.assign({}, { edPath: ed.path, kind: sd.kind }, edConstraint);
          const mapKey = `${ed.path}.${edConstraint.key}`;
          constraints.set(mapKey, newConstraint);
        }
      });
    });
    expect(constraints.size).toBeGreaterThan(0);

    // For experimentation, reduce the map size by consolidating common constraints
    const filteredStructDefns = structDefns.filter((sd) => {
      return sd.snapshot.element.some((ed) => {
        if (ed.constraint && ed.constraint.length > 0) {
          return ed.constraint.some(
            (t) => !['ele-1', 'ext-1', 'dom-2', 'dom-3', 'dom-4', 'dom-5', 'dom-6'].includes(t.key),
          );
        }
      });
    });
    expect(filteredStructDefns).toBeDefined();

    filteredStructDefns.forEach((sd) => {
      sd.snapshot.element.forEach((ed) => {
        if (ed.constraint && ed.constraint.length > 0) {
          ed.constraint.forEach((t) => {
            const edConstraint: ElementDefinitionConstraint = {
              key: t.key,
              severity: t.severity,
              human: t.human,
              expression: t.expression,
            };
            if (['ele-1', 'ext-1', 'dom-2', 'dom-3', 'dom-4', 'dom-5', 'dom-6'].includes(edConstraint.key)) {
              if (!constraints.has(edConstraint.key)) {
                const newConstraint = Object.assign({}, { edPath: 'common', kind: 'common' }, edConstraint);
                constraints.set(edConstraint.key, newConstraint);
              }
            } else {
              const newConstraint = Object.assign({}, { edPath: ed.path, kind: sd.kind }, edConstraint);
              const mapKey = `${ed.path}.${edConstraint.key}`;
              constraints.set(mapKey, newConstraint);
            }
          });
        }
      });
    });
    expect(constraints.size).toBeGreaterThan(0);

    const objArray = Array.from(constraints.values());
    objArray.sort((a, b) => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const idA = `${String(a['edPath'])}-${String(a['key'])}`;
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const idB = `${String(b['edPath'])}-${String(b['key'])}`;
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }
      return 0;
    });
    expect(objArray).toBeDefined();
  });
});
