# New FHIR Release Package

## Prerequisites

Before adding a new FHIR release package, verify that the FHIR release being added does not have any new FHIR primitive
data types.
If there are new FHIR primitive data types that do not exist in previous FHIR releases, those new primitive data types
must be added to the `packages/fhir-core` package.

**NOTE:**

> All primitive data types are based on FHIR R5 due to improved Regex support for several FHIR primitives.
> Also, FHIR R5 introduced `integer64` and is included below.
> A review of FHIR R6-ballot3 indicates no changes to primitive data types compared to FHIR R5.

- `primitive-types.ts` - Add the Zod schema(s) and their "inferred" types for each new FHIR primitive data type
- Add new PrimitiveType classes for each new FHIR primitive data type (similar to existing PrimitiveType classes
  such as `StringType.ts`, etc.)
- Add new PrimitiveType tests for each new FHIR primitive data type (similar to existing primitive type tests)

## Adding a New FHIR Release Package

Adding a new FHIR release package is a straight-forward process.
Follow the instructions below:

- Run the NPM script `clean` from the `r4-datamodels` folder.

- Add a new sibling folder, `[rx]-datamodels` where `[rx]` is the FHIR release (e.g., `r4b` for FHIR R4B), in the
  `packages` directory.

- Copy the six (6) root-level files from the `r4-datamodels` folder to the `[rx]-datamodels` folder.
  - Edit `CHANGELOG.md`
    - Remove all existing entries under the `[unreleased]` template.
    - Under the `[unreleased]` template, add `## [0.1.0] - yyyy-mm-dd` where 'yyyy-mm-dd' is the current date.
    - Under `## [0.1.0] - yyyy-mm-dd`, add `- Initial FHIR [RX] data models creation` where `[RX]` is the FHIR release
      (e.g., `R4B` for FHIR R4B)
  - Edit `package.json`
    - Update the `version` field to `0.1.0`.
      Once the new FHIR data model package is ready to publish, update the `version` field to the appropriate FHIR
      release (e.g., `1.0.0-rc.0` for the first release candidate).
    - Update all `r4` and `R4` references to the appropriate FHIR release being mindful of case sensitivity.
  - Edit `README.md`
    - Update all `r4` and `R4` references to the appropriate FHIR release being mindful of case sensitivity.
  - Edit `typedoc.config.mjs`
    - Update all `r4` and `R4` references to the appropriate FHIR release being mindful of case sensitivity.

- In the root `package.json`:
  - Add `"packages/[rx]-datamodels"` where `[rx]` is the FHIR release (e.g., `r4b` for FHIR R4B) to the end of
    the `workspaces` array.
  - Duplicate the NPM script `lint:R4` and update all `r4` and `R4` references to the appropriate FHIR release being
    mindful of case sensitivity.

- In the root `.prettierignore` file:
  - Add `packages/[rx]-datamodels/src/` where `[rx]` is the FHIR release (e.g., `r4b` for FHIR R4B)`

- In the root `tsconfig.eslint.json` file:
  - Add `"./packages/[rx]-datamodels/**/*.ts"` where `[rx]` is the FHIR release (e.g., `r4b` for FHIR R4B) in
    the `include` array.

- In the root `tsconfig.json` file:
  - Add `{ "path": "./packages/[rx]-datamodels/tsconfig.json" }` where `[rx]` is the FHIR release (e.g., `r4b` for
    FHIR R4B) in the `references` array.

- In the root `typedoc.config.mjs` file:
  - Add `'packages/[rx]-datamodels'` where `[rx]` is the FHIR release (e.g., `r4b` for FHIR R4B) in
    the `entryPoints` array.

Once the above instructions have been completed, run the following NPM scripts from the root `package.json`:

- `generate` - to generate the FHIR data models
- `lint:[RX]` where `[RX]` is the FHIR release (e.g., `R4B` for FHIR R4B); Be patient! This will take a while.
- `typedoc` - to generate the FHIR data models documentation.

If errors/warnings are reported, the issues must be resolved.
The fix will more than likely be in the `generator` project code.
