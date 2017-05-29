# merge-yaml-cli

[![Known Vulnerabilities](https://snyk.io/test/github/brainsiq/merge-yaml-cli/ac54a80e5f7f1648aecc380c7aea470f49f1ccef/badge.svg)](https://snyk.io/test/github/brainsiq/merge-yaml-cli/ac54a80e5f7f1648aecc380c7aea470f49f1ccef) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
 [![CircleCI](https://circleci.com/gh/brainsiq/merge-yaml-cli/tree/master.svg?style=shield&circle-token=077fdc5153f1faebffa5e687a44369759c6a820d)](https://circleci.com/gh/brainsiq/merge-yaml-cli/tree/master)

[![NPM](https://nodei.co/npm/merge-yaml-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/merge-yaml-cli/)

A simple CLI wrapper around [merge-yaml](https://www.npmjs.com/package/merge-yaml) using [glob](https://www.npmjs.com/package/glob) patterns to specify input files.

#### Usage

```shell
npm i -g merge-yaml-cli
merge-yaml -i example.yaml includes/*.yml -o merged.yml
```

#### Node.js API

```
const mergeYaml = require('merge-yaml-cli')

mergeYaml.on('files', console.log('Files found: ', files))

const result = mergeYaml.merge(['example.yml', 'includes/*.yml'])
```

#### Tests

The repo contains one simple test case. `tests/base.yml` is merged with `includes/*.yml` and the output is compared with `expected.yml`.

The test can be run with `yarn test` or `npm test` but requires Docker and Docker Compose to be installed.
