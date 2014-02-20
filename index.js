var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var sass = require('node-sass')
var broccoli = require('broccoli')
var Transform = require('broccoli-transform')

module.exports = SassCompiler
SassCompiler.prototype = Object.create(Transform.prototype)
SassCompiler.prototype.constructor = SassCompiler
function SassCompiler(inputTree, options) {
  if (!(this instanceof SassCompiler)) return new SassCompiler(inputTree, options)
  this.inputTree = inputTree
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      this[key] = options[key]
    }
  }

  this.cache = {}
}

SassCompiler.prototype.transform = function (srcDir, destDir) {
  var inputFile = path.join(srcDir, this.inputFile)
  var outputFile = path.join(destDir, this.outputFile)

  var css = sass.renderSync({
    file: inputFile,
    outputStyle: this.outputStyle || 'compressed'
  })

  broccoli.helpers.assertAbsolutePaths([this.outputFile])
  mkdirp.sync(path.join(destDir, path.dirname(this.outputFile)))
  fs.writeFileSync(outputFile, css)
}
