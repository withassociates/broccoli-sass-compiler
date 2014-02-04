module.exports = function (broccoli) {
  var fs = require('fs')
  var path = require('path')
  var sass = require('node-sass')

  SassCompiler.prototype = Object.create(broccoli.Compiler.prototype)
  SassCompiler.prototype.constructor = SassCompiler
  function SassCompiler(options) {
    this.options = options || {}
  }

  SassCompiler.prototype.compile = function(srcDir, destDir) {
    var inputFile = path.join(srcDir, this.options.inputFile)
    var outputFile = path.join(destDir, this.options.outputFile)

    var css = sass.renderSync({
      file: inputFile,
      outputStyle: this.options.outputStyle || 'compressed'
    })

    fs.writeFileSync(outputFile, css)
  }

  return SassCompiler
}
