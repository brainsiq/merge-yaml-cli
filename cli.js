#!/usr/bin/env node

const merger = require('./')
const fs = require('fs')
const os = require('os')

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

merger.on('files', files => {
  console.log('Merging files:')
  console.log(files.join(os.EOL), os.EOL)
})

const merged = merger.merge(args.inputs)

console.log('Writing:')
console.log(args.output)
fs.writeFileSync(args.output, merged)

console.log(os.EOL)
console.log('Finished merge!')
