// Dependencies

var SCSSLint = require('broccoli-scss-lint/lib/scss-lint');
var loaderUtils = require('loader-utils');
var assign = require('object-assign');

function lint(input, options, webpack) {
  options.format = SCSSLint.format(options.format);
  SCSSLint.validate(options);
  var isError = SCSSLint.lint('', webpack.resourcePath, options);

  if (isError) {
    webpack.emitError('Module failed because of a scss-lint error!');
    /*
    if (options.failOnError) {
      throw new Error('Module failed because of a scss-lint error.');
    }
    } else if (output.warnings) {
      webpack.emitWarning(output.message);
    }
    */
  }
}

/**
 * Webpack Loader
 *
 * @param {String|Buffer} input JavaScript string
 * @returns {String|Buffer} original input
 */
module.exports = function(input) {
  var options = assign(
    {
      config: '.scss-lint.yml',
      failOnError: true,
      failWarning: true,
      format: ['default'],
      reportFile: 'scss-lint.xml'
    },
    loaderUtils.parseQuery(this.query)
  );

  lint(input, options, this);

  return input;
};
