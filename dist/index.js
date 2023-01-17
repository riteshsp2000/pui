
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pui.cjs.production.min.js')
} else {
  module.exports = require('./pui.cjs.development.js')
}
