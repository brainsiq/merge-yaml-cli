#!/usr/bin/env node

const fs = require('fs')
const os = require('os')
const glob = require('glob')
const mergeYaml = require('merge-yaml')
const jsYaml = require('js-yaml')

const args = require('yargs')
    .usage('Usage: $0 <options>')
    .example('$0 -i one.yml two/*.yml -o out.yml')
    .array('i')
    .alias('i', 'inputs')
    .describe('i', 'Input files specified as glob file patterns')
    .demand('i')
    .string('o')
    .alias('o', 'output')
    .describe('o', 'Output file')
    .demand('o')
    .strict()
    .argv

const files = [].concat.apply([], args.inputs.map(g => glob.sync(g, {nodir: true})))

console.log('Merging files:')
console.log(files.join(os.EOL), os.EOL)

const mergeResult = mergeYaml(files)

console.log('Writing:')
console.log(args.output)
fs.writeFileSync(args.output, jsYaml.safeDump(mergeResult))

console.log(os.EOL)
console.log('Finished merge!')
