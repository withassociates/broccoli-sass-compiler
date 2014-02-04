# broccoli-sass-compiler

[Sass](https://github.com/andrew/node-sass) compiler for Broccoli.

## Usage

```js
var SassFilter = require('broccoli-sass')(broccoli);

tree.addTransformer(new broccoli.CompilerCollection()
  .addCompiler(new SassCompiler({
    inputFile: '/your-app/styles/app.scss',
    outputFile: '/assets/app.css'
  }))
)
```

### Options

* `inputFile` (required)
* `outputFile` (required)
* `outputStyle` (optional, passed through to Sass, default 'compressed')
