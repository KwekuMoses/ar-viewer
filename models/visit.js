var mongoose = require('mongoose')
var Schema = mongoose.Schema
;(visitSchema = new Schema({
  customer: String,
  product: String,
  date: Number,
  year: Number,
  month: Number,
  day: Number,
  hour: Number,
  minute: Number,
  second: Number
})),
  (visit = mongoose.model('visit', visitSchema))

module.exports = visit
