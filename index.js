'use strict'

const fs = require('fs')
const glob = require('glob')
const merge = require('lodash.merge')
const jsYaml = require('js-yaml')
const EventEmitter = require('events')

class YamlMerger extends EventEmitter {
  merge (sources) {
    const files = [].concat.apply([], sources.map(g => glob.sync(g, { nodir: true })))

    this.emit('files', files)

    const mergeResult = files.reduce((merged, file) => {
      const yaml = jsYaml.safeLoad(fs.readFileSync(file, 'utf8'))

      return merged ? merge(merged, yaml) : yaml
    }, null)

    return jsYaml.safeDump(mergeResult)
  }
}

module.exports = new YamlMerger()
