# scss-lint-loader

[scss-lint](https://github.com/brigade/scss-lint) loader for webpack

## Install

```bash
$ npm install --save-dev scss-lint-loader
```

## Usage

Add the loader to `module.preLoaders` to lint the files before other loaders are applied.

```js
module.exports = {
  module: {
    preLoaders: {
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'scss-lint'
      }
    }
  }
}
```

## Alternatives

For a faster but less feature-rich linting loader that uses `sass-lint`, try out [sasslint-loader](https://github.com/alleyinteractive/sasslint-loader).
