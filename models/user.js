var mongoose = require('mongoose')
var Schema = mongoose.Schema

;(userSchema = new Schema({
  customer: String,
  product: String
})),
  (user = mongoose.model('user', userSchema))

module.exports = user
