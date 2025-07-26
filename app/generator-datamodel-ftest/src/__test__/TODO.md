# Testing TODO

- Resolve intermittent Jest issue: "Cannot find module" from CLI

  ```
   FAIL   generator-datamodel-ftest  src/__test__/model-tests/resources/SimplePersonModel.test.ts
    ● Test suite failed to run

      Cannot find module '../code-systems/AddressTypeEnum' from 'src/generated/complex-types/complex-datatypes.ts'

      Require stack:
        src/generated/complex-types/complex-datatypes.ts
        src/__test__/model-tests/resources/SimplePersonModel.test.ts

        at Resolver._throwModNotFoundError (../../node_modules/jest-resolve/build/index.js:863:11)
        at Object.<anonymous> (src/generated/complex-types/complex-datatypes.ts:137:1)
        at Object.<anonymous> (src/__test__/model-tests/resources/SimplePersonModel.test.ts:25:1)
  ```

  - This only occurs running Jest from the CLI. Running the tests within WebStorm are successful.
  - stack**overflow**: [Jest "Cannot find module" with typescript paths in CI](https://stackoverflow.com/questions/59116570/jest-cannot-find-module-with-typescript-paths-in-ci)
  - ts-jest: [Running ts-jest on CI tools](https://kulshekhar.github.io/ts-jest/docs/guides/troubleshooting#running-ts-jest-on-ci-tools)
  - TSConfig: [paths](https://www.typescriptlang.org/tsconfig/#paths)
