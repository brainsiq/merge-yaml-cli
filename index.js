#!/usr/bin/env node

var fs = require('fs');
var os = require('os');
var glob = require('glob');
var mergeYaml = require('merge-yaml');
var jsYaml = require('js-yaml');

var args = require('yargs')
    .usage('Usage: $0 <options>')
    .example('$0 -i "one.yml two/*.yml" -o out.yml')
    .array('i')
    .alias('i', 'inputs')
    .describe('i', 'Input files specified as glob file patterns')
    .demand('i')
    .string('o')
    .alias('o', 'output')
    .describe('o', 'Output file')
    .demand('o')
    .strict()
    .argv;

var files = [].concat.apply([], args.inputs.map(g => glob.sync(g, {nodir: true})))

console.log('Merging files:');
console.log(files.join(os.EOL), os.EOL);

var swagger = mergeYaml(files);

console.log('Writing:');
console.log(args.output);
fs.writeFileSync(args.output, jsYaml.safeDump(swagger));

console.log(os.EOL);
console.log('Finished merge!');
