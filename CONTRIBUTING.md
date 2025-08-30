# Contributing

We're glad you're thinking about contributing to the FHIR data models project!
We welcome all friendly contributions, including:

- bug reports
- comments and suggestions
- feature requests
- bug fixes
- feature implementations and enhancements
- documentation updates and additions

Before making a contribution, please familiarize yourself with this document, as well as our [LICENSE](LICENSE),
[SECURITY](SECURITY.md), and [README](README.md).

## Issues

We use GitHub issues to track bug reports, comments, suggestions, questions, and feature requests.
Before submitting a new issue, please check to make sure a similar issue isn't already open.
If one is, contribute to that issue thread with your feedback.

When submitting a bug report, please try to provide as much detail as possible. This may include:

- Steps to reproduce the problem
- The full text of error messages
- Relevant inputs and/or outputs
- Any other information you deem relevant

Please note that the GitHub issue tracker is _public_; any issues you submit are immediately visible to everyone.
For this reason, do _not_ submit any information that may be considered sensitive.

## Code Contributions

If you are planning to work on a reported bug, suggestion, or feature request, please comment on the relevant issue
to indicate your intent to work on it.
If there is no associated issue, please submit a new issue describing the feature you plan to implement or the bug
you plan to fix.
This reduces the likelihood of duplicated effort and also provides the maintainers an opportunity to ask questions,
provide hints, or indicate any concerns _before_ you invest your time.

Because this mono-repository is a code-generation project, code changes are made to the generator code and the fhir-core
package.
Please familiarize yourself with:

- [app/generator/README.md](app/generator/README.md)
- [app/generator-datamodel-ftest/README.md](app/generator-datamodel-ftest/README.md)
- [app/generator-datamodel-ftest/README-Functional-Testing.md](app/generator-datamodel-ftest/README-Functional-Testin.md)
- [packages/fhir-core/README.md](packages/fhir-core/README.md)

End user documentation is maintained in the [packages/base-docs](packages/base-docs) directory.
Please ensure that any changes you make to the generated data models are reflected in the documentation including
in the [ReleaseNotes.md](packages/base-docs/ReleaseNotes.md).

Please reach out to the maintainers if you have any questions about the project or the code.

### Before Submitting a Pull Request

Before submitting a Pull Request for a code contribution:

- [Merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) `main` into your branch
  or [rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) on `main` if your code is out of sync with `main`
- Run the Prettier formatter with `npm run prettier:fix` and ensure that there are no formatting warnings or errors
- Run the linter with `npm run lint` and ensure that there are no linter warnings or errors
- Run the tests with `npm test` and ensure that all tests pass;
  We use [Jest snapshot testing](https://jestjs.io/docs/snapshot-testing) to detect generated data models changes.
  Review these snapshot failures and ensure they represent what you expected.
  Then run `npm run jest:updateSnapshot` in the project where the snapshot failure occurred to update the snapshot
  followed by `npm run test` to ensure that the tests pass.
- Ensure any new dependencies do not contain known security vulnerabilities.
  - We recommend using `npm audit` to ensure there are no new security vulnerabilities introduced on your branch

As a final step, generate the data models with `npm run generate` and ensure that the generated code is up-to-date.
Lint each FHIR release's generated data models (e.g., `npm run lint:R4`, etc.).
Please be patient! Each of these linting tasks take some time to complete.
These steps will ensure that your code is ready for review.

### Submitting a Pull Request

Pull requests should include a summary of the work, as well as any specific guidance regarding how to test or invoke
the code.

When project maintainers review the pull request, they will:

- Verify the contribution is compatible with the project's goals and mission
- Run the project's unit tests, linters, and formatters to ensure there are no violations
- Deploy the code locally to ensure it works as expected
- Review all code changes in detail, looking for:
  - Potential bugs, regressions, security issues, or unintended consequences
  - Edge cases that may not be properly handled
  - Application of generally accepted best practices
  - Adequate unit tests and documentation

### If the Pull Request Passes Review

Congratulations! Your code will be merged by a maintainer into the project's `main` branch!

### If the Pull Request Does Not Pass Review

If the review process uncovers any issues or concerns, a maintainer will communicate them via a Pull Request comment.
In most cases, the maintainer will also suggest changes that can be made to address those concerns and eventually have
the Pull Request accepted.
If this happens:

- Address any noted issues or concerns
- Rebase or merge master (if necessary) and push your code again (may require a force push if you rebased)
- Comment on the Pull Request indicating it is ready for another review

## MIT License

All contributions to this project will be released under the [MIT](https://mit-license.org/) license.
By submitting a pull request, you are agreeing to comply with this license.
