# merge-yaml-cli

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![CircleCI](https://circleci.com/gh/brainsiq/merge-yaml-cli/tree/master.svg?style=svg&circle-token=077fdc5153f1faebffa5e687a44369759c6a820d)](https://circleci.com/gh/brainsiq/merge-yaml-cli/tree/master)

A simple CLI wrapper around [merge-yaml](https://www.npmjs.com/package/merge-yaml) using [glob](https://www.npmjs.com/package/glob) patterns to specify input files.

#### Usage

```shell
npm i -g merge-yaml-cli
merge-yaml -i example.yaml includes/*.yml -o merged.yml
```

#### Tests

The repo contains one simple test case. `tests/base.yml` is merged with `includes/*.yml` and the output is compared with `expected.yml`.

The test can be run with `yarn test` or `npm test` but requires Docker and Docker Compose to be installed.
