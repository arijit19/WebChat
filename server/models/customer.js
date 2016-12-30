var mongoose = require('mongoose')
var Schema = mongoose.Schema
var customerScheme = mongoose.Schema(
  {
    firstname: String,
    lastnane: String,
    phone: String,
    address:
    {
      street: String,
      city: String,
      state: String,
      zip: String
    }
  })
module.exports = mongoose.model('Customer', customerScheme)
