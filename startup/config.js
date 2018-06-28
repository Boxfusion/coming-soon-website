const config = require('config');

module.exports = function() {
  if (!config.get('passportSessionSecret')) {
    throw new Error('FATAL ERROR: "passportSessionSecret" environment variable is not defined.');
  }
}