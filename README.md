# merge-yaml-cli

A simple CLI wrapper around [merge-yaml](https://www.npmjs.com/package/merge-yaml) using [glob](https://www.npmjs.com/package/glob) patterns to specify input files.

#### Usage

```shell
npm i -g merge-yaml-cli
merge-yaml -i example.yaml includes/*.yml -o merged.yml
```
