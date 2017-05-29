const glob = require('glob')
const mergeYaml = require('merge-yaml')
const jsYaml = require('js-yaml')
const EventEmitter = require('events')

class YamlMerger extends EventEmitter {
  merge (sources) {
    const files = [].concat.apply([], sources.map(g => glob.sync(g, {nodir: true})))

    this.emit('files', files)

    const mergeResult = mergeYaml(files)

    return jsYaml.safeDump(mergeResult)
  }
};

module.exports = new YamlMerger()
